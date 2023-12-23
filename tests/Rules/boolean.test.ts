import { describe, expect, it } from "vitest";
import boolean from "../../src/rules/boolean";

describe("boolean() ", () => {
  it("should return true for valid boolean values", () => {
    expect(boolean(true)).toBe(true);
    expect(boolean(false)).toBe(true);
    expect(boolean(0)).toBe(true);
    expect(boolean(1)).toBe(true);
    expect(boolean("true")).toBe(true);
    expect(boolean("false")).toBe(true);
    expect(boolean("0")).toBe(true);
    expect(boolean("1")).toBe(true);
    expect(boolean(null)).toBe(true); // Null is considered valid
    expect(boolean(undefined)).toBe(true); // Undefined is considered valid
  });

  it("should return false for invalid boolean values", () => {
    expect(boolean("abc")).toBe(false);
    expect(boolean({})).toBe(false);
    expect(boolean([])).toBe(false);
    expect(boolean(42)).toBe(false);
    expect(boolean("")).toBe(false);
    expect(boolean(" ")).toBe(false);
    expect(boolean(new Error())).toBe(false);
  });
});
