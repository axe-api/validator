import { describe, expect, it } from "vitest";
import isString from "./isString";

describe("isString() ", () => {
  it("should return the correct value for the data type", () => {
    expect(isString("Hello")).toBe(true);
    expect(isString("")).toBe(true);
    expect(isString(null)).toBe(false);
    expect(isString(undefined)).toBe(false);
    expect(isString(123)).toBe(false);
    expect(isString(123.12)).toBe(false);
    expect(isString(true)).toBe(false);
    expect(isString({ key: "value" })).toBe(false);
    expect(isString(new Error())).toBe(false);
  });
});
