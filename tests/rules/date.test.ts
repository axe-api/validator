import { describe, expect, test } from "vitest";
import { isDate } from "../../index";

describe("isDate() ", () => {
  test("should return TRUE for valid dates", () => {
    expect(isDate("2023-01-01")).toBe(true);
    expect(isDate("2023-01-15")).toBe(true);
    expect(isDate("2023-01-31")).toBe(true);
    expect(isDate("2023-31-01", "YYYY-DD-MM")).toBe(true);
    expect(isDate("2023.31.01", "YYYY.DD.MM")).toBe(true);
    expect(isDate("2012-05-28 10:21:15", "YYYY-MM-DD HH:mm:ss")).toBe(true);
    expect(isDate("2023 January 15", "YYYY MMMM DD")).toBe(true);
    expect(isDate("2023 Jan 15", "YYYY MMM DD")).toBe(true);
  });

  test("should return FALSE for invalid dates", () => {
    expect(isDate("2023-01-34")).toBe(false);
    expect(isDate("2023-02-31")).toBe(false);
    expect(isDate("02-31-2023")).toBe(false);
    expect(isDate("2023-31-01", "YYYY-MM-DD")).toBe(false);
    expect(isDate("2023-31-01", "YYYY.DD.MM")).toBe(false);
  });
});
