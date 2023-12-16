# Terminology

In this section, we are going to explain the basic terminology.

## Rule

A rule is a function that takes at least one argument (value) and validates the data. It should return a `true` or `false` value as a return.

The following type definition is the definition of a rule function.

```ts
type RuleFunction = (...args: any[]) => boolean;
```

The first parameter of a rule function should be the value that will be validated always.

```ts
export default (value: any): boolean => {
  // Return `true` if the `value` is valid.
  return true;
};
```

A rule function always might have more parameters if it needs them. For example, if you want to check the minimum string size, the rule function should have to parameter like the following example.

```ts
export default (value: any, size: any): boolean => {
  // Return `true` if the `value` is valid.
  return true;
};
```

A rule should be able to execute directly.

```ts
import { isRequired } from "axe-validator";

const result = isRequired("data");
```

## Definition

The definition means which rule sets will be executed for data.

It should be an object like the following example:

```js
const definition = {
  email: "required|email",
  name: "required|min:1|max:50",
  surname: "required|min:1|max:50",
};
```

For each data property, the rule names should be defined.

The `|` should be used to be able to use multiple rule names at the same time:

`required|email|alpha`

All possible rule parameters should be defined between the `:` operator.

`required|min:1|max:50|between:1:50`
