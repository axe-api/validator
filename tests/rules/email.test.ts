import { describe, expect, test } from "vitest";
import { isEmail } from "../../index";

const positiveList = [
  "test@example.com",
  "user@mail.co",
  "johndoe@gmail.com.uk",
  "johndoe@gmail.com.au",
  "mike.erickson@ru.codedungeon.ru",
];

const negativeList = [
  null,
  undefined,
  "",
  " ",
  "invalid-email",
  "user@",
  ".wooly@example.com",
  "özgür@ışıklı.com",
  123,
  { key: "value" },
  "johndoe.gmail.com",
];

describe("isEmail() ", () => {
  test.each(positiveList)("should return TRUE for the %s value", (value) => {
    expect(isEmail(value)).toBe(true);
  });

  test.each(negativeList)("should return FALSE for the %s value", (value) => {
    expect(isEmail(value)).toBe(false);
  });
});
