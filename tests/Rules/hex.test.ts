import { describe, expect, it } from "vitest";
import hex from "../../src/Rules/hex";

describe("hex() ", () => {
  it("should return true for valid hexadecimal strings", () => {
    expect(hex("1aF")).toBe(true);
    expect(hex("1234567890ABCDEF")).toBe(true);
    expect(hex(123)).toBe(true);
  });

  it("should return false for invalid hexadecimal strings", () => {
    expect(hex("123xyz")).toBe(false);
    expect(hex("0xg")).toBe(false);
    expect(hex("invalid string")).toBe(false);
    expect(hex(true)).toBe(false);
  });

  it("should return true for null or undefined values", () => {
    expect(hex(null)).toBe(true);
    expect(hex(undefined)).toBe(true);
  });
});
