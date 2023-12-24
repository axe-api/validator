import { describe, expect, it } from "vitest";
import isAccepted from "../../src/rules/isAccepted";

describe("isAccepted() ", () => {
  it("should return true for valid values", () => {
    expect(isAccepted("yes")).toBe(true);
    expect(isAccepted("on")).toBe(true);
    expect(isAccepted(1)).toBe(true);
    expect(isAccepted(true)).toBe(true);
  });

  it("should return false for invalid values", () => {
    expect(isAccepted("no")).toBe(false);
    expect(isAccepted("off")).toBe(false);
    expect(isAccepted(0)).toBe(false);
    expect(isAccepted(false)).toBe(false);
    expect(isAccepted(null)).toBe(false);
    expect(isAccepted(undefined)).toBe(false);
    expect(isAccepted("")).toBe(false);
    expect(isAccepted({})).toBe(false);
    expect(isAccepted([])).toBe(false);
    expect(isAccepted(new Error())).toBe(false);
  });
});
