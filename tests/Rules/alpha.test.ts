import { describe, expect, it } from "@jest/globals";
import alpha from "../../src/Rules/alpha";

describe("alpha() ", () => {
  it("returns true for valid alphabetic strings", () => {
    expect(alpha("abc")).toBe(true);
    expect(alpha("XYZ")).toBe(true);
    expect(alpha("AbCdEf")).toBe(true);
  });

  it("returns false for non-alphabetic strings", () => {
    expect(alpha("123")).toBe(false);
    expect(alpha("abc123")).toBe(false);
    expect(alpha("Special!")).toBe(false);
    expect(alpha(123)).toBe(false); // Non-string input
  });

  it("returns true for null or undefined values", () => {
    expect(alpha(null)).toBe(true);
    expect(alpha(undefined)).toBe(true);
  });

  it("returns true for empty strings", () => {
    expect(alpha("")).toBe(true);
    expect(alpha(" ")).toBe(true);
  });
});
