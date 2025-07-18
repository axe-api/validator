import { describe, expect, it } from "vitest";
import isBeforeOrEqual from "./isBeforeOrEqual";
import { setLocales } from "../Locale";
import { en } from "../i18n";
import { validate } from "../helpers/validate";

describe("isBeforeOrEqual() ", () => {
  it("should return true if the value is before or equal to the date", () => {
    const date = new Date("2023-01-01");

    expect(isBeforeOrEqual(new Date("2022-01-01"), date)).toBe(true);
    expect(isBeforeOrEqual(new Date("2023-01-01"), date)).toBe(true);
    expect(isBeforeOrEqual("2023-01-01", "2023-01-01")).toBe(true);
    expect(isBeforeOrEqual("2020-01-01", "2023-01-01")).toBe(true);
  });

  it("should return false if the value is after the date", () => {
    const date = new Date("2023-01-01");

    expect(isBeforeOrEqual(new Date("2024-01-01"), date)).toBe(false);
    expect(isBeforeOrEqual("2023-01-02", date)).toBe(false);
  });

  it("should return false for invalid value or date types", () => {
    expect(isBeforeOrEqual("invalidValue", new Date())).toBe(false);
    expect(isBeforeOrEqual(new Date(), "invalidDate")).toBe(false);
  });

  it("should be able to use another field as the comparison date", async () => {
    setLocales(en);

    const data = {
      startAt: "2023-01-01",
      finishAt: "2023-01-01",
    };
    const rules = {
      startAt: "before_or_equal:finishAt",
    };

    const result = await validate(data, rules);
    expect(result.isValid).toBe(true);
  });
});
