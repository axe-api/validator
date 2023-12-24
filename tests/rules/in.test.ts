import { describe, expect, it } from "vitest";
import inFunction from "../../src/rules/in";

describe("in() ", () => {
  it("should return true for null or undefined values", () => {
    expect(inFunction(null, ["a", "b", "c"])).toBe(true);
    expect(inFunction(undefined, ["a", "b", "c"])).toBe(true);
  });

  it("should return true if value is in the list", () => {
    expect(inFunction("a", ["a", "b", "c"])).toBe(true);
    expect(inFunction(["a", "b"], ["a", "b", "c"])).toBe(true);
  });

  it("should return false if value is not in the list", () => {
    expect(inFunction("d", ["a", "b", "c"])).toBe(false);
    expect(inFunction(["a", "d"], ["a", "b", "c"])).toBe(false);
  });

  it("should handle numeric values correctly", () => {
    expect(inFunction(42, ["42", "55", "10"])).toBe(true);
    expect(inFunction([42, 55], ["42", "55", "10"])).toBe(true);
    expect(inFunction(7, ["42", "55", "10"])).toBe(false);
  });

  it("should handle mixed types correctly", () => {
    expect(inFunction("1", ["1", 2, "3"])).toBe(true);
    expect(inFunction([1, "2"], ["1", 2, "3"])).toBe(true);
    expect(inFunction("4", [1, "2", 3])).toBe(false);
  });

  it("should return false for empty list", () => {
    expect(inFunction("a", [])).toBe(false);
    expect(inFunction(["a", "b"], [])).toBe(false);
  });

  it("should handle case sensitivity correctly", () => {
    expect(inFunction("A", ["a", "b", "c"])).toBe(false);
    expect(inFunction("A", ["A", "B", "C"])).toBe(true);
  });
});
