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

You should just call the `validate()` function with data and rules.

```js
import validate from "axe-api-validator";

const data = {
  email: "foo@bar.com",
  name: "John",
  surname: "Doe",
};

const rules = {
  email: "required|email",
  name: "required|min:1|max:50",
  surname: "required|min:1|max:50",
};

const result = await validate(data, rules);
```

## Vue Demo

```js
import { ref, computed } from "vue";
import validate from "axe-api-validator";

const data = ref({
  email: "",
  name: "",
  surname: "",
});

const rules = {
  email: "required|email",
  name: "required|min:1|max:10",
  surname: "required|min:1|max:10",
};

const validation = computed(() => validate(data.value, rules));
```

<Demo />
