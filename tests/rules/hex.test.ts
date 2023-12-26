import { describe, expect, test } from "vitest";
import { isHex } from "../../index";

const positiveList = [
  "1aF",
  "1234567890ABCDEF",
  123,
  "54759eb3c090d83494e2d804",
  "0",
  0,
  "a",
];

const negativeList = [
  "4d4b8z",
  "123xyz",
  "0xg",
  "invalid string",
  true,
  false,
  null,
  undefined,
  "",
];

describe("isHex() ", () => {
  test.each(positiveList)("should return TRUE for the '%s' value", (value) => {
    expect(isHex(value)).toBe(true);
  });

  test.each(negativeList)("should return FALSE for the '%s' value", (value) => {
    expect(isHex(value)).toBe(false);
  });
});
