import { describe, expect, it } from "vitest";
import { isNotIn } from "../../index";

describe("isNotIn() ", () => {
  it("should return false for null or undefined values", () => {
    expect(isNotIn(null, ["a", "b", "c"])).toBe(false);
    expect(isNotIn(undefined, ["a", "b", "c"])).toBe(false);
  });

  it("should return false if value is in the list", () => {
    expect(isNotIn("a", ["a", "b", "c"])).toBe(false);
    expect(isNotIn(["a", "b"], ["a", "b", "c"])).toBe(false);
    expect(isNotIn(["a", "d"], ["a", "b", "c"])).toBe(false);
  });

  it("should return true if value is not in the list", () => {
    expect(isNotIn("d", ["a", "b", "c"])).toBe(true);
  });

  it("should handle numeric values correctly", () => {
    expect(isNotIn(42, ["42", "55", "10"])).toBe(false);
    expect(isNotIn([42, 55], ["42", "55", "10"])).toBe(false);
    expect(isNotIn(7, ["42", "55", "10"])).toBe(true);
  });

  it("should handle mixed types correctly", () => {
    expect(isNotIn("1", ["1", 2, "3"])).toBe(false);
    expect(isNotIn([1, "2"], ["1", 2, "3"])).toBe(false);
    expect(isNotIn("4", [1, "2", 3])).toBe(true);
  });

  it("should return false for empty list", () => {
    expect(isNotIn("a", [])).toBe(true);
    expect(isNotIn(["a", "b"], [])).toBe(true);
  });

  it("should handle case sensitivity correctly", () => {
    expect(isNotIn("A", ["a", "b", "c"])).toBe(true);
    expect(isNotIn("A", ["A", "B", "C"])).toBe(false);
  });

  it("should be able to parse string values", async () => {
    expect(isNotIn("A", "a,b,c")).toBe(true);
    expect(isNotIn("A", "A,B,C")).toBe(false);
  });
});
