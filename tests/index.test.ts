import { beforeAll, describe, expect, test } from "vitest";
import {
  setOptions,
  validate,
  setLocales,
  ILocale,
  required,
  email,
  register,
  en,
  tr,
  az,
} from "../index";

const EXISTS_RULE_TRANSLATIONS = {
  en: "The record doesn't exists on database: {0}",
  tr: "Kayıt veritabanında bulunamadı: {0}",
};

describe("validate() function ", () => {
  beforeAll(async () => {
    await setLocales(en as ILocale);
  });

  test("should be able to validate the general structure", async () => {
    const data = {
      email: "foo@bar.com",
    };
    const rules = {
      email: "required|email|min:20",
    };

    const result = await validate(data, rules);
    expect(result.isValid).toBe(false);
    expect(result.isInvalid).toBe(true);
    expect(result.errors.email.length).toBe(1);
    expect(result.errors.email[0].rule).toBe("min");
    expect(result.errors.email[0].message).toBe(
      "The field must be at least 20."
    );
  });

  test("should be able to validate the nested values", async () => {
    const data = {
      user: {
        email: "foo@bar.com",
      },
    };
    const rules = {
      "user.email": "required",
    };

    const result = await validate(data, rules);
    expect(result.isValid).toBe(true);
  });

  test("should be able parse the parameters correctly", async () => {
    const data = {
      price: 999,
    };
    const rules = {
      price: "required|between:1000,2000",
    };

    const result = await validate(data, rules);
    expect(result.isValid).toBe(false);
    expect(result.errors.price[0].message).toBe(
      "The field field must be between 1000 and 2000."
    );
  });

  test("should stop on fail by options", async () => {
    const rules = {
      email: "min:100|email",
    };

    const result = await validate({ email: "xxx" }, rules, {
      stopOnFail: true,
    });
    expect(result.errors.email.length).toBe(1);
  });

  test("should not stop on fail by default", async () => {
    const rules = {
      email: "min:100|email",
    };

    const result = await validate({ email: "xxx" }, rules);
    expect(result.errors.email.length).toBe(2);
  });

  test("should be able to use custom translations", async () => {
    const rules = {
      email: "required",
    };

    const result = await validate({ email: "" }, rules, {
      translations: {
        required: "The field field is required. (custom translation message)",
      },
    });
    expect(result.errors.email[0].message).toBe(
      "The field field is required. (custom translation message)"
    );
  });

  test("should be able set the default options", async () => {
    // Setting the general default options
    await setOptions({
      stopOnFail: true,
    });
    const rules = {
      email: "min:100|email",
    };

    const result1 = await validate({ email: "xxx" }, rules);
    expect(result1.errors.email.length).toBe(1);

    // Reverting the changes
    await setOptions({
      stopOnFail: false,
    });
    const result2 = await validate({ email: "xxx" }, rules);
    expect(result2.errors.email.length).toBe(2);

    // Overriding my general options for a specific validate call
    await setOptions({
      stopOnFail: true,
    });
    const result3 = await validate({ email: "xxx" }, rules, {
      stopOnFail: false,
    });
    expect(result3.errors.email.length).toBe(2);
  });

  test("should not be able show a valid field in the error list", async () => {
    const rules = {
      email: "required",
    };

    const result = await validate({ email: "foo@bar.com" }, rules);
    expect(result.errors.email).toBeUndefined();
  });

  test("should be able to see if a field is valid or not", async () => {
    const rules = {
      email: "required",
      name: "required",
    };

    const result = await validate({ email: "foo@bar.com" }, rules);
    expect(result.fields.email).toBe(true);
    expect(result.fields.name).toBe(false);
  });

  test("should be able to load languages dynamically", async () => {
    await setLocales([en, tr]);

    const rules = {
      email: "required|email",
    };

    const result = await validate({ email: "invalid-email" }, rules, {
      language: "tr",
    });
    expect(result.isValid).toBe(false);
    expect(result.errors.email[0].message).toBe("Alan bir e-posta olmalıdır.");
  });

  test("should be able to use the converters", async () => {
    const data = {
      email: "sample",
    };
    const rules = {
      email: [required(), email()],
    };

    const result = await validate(data, rules);
    expect(result.isValid).toBe(false);
  });

  test("should not try to validate for empty records", async () => {
    const data = {
      email: null,
      phone: undefined,
    };
    const rules = {
      email: "email",
      phone: "min:10",
    };

    const result = await validate(data, rules);
    expect(result.isValid).toBe(true);
  });

  test("should throw an error for undefined validation rules", async () => {
    const data = {
      email: "user@example.com",
    };
    const rules = {
      email: "exists:users",
    };

    await expect(validate(data, rules)).rejects.toThrow(
      "Undefined validation rule: exists"
    );
  });

  test("should be able to register a custom rule", async () => {
    // Register a custom rule
    const testRule = () => {
      return true;
    };
    register("test", testRule, EXISTS_RULE_TRANSLATIONS);

    const data = {
      email: "user@example.com",
    };
    const rules = {
      email: "test:users",
    };

    const results = await validate(data, rules);
    expect(results.isValid).toBe(true);
  });

  test("should be able to register a custom rule with translations", async () => {
    // Register a custom rule
    const existsRule = () => {
      return false;
    };
    register("exists", existsRule, EXISTS_RULE_TRANSLATIONS);

    const data = {
      email: "user@example.com",
    };
    const rules = {
      email: "exists:users",
    };

    const results = await validate(data, rules);
    expect(results.isValid).toBe(false);
    expect(results.errors.email[0].rule).toBe("exists");
    expect(results.errors.email[0].message).toBe(
      "The record doesn't exists on database: users"
    );
  });

  test("should be able to register a rule before setLocales", async () => {
    const isNullable = (value: any) => {
      if (value === null || value === "null") {
        return true;
      }
      return false;
    };

    register("nullable", isNullable, {
      en: "The {0} field must be null or empty.",
      tr: "The {0} field must be null or empty.",
      az: "AZ: The {0} field must be null or empty!",
    });

    setLocales(az);

    const data = {
      email: "user@example.com",
    };
    const rules = {
      email: "nullable",
    };

    const results = await validate(data, rules, { language: "az" });
    expect(results.isValid).toBe(false);
    expect(results.errors.email[0].message).toBe(
      "AZ: The {0} field must be null or empty!"
    );
  });

  test("should not be able to register the same rule twice", async () => {
    expect(() =>
      register("exists", () => false, EXISTS_RULE_TRANSLATIONS)
    ).toThrow("The rule name is already defined: exists");
  });
});
