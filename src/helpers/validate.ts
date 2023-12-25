import { IContext, IOptions, IValidationResult } from "../Interface";
import { getMessage } from "../Locale";
import { Definition, ValidationResult } from "../Types";
import { toRuleDefinition } from "../Factory";
import { getValueViaPath } from "./getValueViaPath";
import { getOptions } from "../Options";

export const validate = async (
  data: any,
  definition: Definition,
  options?: Partial<IOptions>
): Promise<IValidationResult> => {
  const currentOptions: IOptions = {
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
  options: IOptions
) => {
  let isValid = true;
  const fields: Record<string, boolean> = {};
  const results: ValidationResult = {};

  // Checking all validations
  for (const key in definition) {
    fields[key] = true;
    // Parsing the rules
    const params = definition[key];
    let ruleGroup: string = "";
    if (Array.isArray(params)) {
      ruleGroup = params.join("|");
    } else {
      ruleGroup = params;
    }

    const rules = toRuleNameArray(ruleGroup).map(toRuleDefinition);

    // Getting the value by the path
    const value = getValueViaPath(data, key);

    const context: IContext = {
      data,
      key,
      definition: ruleGroup,
    };

    // Checking all rules one by one
    for (const rule of rules) {
      // Calling the rule function with the validation parameters
      // console.log([...rule.params, context]);
      const isRuleValid = rule.callback(value, ...[...rule.params, context]);

      // Is the value valid?
      if (isRuleValid === false) {
        if (!results[key]) {
          results[key] = [];
        }

        isValid = false;
        fields[key] = false;

        // Setting the rule and the error message
        results[key].push({
          rule: rule.name,
          message: await getMessage(
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
