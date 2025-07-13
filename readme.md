#

<h1 align="center">
  <br>
  <a href="https://validator.axe-api.com/">
    <img src="https://validator.axe-api.com/logo.png" width="200">
  </a>
  <br>
  Robust Validator
  <br>
  <a href="https://badge.fury.io/js/robust-validator">
    <img src="https://badge.fury.io/js/robust-validator.svg" alt="npm version" height="18">
  </a>
  <a href="https://github.com/axe-api/validator/actions/workflows/npm-publish.yml" target="_blank">
    <img src="https://github.com/axe-api/validator/actions/workflows/npm-publish.yml/badge.svg?branch=main">
  </a>
  <a href="https://github.com/axe-api/validator/issues" target="_blank">
    <img src="https://img.shields.io/github/issues/axe-api/validator.svg">
  </a>
  <a href="https://opensource.org/licenses/MIT" target="_blank">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg">
  </a>
</h1>

Rule-based data validation in JS. Extendable, function-oriented, i18n-supported

[Documentation](https://validator.axe-api.com/)

## Why?

Most validation libraries are either hard to use, missing key features, or no longer maintained. It’s tough to find one that lets you reuse rules, supports multiple languages, and still feels easy to work with.

Robust Validator was built to solve that. It makes validation simple, reusable, and flexible. You can define your rules once and use them anywhere, and it works great with multiple languages out of the box.

If you want a validation library that just works, is easy to read, and stays up to date, Robust Validator is a solid choice.

## Principles

I decided on some fundamental rules while building this library:

- ✅︎ Every validation rule should be an independent function.
- ✅︎ Every validation rule should be able to be used separately
- ✅︎ All validation definition should be able to be stored anywhere (database, memory, configuration files, 3rd party API, etc) to be used later.
- ✅︎ All validation rules should be able to be used in different languages.
- ✅︎ Contribution to the rule set should be easy.
- ✅︎ Should be well-documented.

## Installation

The library can be installed into an existing project:

```bash
$ npm install --save robust-validator
```

## Usage

Using robust-validator is very simple.

You should just call the `validate()` function with data and the definition.

```ts
import { validate, setLocales, en } from "robust-validator";

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

## Contributors

<a href="https://github.com/axe-api/validator/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=axe-api/validator" />
</a>

Made with [contrib.rocks](https://contrib.rocks).

## License

[MIT License](LICENSE)
