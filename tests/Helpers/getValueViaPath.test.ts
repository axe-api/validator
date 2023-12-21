import { describe, expect, it } from "vitest";
import { getValueViaPath } from "../../src/Helpers";

describe("getValueViaPath() function", () => {
  const data = {
    user: {
      role: {
        title: "Title",
      },
    },
    numbers: [1, 2, 3],
    emptyObject: {},
    nullValue: null,
  };

  it("should return the correct value for a valid path", () => {
    expect(getValueViaPath(data, "user.role.title")).toBe("Title");
    expect(getValueViaPath(data, "numbers.1")).toBe(2);
  });

  it("should return undefined for an invalid path", () => {
    expect(getValueViaPath(data, "user.role.invalidKey")).toBeUndefined();
    expect(getValueViaPath(data, "nonexistent.path")).toBeUndefined();
  });

  it("should return undefined for invalid data or null value", () => {
    expect(getValueViaPath(undefined, "user.role.title")).toBeUndefined();
    expect(getValueViaPath(null, "user.role.title")).toBeUndefined();
  });

  it("should return undefined for null or undefined in nested data", () => {
    expect(getValueViaPath(data, "nullValue")).toBeNull();
    expect(getValueViaPath(data, "emptyObject.someKey")).toBeUndefined();
  });

  it("should handle arrays in the path correctly", () => {
    expect(getValueViaPath(data, "numbers.0")).toBe(1);
    expect(getValueViaPath(data, "numbers.3")).toBeUndefined();
  });

  it("should return undefined for non-object values in the path", () => {
    expect(getValueViaPath(data, "user.role.title.someKey")).toBeUndefined();
    expect(getValueViaPath(data, "numbers.0.someKey")).toBeUndefined();
  });
});
