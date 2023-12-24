import { describe, expect, it } from "vitest";
import digits from "../../src/rules/digits";

describe("digits() ", () => {
  it("returns true for null or undefined values", () => {
    expect(digits(null, 5)).toBe(true);
    expect(digits(undefined, 5)).toBe(true);
  });

  it("returns true for numeric values with exact length", () => {
    expect(digits(12345, 5)).toBe(true);
    expect(digits(12345, "5")).toBe(true);
    expect(digits(0, 1)).toBe(true);
  });

  it("returns false for non-numeric values", () => {
    expect(digits("abc", 3)).toBe(false);
    expect(digits(true, 1)).toBe(false);
    expect(digits({}, 2)).toBe(false);
  });

  it("returns false for numeric values with incorrect length", () => {
    expect(digits(123, 5)).toBe(false);
    expect(digits(123456, 3)).toBe(false);
    expect(digits(1.6, 3)).toBe(false);
  });

  it("returns false for NaN values", () => {
    expect(digits(NaN, 5)).toBe(false);
  });

  it("returns false for Infinity values", () => {
    expect(digits(Infinity, 5)).toBe(false);
    expect(digits(-Infinity, 5)).toBe(false);
  });

  it("throwns error for invalid length value", () => {
    expect(() => digits(123, "abc")).toThrow();
    expect(() => digits(123, "123")).not.toThrow();
  });
});
