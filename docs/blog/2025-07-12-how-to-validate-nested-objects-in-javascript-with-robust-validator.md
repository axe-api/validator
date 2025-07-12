---
sidebar: false
editLink: true
outline: false
prev: false
next: false
description: Learn how to validate nested objects in JavaScript using Robust Validator. A simple and practical guide for forms and API data.
---

# How to Validate Nested Objects in JavaScript with Robust Validator

## Intro

When you're working with forms or APIs in JavaScript, you often deal with data that's nested. For example, a user profile might have contact info inside it, and each field needs to be validated.

If you've ever tried to manually check `user.contact.email` or `settings.preferences.notifications`, you know how messy it can get.

In this post, you'll learn how to validate nested objects easily using Robust Validator, a simple and powerful validation library inspired by Laravel.

## Why Nested Validation Matters

Most real-world apps deal with nested data. Things like:

- User profiles
- Signup forms
- JSON payloads for APIs

If you skip validation or only check top-level fields, bugs and bad data will sneak in. That leads to broken features, support tickets, and angry users. Not fun.

## Step 1: Install Robust Validator

First, install the package:

```bash
npm install --save robust-validator
```

Then import the validator like this:

```ts
import { validate } from "robust-validator";
```

## Step 2: Example Data

Here's a sample data object you might get from a form or API:

```ts
const data = {
  user: {
    name: "Alice",
    contact: {
      email: "alice@example.com",
      phone: "",
    },
  },
};
```

Now let’s say we want to check:

- `user.name` is required and should be at least 3 characters
- `user.contact.email` is required and should be a valid email
- `user.contact.phone` is required

## Step 3: Write the Schema

Robust Validator supports dot notation for nested fields.

### Option 1: String-based rules

```ts
const schema = {
  "user.name": "required|min:3",
  "user.contact.email": "required|email",
  "user.contact.phone": "required",
};
```

### Option 2: Function-based rules

```ts
import { required, min, email } from "robust-validator";

const schema = {
  "user.name": [required(), min(3)],
  "user.contact.email": [required(), email()],
  "user.contact.phone": [required()],
};
```

Both ways work the same. Pick the one you like better.

## Step 4: Run the Validation

Here’s how you validate the data:

```ts
const result = validate(data, schema);

if (!result.passes()) {
  console.log(result.errors());
}
```

## Example Output

If `user.contact.phone` is empty, you’ll get this:

```json
{
  "isValid": false,
  "isInvalid": true,
  "fields": {
    "user.name": true,
    "user.contact.email": true,
    "user.contact.phone": false
  },
  "errors": {
    "user.contact.phone": [
      { "rule": "required", "message": "The field is required." }
    ]
  }
}
```

Now you can show this message to the user or send it back in an API response.

## When to Use This

Use this approach anytime you’re validating:

- Form inputs with nested data
- API request bodies
- Config or settings objects

Basically, anytime your object isn’t flat.

## Wrap-Up

Nested object validation doesn’t have to be complicated. With [Robust Validator](https://validator.axe-api.com), you can write clear, simple rules using dot notation. It handles the hard parts so you can focus on building your app.

Give it a try and make your validation cleaner and more reliable.

## Related Links

- [Getting Started](https://validator.axe-api.com/getting-started)
- [All Validation Rules](https://validator.axe-api.com/rules)
- [Customization](https://validator.axe-api.com/customization)
