<script setup>
import axios from "axios";
import { ref, computed } from "vue";
import { validate, setLocales } from "robust-validator";
import en from "robust-validator/dist/i18n/en.json";

setLocales(en);

const data = ref({ email: "" });
const result = ref(null);

const validateData = async () => {
  console.log("validateData");
  result.value = await validate(data.value, {
    email: "required|email|min:1|max:50",
  });
};

const onInput = async (key, value) => {
  data.value[key] = value;
  check();
};

const syntax = computed(() => {
  if (!result) {
    return "";
  }

  return JSON.stringify(result.value, undefined, 2)
    .replace(/"([^"]+)":/g, '<span class="key">"$1"</span>:')
    .replace(/\b(true|false)\b/g, '<span class="boolean">$1</span>')
    .replace(/\bnull\b/g, '<span class="null">null</span>');
});
</script>

<template>
  <div class="form-group">
    <input
      type="text"
      placeholder="Type email here"
      v-model="data.email"
      @input="validateData"
    />
    <pre v-html="syntax"></pre>
  </div>
</template>

<style lang="scss">
div.form-group {
  margin-top: 20px;
  margin-bottom: 15px;
}

input {
  background: #ddd;
  color: #000;
  padding: 12px;
  font-size: 18px;
  border-radius: 4px;
  min-width: 300px;

  &::placeholder {
    color: #888;
  }
}

pre {
  background-color: #161618;
  padding: 10px;
  border-radius: 5px;
}

.boolean {
  color: #62aeee;
}
.null {
  color: #62aeee;
}
.key {
  color: #d184e8;
}
</style>
