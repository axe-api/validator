---
sidebar: false
editLink: true
outline: false
prev: false
next: false
description: Learn how to create your own custom validation rules in JavaScript using Robust Validator. A simple step-by-step guide with examples.
---

# How to Build a Custom Validation Rule in JavaScript with Robust Validator

## Intro

Sometimes the built-in validation rules are not enough. You might need to check something unique to your app. For example, maybe a username must start with an uppercase letter. Or maybe a field needs to match a very specific format.

Good news is that with [Robust Validator](https://validator.axe-api.com), you can easily create your own validation rules and use them just like the default ones.

In this post, you’ll learn how to write a custom rule from scratch and plug it into your validation flow.

## What We’ll Build

Let’s build a custom rule called `startsWithUppercase`. It will check if a string starts with a capital letter.

This rule is not included by default, but it’s easy to add your own.

## Step 1: Define the Rule Function

Your rule function is where you write the logic. It receives the value and returns true or false.

```ts
const ruleFunction = (value) => {
  if (typeof value !== "string") return false;
  return /^[A-Z]/.test(value);
};
```

This checks if the first character of the value is an uppercase letter.

## Step 2: Register the Rule

Use the `register()` function to add your rule to the validator. You also provide a custom error message for each language.

```ts
import { register } from "robust-validator";

register("startsWithUppercase", ruleFunction, {
  en: "The field must start with an uppercase letter.",
});
```

## Step 3: Write the Validation Schema

Now you can use your custom rule in a string-based schema, just like a built-in rule.

```ts
import { validate } from "robust-validator";

const data = {
  name: "john",
};

const schema = {
  name: "required|startsWithUppercase",
};
```

## Step 4: Run the Validation

The `validate()` function is asynchronous, so make sure to await it.

```ts
const result = await validate(data, schema);

console.log(result);
```

## Example Output

If the name does not start with a capital letter, you’ll get this:

```json
{
  "isValid": false,
  "isInvalid": true,
  "fields": {
    "name": false
  },
  "errors": {
    "name": [
      {
        "rule": "startsWithUppercase",
        "message": "The field must start with an uppercase letter."
      }
    ]
  }
}
```

## Use Case: Exists Rule for Database

You can also create rules that connect to external sources like a database. For example:

```ts
const existsRule = async (value: any, tableName: string) => {
  const fakeDatabase = {
    users: ["user@example.com", "admin@example.com"],
  };

  return fakeDatabase[tableName]?.includes(value);
};

register("exists", existsRule, {
  en: "The record doesn't exist in {0}.",
});

const result = await validate(
  { email: "notfound@example.com" },
  { email: "required|exists:users" },
);
```

This checks if the email exists in a fake "users" table.

## Why Custom Rules Are Useful

Custom rules help when:

- You need app-specific logic
- You want to reuse complex checks
- You need to integrate with your database or API
- Built-in rules are not enough for your case

## Wrap-Up

Robust Validator makes it super easy to create and use your own validation rules. All you need is a rule function, a call to `register()`, and a schema. You can also customize the error messages for any language you need.

Try creating your own rule today and make your validation logic match your app’s exact needs.

## Related Links

- [Getting Started](https://validator.axe-api.com/getting-started)
- [All Validation Rules](https://validator.axe-api.com/rules)
- [Customization](https://validator.axe-api.com/customization)
