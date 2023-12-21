import { describe, expect, it } from "vitest";
import string from "../../src/Rules/string";

describe("string() ", () => {
  it("should return the correct value for the data type", () => {
    expect(string("Hello")).toBe(true);
    expect(string(null)).toBe(true);
    expect(string(undefined)).toBe(true);
    expect(string(123)).toBe(false);
    expect(string(123.12)).toBe(false);
    expect(string(true)).toBe(false);
    expect(string({ key: "value" })).toBe(false);
    expect(string("")).toBe(true);
    expect(string(new Error())).toBe(false);
  });
});
