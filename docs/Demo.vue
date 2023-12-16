<script setup>
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

const onInput = (key, value) => {
  data.value[key] = value;
};

const result = computed(() => {
  return validate(data.value, rules);
});
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
    <div class="form-group">
      <label for="input-name">Name</label>
      <input
        id="input-name"
        type="text"
        placeholder="John"
        @input="(event) => onInput('name', event.target.value)"
      />
    </div>
    <div class="form-group">
      <label for="input-surname">Surname</label>
      <input
        id="input-surname"
        type="text"
        placeholder="John"
        @input="(event) => onInput('surname', event.target.value)"
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
