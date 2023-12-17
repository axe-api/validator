import { Translation } from "../Types";

const translations: Translation = {
  accepted: "The field must be accepted.",
  after: "The field must be after {0}.",
  after_or_equal: "The field must be equal or after {0}.",
  alpha: "The field field must contain only alphabetic characters.",
  alpha_dash:
    "The field field may only contain alpha-numeric characters, as well as dashes and underscores.",
  alpha_num: "The field field must be alphanumeric.",
  array: "The field field must be an array.",
  before: "The field must be before {0}.",
  before_or_equal: "The field must be equal or before {0}.",
  between: "The field field must be between {0} and {1}.",
  boolean: "The field field must be a boolean value.",
  confirmed: "The field confirmation does not match.",
  email: "The field format is invalid.",
  date: "The field is not a valid date format.",
  digits: "The field must be {0} digits.",
  digits_between: "The field field must be between {0} and {1} digits.",
  in: "The selected field is invalid.",
  integer: "The field must be an integer.",
  hex: "The field field should have hexadecimal format",
  min: "The field must be at least {0}.",
  max: "The field may not be greater than {0}.",
  not_in: "The selected field is invalid.",
  numeric: "The field must be a number.",
  required: "The field field is required.",
  size: "The field must be {0}.",
  string: "The field must be a string.",
  url: "The field format is invalid.",
};

export default translations;
