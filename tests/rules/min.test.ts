import { describe, expect, test } from "vitest";
import { isMin } from "../../index";

describe("isMin() ", () => {
  test("returns false when value is less than or equal to size", () => {
    expect(isMin(5, 10)).toBe(false);
    expect(isMin(-3, 5)).toBe(false);
    expect(isMin(5, 5.1)).toBe(false);
  });

  test("returns true when value is greater than size", () => {
    expect(isMin(15, 10)).toBe(true);
    expect(isMin(100, 50)).toBe(true);
    expect(isMin(0, 0)).toBe(true);
  });

  test("returns false when value is null or undefined", () => {
    expect(isMin(null, 5)).toBe(false);
    expect(isMin(undefined, 10)).toBe(false);
  });

  test("returns false for strings, arrays, and other types", () => {
    expect(isMin("hello", 10)).toBe(false);
    expect(isMin([1, 2, 3], 5)).toBe(false);
    expect(isMin({ key: "value" }, 100)).toBe(false);
  });

  test("handles edge cases and special values", () => {
    expect(isMin(0, 0)).toBe(true);
    expect(isMin(-1, 0)).toBe(false);
    expect(isMin(0, -1)).toBe(true);
    expect(() => isMin(0, null)).toThrow();
    expect(() => isMin(0, undefined)).toThrow();
    expect(() => isMin(0, "string-value")).toThrow();
    expect(() => isMin(0, new Error())).toThrow();
    expect(() => isMin(0, {})).toThrow();
  });
});
