import { describe, expect, it } from "vitest";
import isAlphaDash from "../../src/rules/isAlphaDash";

describe("isAlphaDash() ", () => {
  it("should return true for valid inputs", () => {
    // Valid inputs
    expect(isAlphaDash("abc123")).toBe(true);
    expect(isAlphaDash("alpha-numeric_123")).toBe(true);
    expect(isAlphaDash(null)).toBe(true); // null is considered valid
    expect(isAlphaDash(undefined)).toBe(true); // undefined is considered valid
    expect(isAlphaDash("")).toBe(true); // undefined is considered valid
    expect(isAlphaDash(" ")).toBe(true); // undefined is considered valid
    expect(isAlphaDash(123)).toBe(true); // Numbers are not allowed
  });

  it("should return false for invalid inputs", () => {
    // Invalid inputs
    expect(isAlphaDash("special$char")).toBe(false);
    expect(isAlphaDash({ key: "value" })).toBe(false); // Objects are not allowed
  });
});
