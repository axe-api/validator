import { describe, expect, it } from "vitest";
import alphaDash from "../../src/rules/alphaDash";

describe("alphaDash() ", () => {
  it("should return true for valid inputs", () => {
    // Valid inputs
    expect(alphaDash("abc123")).toBe(true);
    expect(alphaDash("alpha-numeric_123")).toBe(true);
    expect(alphaDash(null)).toBe(true); // null is considered valid
    expect(alphaDash(undefined)).toBe(true); // undefined is considered valid
    expect(alphaDash("")).toBe(true); // undefined is considered valid
    expect(alphaDash(" ")).toBe(true); // undefined is considered valid
    expect(alphaDash(123)).toBe(true); // Numbers are not allowed
  });

  it("should return false for invalid inputs", () => {
    // Invalid inputs
    expect(alphaDash("special$char")).toBe(false);
    expect(alphaDash({ key: "value" })).toBe(false); // Objects are not allowed
  });
});
