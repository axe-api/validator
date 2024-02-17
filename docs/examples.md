# Demo

In this page, you can find many example codes.

## Vue.js

You can find a Vue.js example here.

::: code-group

```vue [App.vue]
<script setup>
import { ref, computed } from "vue";
import { validate, setLocales, en } from "robust-validator";

setLocales(en);

const data = ref({ email: "" });
const result = ref(null);

const validateData = async () => {
  result.value = await validate(data.value, {
    email: "required|email|min:1|max:50",
  });
};
</script>

<template>
  <input
    type="text"
    placeholder="Type email here"
    v-model="data.email"
    @input="validateData"
  />
</template>
```

:::

## Node.js (CJS)

You can find a Node.js example here.

::: code-group

```js [index.js]
const { validate, setLocales, en } = require("robust-validator");

setLocales(en);

const validate = async (data) => {
  const result = await validate(data, {
    email: "required|email|min:1|max:50",
  });

  console.log(result);
};

validate({
  email: null,
});
```

:::

## Node.js (ESM)

You can find a Node.js (ESM) example here.

::: code-group

```js [index.ts]
import { validate, setLocales, en } from "robust-validator";

setLocales(en);

const validate = async (data) => {
  const result = await validate(data, {
    email: "required|email|min:1|max:50",
  });

  console.log(result);
};

validate({
  email: null,
});
```

:::

## TypeScript

You can find a TypeScript example here.

::: code-group

```js [index.js]
import { validate, setLocales, en } from "robust-validator";

setLocales(en);

const validate = async (data) => {
  const result = await validate(data, {
    email: "required|email|min:1|max:50",
  });

  console.log(result);
};

validate({
  email: null,
});
```

:::
