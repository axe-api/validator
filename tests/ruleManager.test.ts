import { beforeAll, describe, test, expect } from "vitest";
import {
  setLocales,
  en,
  ILocale,
  isRegistered,
  register,
  validate,
} from "../index";

describe("isRegistered()", () => {
  beforeAll(async () => {
    setLocales(en as ILocale);
  });

  test("should check the unregistered rules", async () => {
    const result = isRegistered("myRule");
    expect(result).toBe(false);
  });

  test("should check the registered rules", async () => {
    register(
      "myRule",
      () => {
        return false;
      },
      {
        en: "My rule throws an error!",
      }
    );
    const result = isRegistered("myRule");
    expect(result).toBe(true);
  });

  test("should be able use custom rule", async () => {
    const data = {
      email: "foo@bar.com",
    };
    const rules = {
      email: "myRule",
    };

    const result = await validate(data, rules);
    expect(result.isValid).toBe(false);
    expect(result.errors.email[0].rule).toBe("myRule");
    expect(result.errors.email[0].message).toBe("My rule throws an error!");
  });
});
