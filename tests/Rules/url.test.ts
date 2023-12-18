import { describe, expect, it } from "@jest/globals";
import url from "../../src/Rules/url";

describe("url() ", () => {
  it("should return true for null and undefined", () => {
    expect(url(null)).toBe(true);
    expect(url(undefined)).toBe(true);
  });

  it("should return true for valid URLs", () => {
    expect(url("https://example.com")).toBe(true);
    expect(url("http://example.com/path")).toBe(true);
    expect(url("ftp://example.com")).toBe(true);
  });

  it("should return false for invalid URLs", () => {
    expect(url("invalid-url")).toBe(false);
  });

  it("should handle various data types", () => {
    expect(url(123)).toBe(false);
    expect(url({ key: "value" })).toBe(false);
  });

  it("should return false for empty strings", () => {
    expect(url("")).toBe(false);
  });

  it("should handle special characters in URLs", () => {
    expect(url("https://example.com/#section")).toBe(true);
    expect(url("https://example.com/?param=value")).toBe(true);
  });
});
