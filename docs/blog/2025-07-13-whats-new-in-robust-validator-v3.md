---
sidebar: false
editLink: false
outline: false
prev: false
next: false
---

# What’s New in Robust Validator v3

## A Thoughtful Step Forward

I’ll be honest. I’m not a fan of major releases.

They often break things, demand extra effort from developers, and create friction in otherwise smooth projects. I try to avoid them whenever possible.

But this one had to happen.

Some internal rule definitions were structured in ways that caused subtle issues and made future flexibility harder. Fixing that meant breaking changes, even though the overall API remains very familiar.

The good news? The changes are minimal, and upgrading should be painless.

## TL;DR

If you're upgrading to v3, here’s what you need to update:

Rename deprecated rule names:

`in` → `includes`

`isIn` → `isIncludes`

String rules:
`in:admin,moderator` → `includes:admin,moderator`

Do a find-and-replace in your rule definitions and imports. No major logic changes, just clearer names and reserved keyword fixes.

```ts
// Before
import { in, isIn } from "robust-validator";

// After
import { includes, isIncludes } from "robust-validator";
```

```ts
// Before:
await validate(data, { role: "in:admin,moderator" });

// After:
await validate(data, { role: "includes:admin,moderator" });
```

## What Went Wrong?

This release was sparked by a real-world issue flagged by someone ([@christoph-kluge](https://github.com/christoph-kluge)) using the library. We worked through it together, trying a few fixes along the way. But no matter how we patched things ([#67](https://github.com/axe-api/validator/pull/67), [#70](https://github.com/axe-api/validator/issues/70), [#71](https://github.com/axe-api/validator/pull/71), [#73](https://github.com/axe-api/validator/issues/73)), the problem kept showing up.

Eventually, things got messy. Some of the rule names were using reserved JavaScript keywords. On top of that, the documentation didn’t reflect how those rules actually worked. That combination led to confusion, bugs, and edge cases that were hard to debug.

It wasn’t just a surface-level issue. That’s why this version exists.

## The Real Culprit: `in`

The main problem came down to a poorly chosen rule name: `in`.

In earlier versions, the library exported both `in` and `isIn`. But they served different purposes:

`in` was just a tiny helper that turned function-based rule definitions into string-based ones.

::: code-group

```ts [in.ts]
export default (items: string[]): string => {
  return `includes:${items.join(",")}`;
};
```

:::

`isIn` was the actual validation rule.

::: code-group

```ts [isIn.ts]
export default (value: unknown, options: string): boolean => {
  // validation
};
```

::: code-group

The issue? `in` is a **reserved keyword in JavaScript**. While technically allowed in some contexts, using it as a named export created all kinds of unexpected behavior.

To make things worse, the documentation didn’t clearly explain the difference between `in` and `isIn`.

## A Clean Rename: `includes` Instead of `in`

To fix the issue without introducing more confusion, I’ve renamed the affected rule and helper functions.

Here’s what changed:

- `in` → `includes`
- `isIn` → `isIncludes`
- String rule format: `in:admin,moderator` → `includes:admin,moderator`

The new name avoids conflicts with JavaScript keywords and better reflects what the rule actually does.

This is technically a breaking change, but it's easy to update. A simple find-and-replace in your rule definitions should do the trick.

## Final Thoughts

Major releases are never easy, and I don’t take them lightly. But this one clears up some long-standing issues and makes the library more reliable moving forward.

If you're upgrading, the changes are small and straightforward. And as always, feel free to open a discussion or issue if you run into anything unexpected.

Thanks to everyone who’s been using Robust Validator, reporting bugs, and helping shape it into something better. Your feedback really matters.

Let’s keep it robust. 💛
