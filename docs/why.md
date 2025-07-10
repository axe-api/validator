# Why?

Discovering a data validation library that seamlessly combines ease of use, the ability to store validation rules for future use, and robust internationalization (i18n) support is a formidable challenge. While numerous data validation libraries exist, finding one that fulfills all these criteria is often elusive. Some libraries that do meet these requirements are unfortunately no longer actively maintained.

Robust Validator was born out of the need for a versatile data validation solution that not only simplifies the validation process but also empowers developers with the flexibility to preserve and reuse validation rules. This library aims to bridge the gap by offering a user-friendly experience, ensuring your validation needs are met comprehensively.

Why choose Robust Validator? It's more than just a data validation tool; it's a commitment to providing a reliable, well-maintained, and feature-rich solution for developers who value simplicity and effectiveness in their projects.

## Principles

I decided on some fundamental rules while building this library:

- Every validation rule should be an independent function.
- Every validation rule should be able to be used separately
- All validation definition should be able to be stored anywhere (database, memory, configuration files, 3rd party API, etc) to be used later.
- All validation rules should be able to be used in different languages.
- Contribution to the rule set should be easy.
- Should be well-documented.
