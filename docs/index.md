---
layout: home

hero:
  name: "Robust Validator"
  text: "Rule-based data validation in JS"
  tagline: 💡 Extendable. Function-oriented. i18n-ready.
  image:
    src: /logo.png
    alt: Robust Validator
  actions:
    - theme: brand
      text: Get Started →
      link: /getting-started

features:
  - title: Declarative ✍🏽
    details: "Write rules once, reuse anywhere: configs, DB, UI, etc."
  - title: Simple 🐤
    details: Validate anything in seconds. It's designed to be fast and intuitive.
  - title: Proof of Work 💪
    details: Inspired by Laravel. Refined for JavaScript. Production-tested.
  - title: i18n 🇺🇳
    details: Full multi-language support built-in. No need for extra setup.
---

<div class="demo-section">

  <div class="demo-text">
    <h3>Validate your data in a declarative way</h3>
    <p>
      The <code>validate()</code> function checks your data against rule definitions using simple,
      readable syntax like <code>"required|email"</code>.
    </p>
    <p>
      It works directly with plain JavaScript objects, so you stay in control of when and how validation is performed.
    </p>
    <p>
      The library is function oriented, extendable, and built to fit cleanly into any part of your application logic.
    </p>
  </div>

  <div class="demo-code">

<!-- prettier-ignore-start -->
```ts
import { validate } from "robust-validator";

const rules = {
  email: "required|email",
  age: "integer|min:18" 
};

const data = {
  email: "test@example.com",
  age: 21 
};

const result = validate(data, rules);
```
<!-- prettier-ignore-end -->

  </div> 
</div>

<div class="demo-section">

  <div class="demo-code">

<!-- prettier-ignore-start -->
```ts
const data = {
  email: "not-a-valid-email",
};

const definition = {
  email: [required(), email(), max(255)],
  name: [required(), max(100)],
};

const result = await validate(data, definition);
```
<!-- prettier-ignore-end -->

  </div>

  <div class="demo-text">
    <h3>Use composable functions for rule definitions</h3>
    <p>
      Instead of writing rules as strings, you can define them as function calls. This gives you full control, better type safety, and cleaner auto-completion in editors.
    </p>
    <p>
      Every rule becomes a reusable function, making your validation logic easier to test and extend when your app grows.
    </p>
  </div>

</div>

<div class="demo-section">

  <div class="demo-text">
    <h3>Structured output for clean error handling</h3>
    <p>
      The result from the <code>validate()</code> function includes everything you need to respond or react. It separates global state from field-level results.
    </p>
    <p>
      You get <code>isValid</code>, <code>isInvalid</code>, per-field status, and a detailed list of errors with rule names and messages.
    </p>
  </div>

  <div class="demo-code">

<!-- prettier-ignore-start -->
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
        "message": "The field is required."
      }
    ]
  }
}
```
<!-- prettier-ignore-end -->

  </div> 
</div>

<div class="demo-section">

  <div class="demo-code">

<!-- prettier-ignore-start -->
```ts
const data = {
  users: {
    addresses: [
      { city: "Copenhagen" }
    ]
  }
};

const definition = {
  "users.addresses.*.city": "required",
};

const result = await validate(data, definition);
```
<!-- prettier-ignore-end -->

  </div>

  <div class="demo-text">
    <h3>Validate deeply nested data with dot notation</h3>
    <p>
      The validator supports nested objects and arrays out of the box. You can use dot notation to target any depth in the data structure.
    </p>
    <p>
      Wildcards like <code>*</code> make it easy to validate each item in an array without writing repetitive rules.
    </p>
    <p>
      This syntax works seamlessly for complex payloads, including user profiles, form builders, or nested APIs, without requiring any extra setup.
    </p>
  </div>
</div>

<div class="demo-section">

  <div class="demo-text">
    <h3>Built-in support for multiple languages</h3>
    <p>
      Robust Validator includes native i18n support. You can register multiple locales and switch the language with a single option.
    </p>
    <p>
      This makes it easy to return localized error messages for forms, APIs, or any user-facing validation without extra libraries.
    </p>
  </div>

  <div class="demo-code">

<!-- prettier-ignore-start -->
```ts
import { setLocales, setOptions, en, fr, de } from "robust-validator";

// Setting the supported locales
setLocales(en, fr, de);

// Setting the user's locale
setOptions({ language: "en" });
```
<!-- prettier-ignore-end -->

  </div> 
</div>

<div class="demo-section">

  <div class="demo-code">

<!-- prettier-ignore-start -->
```ts
import { register } from "robust-validator";

const ruleFunction = (value: any) => {
  // TODO: add your custom rule logic here
  return true;
};

register("exists", ruleFunction, {
  en: "The record doesn't exists on database: {0}",
});
```
<!-- prettier-ignore-end -->

  </div>

  <div class="demo-text">
    <h3>Create your own validation rules</h3>
    <p>
      Robust Validator lets you register custom rules using the <code>register()</code> function. This is ideal when you need to add application-specific logic, like checking if a record exists in the database.
    </p>
    <p>
      You define the rule name, a validation function, and localized error messages. Once registered, your custom rule behaves just like any built-in rule.
    </p>
  </div>
</div>

<div class="l-title">Supported Languages</div>
<p class="l-description">
  Robust Validator includes built-in error messages for a wide range of languages. You can use them as-is or extend them with your own translations.
</p>

<div class="l-table">
  <div class="l-cell">Arabic</div>
  <div class="l-cell">Azerbaijani</div>
  <div class="l-cell">Belarusian</div>
  <div class="l-cell">Bulgarian</div>
  <div class="l-cell">Bosnian</div>
  <div class="l-cell">Catalan</div>
  <div class="l-cell">Czech</div>
  <div class="l-cell">Welsh</div>
  <div class="l-cell">Danish</div>
  <div class="l-cell">German</div>
  <div class="l-cell">Greek</div>
  <div class="l-cell">English</div>
  <div class="l-cell">Spanish</div>
  <div class="l-cell">Estonian</div>
  <div class="l-cell">Basque</div>
  <div class="l-cell">Persian</div>
  <div class="l-cell">Finnish</div>
  <div class="l-cell">French</div>
  <div class="l-cell">Croatian</div>
  <div class="l-cell">Hungarian</div>
  <div class="l-cell">Indonesian</div>
  <div class="l-cell">Italian</div>
  <div class="l-cell">Japanese</div>
  <div class="l-cell">Georgian</div>
  <div class="l-cell">Korean</div>
  <div class="l-cell">Limburgish</div>
  <div class="l-cell">Lithuanian</div>
  <div class="l-cell">Latvian</div>
  <div class="l-cell">Macedonian</div>
  <div class="l-cell">Mongolian</div>
  <div class="l-cell">Malay</div>
  <div class="l-cell">Norwegian</div>
  <div class="l-cell">Dutch</div>
  <div class="l-cell">Polish</div>
  <div class="l-cell">Portuguese</div>
  <div class="l-cell">Romanian</div>
  <div class="l-cell">Russian</div>
  <div class="l-cell">Northern Sami</div>
  <div class="l-cell">Slovenian</div>
  <div class="l-cell">Albanian</div>
  <div class="l-cell">Serbian</div>
  <div class="l-cell">Swedish</div>
  <div class="l-cell">Turkish</div>
  <div class="l-cell">Ukrainian</div>
  <div class="l-cell">Vietnamese</div>
  <div class="l-cell">Chinese</div>
</div>
