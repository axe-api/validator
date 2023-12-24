import { describe, expect, it } from "vitest";
import isDate from "../../src/rules/isDate";

describe("isDate() ", () => {
  it("should return true for valid date strings", () => {
    expect(isDate("2023-12-10")).toBe(true);
    expect(isDate("December 10, 2023")).toBe(true);
  });

  it("should return false for invalid date strings", () => {
    expect(isDate("invalid date")).toBe(false);
    expect(isDate("2023-13-10")).toBe(false);
  });

  it("should return true for null or undefined", () => {
    expect(isDate(null)).toBe(true);
    expect(isDate(undefined)).toBe(true);
  });

  it("should return false for non-date objects", () => {
    expect(isDate({})).toBe(false);
    expect(isDate([])).toBe(false);
  });
});
