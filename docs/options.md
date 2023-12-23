# Options

## Default options

You can set options for the validator.

```ts
import { validate, setLocales, setOptions } from "robust-validator";
import en from "robust-validator/dist/i18n/en.json";

setLocales(en);

// Setting the default options
setOptions({
  stopOnFail: true,
  language: "en",
});
```

## Active options

You can override the default options for a validate action like the following example:

```ts
import { validate, setLocales, setOptions } from "robust-validator";
import en from "robust-validator/dist/i18n/en.json";

setLocales(en);

// Setting the default options
setOptions({
  stopOnFail: true,
  language: "en",
});

await validate(
  data,
  { email: "required" },
  { stopOnFail: false, language: "de" }, // Override
);
```
