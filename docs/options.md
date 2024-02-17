# Options

## Default options

You can set options for the validator.

```ts
import { validate, setLocales, setOptions, en } from "robust-validator";

setLocales(en);

// Setting the default options
setOptions({
  stopOnFail: true,
  language: "en",
  dateFormat: "YYYY-MM-DD",
});
```

## Active options

You can override the default options for a validate action like the following example:

```ts
import { validate, setLocales, setOptions, en } from "robust-validator";

setLocales(en);

// Setting the default options
setOptions({
  stopOnFail: true,
  language: "en",
  dateFormat: "YYYY-MM-DD",
});

await validate(
  data,
  { email: "required" },
  // You can override any of the following property
  {
    stopOnFail: false,
    language: "de",
    dateFormat: "YYYY-MM-DD",
  },
);
```
