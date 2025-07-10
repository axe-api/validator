import { describe, expect, it } from "vitest";
import isIncludes from "./isIncludes";

const LIST = ["a", "b", "c"];

describe("isIncludes() ", () => {
  it("should return FALSE for null or undefined values", () => {
    expect(isIncludes(null, LIST)).toBe(false);
    expect(isIncludes(undefined, LIST)).toBe(false);
    expect(isIncludes({}, LIST)).toBe(false);
    expect(isIncludes(new Date(), LIST)).toBe(false);
    expect(isIncludes("a", "")).toBe(false);
  });

  it("should return true if value is in the list", () => {
    expect(isIncludes("a", "a,b,c")).toBe(true);
    expect(isIncludes("c", "a,b,c")).toBe(true);
    expect(isIncludes("b", LIST)).toBe(true);
    expect(isIncludes("c", LIST)).toBe(true);
  });

  it("should return false if value is not in the list", () => {
    expect(isIncludes("d", LIST)).toBe(false);
  });

  it("should handle numeric values correctly", () => {
    expect(isIncludes(42, ["42", "55", "10"])).toBe(true);
    expect(isIncludes(55, ["42", "55", "10"])).toBe(true);
    expect(isIncludes(10, ["42", "55", "10"])).toBe(true);
    expect(isIncludes(7, ["42", "55", "10"])).toBe(false);
  });

  it("should handle case sensitivity correctly", () => {
    expect(isIncludes("A", "a,b,c")).toBe(true);
    expect(isIncludes("A", "A,B,C")).toBe(true);
  });
});
