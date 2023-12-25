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

| Rule       | Value       | Is valid? |
| ---------- | ----------- | --------- |
| `accepted` | `null`      | 🔴        |
| `accepted` | `undefined` | 🔴        |
| `accepted` | `'yes'`     | 🟢        |
| `accepted` | `'on'`      | 🟢        |
| `accepted` | `1`         | 🟢        |
| `accepted` | `true`      | 🟢        |
| `accepted` | `john`      | 🔴        |
| `accepted` | `3.14`      | 🔴        |

## `after:date`

The field under validation must be after the given date.

| Rule               | Value        | `startAt`    | Is valid? |
| ------------------ | ------------ | ------------ | --------- |
| `after:2024-01-01` | `null`       |              | 🔴        |
| `after:2024-01-01` | `undefined`  |              | 🔴        |
| `after:2024-01-01` | `2025-01-01` |              | 🟢        |
| `after:startAt`    | `2025-01-01` | `2024-01-01` | 🟢        |
| `after:startAt`    | `2024-01-01` | `2024-01-01` | 🔴        |
| `after:startAt`    | `2024-01-01` | `2025-01-01` | 🔴        |
| `after:2024-01-01` | `2024-01-01` |              | 🔴        |
| `after:2024-01-01` | `2020-01-01` |              | 🔴        |

## `after_or_equal:date`

The field unter validation must be after or equal to the given field

| Rule                        | Value        | `startAt`    | Is valid? |
| --------------------------- | ------------ | ------------ | --------- |
| `after_or_equal:2024-01-01` | `null`       |              | 🔴        |
| `after_or_equal:2024-01-01` | `undefined`  |              | 🔴        |
| `after_or_equal:2024-01-01` | `2025-01-01` |              | 🟢        |
| `after_or_equal:2024-01-01` | `2024-01-01` |              | 🟢        |
| `after_or_equal:startAt`    | `2025-01-01` | `2024-01-01` | 🟢        |
| `after_or_equal:startAt`    | `2024-01-01` | `2024-01-01` | 🟢        |
| `after_or_equal:startAt`    | `2024-01-01` | `2025-01-01` | 🔴        |
| `after_or_equal:2024-01-01` | `2020-01-01` |              | 🔴        |

## `alpha`

The field under validation must be entirely alphabetic characters.

| Rule    | Value       | Is valid? |
| ------- | ----------- | --------- |
| `alpha` | `null`      | 🔴        |
| `alpha` | `undefined` | 🔴        |
| `alpha` | `john`      | 🟢        |
| `alpha` | `john123`   | 🔴        |
| `alpha` | `john-doe`  | 🔴        |
| `alpha` | `123`       | 🔴        |
| `alpha` | `3.14`      | 🔴        |
| `alpha` | `true`      | 🔴        |

## `alpha_dash`

The field under validation may have alpha-numeric characters, as well as dashes and underscores.

| Rule         | Value       | Is valid? |
| ------------ | ----------- | --------- |
| `alpha_dash` | `null`      | 🔴        |
| `alpha_dash` | `undefined` | 🔴        |
| `alpha_dash` | `john`      | 🟢        |
| `alpha_dash` | `john-doe`  | 🟢        |
| `alpha_dash` | `john_doe`  | 🟢        |
| `alpha_dash` | `john123`   | 🔴        |
| `alpha_dash` | `123`       | 🔴        |
| `alpha_dash` | `3.14`      | 🔴        |
| `alpha_dash` | `true`      | 🔴        |

## `alpha_num`

The field under validation must be entirely alpha-numeric characters.

| Rule        | Value       | Is valid? |
| ----------- | ----------- | --------- |
| `alpha_num` | `null`      | 🔴        |
| `alpha_num` | `undefined` | 🔴        |
| `alpha_num` | `john`      | 🟢        |
| `alpha_num` | `john123`   | 🟢        |
| `alpha_num` | `john-doe`  | 🔴        |
| `alpha_num` | `john_doe`  | 🔴        |
| `alpha_num` | `123`       | 🔴        |
| `alpha_num` | `3.14`      | 🔴        |
| `alpha_num` | `true`      | 🔴        |

## `array`

The field under validation must be an array.

| Rule    | Value         | Is valid? |
| ------- | ------------- | --------- |
| `array` | `null`        | 🔴        |
| `array` | `undefined`   | 🔴        |
| `array` | `[]`          | 🟢        |
| `array` | `[1, 2, 3]`   | 🟢        |
| `array` | `[{"id": 1}]` | 🟢        |
| `array` | `john`        | 🔴        |
| `array` | `john`        | 🔴        |
| `array` | `123`         | 🔴        |
| `array` | `3.14`        | 🔴        |
| `array` | `true`        | 🔴        |

## `before:date`

The field under validation must be before the given date.

