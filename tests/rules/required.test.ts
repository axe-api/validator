import { describe, expect, it } from "vitest";
import { isRequired } from "../../index";

describe("isRequired() ", () => {
  it("should return true for non-null, non-undefined, and non-empty string values", async () => {
    expect(await isRequired(42)).toBe(true);
    expect(await isRequired("hello")).toBe(true);
    expect(await isRequired(true)).toBe(true);
    expect(await isRequired(false)).toBe(true);
    expect(await isRequired([])).toBe(true);
    expect(await isRequired({ key: "value" })).toBe(true);
    expect(await isRequired(0)).toBe(true);
  });

  it("should return false for null, undefined, and empty string values", async () => {
    expect(await isRequired(null)).toBe(false);
    expect(await isRequired(undefined)).toBe(false);
    expect(await isRequired("")).toBe(false);
  });

  it("should return true for zero and other truthy values", async () => {
    expect(await isRequired(0)).toBe(true);
    expect(await isRequired("0")).toBe(true);
    expect(await isRequired(true)).toBe(true);
  });
});
