import { beforeAll, describe, expect, test } from "vitest";
import { validate, setLocales, ILocale, en } from "../index";

describe("validate() function ", () => {
  beforeAll(async () => {
    await setLocales(en as ILocale);
  });

  test("should be able to validate the general structure", async () => {
    const data = {
      users: [
        {
          emailx: "sample@sample",
        },
      ],
    };
    const rules = {
      "users.*.email": "required|email",
    };

    const result = await validate(data, rules);
    console.log(result.errors);
    // expect(result.isValid).toBe(true);
  });
});
