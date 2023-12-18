import { describe, expect, it } from "@jest/globals";
import accepted from "../../src/Rules/accepted";

describe("accepted() ", () => {
  it("should return true for valid values", () => {
    expect(accepted("yes")).toBe(true);
    expect(accepted("on")).toBe(true);
    expect(accepted(1)).toBe(true);
    expect(accepted(true)).toBe(true);
  });

  it("should return false for invalid values", () => {
    expect(accepted("no")).toBe(false);
    expect(accepted("off")).toBe(false);
    expect(accepted(0)).toBe(false);
    expect(accepted(false)).toBe(false);
    expect(accepted(null)).toBe(false);
    expect(accepted(undefined)).toBe(false);
    expect(accepted("")).toBe(false);
    expect(accepted({})).toBe(false);
    expect(accepted([])).toBe(false);
    expect(accepted(new Error())).toBe(false);
  });
});
