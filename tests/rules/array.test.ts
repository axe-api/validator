import { describe, expect, it } from "vitest";
import array from "../../src/rules/array";

describe("array() ", () => {
  it("should return true for an empty array", () => {
    expect(array([])).toBe(true);
  });

  it("should return true for a non-empty array", () => {
    expect(array([1, 2, 3])).toBe(true);
  });

  it("should return false for a string", () => {
    expect(array("not an array")).toBe(false);
  });

  it("should return false for a number", () => {
    expect(array(42)).toBe(false);
  });

  it("should return false for an object", () => {
    expect(array({ key: "value" })).toBe(false);
  });

  it("should return false for null", () => {
    expect(array(null)).toBe(false);
  });

  it("should return false for undefined", () => {
    expect(array(undefined)).toBe(false);
  });

  it("should return false for a boolean", () => {
    expect(array(true)).toBe(false);
    expect(array(false)).toBe(false);
  });

  it("should return false for a function", () => {
    expect(array(() => {})).toBe(false);
  });

  it("should return false for a Map", () => {
    expect(array(new Map())).toBe(false);
  });

  it("should return false for a Set", () => {
    expect(array(new Set())).toBe(false);
  });
});
