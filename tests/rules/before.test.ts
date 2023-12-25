import { describe, expect, it } from "vitest";
import { isBefore, setLocales, validate } from "../../index";
import en from "../../src/i18n/en.json";

describe("isBefore() ", () => {
  it("should return true if the value is before the given date", () => {
    expect(isBefore("2023-01-01", "2023-01-02")).toBe(true);
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

  it("should be able to use another field as the comparison date", async () => {
    await setLocales(en);

    const data = {
      startAt: "2023-01-01",
      finishAt: "2023-01-31",
    };
    const rules = {
      startAt: "before:finishAt",
    };

    const result = await validate(data, rules);
    expect(result.isValid).toBe(true);
  });
});
