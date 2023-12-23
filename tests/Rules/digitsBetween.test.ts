import { describe, expect, test } from "vitest";
import digitsBetween from "../../src/rules/digitsBetween";

describe("digitsBetween() ", () => {
  test("Valid numeric value within range", () => {
    expect(digitsBetween("123", 2, 4)).toBe(true);
    expect(digitsBetween("123", "2", "4")).toBe(true);
    expect(digitsBetween(123, "2", "4")).toBe(true);
  });

  test("Valid numeric value at the lower edge of the range", () => {
    expect(digitsBetween("12", 2, 4)).toBe(true);
  });

  test("Valid numeric value at the upper edge of the range", () => {
    expect(digitsBetween("1234", 2, 4)).toBe(true);
  });

  test("Valid numeric value with minimum length", () => {
    expect(digitsBetween("1", 1, 5)).toBe(true);
  });

  test("Valid numeric value with maximum length", () => {
    expect(digitsBetween("12345", 1, 5)).toBe(true);
  });

  test("Invalid numeric value (not a number)", () => {
    expect(digitsBetween("abc", 2, 4)).toBe(false);
    expect(digitsBetween(1.2, 2, 4)).toBe(false);
  });

  test("Invalid numeric value (below the minimum length)", () => {
    expect(digitsBetween("12", 3, 4)).toBe(false);
  });

  test("Invalid numeric value (above the maximum length)", () => {
    expect(digitsBetween("12345", 1, 4)).toBe(false);
  });

  test("Null value should return true", () => {
    expect(digitsBetween(null, 2, 4)).toBe(true);
  });

  test("Undefined value should return true", () => {
    expect(digitsBetween(undefined, 2, 4)).toBe(true);
  });

  test("Incorrect min or max value should thrown error ", () => {
    expect(() => digitsBetween(12, "a", 4)).toThrow();
    expect(() => digitsBetween(12, 1, "c")).toThrow();
    expect(() => digitsBetween(12, 1, undefined)).toThrow();
    expect(() => digitsBetween(12, null, 4)).toThrow();
  });
});
