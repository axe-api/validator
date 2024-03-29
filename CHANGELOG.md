# Release Notes

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
