import { describe, expect, it } from "@jest/globals";
import date from "../../src/Rules/date";

describe("date() ", () => {
  it("should return true for valid date strings", () => {
    expect(date("2023-12-10")).toBe(true);
    expect(date("December 10, 2023")).toBe(true);
  });

  it("should return false for invalid date strings", () => {
    expect(date("invalid date")).toBe(false);
    expect(date("2023-13-10")).toBe(false);
  });

  it("should return true for null or undefined", () => {
    expect(date(null)).toBe(true);
    expect(date(undefined)).toBe(true);
  });

  it("should return false for non-date objects", () => {
    expect(date({})).toBe(false);
    expect(date([])).toBe(false);
  });
});
