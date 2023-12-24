import { describe, expect, it } from "vitest";
import { isBoolean } from "../../index";

describe("isBoolean() ", () => {
  it("should return true for valid boolean values", () => {
    expect(isBoolean(true)).toBe(true);
    expect(isBoolean(false)).toBe(true);
    expect(isBoolean(0)).toBe(true);
    expect(isBoolean(1)).toBe(true);
    expect(isBoolean("true")).toBe(true);
    expect(isBoolean("false")).toBe(true);
    expect(isBoolean("0")).toBe(true);
    expect(isBoolean("1")).toBe(true);
    expect(isBoolean(null)).toBe(true); // Null is considered valid
    expect(isBoolean(undefined)).toBe(true); // Undefined is considered valid
  });

  it("should return false for invalid boolean values", () => {
    expect(isBoolean("abc")).toBe(false);
    expect(isBoolean({})).toBe(false);
    expect(isBoolean([])).toBe(false);
    expect(isBoolean(42)).toBe(false);
    expect(isBoolean("")).toBe(false);
    expect(isBoolean(" ")).toBe(false);
    expect(isBoolean(new Error())).toBe(false);
  });
});
