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
import { validate, setLocales } from "robust-validator";
import en from "robust-validator/dist/i18n/en.json";

setLocales(en);

const data = {
  email: "not-a-valid-email",
  name: "John",
  surname: "Doe",
};

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
} from "robust-validator";
import en from "robust-validator/dist/i18n/en.json";

setLocales(en);

const data = {
  email: "not-a-valid-email",
  name: "John",
  surname: "Doe",
};

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
  "fields": {
    "email": false,
    "name": true,
    "surname": true
  },
  "errors": {
    "email": [
      {
        "rule": "required",
        "message": "The field field is required."
      }
    ]
  }
}
```
