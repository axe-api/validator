# Rules

In this section, you can find the truth tables for all validation rules.

:::tip
You can learn more about the [Rule Terminology](/terminology.html#rule).
:::

:::warning
Each rule function should validate only one thing. For example, the `email` validation **should NOT** check if the data is provided. Otherwise, a rule function can not check the optional data.

That's why `null` and `undefined` values are acceptable for all rules except the `required`.

If you want to check if the data is provided and is a valid email, you should use two rules (`required`, `email`) at the same time.

:::

## `accepted`

The field under validation must be `yes`, `on`, `1` or `true`. This is useful for validating "Terms of Service" acceptance.

| Definition | Value       | Is valid? |
| ---------- | ----------- | --------- |
| `accepted` | `null`      | 🟢        |
| `accepted` | `undefined` | 🟢        |
| `accepted` | `'yes'`     | 🟢        |
| `accepted` | `'on'`      | 🟢        |
| `accepted` | `1`         | 🟢        |
| `accepted` | `true`      | 🟢        |
| `accepted` | `john`      | 🔴        |
| `accepted` | `3.14`      | 🔴        |

## `after:date`

The field under validation must be after the given date.

| Definition         | Value        | Is valid? |
| ------------------ | ------------ | --------- |
| `after:2024-01-01` | `null`       | 🟢        |
| `after:2024-01-01` | `undefined`  | 🟢        |
| `after:2024-01-01` | `2025-01-01` | 🟢        |
| `after:2024-01-01` | `2024-01-01` | 🔴        |
| `after:2024-01-01` | `2020-01-01` | 🔴        |

## `after_or_equal:date`

The field unter validation must be after or equal to the given field

| Definition                  | Value        | Is valid? |
| --------------------------- | ------------ | --------- |
| `after_or_equal:2024-01-01` | `null`       | 🟢        |
| `after_or_equal:2024-01-01` | `undefined`  | 🟢        |
| `after_or_equal:2024-01-01` | `2025-01-01` | 🟢        |
| `after_or_equal:2024-01-01` | `2024-01-01` | 🟢        |
| `after_or_equal:2024-01-01` | `2020-01-01` | 🔴        |

## `alpha`

The field under validation must be entirely alphabetic characters.

| Definition | Value       | Is valid? |
| ---------- | ----------- | --------- |
| `alpha`    | `null`      | 🟢        |
| `alpha`    | `undefined` | 🟢        |
| `alpha`    | `john`      | 🟢        |
| `alpha`    | `john123`   | 🔴        |
| `alpha`    | `john-doe`  | 🔴        |
| `alpha`    | `123`       | 🔴        |
| `alpha`    | `3.14`      | 🔴        |
| `alpha`    | `true`      | 🔴        |

## `alpha_dash`

The field under validation may have alpha-numeric characters, as well as dashes and underscores.

| Definition   | Value       | Is valid? |
| ------------ | ----------- | --------- |
| `alpha_dash` | `null`      | 🟢        |
| `alpha_dash` | `undefined` | 🟢        |
| `alpha_dash` | `john`      | 🟢        |
| `alpha_dash` | `john-doe`  | 🟢        |
| `alpha_dash` | `john_doe`  | 🟢        |
| `alpha_dash` | `john123`   | 🔴        |
| `alpha_dash` | `123`       | 🔴        |
| `alpha_dash` | `3.14`      | 🔴        |
| `alpha_dash` | `true`      | 🔴        |

## `alpha_num`

The field under validation must be entirely alpha-numeric characters.

| Definition  | Value       | Is valid? |
| ----------- | ----------- | --------- |
| `alpha_num` | `null`      | 🟢        |
| `alpha_num` | `undefined` | 🟢        |
| `alpha_num` | `john`      | 🟢        |
| `alpha_num` | `john123`   | 🟢        |
| `alpha_num` | `john-doe`  | 🔴        |
| `alpha_num` | `john_doe`  | 🔴        |
| `alpha_num` | `123`       | 🔴        |
| `alpha_num` | `3.14`      | 🔴        |
| `alpha_num` | `true`      | 🔴        |

## `array`

The field under validation must be an array.

| Definition | Value         | Is valid? |
| ---------- | ------------- | --------- |
| `array`    | `null`        | 🟢        |
| `array`    | `undefined`   | 🟢        |
| `array`    | `[]`          | 🟢        |
| `array`    | `[1, 2, 3]`   | 🟢        |
| `array`    | `[{"id": 1}]` | 🟢        |
| `array`    | `john`        | 🔴        |
| `array`    | `john`        | 🔴        |
| `array`    | `123`         | 🔴        |
| `array`    | `3.14`        | 🔴        |
| `array`    | `true`        | 🔴        |

## `before:date`

The field under validation must be before the given date.

| Definition          | Value        | Is valid? |
| ------------------- | ------------ | --------- |
| `before:2024-01-01` | `null`       | 🟢        |
| `before:2024-01-01` | `undefined`  | 🟢        |
| `before:2024-01-01` | `2023-01-01` | 🟢        |
| `before:2024-01-01` | `2024-01-01` | 🔴        |
| `before:2024-01-01` | `2025-01-01` | 🔴        |

## `before_or_equal:date`

The field under validation must be before or equal to the given date.

| Definition                   | Value        | Is valid? |
| ---------------------------- | ------------ | --------- |
| `before_or_equal:2024-01-01` | `null`       | 🟢        |
| `before_or_equal:2024-01-01` | `undefined`  | 🟢        |
| `before_or_equal:2024-01-01` | `2023-01-01` | 🟢        |
| `before_or_equal:2024-01-01` | `2024-01-01` | 🟢        |
| `before_or_equal:2024-01-01` | `2025-01-01` | 🔴        |

## `between:min,max`

The field under validation must have a size between the given min and max. Strings, and numerics are evaluated in the same fashion as the size rule.

| Definition    | Value       | Is valid? |
| ------------- | ----------- | --------- |
| `between:1,5` | `null`      | 🟢        |
| `between:1,5` | `undefined` | 🟢        |
| `between:1,5` | `'john'`    | 🟢        |
| `between:1,5` | `'12345'`   | 🟢        |
| `between:1,5` | `long-text` | 🔴        |
| `between:1,5` | `12345`     | 🔴        |

## `boolean`

The field under validation must be a boolean value of the form true, false, 0, 1, 'true', 'false', '0', '1',

| Definition | Value       | Is valid? |
| ---------- | ----------- | --------- |
| `boolean`  | `null`      | 🟢        |
| `boolean`  | `undefined` | 🟢        |
| `boolean`  | `true`      | 🟢        |
| `boolean`  | `'true'`    | 🟢        |
| `boolean`  | `1`         | 🟢        |
| `boolean`  | `'1'`       | 🟢        |
| `boolean`  | `false`     | 🔴        |
| `boolean`  | `'false'`   | 🔴        |
| `boolean`  | `0`         | 🔴        |
| `boolean`  | `'0'`       | 🔴        |

## `confirmed`

The field under validation must have a matching field of `foo_confirmation`. For example, if the field under validation is `password`, a matching `password_confirmation` field must be present in the input.

Let's assume that the value of the `password` field is `123456`. If you use the `confirmed` definition on the `password` field's rules, the truth table would look like the following example:

| Field                   | Value       | Is valid? |
| ----------------------- | ----------- | --------- |
| `password_confirmation` | `123456`    | 🟢        |
| `password_confirmation` | `654321`    | 🔴        |
| `password_confirmation` | `null`      | 🔴        |
| `password_confirmation` | `undefined` | 🔴        |
| `password_confirmation` | `true`      | 🔴        |
| `password_confirmation` | `false`     | 🔴        |
| `password_confirmation` | `{}`        | 🔴        |

## `date`

The field under validation must be a valid date format which is acceptable by Javascript's Date object.

| Definition | Value                        | Is valid? |
| ---------- | ---------------------------- | --------- |
| `date`     | `null`                       | 🟢        |
| `date`     | `undefined`                  | 🟢        |
| `date`     | `2023-12-16T00:00:00Z`       | 🟢        |
| `date`     | `December 16, 2023 12:00:00` | 🟢        |
| `date`     | `2023-01-01`                 | 🟢        |
| `date`     | `2022-13-01`                 | 🔴        |
| `date`     | `2022-12-32`                 | 🔴        |
| `date`     | `false`                      | 🔴        |

## `digits:value`

The field under validation must be numeric and must have an exact length of value.

| Definition | Value       | Is valid? |
| ---------- | ----------- | --------- |
| `digits:4` | `null`      | 🟢        |
| `digits:4` | `undefined` | 🟢        |
| `digits:4` | `1234`      | 🟢        |
| `digits:4` | `123`       | 🔴        |
| `digits:4` | `true`      | 🔴        |
| `digits:4` | `'1234'`    | 🔴        |
| `digits:4` | `123456`    | 🔴        |

## `digits_between:min,max`

The field under validation must be numeric and must have length between given min and max.

| Definition           | Value       | Is valid? |
| -------------------- | ----------- | --------- |
| `digits_between:4,6` | `null`      | 🟢        |
| `digits_between:4,6` | `undefined` | 🟢        |
| `digits_between:4,6` | `1234`      | 🟢        |
| `digits_between:4,6` | `123456`    | 🟢        |
| `digits_between:4,6` | `123`       | 🔴        |
| `digits_between:4,6` | `true`      | 🔴        |
| `digits_between:4,6` | `'1234'`    | 🔴        |

## `required`

| Definition | Value       | Is valid? |
| ---------- | ----------- | --------- |
| `required` | `null`      | 🔴        |
| `required` | `undefined` | 🔴        |
| `required` | `''`        | 🔴        |
| `required` | `john`      | 🟢        |
| `required` | `123`       | 🟢        |
| `required` | `1.23`      | 🟢        |
| `required` | `{}`        | 🟢        |
