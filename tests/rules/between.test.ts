import { describe, expect, test } from "vitest";
import { isBetween, setLocales, validate, en } from "../../index";

const positiveList = [
  [5, 1, 10],
  [5.5, 1, 10],
  ["abc", 1, 3],
  [-2, -5, -1],
];

const negativeList = [{}, new Error(), true, false, 100, "abc"];

describe("isBetween() ", () => {
  test.each(positiveList)(
    "should return TRUE for the `%s` value (%s:%s)",
    (value, min, max) => {
      expect(isBetween(value, min, max)).toBe(true);
    }
  );

  test.each(negativeList)(
    "should return FALSE for the `%s` value (5:10)",
    (value) => {
      expect(isBetween(value, 5, 10)).toBe(false);
    }
  );

  test("should threat as string if the definition has `numeric` rule", async () => {
    await setLocales(en);

    const data = { input: "8" };
    const rules = { input: "numeric|between:5,10" };

    const result = await validate(data, rules);
    expect(result.isValid).toBe(true);
  });

  test("should support array", function () {
    expect(isBetween(["a", "b", "c"], 1, 5)).toBe(true);
  });
});
