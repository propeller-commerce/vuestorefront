# Changelog

All notable changes to `@propeller-commerce/propeller-api-v2` are documented here.
The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.1.0]

Initial release.

A v1-shaped api-client that delegates to `@propeller-commerce/propeller-sdk-v2`,
letting the Nuxt 2 / Vue 2 storefront consume Propeller GraphQL v2 without
changing its call sites. Exposes the same method surface the v1 api-client did
(`cart`, `cartStart`, `cartAddItem`, `cartAddBundle`, `cartUpdateItem`,
`cartDeleteItem`, `cartUpdate`, `cartUpdateAddress`, `cartAddActionCode`,
`cartRemoveActionCode`, `cartProcess`, `productDetail`, `bundleDetail`,
`products`, `bundles`, `categories`), each adapting params/results to the v2
service methods. Includes a `/server` middleware entry and per-product
attribute enrichment for the listing endpoints.
