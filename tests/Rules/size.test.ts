import { describe, expect, it } from "@jest/globals";
import size from "../../src/Rules/size";

describe("size() ", () => {
  it("should return true for null or undefined values", () => {
    expect(size(null, 5)).toBe(true);
    expect(size(undefined, 10)).toBe(true);
  });

  it("should return true for strings with the correct length", () => {
    expect(size("abcde", 5)).toBe(true);
    expect(size("test", 4)).toBe(true);
  });

  it("should return false for strings with incorrect length", () => {
    expect(size("abcd", 5)).toBe(false);
    expect(size("testing", 6)).toBe(false);
  });

  it("should return true for integers with the correct value", () => {
    expect(size(10, 10)).toBe(true);
    expect(size(5, 5)).toBe(true);
  });

  it("should return false for non-integer numbers", () => {
    expect(size(5.5, 5)).toBe(false);
  });

  it("should return false for non-string and non-numeric values", () => {
    expect(size(true, 3)).toBe(false);
    expect(size([1, 2, 3], 3)).toBe(false);
    expect(size({ key: "value" }, 2)).toBe(false);
  });
});
