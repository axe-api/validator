import { describe, expect, test } from "vitest";
import isNumeric from "./isNumeric";

describe("isNumeric() ", () => {
  test("should return true for numeric values", () => {
    expect(isNumeric(42)).toBe(true);
    expect(isNumeric(0.5432)).toBe(true);
    expect(isNumeric(-3.14)).toBe(true);
    expect(isNumeric("123")).toBe(true);
    expect(isNumeric("-456")).toBe(true);
    expect(isNumeric("  789  ")).toBe(true);
    expect(isNumeric("")).toBe(true);
  });

  test("should return false for non-numeric values", () => {
    expect(isNumeric("abc")).toBe(false);
    expect(isNumeric("123abc")).toBe(false);
    expect(isNumeric(true)).toBe(false);
    expect(isNumeric(false)).toBe(false);
    expect(isNumeric(null)).toBe(false);
    expect(isNumeric(undefined)).toBe(false);
    expect(isNumeric({})).toBe(false);
    expect(isNumeric([])).toBe(false);
  });
});
