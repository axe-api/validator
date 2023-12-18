import { describe, expect, it } from "@jest/globals";
import email from "../../src/Rules/email";

describe("email() ", () => {
  it("should return true for valid email addresses", () => {
    expect(email("test@example.com")).toBe(true);
    expect(email("user@mail.co")).toBe(true);
  });

  it("should return true for null or undefined values", () => {
    expect(email(null)).toBe(true);
    expect(email(undefined)).toBe(true);
    expect(email("")).toBe(true);
  });

  it("should return false for invalid email addresses", () => {
    expect(email("invalid-email")).toBe(false);
    expect(email("user@")).toBe(false);
    expect(email(".wooly@example.com")).toBe(false);
    expect(email("özgür@ışıklı.com")).toBe(false);
  });

  it("should return false for non-string values", () => {
    expect(email(123)).toBe(false);
    expect(email({ key: "value" })).toBe(false);
  });
});
