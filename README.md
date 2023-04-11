<div align="center">
  <img src="https://user-images.githubusercontent.com/1626923/137092657-fb398d20-b592-4661-a1f9-4135db0b61d5.png" alt="Vue Storefront" height="80px" />
</div>

# Vue Storefront 2 integration for Propeller Commerce

## Overview

This repository contains Propeller integration for [Vue Storefront 2](https://github.com/vuestorefront/vue-storefront/).

This integration is being developed and maintained by [Propeller](https://propel.us)

<a href="https://propel.us/"><img src="https://propel.us/wp-content/themes/ecs-propeller/assets/build/images/theme/logo-blue.png" height="100px" /></a>

## Requirements

- Node 14.15+

## Getting Started

1. Clone this repository

```sh
git clone https://github.com/propeller-commerce/vuestorefront.git
```

2. Install all required dependencies:

```sh
yarn install
```

3. Set backend URL via env variable (or create .env file inside Theme folder)

```sh
export PROPELLER_ENDPOINT=
export PROPELLER_APIKEY=
```

4. Then verify if everything works properly by building all three projects:

```sh
yarn build
```

5. If everything built properly, you can start working on your new frontend with:

```sh
yarn dev
```

## Repository structure

The monorepo contains three submodules:

- api-client - low level backend API connector, utilizing Propeller GraphQL API
- composables - reusable business logic
- theme - Nuxt.js-based frontend application

For more details, refer to the official [architecture diagram](https://docs.vuestorefront.io/v2/advanced/architecture.html).

## Resources

- [Vue Storefront Documentation](https://docs.vuestorefront.io/v2/)
