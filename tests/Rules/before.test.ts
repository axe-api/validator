import { describe, expect } from "@jest/globals";
import before from "../../src/Rules/before";

describe("before() ", () => {
  it("should return true for null or undefined values", () => {
    expect(before(null, "2023-01-01")).toBe(true);
    expect(before(undefined, "2023-01-01")).toBe(true);
  });

  it("should return true if the value is before the given date", () => {
    expect(before("2022-01-01", "2023-01-01")).toBe(true);
    expect(before(100, "2023-01-01")).toBe(true);
    expect(before(100, "2022-01-01")).toBe(true);
  });

  it("should return false if the value is on or after the given date", () => {
    expect(before("2024-01-01", "2023-01-01")).toBe(false);
    expect(before("2023-01-01", "2023-01-01")).toBe(false);
  });

  it("should handle date objects as well", () => {
    const currentDate = new Date();
    const futureDate = new Date(currentDate);
    futureDate.setDate(currentDate.getDate() + 1);

    expect(before(currentDate, futureDate)).toBe(true);
    expect(before(futureDate, currentDate)).toBe(false);
  });
});