| Rule                | Value        | `finishAt`   | Is valid? |
| ------------------- | ------------ | ------------ | --------- |
| `before:2024-01-01` | `null`       |              | 🔴        |
| `before:2024-01-01` | `undefined`  |              | 🔴        |
| `before:2024-01-01` | `2023-01-01` |              | 🟢        |
| `before:finishAt`   | `2023-01-01` | `2024-01-01` | 🟢        |
| `before:finishAt`   | `2023-01-01` | `2023-01-01` | 🔴        |
| `before:finishAt`   | `2023-01-01` | `2022-01-01` | 🔴        |
| `before:2024-01-01` | `2024-01-01` |              | 🔴        |
| `before:2024-01-01` | `2025-01-01` |              | 🔴        |

## `before_or_equal:date`

The field under validation must be before or equal to the given date.

| Rule                         | Value        | `finishAt`   | Is valid? |
| ---------------------------- | ------------ | ------------ | --------- |
| `before_or_equal:2024-01-01` | `null`       |              | 🔴        |
| `before_or_equal:2024-01-01` | `undefined`  |              | 🔴        |
| `before_or_equal:2024-01-01` | `2023-01-01` |              | 🟢        |
| `before_or_equal:2024-01-01` | `2024-01-01` |              | 🟢        |
| `before_or_equal:finishAt`   | `2023-01-01` | `2024-01-01` | 🟢        |
| `before_or_equal:finishAt`   | `2023-01-01` | `2023-01-01` | 🟢        |
| `before_or_equal:finishAt`   | `2023-01-01` | `2022-01-01` | 🔴        |
| `before_or_equal:2024-01-01` | `2025-01-01` |              | 🔴        |

## `between:min,max`

The field under validation must have a size between the given min and max. Strings, and numerics are evaluated in the same fashion as the size rule.

| Rule          | Value       | Is valid? |
| ------------- | ----------- | --------- |
| `between:1,5` | `null`      | 🔴        |
| `between:1,5` | `undefined` | 🔴        |
| `between:1,5` | `'john'`    | 🟢        |
| `between:1,5` | `'12345'`   | 🟢        |
| `between:1,5` | `long-text` | 🔴        |
| `between:1,5` | `12345`     | 🔴        |

## `boolean`

The field under validation must be a boolean value of the form true, false, 0, 1, 'true', 'false', '0', '1',

| Rule      | Value       | Is valid? |
| --------- | ----------- | --------- |
| `boolean` | `null`      | 🔴        |
| `boolean` | `undefined` | 🔴        |
| `boolean` | `true`      | 🟢        |
| `boolean` | `'true'`    | 🟢        |
| `boolean` | `1`         | 🟢        |
| `boolean` | `'1'`       | 🟢        |
| `boolean` | `false`     | 🔴        |
| `boolean` | `'false'`   | 🔴        |
| `boolean` | `0`         | 🔴        |
| `boolean` | `'0'`       | 🔴        |

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

| Rule   | Value                        | Is valid? |
| ------ | ---------------------------- | --------- |
| `date` | `null`                       | 🔴        |
| `date` | `undefined`                  | 🔴        |
| `date` | `2023-12-16T00:00:00Z`       | 🟢        |
| `date` | `December 16, 2023 12:00:00` | 🟢        |
| `date` | `2023-01-01`                 | 🟢        |
| `date` | `2022-13-01`                 | 🔴        |
| `date` | `2022-12-32`                 | 🔴        |
| `date` | `false`                      | 🔴        |

## `digits:value`

The field under validation must be numeric and must have an exact length of value.

| Rule       | Value       | Is valid? |
| ---------- | ----------- | --------- |
| `digits:4` | `null`      | 🔴        |
| `digits:4` | `undefined` | 🔴        |
| `digits:4` | `1234`      | 🟢        |
| `digits:4` | `123`       | 🔴        |
| `digits:4` | `true`      | 🔴        |
| `digits:4` | `'1234'`    | 🔴        |
| `digits:4` | `123456`    | 🔴        |

## `digits_between:min,max`

The field under validation must be numeric and must have length between given min and max.

| Rule                 | Value       | Is valid? |
| -------------------- | ----------- | --------- |
| `digits_between:4,6` | `null`      | 🔴        |
| `digits_between:4,6` | `undefined` | 🔴        |
| `digits_between:4,6` | `1234`      | 🟢        |
| `digits_between:4,6` | `123456`    | 🟢        |
| `digits_between:4,6` | `123`       | 🔴        |
| `digits_between:4,6` | `true`      | 🔴        |
| `digits_between:4,6` | `'1234'`    | 🔴        |

## `email`

The field under validation must be formatted as an e-mail address.

| Rule    | Value         | Is valid? |
| ------- | ------------- | --------- |
| `email` | `null`        | 🔴        |
| `email` | `undefined`   | 🔴        |
| `email` | `foo@bar.com` | 🟢        |
| `email` | `just a text` | 🔴        |
| `email` | `true`        | 🔴        |
| `email` | `'1234'`      | 🔴        |

## `hex`

The field under validation should be a hexadecimal format.

