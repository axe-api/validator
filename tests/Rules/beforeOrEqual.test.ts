import { describe, expect } from "@jest/globals";
import beforeOrEqual from "../../src/Rules/beforeOrEqual";

describe("beforeOrEqual() ", () => {
  it("should return true for null or undefined values", () => {
    expect(beforeOrEqual(null, new Date())).toBe(true);
    expect(beforeOrEqual(undefined, new Date())).toBe(true);
  });

  it("should return true if the value is before or equal to the date", () => {
    const date = new Date("2023-01-01");

    expect(beforeOrEqual(new Date("2022-01-01"), date)).toBe(true);
    expect(beforeOrEqual(new Date("2023-01-01"), date)).toBe(true);
    expect(beforeOrEqual("2023-01-01", "2023-01-01")).toBe(true);
    expect(beforeOrEqual("2020-01-01", "2023-01-01")).toBe(true);
  });

  it("should return false if the value is after the date", () => {
    const date = new Date("2023-01-01");

    expect(beforeOrEqual(new Date("2024-01-01"), date)).toBe(false);
    expect(beforeOrEqual("2023-01-02", date)).toBe(false);
  });

  it("should return false for invalid value or date types", () => {
    expect(beforeOrEqual("invalidValue", new Date())).toBe(false);
    expect(beforeOrEqual(new Date(), "invalidDate")).toBe(false);
  });
});
