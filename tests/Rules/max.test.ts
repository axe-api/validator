import { describe, expect, test } from "vitest";
import max from "../../src/rules/max";

describe("max() ", () => {
  test("returns true when value is less than or equal to size", () => {
    expect(max(5, 10)).toBe(true);
    expect(max(0, 0)).toBe(true);
    expect(max(-3, 5)).toBe(true);
    expect(max(5, 5.1)).toBe(true);
    expect(max("john", 10)).toBe(true);
  });

  test("returns false when value is greater than size", () => {
    expect(max(15, 10)).toBe(false);
    expect(max(100, 50)).toBe(false);
  });

  test("returns true when value is null or undefined", () => {
    expect(max(null, 5)).toBe(true);
    expect(max(undefined, 10)).toBe(true);
  });

  test("returns false for strings, arrays, and other types", () => {
    expect(max([1, 2, 3], 5)).toBe(false);
    expect(max({ key: "value" }, 100)).toBe(false);
  });

  test("handles edge cases and special values", () => {
    expect(max(0, 0)).toBe(true);
    expect(max(-1, 0)).toBe(true);
    expect(max(0, -1)).toBe(false);
    expect(() => max(0, null)).toThrow();
    expect(() => max(0, undefined)).toThrow();
    expect(() => max(0, "string-value")).toThrow();
    expect(() => max(0, new Error())).toThrow();
    expect(() => max(0, {})).toThrow();
  });
});
