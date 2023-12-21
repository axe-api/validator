import { describe, expect, test } from "vitest";
import min from "../../src/Rules/min";

describe("min() ", () => {
  test("returns false when value is less than or equal to size", () => {
    expect(min(5, 10)).toBe(false);
    expect(min(-3, 5)).toBe(false);
    expect(min(5, 5.1)).toBe(false);
  });

  test("returns true when value is greater than size", () => {
    expect(min(15, 10)).toBe(true);
    expect(min(100, 50)).toBe(true);
    expect(min(0, 0)).toBe(true);
  });

  test("returns true when value is null or undefined", () => {
    expect(min(null, 5)).toBe(true);
    expect(min(undefined, 10)).toBe(true);
  });

  test("returns false for strings, arrays, and other types", () => {
    expect(min("hello", 10)).toBe(false);
    expect(min([1, 2, 3], 5)).toBe(false);
    expect(min({ key: "value" }, 100)).toBe(false);
  });

  test("handles edge cases and special values", () => {
    expect(min(0, 0)).toBe(true);
    expect(min(-1, 0)).toBe(false);
    expect(min(0, -1)).toBe(true);
    expect(() => min(0, null)).toThrow();
    expect(() => min(0, undefined)).toThrow();
    expect(() => min(0, "string-value")).toThrow();
    expect(() => min(0, new Error())).toThrow();
    expect(() => min(0, {})).toThrow();
  });
});
