---
footer: true
---

# Getting started

## Installation

The library can be installed into an existing project:

```bash
$ npm install --save robust-validator
```

## Usage

Using `robust-validator` is very simple.

You should just call the `validate()` function with data and the definition.

::: code-group

```js [Declarative]
import { validate, setLocales, en } from "robust-validator";

setLocales(en);

const data = { email: "not-a-valid-email", name: "John", surname: "Doe" };

const definition = {
  email: "required|email",
  name: "required|min:1|max:50",
  surname: "required|min:1|max:50",
};

const result = await validate(data, definition);
console.log(result);
```

```js [Function-based]
import {
  validate,
  setLocales,
  required,
  email,
  min,
  max,
  en,
} from "robust-validator";

setLocales(en);

const data = { email: "not-a-valid-email", name: "John", surname: "Doe" };

const definition = {
  email: [required(), email()],
  name: [required(), min(1), max(50)],
  surname: [required(), min(1), max(50)],
};

const result = await validate(data, definition);
console.log(result);
```

:::

By the example, you would get the following response:

```json
{
  "isValid": false,
  "isInvalid": true,
  "fields": { "email": false, "name": true, "surname": true },
  "errors": {
    "email": [{ "rule": "required", "message": "The field is required." }]
  }
}
```

## Nested data validation

This feature allows dynamic traversal of nested data structures, supporting complex validation rules for paths like `users.*.addresses.*.city`.

It is inspired by Laravel's validation system and works seamlessly with arrays and objects, including deeply nested data.

```ts
import { validate, setLocales, en } from "robust-validator";

setLocales(en);

const data = {
  secret: "some secret",
  users: [
    { addresses: [{ city: "New York" }, { city: "Istanbul" }] },
    { addresses: [{ city: "New York" }, { street: "Wall Street" }] },
  ],
  permissons: { read: true, write: true },
};

const definition = {
  secret: "required|min:100",
  "users.*.addresses.*.city": "required",
  "permissons.read": "required|boolean",
  "permissons.delete": "required|boolean",
};

const result = await validate(data, definition);
console.log(result);
```

And this is the content of the `result` variable:

```json
{
  "isValid": false,
  "isInvalid": true,
  "fields": {
    "secret": false,
    "users.*.addresses.*.city": false,
    "permissons.read": true,
    "permissons.delete": false
  },
  "errors": {
    "secret": [{ "rule": "min", "message": "The field must be at least 100." }],
    "users.1.addresses.1.city": [
      { "rule": "required", "message": "The field is required." }
    ],
    "permissons.delete": [
      { "rule": "required", "message": "The field is required." }
    ]
  }
}
```
