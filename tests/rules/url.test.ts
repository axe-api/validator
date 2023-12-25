import { describe, expect, it } from "vitest";
import { isUrl } from "../../index";

describe("isUrl() ", () => {
  it("should return false for null and undefined", () => {
    expect(isUrl(null)).toBe(false);
    expect(isUrl(undefined)).toBe(false);
  });

  it("should return true for valid URLs", () => {
    expect(isUrl("https://example.com")).toBe(true);
    expect(isUrl("http://example.com/path")).toBe(true);
    expect(isUrl("ftp://example.com")).toBe(true);
  });

  it("should return false for invalid URLs", () => {
    expect(isUrl("invalid-url")).toBe(false);
  });

  it("should handle various data types", () => {
    expect(isUrl(123)).toBe(false);
    expect(isUrl({ key: "value" })).toBe(false);
  });

  it("should return false for empty strings", () => {
    expect(isUrl("")).toBe(false);
  });

  it("should handle special characters in URLs", () => {
    expect(isUrl("https://example.com/#section")).toBe(true);
    expect(isUrl("https://example.com/?param=value")).toBe(true);
  });
});
