import { describe, expect, test } from "vitest";
import { isBetween } from "../../index";

describe("isBetween() ", () => {
  test("string with valid length", () => {
    expect(isBetween("Hello", 1, 10)).toBe(true);
  });

  test("string with invalid length", () => {
    expect(isBetween("Hello", 1, 3)).toBe(false);
  });

  test("number with valid value", () => {
    expect(isBetween(5, 1, 10)).toBe(true);
    expect(isBetween(5.5, 1, 10)).toBe(true);
  });

  test("number with invalid value", () => {
    expect(isBetween(5, 10, 20)).toBe(false);
  });

  test("null value", () => {
    expect(isBetween(null, 1, 10)).toBe(true);
  });

  test("undefined value", () => {
    expect(isBetween(undefined, 1, 10)).toBe(true);
  });

  test("unacceptable values should return false", () => {
    expect(isBetween({}, 1, 10)).toBe(false);
    expect(isBetween(new Error(), 1, 10)).toBe(false);
    expect(isBetween(true, 1, 10)).toBe(false);
    expect(isBetween(false, 1, 10)).toBe(false);
  });
});
