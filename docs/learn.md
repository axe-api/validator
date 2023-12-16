<script setup>
import Demo from "./Demo.vue"
</script>

# Installation

The library can be installed into an existing project:

```bash
$ npm install --save axe-api-validator
```

## Usage

Using `axe-api-validator` is very simple.

You should just call the `validate()` function with data and the definition.

```js
import { validate } from "axe-api-validator";

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
