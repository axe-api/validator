# Rules

In this section, you can find the truth tables for all validation rules.

:::tip
You can learn more about the [Rule Terminology](/terminology.html#rule).
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

## `afterOrEqual:date`

The field unter validation must be after or equal to the given field

| Definition         | Value        | Is valid? |
| ------------------ | ------------ | --------- |
| `after:2024-01-01` | `null`       | 🟢        |
| `after:2024-01-01` | `undefined`  | 🟢        |
| `after:2024-01-01` | `2025-01-01` | 🟢        |
| `after:2024-01-01` | `2024-01-01` | 🟢        |
| `after:2024-01-01` | `2020-01-01` | 🔴        |

## `alpha`

The field under validation must be entirely alphabetic characters.

| Definition | Value       | Is valid? |
| ---------- | ----------- | --------- |
| `alpha`    | `null`      | 🟢        |
| `alpha`    | `undefined` | 🟢        |
| `alpha`    | `john`      | 🟢        |
| `alpha`    | `123`       | 🔴        |
| `alpha`    | `3.14`      | 🔴        |
| `alpha`    | `true`      | 🔴        |

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
