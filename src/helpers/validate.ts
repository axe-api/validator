import {
  IContext,
  ITraverseItem,
  IValidationOptions,
  IValidationResult,
} from "../Interface";
import { getMessage } from "../Locale";
import { Definition, ValidationResult } from "../Types";
import { toRuleDefinition } from "../Factory";
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

const toTraverseArray = (data: any, definition: Definition) => {
  function resolvePath(data: any, path: string) {
    const parts = path.split(".");
    const result: Array<{ path: string; value: any }> = [];

    function traverse(
      current: any,
      index = 0,
      resolvedPath: Array<string | number> = []
    ) {
      if (index >= parts.length) {
        result.push({ path: resolvedPath.join("."), value: current });
        return;
      }

      const part = parts[index];

      if (part === "*") {
        if (Array.isArray(current)) {
          current.forEach((item, i) => {
            traverse(item, index + 1, [...resolvedPath, i]);
          });
        } else if (current && typeof current === "object") {
          Object.keys(current).forEach((key) => {
            traverse(current[key], index + 1, [...resolvedPath, key]);
          });
        } else {
          result.push({
            path: [...resolvedPath, "*"].join("."),
            value: current,
          });
        }
      } else {
        if (current && typeof current === "object" && part in current) {
          traverse(current[part], index + 1, [...resolvedPath, part]);
        } else {
          result.push({
            path: [...resolvedPath, part].join("."),
            value: undefined,
          });
        }
      }
    }

    traverse(data);
    return result;
  }

  const checks: ITraverseItem[] = [];

  // Example usage
  Object.entries(definition).forEach(([path, rules]) => {
    const resolved = resolvePath(data, path);
    checks.push({ path, rules, resolved });
  });

  return checks;
};

const getResults = async (
  data: any,
  definition: Definition,
  options: IValidationOptions
) => {
  let isValid = true;
  const fields: Record<string, boolean> = {};
  const results: ValidationResult = {};

  const traverse = toTraverseArray(data, definition);

  for (const item of traverse) {
    const { path, rules, resolved } = item;
    fields[path] = true;

    const rulesAsString = Array.isArray(rules) ? rules.join("|") : rules;

    const ruleDefinitions =
      toRuleNameArray(rulesAsString).map(toRuleDefinition);

    const context: IContext = {
      data,
      field: path,
      definition: rulesAsString,
    };

    for (const check of resolved) {
      // Checking all rules one by one
      for (const rule of ruleDefinitions) {
        // If the value is empty but the rule is not required, we don't execute
        // the rules
        if (
          rule.name !== "required" &&
          (check.value === null || check.value === undefined)
        ) {
          continue;
        }

        // Calling the rule function with the validation parameters
        const isRuleValid = await rule.callback(
          check.value,
          ...[...rule.params, context]
        );
        // Is the value valid?
        if (isRuleValid === false) {
          if (!results[check.path]) {
            results[check.path] = [];
          }
          isValid = false;
          fields[path] = false;
          // Setting the rule and the error message
          results[check.path].push({
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
  }

  return {
    isValid,
    fields,
    results,
  };
};

const toRuleNameArray = (rules: string): string[] => {
  if (Array.isArray(rules)) {
    return rules;
  }

  return rules.split("|");
};
