import { describe, expect, it } from "@jest/globals";
import notIn from "../../src/Rules/notIn";

describe("notIn() ", () => {
  it("should return true for null or undefined values", () => {
    expect(notIn(null, ["a", "b", "c"])).toBe(true);
    expect(notIn(undefined, ["a", "b", "c"])).toBe(true);
  });

  it("should return false if value is in the list", () => {
    expect(notIn("a", ["a", "b", "c"])).toBe(false);
    expect(notIn(["a", "b"], ["a", "b", "c"])).toBe(false);
    expect(notIn(["a", "d"], ["a", "b", "c"])).toBe(false);
  });

  it("should return true if value is not in the list", () => {
    expect(notIn("d", ["a", "b", "c"])).toBe(true);
  });

  it("should handle numeric values correctly", () => {
    expect(notIn(42, ["42", "55", "10"])).toBe(false);
    expect(notIn([42, 55], ["42", "55", "10"])).toBe(false);
    expect(notIn(7, ["42", "55", "10"])).toBe(true);
  });

  it("should handle mixed types correctly", () => {
    expect(notIn("1", ["1", 2, "3"])).toBe(false);
    expect(notIn([1, "2"], ["1", 2, "3"])).toBe(false);
    expect(notIn("4", [1, "2", 3])).toBe(true);
  });

  it("should return false for empty list", () => {
    expect(notIn("a", [])).toBe(true);
    expect(notIn(["a", "b"], [])).toBe(true);
  });

  it("should handle case sensitivity correctly", () => {
    expect(notIn("A", ["a", "b", "c"])).toBe(true);
    expect(notIn("A", ["A", "B", "C"])).toBe(false);
  });
});
