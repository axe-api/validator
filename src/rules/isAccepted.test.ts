import { describe, expect, test } from "vitest";
import isAccepted from "./isAccepted";

const positiveList = ["yes", "on", 1, "1", true];

const negativeList = ["10", "", "no", 0, false, {}, [], null, undefined];

describe("isAccepted() ", () => {
  test.each(positiveList)("should return TRUE for the %s value", (value) => {
    expect(isAccepted(value)).toBe(true);
  });

  test.each(negativeList)("should return FALSE for the %s value", (value) => {
    expect(isAccepted(value)).toBe(false);
  });
});
