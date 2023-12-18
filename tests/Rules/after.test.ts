import { describe, expect, it } from "@jest/globals";
import after from "../../src/Rules/after";

describe("after() ", () => {
  it("should return true if value is after the date", () => {
    expect(after("2023-01-01", "2022-01-01")).toBe(true);
    expect(after(new Date("2023-01-01"), "2022-01-01")).toBe(true);
    expect(
      after(
        "Wed Jun 22 2022 15:42:50 GMT-0700 (Pacific Daylight Time)",
        "2022-01-01"
      )
    ).toBe(true);
  });

  it("should return false if value is on or before the date", () => {
    expect(after("2022-01-01", "2022-01-01")).toBe(false);
    expect(after(new Date("2022-01-01"), "2022-01-01")).toBe(false);
    expect(after("2022-01-01", "2023-01-01")).toBe(false);
    expect(after(new Date("2022-01-01"), "2023-01-01")).toBe(false);
    expect(
      after(
        "Wed Jun 22 2022 15:42:50 GMT-0700 (Pacific Daylight Time)",
        "2023-01-01"
      )
    ).toBe(false);
  });

  it("should handle valid date strings and Date objects", () => {
    expect(after("2023-01-01", new Date("2022-01-01"))).toBe(true);
    expect(after(new Date("2023-01-01"), new Date("2022-01-01"))).toBe(true);
  });

  it("should return false for invalid date formats", () => {
    expect(after("invalid-date", "2022-01-01")).toBe(false);
    expect(after("2023-01-01", "invalid-date")).toBe(false);
  });

  it("should return true for null and undefined values", () => {
    expect(after(null, "2022-01-01")).toBe(true);
    expect(after(undefined, "2022-01-01")).toBe(true);
  });

  it("should handle weird values gracefully", () => {
    expect(after("", "2022-01-01")).toBe(false);
    expect(after(42, "2022-01-01")).toBe(false);
    expect(after([], "2022-01-01")).toBe(false);
    expect(after({}, "2022-01-01")).toBe(false);
    expect(after("2022-01-01", "")).toBe(false);
    expect(after("2022-01-01", [])).toBe(false);
    expect(after("2022-01-01", {})).toBe(false);
  });
});
