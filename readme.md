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
  <a href="https://github.com/axe-api/validator/actions/workflows/npm-release-publish.yml" target="_blank">
    <img src="https://github.com/axe-api/validator/actions/workflows/npm-release-publish.yml/badge.svg?branch=master">
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

## 💡 Why?

Discovering a data validation library that seamlessly combines ease of use, the ability to store validation rules for future use, and robust internationalization (i18n) support is a formidable challenge. While numerous data validation libraries exist, finding one that fulfills all these criteria is often elusive. Some libraries that do meet these requirements are unfortunately no longer actively maintained.

Robust Validator was born out of the need for a versatile data validation solution that not only simplifies the validation process but also empowers developers with the flexibility to preserve and reuse validation rules. This library aims to bridge the gap by offering a user-friendly experience, ensuring your validation needs are met comprehensively.

Why choose Robust Validator? It's more than just a data validation tool; it's a commitment to providing a reliable, well-maintained, and feature-rich solution for developers who value simplicity and effectiveness in their projects.

## 🤞 Principles

I decided on some fundamental rules while building this library:

- ✅︎ Every validation rule should be an independent function.
- ✅︎ Every validation rule should be able to be used separately
- ✅︎ All validation definition should be able to be stored anywhere (database, memory, configuration files, 3rd party API, etc) to be used later.
- ✅︎ All validation rules should be able to be used in different languages.
- ✅︎ Contribution to the rule set should be easy.
- ✅︎ Should be well-documented.

## 🏃 Installation

The library can be installed into an existing project:

```bash
$ npm install --save robust-validator
```

## 💪 Usage

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

## 🤝 Contributors

<a href="https://github.com/axe-api/validator/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=axe-api/validator" />
</a>

Made with [contrib.rocks](https://contrib.rocks).

## ⚖️ License

[MIT License](LICENSE)
