<script setup>
import { ref, computed } from "vue";
import { validate, setLocales } from "axe-api-validator";
import en from "axe-api-validator/dist/i18n/en.json";
import tr from "axe-api-validator/dist/i18n/tr.json";

setLocales(tr);

const data = ref({
  email: "",
});
const result = ref(null);

const rules = {
  email: "required|email|min:1|max:50",
};

const check = async () => {
  result.value = await validate(data.value, rules, { language: "tr" });
};

const onInput = async (key, value) => {
  data.value[key] = value;
  check();
};
</script>

<template>
  <div>
    <div class="form-group">
      <label for="input-email">Email</label>
      <input
        id="input-email"
        type="text"
        placeholder="type email here"
        @input="(event) => onInput('email', event.target.value)"
      />
    </div>
    <pre>{{ rules }}</pre>
    <pre>{{ data }}</pre>

    <pre>{{ result }}</pre>
  </div>
</template>

<style lang="scss">
div.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 3px;
  font-size: 18px;
}

input {
  background: #161618;
  color: #ddd;
  padding: 10px;
  font-size: 18px;
  border-radius: 4px;

  &::placeholder {
    color: #888;
  }
}

pre {
  background-color: #161618;
  padding: 10px;
  border-radius: 5px;
}
</style>
