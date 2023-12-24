import { describe, expect, it } from "vitest";
import { isBefore } from "../../index";

describe("isBefore() ", () => {
  it("should return true for null or undefined values", () => {
    expect(isBefore(null, "2023-01-01")).toBe(true);
    expect(isBefore(undefined, "2023-01-01")).toBe(true);
  });

  it("should return true if the value is before the given date", () => {
    expect(isBefore("2022-01-01", "2023-01-01")).toBe(true);
    expect(isBefore(100, "2023-01-01")).toBe(true);
    expect(isBefore(100, "2022-01-01")).toBe(true);
  });

  it("should return false if the value is on or after the given date", () => {
    expect(isBefore("2024-01-01", "2023-01-01")).toBe(false);
    expect(isBefore("2023-01-01", "2023-01-01")).toBe(false);
  });

  it("should handle date objects as well", () => {
    const currentDate = new Date();
    const futureDate = new Date(currentDate);
    futureDate.setDate(currentDate.getDate() + 1);

    expect(isBefore(currentDate, futureDate)).toBe(true);
    expect(isBefore(futureDate, currentDate)).toBe(false);
  });
});
