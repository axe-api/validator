import { describe, expect, it } from "vitest";
import isAlpha from "./isAlpha";

describe("isAlpha() ", () => {
  it("returns true for valid alphabetic strings", () => {
    expect(isAlpha("abc")).toBe(true);
    expect(isAlpha("XYZ")).toBe(true);
    expect(isAlpha("AbCdEf")).toBe(true);
  });

  it("returns false for non-alphabetic strings", () => {
    expect(isAlpha("123")).toBe(false);
    expect(isAlpha("abc123")).toBe(false);
    expect(isAlpha("Special!")).toBe(false);
    expect(isAlpha(123)).toBe(false); // Non-string input
  });
});
