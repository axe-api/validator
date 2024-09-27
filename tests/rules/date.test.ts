import { describe, expect, test } from "vitest";
import { isDate } from "../../index";

describe("isDate() ", () => {
  test("should return TRUE for valid dates", () => {
    expect(isDate("2023-01-01")).toBe(true);
    expect(isDate("2023-01-15")).toBe(true);
    expect(isDate("2023-01-31")).toBe(true);
    expect(isDate("2023-31-01", "yyyy-dd-MM")).toBe(true);
    expect(isDate("2023.31.01", "yyyy.dd.MM")).toBe(true);
    expect(isDate("2012-05-28 10:21:15", "yyyy-MM-dd HH:mm:ss")).toBe(true);
    expect(isDate("2023 January 15", "yyyy MMMM dd")).toBe(true);
    expect(isDate("2023 Jan 15", "yyyy MMM dd")).toBe(true);
  });

  test("should return FALSE for invalid dates", () => {
    expect(isDate("2023-01-34")).toBe(false);
    expect(isDate("2023-02-31")).toBe(false);
    expect(isDate("02-31-2023")).toBe(false);
    expect(isDate("2023-31-01", "yyyy-MM-dd")).toBe(false);
    expect(isDate("2023-31-01", "yyyy.dd.MM")).toBe(false);
  });
});
