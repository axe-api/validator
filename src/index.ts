import { IValidationResult } from "./Interface";
import { getMessage } from "./Locale";
import { ValidationResult } from "./Types";
import { toRuleDefinition } from "./factory";
import { toRuleNameArray } from "./helpers";

const validate = (
  data: any,
  validation: Record<string, string>
): IValidationResult => {
  let isValid = true;
  const results: ValidationResult = {};

  for (const key in validation) {
    if (!results[key]) {
      results[key] = [];
    }

    const rules = toRuleNameArray(validation[key]).map(toRuleDefinition);
    const value = data[key];
    for (const rule of rules) {
      const isRuleValid = rule.callback(value, ...rule.params);

      if (isRuleValid === false) {
        isValid = false;

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
