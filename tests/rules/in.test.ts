import { describe, expect, it } from "vitest";
import { isIn } from "../../index";

const LIST = ["a", "b", "c"];

describe("isIn() ", () => {
  it("should return FALSE for null or undefined values", () => {
    expect(isIn(null, LIST)).toBe(false);
    expect(isIn(undefined, LIST)).toBe(false);
  });

  it("should return true if value is in the list", () => {
    expect(isIn("a", LIST)).toBe(true);
    expect(isIn(["a", "b"], LIST)).toBe(true);
  });

  it("should return false if value is not in the list", () => {
    expect(isIn("d", LIST)).toBe(false);
    expect(isIn(["a", "d"], LIST)).toBe(false);
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

  it("should be able to parse string values", async () => {
    expect(isIn("A", "A,B,B")).toBe(true);
    expect(isIn("B", "A,B,C")).toBe(true);
    expect(isIn("C", "A,B,C")).toBe(true);
    expect(isIn("D", "A,B,C")).toBe(false);

    expect(isIn("a", ["a", "b", "c"])).toBe(true);
    expect(isIn("b", ["a", "b", "c"])).toBe(true);
    expect(isIn("c", ["a", "b", "c"])).toBe(true);
    expect(isIn("d", ["a", "b", "c"])).toBe(false);
  });

  it("should be able to work with spread-string options", async () => {
    expect(isIn("A", ...["A,B,B"])).toBe(true);
    expect(isIn("A", ...["A", "B", "C"])).toBe(true);
  });
});
