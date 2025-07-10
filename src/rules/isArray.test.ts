import { describe, expect, it } from "vitest";
import isArray from "./isArray";

describe("isArray() ", () => {
  it("should return true for an empty array", () => {
    expect(isArray([])).toBe(true);
    expect(isArray([1, 2, 3])).toBe(true);
  });

  it("should return false for non-arrays", () => {
    expect(isArray("not an array")).toBe(false);
    expect(isArray(42)).toBe(false);
    expect(isArray({ key: "value" })).toBe(false);
    expect(isArray(null)).toBe(false);
    expect(isArray(undefined)).toBe(false);
    expect(isArray(true)).toBe(false);
    expect(isArray(false)).toBe(false);
    expect(isArray(() => {})).toBe(false);
    expect(isArray(new Map())).toBe(false);
    expect(isArray(new Set())).toBe(false);
  });
});
