import { describe, expect, it } from "vitest";
import isBoolean from "./isBoolean";

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
  });

  it("should return false for invalid boolean values", () => {
    expect(isBoolean("abc")).toBe(false);
    expect(isBoolean({})).toBe(false);
    expect(isBoolean([])).toBe(false);
    expect(isBoolean(42)).toBe(false);
    expect(isBoolean("")).toBe(false);
    expect(isBoolean(" ")).toBe(false);
    expect(isBoolean(new Error())).toBe(false);
    expect(isBoolean(null)).toBe(false);
    expect(isBoolean(undefined)).toBe(false);
  });
});
