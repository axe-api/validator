import { describe, expect, it } from "vitest";
import isAfterOrEqual from "./isAfterOrEqual";
import { setLocales } from "../Locale";
import { validate } from "../helpers/validate";
import { en } from "../i18n";

describe("isAfterOrEqual() ", () => {
  it("returns true if the value is after or equal to the date (string input)", () => {
    expect(isAfterOrEqual("2023-01-01", "2022-01-01")).toBe(true);
    expect(
      isAfterOrEqual(
        "Wed Jun 22 2022 15:42:50 GMT-0700 (Pacific Daylight Time)",
        "2022-01-01"
      )
    ).toBe(true);
    expect(isAfterOrEqual("2022-01-01", "2022-01-01")).toBe(true);
  });

  it("returns true if the value is after or equal to the date (Date object input)", () => {
    expect(isAfterOrEqual(new Date("2023-01-01"), new Date("2022-01-01"))).toBe(
      true
    );
    expect(
      isAfterOrEqual(
        new Date("Wed Jun 22 2022 15:42:50 GMT-0700 (Pacific Daylight Time)"),
        "2022-01-01"
      )
    ).toBe(true);
    expect(isAfterOrEqual(new Date("2022-01-01"), new Date("2022-01-01"))).toBe(
      true
    );
  });

  it("returns false if the value is before the date (string input)", () => {
    expect(isAfterOrEqual("2022-01-01", "2023-01-01")).toBe(false);
    expect(
      isAfterOrEqual(
        "Wed Jun 22 2022 15:42:50 GMT-0700 (Pacific Daylight Time)",
        "2023-01-01"
      )
    ).toBe(false);
  });

  it("returns false if the value is before the date (Date object input)", () => {
    expect(isAfterOrEqual(new Date("2022-01-01"), new Date("2023-01-01"))).toBe(
      false
    );
    expect(
      isAfterOrEqual(
        new Date("Wed Jun 22 2022 15:42:50 GMT-0700 (Pacific Daylight Time)"),
        "2023-01-01"
      )
    ).toBe(false);
  });

  it("returns false if the value is not strictly equal to the date (string input)", () => {
    expect(isAfterOrEqual("2022-01-01", "2022-01-02")).toBe(false);
  });

  it("returns false if the value is not strictly equal to the date (Date object input)", () => {
    expect(isAfterOrEqual(new Date("2022-01-01"), new Date("2022-01-02"))).toBe(
      false
    );
  });

  it("throws an error for invalid date formats (string input)", () => {
    expect(isAfterOrEqual("invalid-date", "2022-01-01")).toBe(false);
    expect(isAfterOrEqual("2022-01-01", "invalid-date")).toBe(false);
    expect(isAfterOrEqual("invalid-date", "invalid-date")).toBe(false);
  });

  it("throws an error for invalid date formats (Date object input)", () => {
    expect(isAfterOrEqual("invalid-date", new Date("2022-01-01"))).toBe(false);
    expect(isAfterOrEqual(new Date("2022-01-01"), "invalid-date")).toBe(false);
    expect(isAfterOrEqual("invalid-date", "invalid-date")).toBe(false);
  });

  it("should be able to use another field as the comparison date", async () => {
    await setLocales(en);

    const data = {
      startAt: "2023-10-21",
      finishAt: "2023-10-21",
    };
    const rules = {
      finishAt: "after_or_equal:startAt",
    };

    const result = await validate(data, rules);
    expect(result.isValid).toBe(true);
  });
});
