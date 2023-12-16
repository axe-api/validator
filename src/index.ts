import { IContext, IOptions, IValidationResult } from "./Interface";
import { getMessage } from "./Locale";
import { ValidationResult } from "./Types";
import { toRuleDefinition } from "./Factory";
import { getValueViaPath, toRuleNameArray } from "./Helpers";
import { getOptions, setOptions } from "./Options";

const validate = (
  data: any,
  validation: Record<string, string>,
  options?: Partial<IOptions>
): IValidationResult => {
  const currentOptions: IOptions = {
    ...getOptions(),
    ...options,
  };

  const { isValid, fields, results } = getResults(
    data,
    validation,
    currentOptions
  );

  return {
    isValid,
    isInvalid: !isValid,
    fields,
    errors: results,
  };
};

const getResults = (
  data: any,
  validation: Record<string, string>,
  options: IOptions
) => {
  let isValid = true;
  const fields: Record<string, boolean> = {};
  const results: ValidationResult = {};

  // Checking all validations
  for (const key in validation) {
    fields[key] = true;
    // Parsing the rules
    const rules = toRuleNameArray(validation[key]).map(toRuleDefinition);

    // Getting the value by the path
    const value = getValueViaPath(data, key);

    const context: IContext = {
      data,
      key,
    };

    // Checking all rules one by one
    for (const rule of rules) {
      // Calling the rule function with the validation parameters
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
          message: getMessage(
            rule.name,
            rule.params,
            options.language,
            options.translations
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

export { setOptions };

export default validate;
