import { describe, expect, test } from "vitest";
import { isDigitsBetween } from "../../index";

describe("digitsBetween() ", () => {
  test("Valid numeric value within range", () => {
    expect(isDigitsBetween("123", 2, 4)).toBe(true);
    expect(isDigitsBetween("123", "2", "4")).toBe(true);
    expect(isDigitsBetween(123, "2", "4")).toBe(true);
  });

  test("Valid numeric value at the lower edge of the range", () => {
    expect(isDigitsBetween("12", 2, 4)).toBe(true);
  });

  test("Valid numeric value at the upper edge of the range", () => {
    expect(isDigitsBetween("1234", 2, 4)).toBe(true);
  });

  test("Valid numeric value with minimum length", () => {
    expect(isDigitsBetween("1", 1, 5)).toBe(true);
  });

  test("Valid numeric value with maximum length", () => {
    expect(isDigitsBetween("12345", 1, 5)).toBe(true);
  });

  test("Invalid numeric value (not a number)", () => {
    expect(isDigitsBetween("abc", 2, 4)).toBe(false);
    expect(isDigitsBetween(1.2, 2, 4)).toBe(false);
  });

  test("Invalid numeric value (below the minimum length)", () => {
    expect(isDigitsBetween("12", 3, 4)).toBe(false);
  });

  test("Invalid numeric value (above the maximum length)", () => {
    expect(isDigitsBetween("12345", 1, 4)).toBe(false);
  });

  test("Null value should return false", () => {
    expect(isDigitsBetween(null, 2, 4)).toBe(false);
  });

  test("Undefined value should return false", () => {
    expect(isDigitsBetween(undefined, 2, 4)).toBe(false);
  });

  test("Incorrect min or max value should thrown error ", () => {
    expect(() => isDigitsBetween(12, "a", 4)).toThrow();
    expect(() => isDigitsBetween(12, 1, "c")).toThrow();
    expect(() => isDigitsBetween(12, 1, undefined)).toThrow();
    expect(() => isDigitsBetween(12, null, 4)).toThrow();
  });
});
