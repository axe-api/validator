import { describe, expect, it } from "@jest/globals";
import alphaNum from "../../src/Rules/alphaNum";

describe("alphaNum() ", () => {
  it("returns true for valid alpha-numeric strings", () => {
    expect(alphaNum("abc123")).toBe(true);
    expect(alphaNum("AbC456")).toBe(true);
    expect(alphaNum("123XYZ")).toBe(true);
    expect(alphaNum(123)).toBe(true);
  });

  it("returns false for strings with non-alpha-numeric characters", () => {
    expect(alphaNum("abc!123")).toBe(false);
    expect(alphaNum("123@xyz")).toBe(false);
    expect(alphaNum("abc_123")).toBe(false);
  });

  it("returns false for non-string values", () => {
    expect(alphaNum(true)).toBe(false);
    expect(alphaNum({ key: "value" })).toBe(false);
  });

  it("returns true for null or undefined values", () => {
    expect(alphaNum(null)).toBe(true);
    expect(alphaNum(undefined)).toBe(true);
  });
});
