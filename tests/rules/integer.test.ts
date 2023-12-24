import { describe, expect, it } from "vitest";
import { isInteger } from "../../index";

describe("isInteger() ", () => {
  it("should return true for null", () => {
    expect(isInteger(null)).toBe(true);
  });

  it("should return true for undefined", () => {
    expect(isInteger(undefined)).toBe(true);
  });

  it("should return true for integer values", () => {
    expect(isInteger(0)).toBe(true);
    expect(isInteger(42)).toBe(true);
    expect(isInteger(-15)).toBe(true);
  });

  it("should return false for non-integer numbers", () => {
    expect(isInteger(3.14)).toBe(false);
    expect(isInteger(-0.5)).toBe(false);
  });

  it("should return false for non-numeric values", () => {
    expect(isInteger("string")).toBe(false);
    expect(isInteger(true)).toBe(false);
    expect(isInteger([])).toBe(false);
    expect(isInteger({})).toBe(false);
    expect(isInteger(new Error())).toBe(false);
  });

  it("should return false for NaN", () => {
    expect(isInteger(NaN)).toBe(false);
  });

  it("should return false for Infinity", () => {
    expect(isInteger(Infinity)).toBe(false);
  });
});
