# Customization

You can register your custom rules easily.

## Register

```ts
import { validate, setLocales, register } from "robust-validator";
import en from "robust-validator/dist/i18n/en.json";

// Setting the locales firsrts
setLocales(en);

const ruleFunction = (value: any) => {
  // TODO: add your custom rule logic here
  return false;
};

register(
  "exists", // The rule name
  ruleFunction, // The rule functions
  // Translations
  {
    en: "The record doesn't exists on database: {0}",
  },
);

const validateData = async () => {
  const result = await validate(
    { email: "user@example.com" },
    {
      email: "required|exists:users",
    },
  );
};
```
