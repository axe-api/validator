import { describe, expect, it } from "vitest";
import { isIn } from "../../index";

describe("isIn() ", () => {
  it("should return true for null or undefined values", () => {
    expect(isIn(null, ["a", "b", "c"])).toBe(true);
    expect(isIn(undefined, ["a", "b", "c"])).toBe(true);
  });

  it("should return true if value is in the list", () => {
    expect(isIn("a", ["a", "b", "c"])).toBe(true);
    expect(isIn(["a", "b"], ["a", "b", "c"])).toBe(true);
  });

  it("should return false if value is not in the list", () => {
    expect(isIn("d", ["a", "b", "c"])).toBe(false);
    expect(isIn(["a", "d"], ["a", "b", "c"])).toBe(false);
  });

  it("should handle numeric values correctly", () => {
    expect(isIn(42, ["42", "55", "10"])).toBe(true);
    expect(isIn([42, 55], ["42", "55", "10"])).toBe(true);
    expect(isIn(7, ["42", "55", "10"])).toBe(false);
  });

  it("should handle mixed types correctly", () => {
    expect(isIn("1", ["1", 2, "3"])).toBe(true);
    expect(isIn([1, "2"], ["1", 2, "3"])).toBe(true);
    expect(isIn("4", [1, "2", 3])).toBe(false);
  });

  it("should return false for empty list", () => {
    expect(isIn("a", [])).toBe(false);
    expect(isIn(["a", "b"], [])).toBe(false);
  });

  it("should handle case sensitivity correctly", () => {
    expect(isIn("A", ["a", "b", "c"])).toBe(false);
    expect(isIn("A", ["A", "B", "C"])).toBe(true);
  });
});
