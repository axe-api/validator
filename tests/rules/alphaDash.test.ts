import { describe, expect, test } from "vitest";
import { isAlphaDash } from "../../index";

const positiveList = [
  "John_-",
  "abc123",
  "alpha-numeric_123",
  null,
  undefined,
  "",
  " ",
  123,
];

const negativeList = ["special$char", { key: "value" }, "'", "a b"];

describe("isAlphaDash() ", () => {
  test.each(positiveList)("should return TRUE for the `%s` value", (value) => {
    expect(isAlphaDash(value)).toBe(true);
  });

  test.each(negativeList)("should return FALSE for the `%s` value", (value) => {
    expect(isAlphaDash(value)).toBe(false);
  });
});
