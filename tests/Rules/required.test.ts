import { describe, expect, it } from "vitest";
import required from "../../src/rules/required";

describe("required() ", () => {
  it("should return true for non-null, non-undefined, and non-empty string values", () => {
    expect(required(42)).toBe(true);
    expect(required("hello")).toBe(true);
    expect(required(true)).toBe(true);
    expect(required(false)).toBe(true);
    expect(required([])).toBe(true);
    expect(required({ key: "value" })).toBe(true);
    expect(required(0)).toBe(true);
  });

  it("should return false for null, undefined, and empty string values", () => {
    expect(required(null)).toBe(false);
    expect(required(undefined)).toBe(false);
    expect(required("")).toBe(false);
  });

  it("should return true for zero and other truthy values", () => {
    expect(required(0)).toBe(true);
    expect(required("0")).toBe(true);
    expect(required(true)).toBe(true);
  });
});
