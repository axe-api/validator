import { describe, expect, it } from "vitest";
import { isDigits } from "../../index";

describe("isDigits() ", () => {
  it("returns true for null or undefined values", () => {
    expect(isDigits(null, 5)).toBe(true);
    expect(isDigits(undefined, 5)).toBe(true);
  });

  it("returns true for numeric values with exact length", () => {
    expect(isDigits(12345, 5)).toBe(true);
    expect(isDigits(12345, "5")).toBe(true);
    expect(isDigits(0, 1)).toBe(true);
  });

  it("returns false for non-numeric values", () => {
    expect(isDigits("abc", 3)).toBe(false);
    expect(isDigits(true, 1)).toBe(false);
    expect(isDigits({}, 2)).toBe(false);
  });

  it("returns false for numeric values with incorrect length", () => {
    expect(isDigits(123, 5)).toBe(false);
    expect(isDigits(123456, 3)).toBe(false);
    expect(isDigits(1.6, 3)).toBe(false);
  });

  it("returns false for NaN values", () => {
    expect(isDigits(NaN, 5)).toBe(false);
  });

  it("returns false for Infinity values", () => {
    expect(isDigits(Infinity, 5)).toBe(false);
    expect(isDigits(-Infinity, 5)).toBe(false);
  });

  it("throwns error for invalid length value", () => {
    expect(() => isDigits(123, "abc")).toThrow();
    expect(() => isDigits(123, "123")).not.toThrow();
  });
});
