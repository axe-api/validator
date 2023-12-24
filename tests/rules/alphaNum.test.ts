import { describe, expect, it } from "vitest";
import { isAlphaNum } from "../../index";

describe("isAlphaNum() ", () => {
  it("returns true for valid alpha-numeric strings", () => {
    expect(isAlphaNum("abc123")).toBe(true);
    expect(isAlphaNum("AbC456")).toBe(true);
    expect(isAlphaNum("123XYZ")).toBe(true);
    expect(isAlphaNum(123)).toBe(true);
  });

  it("returns false for strings with non-alpha-numeric characters", () => {
    expect(isAlphaNum("abc!123")).toBe(false);
    expect(isAlphaNum("123@xyz")).toBe(false);
    expect(isAlphaNum("abc_123")).toBe(false);
  });

  it("returns false for non-string values", () => {
    expect(isAlphaNum(true)).toBe(false);
    expect(isAlphaNum({ key: "value" })).toBe(false);
  });

  it("returns true for null or undefined values", () => {
    expect(isAlphaNum(null)).toBe(true);
    expect(isAlphaNum(undefined)).toBe(true);
  });
});
