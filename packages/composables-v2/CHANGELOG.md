# Changelog

All notable changes to `@propeller-commerce/propeller-v2` are documented here.
The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.1.0]

Initial release.

A v2 rewrite of the Propeller VSF composables and getters, with a public API
identical to the v1 `@propeller-commerce/propeller` package — same composable
and getter names and members — rewired internally onto `propeller-api-v2` and
the v2 SDK. Ships `useCart`, `useProduct`, `useFacet`, `useBilling`,
`useShipping`, `useMakeOrder`, the `cartGetters` / `productGetters` /
`facetGetters` getter sets, and the Nuxt plugin, so a Nuxt 2 / Vue 2 storefront
can move from Propeller GraphQL v1 to v2 with a dependency repoint and minimal
call-site changes.
