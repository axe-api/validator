import { describe, expect, it } from "vitest";
import afterOrEqual from "../../src/Rules/afterOrEqual";

describe("afterOrEqual() ", () => {
  it("returns true if the value is after or equal to the date (string input)", () => {
    expect(afterOrEqual("2023-01-01", "2022-01-01")).toBe(true);
    expect(
      afterOrEqual(
        "Wed Jun 22 2022 15:42:50 GMT-0700 (Pacific Daylight Time)",
        "2022-01-01"
      )
    ).toBe(true);
    expect(afterOrEqual("2022-01-01", "2022-01-01")).toBe(true);
  });

  it("returns true if the value is after or equal to the date (Date object input)", () => {
    expect(afterOrEqual(new Date("2023-01-01"), new Date("2022-01-01"))).toBe(
      true
    );
    expect(
      afterOrEqual(
        new Date("Wed Jun 22 2022 15:42:50 GMT-0700 (Pacific Daylight Time)"),
        "2022-01-01"
      )
    ).toBe(true);
    expect(afterOrEqual(new Date("2022-01-01"), new Date("2022-01-01"))).toBe(
      true
    );
  });

  it("returns false if the value is before the date (string input)", () => {
    expect(afterOrEqual("2022-01-01", "2023-01-01")).toBe(false);
    expect(
      afterOrEqual(
        "Wed Jun 22 2022 15:42:50 GMT-0700 (Pacific Daylight Time)",
        "2023-01-01"
      )
    ).toBe(false);
  });

  it("returns false if the value is before the date (Date object input)", () => {
    expect(afterOrEqual(new Date("2022-01-01"), new Date("2023-01-01"))).toBe(
      false
    );
    expect(
      afterOrEqual(
        new Date("Wed Jun 22 2022 15:42:50 GMT-0700 (Pacific Daylight Time)"),
        "2023-01-01"
      )
    ).toBe(false);
  });

  it("returns false if the value is not strictly equal to the date (string input)", () => {
    expect(afterOrEqual("2022-01-01", "2022-01-02")).toBe(false);
  });

  it("returns false if the value is not strictly equal to the date (Date object input)", () => {
    expect(afterOrEqual(new Date("2022-01-01"), new Date("2022-01-02"))).toBe(
      false
    );
  });

  it("throws an error for invalid date formats (string input)", () => {
    expect(afterOrEqual("invalid-date", "2022-01-01")).toBe(false);
    expect(afterOrEqual("2022-01-01", "invalid-date")).toBe(false);
    expect(afterOrEqual("invalid-date", "invalid-date")).toBe(false);
  });

  it("throws an error for invalid date formats (Date object input)", () => {
    expect(afterOrEqual("invalid-date", new Date("2022-01-01"))).toBe(false);
    expect(afterOrEqual(new Date("2022-01-01"), "invalid-date")).toBe(false);
    expect(afterOrEqual("invalid-date", "invalid-date")).toBe(false);
  });
});
