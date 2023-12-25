import { describe, expect, it, test } from "vitest";
import { isDigits } from "../../index";

const negativeList = [
  "9098a",
  "abcde",
  null,
  undefined,
  true,
  false,
  {},
  NaN,
  Infinity,
  -Infinity,
];

describe("isDigits() ", () => {
  it("returns true for numeric values with exact length", () => {
    expect(isDigits(12345, 5)).toBe(true);
    expect(isDigits(12345, "5")).toBe(true);
    expect(isDigits(0, 1)).toBe(true);
  });

  it("returns false for numeric values with incorrect length", () => {
    expect(isDigits(123, 5)).toBe(false);
    expect(isDigits(123456, 3)).toBe(false);
    expect(isDigits(1.6, 3)).toBe(false);
    expect(isDigits("1234 ", 5)).toBe(false);
    expect(isDigits(" 1234", 5)).toBe(false);
    expect(isDigits(" ", 1)).toBe(false);
  });

  it("throwns error for invalid length value", () => {
    expect(() => isDigits(123, "abc")).toThrow();
    expect(() => isDigits(123, "123")).not.toThrow();
  });

  test.each(negativeList)("should return FALSE for the %s value", (value) => {
    expect(isDigits(value, 5)).toBe(false);
  });
});
