import { describe, expect, it } from "vitest";
import { isAfter, setLocales, validate, en } from "../../index";

describe("isAfter()", () => {
  it("should return true if value is after the date", () => {
    expect(isAfter("2023-01-01", "2022-01-01")).toBe(true);
    expect(isAfter(new Date("2023-01-01"), "2022-01-01")).toBe(true);
    expect(
      isAfter(
        "Wed Jun 22 2022 15:42:50 GMT-0700 (Pacific Daylight Time)",
        "2022-01-01"
      )
    ).toBe(true);
  });

  it("should return false if value is on or before the date", () => {
    expect(isAfter("2022-01-01", "2022-01-01")).toBe(false);
    expect(isAfter(new Date("2022-01-01"), "2022-01-01")).toBe(false);
    expect(isAfter("2022-01-01", "2023-01-01")).toBe(false);
    expect(isAfter(new Date("2022-01-01"), "2023-01-01")).toBe(false);
    expect(
      isAfter(
        "Wed Jun 22 2022 15:42:50 GMT-0700 (Pacific Daylight Time)",
        "2023-01-01"
      )
    ).toBe(false);
  });

  it("should handle valid date strings and Date objects", () => {
    expect(isAfter("2023-01-01", new Date("2022-01-01"))).toBe(true);
    expect(isAfter(new Date("2023-01-01"), new Date("2022-01-01"))).toBe(true);
  });

  it("should return false for invalid date formats", () => {
    expect(isAfter("invalid-date", "2022-01-01")).toBe(false);
    expect(isAfter("2023-01-01", "invalid-date")).toBe(false);
  });

  it("should handle weird values gracefully", () => {
    expect(isAfter("", "2022-01-01")).toBe(false);
    expect(isAfter(42, "2022-01-01")).toBe(false);
    expect(isAfter([], "2022-01-01")).toBe(false);
    expect(isAfter({}, "2022-01-01")).toBe(false);
    expect(isAfter("2022-01-01", "")).toBe(false);
    expect(isAfter("2022-01-01", [])).toBe(false);
    expect(isAfter("2022-01-01", {})).toBe(false);
  });

  it("should be able to use another field as the comparison date", async () => {
    await setLocales(en);

    const data = {
      startAt: "2023-10-21",
      finishAt: "2023-10-01",
    };
    const rules = {
      finishAt: "after:startAt",
    };

    const result = await validate(data, rules);
    expect(result.isValid).toBe(false);
  });
});
