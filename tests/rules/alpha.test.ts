import { describe, expect, it } from "vitest";
import isAlpha from "../../src/rules/isAlpha";

describe("isAlpha() ", () => {
  it("returns true for valid alphabetic strings", () => {
    expect(isAlpha("abc")).toBe(true);
    expect(isAlpha("XYZ")).toBe(true);
    expect(isAlpha("AbCdEf")).toBe(true);
  });

  it("returns false for non-alphabetic strings", () => {
    expect(isAlpha("123")).toBe(false);
    expect(isAlpha("abc123")).toBe(false);
    expect(isAlpha("Special!")).toBe(false);
    expect(isAlpha(123)).toBe(false); // Non-string input
  });

  it("returns true for null or undefined values", () => {
    expect(isAlpha(null)).toBe(true);
    expect(isAlpha(undefined)).toBe(true);
  });

  it("returns true for empty strings", () => {
    expect(isAlpha("")).toBe(true);
    expect(isAlpha(" ")).toBe(true);
  });
});
