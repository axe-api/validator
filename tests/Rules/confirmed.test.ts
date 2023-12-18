import { describe, expect, it } from "@jest/globals";
import confirmed from "../../src/Rules/confirmed";

const toContext = (value: any) => {
  return {
    data: {
      password: "123456",
      password_confirmed: value,
    },
    key: "password",
  };
};

describe("confirmed() ", () => {
  it("should return true for valid confirmed values", () => {
    expect(confirmed("123456", toContext("123456"))).toBe(true);
  });

  it("should return false for invalid confirmed values", () => {
    expect(confirmed("123456", toContext("12345678"))).toBe(false);
    expect(confirmed("123456", toContext(null))).toBe(false);
    expect(confirmed("123456", toContext(false))).toBe(false);
    expect(confirmed("123456", toContext({}))).toBe(false);
    expect(confirmed("123456", toContext(""))).toBe(false);
    expect(confirmed("123456", toContext(123456))).toBe(false);
  });
});
