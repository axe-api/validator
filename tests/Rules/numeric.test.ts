import { describe, expect, test } from "vitest";
import numeric from "../../src/rules/numeric";

describe("numeric() ", () => {
  test("should return true for numeric values", () => {
    expect(numeric(42)).toBe(true);
    expect(numeric(-3.14)).toBe(true);
    expect(numeric("123")).toBe(true);
    expect(numeric("-456")).toBe(true);
    expect(numeric("  789  ")).toBe(true);
    expect(numeric("")).toBe(true);
  });

  test("should return false for non-numeric values", () => {
    expect(numeric("abc")).toBe(false);
    expect(numeric("123abc")).toBe(false);
    expect(numeric(true)).toBe(false);
    expect(numeric(false)).toBe(false);
    expect(numeric(null)).toBe(true); // Special case for null
    expect(numeric(undefined)).toBe(true); // Special case for undefined
    expect(numeric({})).toBe(false);
    expect(numeric([])).toBe(false);
  });
});
