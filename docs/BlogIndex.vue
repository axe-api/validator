<script setup lang="ts">
const posts = [
  {
    time: "13 July, 2025",
    title:
      "How to Build a Custom Validation Rule in JavaScript with Robust Validator",
    url: "/blog/2025-07-13-how-to-build-a-custom-validation-rule-in-javascript-with-robust-validator",
  },
  {
    time: "12 July, 2025",
    title: "How to Validate Nested Objects in JavaScript with Robust Validator",
    url: "/blog/2025-07-12-how-to-validate-nested-objects-in-javascript-with-robust-validator",
  },
  {
    time: "12 July, 2025",
    title: "What’s New in Robust Validator v3",
    url: "/blog/2025-07-13-whats-new-in-robust-validator-v3",
  },
];
</script>

<template>
  <ul class="blog-list">
    <li class="blog-entry" v-for="post of posts" :key="post.time">
      <article>
        <time>{{ post.time }}</time>
        <h2 class="title">
          <a :href="post.url">{{ post.title }}</a>
        </h2>
      </article>
    </li>
  </ul>
</template>

<style scoped>
.blog-list {
  list-style-type: none;
  padding: 0;
}
.blog-entry {
  margin-top: 3em;
  border-bottom: 1px solid var(--vp-c-divider);
}
.blog-entry time {
  font-size: 14px;
}
.title {
  border: none;
  margin-top: 0;
  padding-top: 0;
  font-size: 22px;
}
.title a {
  font-weight: 600;
  text-decoration: none;
}
</style>
