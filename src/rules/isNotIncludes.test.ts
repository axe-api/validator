import { describe, expect, it } from "vitest";
import isNotIncludes from "./isNotIncludes";

describe("isNotIncludes() ", () => {
  it("should return false for null or undefined values", () => {
    expect(isNotIncludes(null, "a,b,c")).toBe(true);
    expect(isNotIncludes(undefined, "a,b,c")).toBe(true);
  });

  it("should return false if value is in the list", () => {
    expect(isNotIncludes("a", "a,b,c")).toBe(false);
  });

  it("should return true if value is not in the list", () => {
    expect(isNotIncludes("d", "a,b,c")).toBe(true);
  });

  it("should handle numeric values correctly", () => {
    expect(isNotIncludes(42, "42,55,10")).toBe(false);
    expect(isNotIncludes(7, "42,55,10")).toBe(true);
  });

  it("should handle case sensitivity correctly", () => {
    expect(isNotIncludes("A", "a,b,c")).toBe(false);
  });
});
