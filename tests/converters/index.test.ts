import { describe, expect, it, afterAll } from "vitest";
import {
  RULE_FUNCTION_MAPS,
  accepted,
  after,
  afterOrEqual,
  alpha,
  alphaDash,
  alphaNum,
  array,
  before,
  beforeOrEqual,
  between,
  boolean,
  confirmed,
  date,
  digits,
  digitsBetween,
  email,
  hex,
  inConverter,
  integer,
  max,
  min,
  notIn,
  numeric,
  required,
  size,
  string,
  url,
} from "../../index";

const RESULT_LIST: string[] = [];

describe("converters functions", () => {
  afterAll(() => {
    const ruleNames = Object.keys(RULE_FUNCTION_MAPS);
    const results = RESULT_LIST.map((item) => {
      const [name] = item.split(":");
      return name;
    });

    for (const rule of ruleNames) {
      expect(results.includes(rule), rule).toBe(true);
    }
  });

  it("accepted() should be able to convert to the correct pattern.", () => {
    const result = accepted();
    RESULT_LIST.push(result);
    expect(result).toBe("accepted");
  });

  it("after() should be able to convert to the correct pattern.", () => {
    const result = after("2023-10-21");
    RESULT_LIST.push(result);
    expect(result).toBe("after:2023-10-21");
  });

  it("afterOrEqual() should be able to convert to the correct pattern.", () => {
    const result = afterOrEqual("2023-10-21");
    RESULT_LIST.push(result);
    expect(result).toBe("after_or_equal:2023-10-21");
  });

  it("alpha() should be able to convert to the correct pattern.", () => {
    const result = alpha();
    RESULT_LIST.push(result);
    expect(result).toBe("alpha");
  });

  it("alphaDash() should be able to convert to the correct pattern.", () => {
    const result = alphaDash();
    RESULT_LIST.push(result);
    expect(result).toBe("alpha_dash");
  });

  it("alphaNum() should be able to convert to the correct pattern.", () => {
    const result = alphaNum();
    RESULT_LIST.push(result);
    expect(result).toBe("alpha_num");
  });

  it("array() should be able to convert to the correct pattern.", () => {
    const result = array();
    RESULT_LIST.push(result);
    expect(result).toBe("array");
  });

  it("before() should be able to convert to the correct pattern.", () => {
    const result = before("2023-10-21");
    RESULT_LIST.push(result);
    expect(result).toBe("before:2023-10-21");
  });

  it("beforeOrEqual() should be able to convert to the correct pattern.", () => {
    const result = beforeOrEqual("2023-10-21");
    RESULT_LIST.push(result);
    expect(result).toBe("before_or_equal:2023-10-21");
  });

  it("between() should be able to convert to the correct pattern.", () => {
    const result = between(5, 10);
    RESULT_LIST.push(result);
    expect(result).toBe("between:5,10");
  });

  it("boolean() should be able to convert to the correct pattern.", () => {
    const result = boolean();
    RESULT_LIST.push(result);
    expect(result).toBe("boolean");
  });

  it("confirmed() should be able to convert to the correct pattern.", () => {
    const result = confirmed();
    RESULT_LIST.push(result);
    expect(result).toBe("confirmed");
  });

  it("date() should be able to convert to the correct pattern.", () => {
    const result = date();
    RESULT_LIST.push(result);
    expect(result).toBe("date");
  });

  it("digits() should be able to convert to the correct pattern.", () => {
    const result = digits(4);
    RESULT_LIST.push(result);
    expect(result).toBe("digits:4");
  });

  it("digitsBetween() should be able to convert to the correct pattern.", () => {
    const result = digitsBetween(4, 6);
    RESULT_LIST.push(result);
    expect(result).toBe("digits_between:4,6");
  });

  it("email() should be able to convert to the correct pattern.", () => {
    const result = email();
    RESULT_LIST.push(result);
    expect(result).toBe("email");
  });

  it("hex() should be able to convert to the correct pattern.", () => {
    const result = hex();
    RESULT_LIST.push(result);
    expect(result).toBe("hex");
  });

  it("inConverter() should be able to convert to the correct pattern.", () => {
    const result = inConverter(["apple", "orange"]);
    RESULT_LIST.push(result);
    expect(result).toBe("in:apple,orange");
  });

  it("integer() should be able to convert to the correct pattern.", () => {
    const result = integer();
    RESULT_LIST.push(result);
    expect(result).toBe("integer");
  });

  it("max() should be able to convert to the correct pattern.", () => {
    const result = max(5);
    RESULT_LIST.push(result);
    expect(result).toBe("max:5");
  });

  it("min() should be able to convert to the correct pattern.", () => {
    const result = min(5);
    RESULT_LIST.push(result);
    expect(result).toBe("min:5");
  });

  it("notIn() should be able to convert to the correct pattern.", () => {
    const result = notIn(["apple", "orange"]);
    RESULT_LIST.push(result);
    expect(result).toBe("not_in:apple,orange");
  });

  it("numeric() should be able to convert to the correct pattern.", () => {
    const result = numeric();
    RESULT_LIST.push(result);
    expect(result).toBe("numeric");
  });

  it("required() should be able to convert to the correct pattern.", () => {
    const result = required();
    RESULT_LIST.push(result);
    expect(result).toBe("required");
  });

  it("size() should be able to convert to the correct pattern.", () => {
    const result = size(5);
    RESULT_LIST.push(result);
    expect(result).toBe("size:5");
  });

  it("string() should be able to convert to the correct pattern.", () => {
    const result = string();
    RESULT_LIST.push(result);
    expect(result).toBe("string");
  });

  it("url() should be able to convert to the correct pattern.", () => {
    const result = url();
    RESULT_LIST.push(result);
    expect(result).toBe("url");
  });
});
