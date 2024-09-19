import {
  IContext,
  IRuleDefinition,
  IRuleResult,
  IValidationOptions,
  IValidationResult,
} from "../Interface";
import { getMessage } from "../Locale";
import { Definition, ValidationResult } from "../Types";
import { toRuleDefinition } from "../Factory";
import { getValueViaPath } from "./getValueViaPath";
import { getOptions } from "../Options";
import StopOnFail from "../exceptions/StopOnFailError";
import ValidationError from "../exceptions/ValidationError";
import { getValuesViaPath } from "./getValuesViaPath";

export const validate = async (
  data: any,
  definition: Definition,
  options?: Partial<IValidationOptions>
): Promise<IValidationResult> => {
  const currentOptions: IValidationOptions = {
    ...getOptions(),
    ...options,
  };

  const { isValid, fields, results } = await getResults(
    data,
    definition,
    currentOptions
  );

  return {
    isValid,
    isInvalid: !isValid,
    fields,
    errors: results,
  };
};

const getResults = async (
  data: any,
  definition: Definition,
  options: IValidationOptions
) => {
  let isValid = true;
  const fields: Record<string, boolean> = {};
  const results: ValidationResult = {};

  // Checking all validations
  for (const field in definition) {
    fields[field] = true;
    // Parsing the rules
    const params = definition[field];
    let ruleGroup: string = "";
    if (Array.isArray(params)) {
      ruleGroup = params.join("|");
    } else {
      ruleGroup = params;
    }

    const rules = toRuleNameArray(ruleGroup).map(toRuleDefinition);

    const context: IContext = {
      data,
      field,
      definition: ruleGroup,
    };

    const valueArray = [];
    if (field.includes(".*.")) {
      valueArray.push(...getValuesViaPath(data, field));
    } else {
      valueArray.push(getValueViaPath(data, field));
    }

    try {
      for (let index = 0; index < valueArray.length; index++) {
        const value = valueArray[index];
        console.log(index, value);
        await validateTheField(context, rules, value, options);
      }
    } catch (error: any) {
      if (!results[field]) {
        results[field] = [];
      }

      fields[field] = false;

      if (error instanceof StopOnFail) {
        const stopOnFailError = error as StopOnFail;
        results[field].push(stopOnFailError.ruleSet);
        fields[field] = false;
        return {
          isValid: false,
          fields,
          results,
        };
      } else if (error instanceof ValidationError) {
        const validationError = error as ValidationError;
        results[field].push(validationError.ruleSet);
        fields[field] = false;
        isValid = false;
      } else {
        throw error;
      }
    }

    // // Checking all rules one by one
    // for (const rule of rules) {
    //   // If the value is empty but the rule is not required, we don't execute
    //   // the rules
    //   if (rule.name !== "required" && (value === null || value === undefined)) {
    //     continue;
    //   }

    //   // Calling the rule function with the validation parameters
    //   const isRuleValid = await rule.callback(
    //     value,
    //     ...[...rule.params, context]
    //   );

    //   // Is the value valid?
    //   if (isRuleValid === false) {
    //     if (!results[field]) {
    //       results[field] = [];
    //     }

    //     isValid = false;
    //     fields[field] = false;

    //     // Setting the rule and the error message
    //     results[field].push({
    //       rule: rule.name,
    //       message: getMessage(
    //         rule.name,
    //         rule.params,
    //         options.language,
    //         options.translations || {}
    //       ),
    //     });

    //     if (options.stopOnFail) {
    //       return {
    //         isValid: false,
    //         fields,
    //         results,
    //       };
    //     }
    //   }
    // }
  }

  return {
    isValid,
    fields,
    results,
  };
};

const validateTheField = async (
  context: IContext,
  rules: IRuleDefinition[],
  value: any,
  options: IValidationOptions
) => {
  // Checking all rules one by one
  for (const rule of rules) {
    // If the value is empty but the rule is not required, we don't execute
    // the rules
    if (rule.name !== "required" && (value === null || value === undefined)) {
      continue;
    }

    // Calling the rule function with the validation parameters
    const isRuleValid = await rule.callback(
      value,
      ...[...rule.params, context]
    );

    // Is the value valid?
    if (isRuleValid === false) {
      // Setting the rule and the error message
      const ruleSet: IRuleResult = {
        rule: rule.name,
        message: getMessage(
          rule.name,
          rule.params,
          options.language,
          options.translations || {}
        ),
      };

      if (options.stopOnFail) {
        throw new StopOnFail(ruleSet);
      }

      throw new ValidationError(ruleSet);
    }
  }
};

const toRuleNameArray = (rules: string): string[] => {
  return rules.split("|");
};
