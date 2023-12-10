import { describe, expect, test } from "@jest/globals";
import validate from "../src/index";

describe("validate() function ", () => {
  test("should be able to validate the general structure", () => {
    const data = {
      email: "foo@bar.com",
    };
    const rules = {
      email: "required|email|min:20",
    };

    const result = validate(data, rules);
    expect(result.isValid).toBe(false);
    expect(result.isInvalid).toBe(true);
    expect(result.data.email.length).toBe(1);
    expect(result.data.email[0].rule).toBe("min");
    expect(result.data.email[0].message).toBe(
      "The field must be at least 20 characters"
    );
  });

  test("should be able to validate the nested values", () => {
    const data = {
      user: {
        email: "foo@bar.com",
      },
    };
    const rules = {
      "user.email": "required",
    };

    const result = validate(data, rules);
    expect(result.isValid).toBe(true);
  });
});
