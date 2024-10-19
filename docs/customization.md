# Customization

You can register your custom rules easily.

## `register()`

```ts
import { validate, setLocales, register, en } from "robust-validator";

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

## `isRegister()`

You can check if the rule is already register.

```ts
import { isRegistered, register } from "robust-validator";

if (!isRegistered("myCustomRule")) {
  // register your rule
}
```
