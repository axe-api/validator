import { IValidationResult } from "./Interface";
import { getMessage } from "./Locale";
import { ValidationResult } from "./Types";
import { toRuleDefinition } from "./Factory";
import { getValueViaPath, toRuleNameArray } from "./Helpers";

const validate = (
  data: any,
  validation: Record<string, string>
): IValidationResult => {
  let isValid = true;
  const results: ValidationResult = {};

  // Checking all validations
  for (const key in validation) {
    if (!results[key]) {
      results[key] = [];
    }

    // Parsing the rules
    const rules = toRuleNameArray(validation[key]).map(toRuleDefinition);

    // Getting the value by the path
    const value = getValueViaPath(data, key);

    // Checking all rules one by one
    for (const rule of rules) {
      // Calling the rule function with the validation parameters
      const isRuleValid = rule.callback(value, ...rule.params);

      // Is the value valid?
      if (isRuleValid === false) {
        isValid = false;
        // Setting the rule and the error message
        results[key].push({
          rule: rule.name,
          message: getMessage(rule.name, rule.params),
        });
      }
    }
  }

  return {
    isValid,
    isInvalid: !isValid,
    data: results,
  };
};

export default validate;
