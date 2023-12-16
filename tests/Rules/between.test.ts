import { describe, expect } from "@jest/globals";
import between from "../../src/Rules/between";

describe("between() ", () => {
  test("string with valid length", () => {
    expect(between("Hello", 1, 10)).toBe(true);
  });

  test("string with invalid length", () => {
    expect(between("Hello", 1, 3)).toBe(false);
  });

  test("number with valid value", () => {
    expect(between(5, 1, 10)).toBe(true);
    expect(between(5.5, 1, 10)).toBe(true);
  });

  test("number with invalid value", () => {
    expect(between(5, 10, 20)).toBe(false);
  });

  test("null value", () => {
    expect(between(null, 1, 10)).toBe(true);
  });

  test("undefined value", () => {
    expect(between(undefined, 1, 10)).toBe(true);
  });

  test("unacceptable values should return false", () => {
    expect(between({}, 1, 10)).toBe(false);
    expect(between(new Error(), 1, 10)).toBe(false);
    expect(between(true, 1, 10)).toBe(false);
    expect(between(false, 1, 10)).toBe(false);
  });
});
