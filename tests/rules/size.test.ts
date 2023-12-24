import { describe, expect, it } from "vitest";
import isSize from "../../src/rules/isSize";

describe("isSize() ", () => {
  it("should return true for null or undefined values", () => {
    expect(isSize(null, 5)).toBe(true);
    expect(isSize(undefined, 10)).toBe(true);
  });

  it("should return true for strings with the correct length", () => {
    expect(isSize("abcde", 5)).toBe(true);
    expect(isSize("test", 4)).toBe(true);
  });

  it("should return false for strings with incorrect length", () => {
    expect(isSize("abcd", 5)).toBe(false);
    expect(isSize("testing", 6)).toBe(false);
  });

  it("should return true for integers with the correct value", () => {
    expect(isSize(10, 10)).toBe(true);
    expect(isSize(5, 5)).toBe(true);
  });

  it("should return false for non-integer numbers", () => {
    expect(isSize(5.5, 5)).toBe(false);
  });

  it("should return false for non-string and non-numeric values", () => {
    expect(isSize(true, 3)).toBe(false);
    expect(isSize([1, 2, 3], 3)).toBe(false);
    expect(isSize({ key: "value" }, 2)).toBe(false);
  });
});
