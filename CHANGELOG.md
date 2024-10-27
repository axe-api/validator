# Release Notes

## [2.1.1 (2024-10-27)](https://github.com/axe-api/axe-api/compare/2.1.1...2.1.0)

- TypeError: list.map is not a function [#62](https://github.com/axe-api/validator/issues/62)

## [2.1.0 (2024-10-19)](https://github.com/axe-api/axe-api/compare/2.1.0...2.0.1)

- Added `isRegistered()` function. [#60](https://github.com/axe-api/validator/issues/60)

## [2.0.1 (2024-09-28)](https://github.com/axe-api/axe-api/compare/2.0.1...2.0.0)

- Fixed validation messages in English

## [2.0.0 (2024-09-27)](https://github.com/axe-api/axe-api/compare/2.0.0...1.1.1)

- Fixed bundling issues
- The [dayjs](https://day.js.org) library with [date-fns](https://date-fns.org). You _MUST_ replace the date formats:
  - `YYYY-MM-DD` => `yyyy-MM-dd`

## [1.1.1 (2024-09-19)](https://github.com/axe-api/axe-api/compare/1.1.1...1.1.0)

- Security fix

## [1.1.0 (2024-02-17)](https://github.com/axe-api/axe-api/compare/1.1.0...1.0.1)

- Fixed bundling issues
- Reduced library size.
- Fixed custom rule registration issue [#43](https://github.com/axe-api/validator/issues/43)

### Breaking changes

Before:

```ts
import { validate, setLocales } from "robust-validator";
import en from "robust-validator/dist/i18n/en.json";
```

After:

```ts
import { validate, setLocales, en } from "robust-validator";
```

## [1.0.1 (2024-02-16)](https://github.com/axe-api/axe-api/compare/1.0.1...1.0.0)

### Fixed

- Fixed module target

## [1.0.0 (2024-02-11)](https://github.com/axe-api/axe-api/compare/1.0.0...1.0.0)

- Initial version
