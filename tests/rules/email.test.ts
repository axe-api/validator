import { describe, expect, it } from "vitest";
import { isEmail } from "../../index";

describe("isEmail() ", () => {
  it("should return true for valid email addresses", () => {
    expect(isEmail("test@example.com")).toBe(true);
    expect(isEmail("user@mail.co")).toBe(true);
  });

  it("should return true for null or undefined values", () => {
    expect(isEmail(null)).toBe(true);
    expect(isEmail(undefined)).toBe(true);
    expect(isEmail("")).toBe(true);
  });

  it("should return false for invalid email addresses", () => {
    expect(isEmail("invalid-email")).toBe(false);
    expect(isEmail("user@")).toBe(false);
    expect(isEmail(".wooly@example.com")).toBe(false);
    expect(isEmail("özgür@ışıklı.com")).toBe(false);
  });

  it("should return false for non-string values", () => {
    expect(isEmail(123)).toBe(false);
    expect(isEmail({ key: "value" })).toBe(false);
  });
});
