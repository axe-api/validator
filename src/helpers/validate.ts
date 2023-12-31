import { IContext, IValidationOptions, IValidationResult } from "../Interface";
import { getMessage } from "../Locale";
import { Definition, ValidationResult } from "../Types";
import { toRuleDefinition } from "../Factory";
import { getValueViaPath } from "./getValueViaPath";
import { getOptions } from "../Options";

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

    // Getting the value by the path
    const value = getValueViaPath(data, field);

    const context: IContext = {
      data,
      field,
      definition: ruleGroup,
    };

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
        if (!results[field]) {
          results[field] = [];
        }

        isValid = false;
        fields[field] = false;

        // Setting the rule and the error message
        results[field].push({
          rule: rule.name,
          message: getMessage(
            rule.name,
            rule.params,
            options.language,
            options.translations || {}
          ),
        });

        if (options.stopOnFail) {
          return {
            isValid: false,
            fields,
            results,
          };
        }
      }
    }
  }

  return {
    isValid,
    fields,
    results,
  };
};

const toRuleNameArray = (rules: string): string[] => {
  return rules.split("|");
};
