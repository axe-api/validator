import { describe, expect, it } from "vitest";
import { isHex } from "../../index";

describe("isHex() ", () => {
  it("should return true for valid hexadecimal strings", () => {
    expect(isHex("1aF")).toBe(true);
    expect(isHex("1234567890ABCDEF")).toBe(true);
    expect(isHex(123)).toBe(true);
  });

  it("should return false for invalid hexadecimal strings", () => {
    expect(isHex("123xyz")).toBe(false);
    expect(isHex("0xg")).toBe(false);
    expect(isHex("invalid string")).toBe(false);
    expect(isHex(true)).toBe(false);
  });

  it("should return false for null or undefined values", () => {
    expect(isHex(null)).toBe(false);
    expect(isHex(undefined)).toBe(false);
  });
});
