import { describe, expect, test } from "vitest";
import { isAlphaNum } from "../../index";

const positiveList = ["abc123", "AbC456", "123XYZ", 123];

const negativeList = [
  "abc!123",
  "123@xyz",
  "abc_123",
  true,
  false,
  { key: "value" },
  "word word",
];

describe("isAlphaNum() ", () => {
  test.each(positiveList)("should return TRUE for the `%s` value", (value) => {
    expect(isAlphaNum(value)).toBe(true);
  });

  test.each(negativeList)("should return FALSE for the `%s` value", (value) => {
    expect(isAlphaNum(value)).toBe(false);
  });
});
