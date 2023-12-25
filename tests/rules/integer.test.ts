import { describe, expect, it } from "vitest";
import { isInteger } from "../../index";

describe("isInteger() ", () => {
  it("should return FALSE for null or undefined", () => {
    expect(isInteger(null)).toBe(false);
    expect(isInteger(undefined)).toBe(false);
  });

  it("should return true for integer values", () => {
    expect(isInteger(0)).toBe(true);
    expect(isInteger(42)).toBe(true);
    expect(isInteger(-15)).toBe(true);
    expect(isInteger("10")).toBe(true);
  });

  it("should return false for non-integer numbers", () => {
    expect(isInteger(3.14)).toBe(false);
    expect(isInteger(-0.5)).toBe(false);
    expect(isInteger("3.14")).toBe(false);
    expect(isInteger("10cd")).toBe(false);
  });

  it("should return false for non-numeric values", () => {
    expect(isInteger("string")).toBe(false);
    expect(isInteger(true)).toBe(false);
    expect(isInteger(false)).toBe(false);
    expect(isInteger([])).toBe(false);
    expect(isInteger({})).toBe(false);
    expect(isInteger(new Error())).toBe(false);
    expect(isInteger(NaN)).toBe(false);
    expect(isInteger(Infinity)).toBe(false);
    expect(isInteger(-Infinity)).toBe(false);
  });
});
