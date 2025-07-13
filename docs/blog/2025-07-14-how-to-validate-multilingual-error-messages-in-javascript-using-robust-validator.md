---
sidebar: false
editLink: true
outline: false
prev: false
next: false
description: Learn how to show validation errors in different languages using Robust Validator. A simple guide to i18n and custom error messages in JavaScript.
---

# How to Validate Multilingual Error Messages in JavaScript Using Robust Validator

## Intro

If you are building an app that supports more than one language, you probably want to show error messages in the right language too. This is called internationalization or i18n.

The good news is that [Robust Validator](https://validator.axe-api.com) makes this very easy. You can switch languages, use custom messages, and even create your own message formats.

In this post, you will learn how to change the language of error messages and set your own custom messages.

## Step 1: Set the Language

By default, Robust Validator shows messages in English. You can switch the language using the `setLocale` function.

```ts
import { setLocale } from "robust-validator";

setLocale("fr"); // Use French messages
```

That’s it. All error messages will now be shown in French.

## Step 2: Validate Some Data

Let’s try a simple example with a required rule.

```ts
import { validate } from "robust-validator";

const data = {
  name: "",
};

const schema = {
  name: "required",
};

const result = await validate(data, schema);

console.log(result);
```

If the name field is empty, you will get this message in French (after setting the locale):

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
        "rule": "required",
        "message": "Le champ est obligatoire."
      }
    ]
  }
}
```

## Step 3: Add Your Own Messages

You can override the active language by users' selection for every data validation.

```ts
import { validate } from "robust-validator";

const data = {
  name: "",
};

const schema = {
  name: "required",
};

const result = await validate(data, schema, { language: "de" });
console.log(result);
```

Now when the validation fails, it will return:

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
        "rule": "required",
        "message": "Das Feld ist erforderlich."
      }
    ]
  }
}
```

## When to Use This

Multilingual validation is useful when:

- You are building an app for users in different countries
- You want to make your forms more friendly and clear
- You are working on international e-commerce, education, or health platforms
- You just want better control over your messages

## Wrap-Up

Robust Validator makes it easy to show error messages in any language.

This gives you full control over how your validation behaves in a multilingual app.

Try it out today and give your users a better experience in their own language.

## Related Links

- [Getting Started](https://validator.axe-api.com/getting-started)
- [All Validation Rules](https://validator.axe-api.com/rules)
- [Internationalization (i18n)](https://validator.axe-api.com/i18n)
- [Customization](https://validator.axe-api.com/customization)
