import { describe, expect, it } from "vitest";
import integer from "../../src/rules/integer";

describe("integer() ", () => {
  it("should return true for null", () => {
    expect(integer(null)).toBe(true);
  });

  it("should return true for undefined", () => {
    expect(integer(undefined)).toBe(true);
  });

  it("should return true for integer values", () => {
    expect(integer(0)).toBe(true);
    expect(integer(42)).toBe(true);
    expect(integer(-15)).toBe(true);
  });

  it("should return false for non-integer numbers", () => {
    expect(integer(3.14)).toBe(false);
    expect(integer(-0.5)).toBe(false);
  });

  it("should return false for non-numeric values", () => {
    expect(integer("string")).toBe(false);
    expect(integer(true)).toBe(false);
    expect(integer([])).toBe(false);
    expect(integer({})).toBe(false);
    expect(integer(new Error())).toBe(false);
  });

  it("should return false for NaN", () => {
    expect(integer(NaN)).toBe(false);
  });

  it("should return false for Infinity", () => {
    expect(integer(Infinity)).toBe(false);
  });
});
