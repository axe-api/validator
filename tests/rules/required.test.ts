import { describe, expect, it } from "vitest";
import { isRequired } from "../../index";

describe("isRequired() ", () => {
  it("should return true for non-null, non-undefined, and non-empty string values", () => {
    expect(isRequired(42)).toBe(true);
    expect(isRequired("hello")).toBe(true);
    expect(isRequired(true)).toBe(true);
    expect(isRequired(false)).toBe(true);
    expect(isRequired([])).toBe(true);
    expect(isRequired({ key: "value" })).toBe(true);
    expect(isRequired(0)).toBe(true);
    expect(isRequired(0)).toBe(true);
    expect(isRequired("0")).toBe(true);
    expect(isRequired(true)).toBe(true);
  });

  it("should return false for null, undefined, and empty string values", () => {
    expect(isRequired(null)).toBe(false);
    expect(isRequired(undefined)).toBe(false);
    expect(isRequired("")).toBe(false);
    expect(isRequired(" ")).toBe(false);
  });
});
