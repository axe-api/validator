import { describe, expect, test } from "vitest";
import isMax from "./isMax";

describe("isMax() ", () => {
  test("returns true when value is less than or equal to size", () => {
    expect(isMax(5, 10)).toBe(true);
    expect(isMax(10, 10)).toBe(true);
    expect(isMax("5", 10)).toBe(true);
    expect(isMax(0, 0)).toBe(true);
    expect(isMax(-3, 5)).toBe(true);
    expect(isMax(5, 5.1)).toBe(true);
    expect(isMax("john", 10)).toBe(true);
  });

  test("returns false when value is greater than size", () => {
    expect(isMax(15, 10)).toBe(false);
    expect(isMax(100, 50)).toBe(false);
    expect(isMax("ozzy", 3)).toBe(false);
  });

  test("returns FALSE when value is null or undefined", () => {
    expect(isMax(null, 5)).toBe(false);
    expect(isMax(undefined, 10)).toBe(false);
    expect(isMax(true, 10)).toBe(false);
  });

  test("returns false for strings, arrays, and other types", () => {
    expect(isMax([1, 2, 3], 5)).toBe(false);
    expect(isMax({ key: "value" }, 100)).toBe(false);
  });

  test("handles edge cases and special values", () => {
    expect(isMax(0, 0)).toBe(true);
    expect(isMax(-1, 0)).toBe(true);
    expect(isMax(0, -1)).toBe(false);
    expect(() => isMax(0, null)).toThrow();
    expect(() => isMax(0, undefined)).toThrow();
    expect(() => isMax(0, "string-value")).toThrow();
    expect(() => isMax(0, new Error())).toThrow();
    expect(() => isMax(0, {})).toThrow();
  });
});