| Rule  | Value              | Is valid? |
| ----- | ------------------ | --------- |
| `hex` | `null`             | 🔴        |
| `hex` | `undefined`        | 🔴        |
| `hex` | `1aF`              | 🟢        |
| `hex` | `1234567890ABCDEF` | 🟢        |
| `hex` | `123xyz`           | 🔴        |
| `hex` | `0xg`              | 🔴        |
| `hex` | `invalid string`   | 🔴        |

## `in:foo,bar,...`

The field under validation must be included in the given list of values.

| Rule     | Value       | Is valid? |
| -------- | ----------- | --------- |
| `in:A,B` | `null`      | 🔴        |
| `in:A,B` | `undefined` | 🔴        |
| `in:A,B` | `A`         | 🟢        |
| `in:A,B` | `B`         | 🟢        |
| `in:A,B` | `C`         | 🔴        |
| `in:A,B` | `true`      | 🔴        |
| `in:A,B` | `{}`        | 🔴        |

## `integer`

The field under validation must have an integer value.

| Rule      | Value       | Is valid? |
| --------- | ----------- | --------- |
| `integer` | `null`      | 🔴        |
| `integer` | `undefined` | 🔴        |
| `integer` | `123`       | 🟢        |
| `integer` | `3.14`      | 🔴        |
| `integer` | `abc`       | 🔴        |

## `max:value`

Validate that an attribute is no greater than a given size

| Rule    | Value       | Is valid? |
| ------- | ----------- | --------- |
| `max:5` | `null`      | 🔴        |
| `max:5` | `undefined` | 🔴        |
| `max:5` | `'123'`     | 🟢        |
| `max:5` | `3`         | 🟢        |
| `max:5` | `'abcdef'`  | 🔴        |
| `max:5` | `10`        | 🔴        |

## `min:value`

Validate that an attribute is at least a given size.

| Rule    | Value       | Is valid? |
| ------- | ----------- | --------- |
| `min:5` | `null`      | 🔴        |
| `min:5` | `undefined` | 🔴        |
| `min:5` | `'abcdef'`  | 🟢        |
| `min:5` | `'123456'`  | 🟢        |
| `min:5` | `10`        | 🟢        |
| `min:5` | `'abcdef'`  | 🔴        |
| `min:5` | `2`         | 🔴        |

## `not_in:foo,bar,...`

The field under validation must not be included in the given list of values.

| Rule         | Value       | Is valid? |
| ------------ | ----------- | --------- |
| `not_in:A,B` | `null`      | 🔴        |
| `not_in:A,B` | `undefined` | 🔴        |
| `not_in:A,B` | `C`         | 🟢        |
| `not_in:A,B` | `A`         | 🔴        |
| `not_in:A,B` | `B`         | 🔴        |
| `not_in:A,B` | `true`      | 🔴        |

## `numeric`

Validate that an attribute is numeric.

| Rule      | Value       | Is valid? |
| --------- | ----------- | --------- |
| `integer` | `null`      | 🔴        |
| `integer` | `undefined` | 🔴        |
| `integer` | `123`       | 🟢        |
| `integer` | `3.14`      | 🟢        |
| `integer` | `abc`       | 🔴        |

## `required`

Checks if the value is provided.

| Rule       | Value       | Is valid? |
| ---------- | ----------- | --------- |
| `required` | `john`      | 🟢        |
| `required` | `123`       | 🟢        |
| `required` | `1.23`      | 🟢        |
| `required` | `{}`        | 🟢        |
| `required` | `null`      | 🔴        |
| `required` | `undefined` | 🔴        |
| `required` | `''`        | 🔴        |
| `required` | `' '`       | 🔴        |

## `size:value`

The field under validation must have a size matching the given value. For string data, value corresponds to the number of characters. For numeric data, value corresponds to a given integer value.

| Rule     | Value       | Is valid? |
| -------- | ----------- | --------- |
| `size:3` | `null`      | 🔴        |
| `size:3` | `undefined` | 🔴        |
| `size:3` | `abc`       | 🟢        |
| `size:3` | `1`         | 🟢        |
| `size:3` | `1.23`      | 🟢        |
| `size:3` | `abcde`     | 🔴        |
| `size:3` | `10`        | 🔴        |

## `string`

The field under validation must be a string.

| Rule     | Value       | Is valid? |
| -------- | ----------- | --------- |
| `string` | `abc`       | 🟢        |
| `string` | `''`        | 🟢        |
| `string` | `' '`       | 🟢        |
| `string` | `1`         | 🔴        |
| `string` | `1.23`      | 🔴        |
| `string` | `abcde`     | 🔴        |
| `string` | `10`        | 🔴        |
| `string` | `null`      | 🔴        |
| `string` | `undefined` | 🔴        |

## `url`

Validate that an attribute has a valid URL format

| Rule  | Value                 | Is valid? |
| ----- | --------------------- | --------- |
| `url` | `null`                | 🔴        |
| `url` | `undefined`           | 🔴        |
| `url` | `https://example.com` | 🟢        |
| `url` | `http://example.com`  | 🟢        |
| `url` | `ftp://example.com`   | 🟢        |
| `url` | `invalid-url`         | 🔴        |
