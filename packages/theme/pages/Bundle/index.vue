<template>
  <div id="bundle">
    <ul id="example-1">
      <li v-for="product in products" :key="productGetters.getSlug(product)">
        {{ productGetters.getBundleProducts(product) }}
      </li>
    </ul>
  </div>
</template>

<script>
import {
  SfSidebar,
  SfButton,
  SfList,
  SfIcon,
  SfHeading,
  SfMenuItem,
  SfFilter,
  SfProductCard,
  SfProductCardHorizontal,
  SfPagination,
  SfAccordion,
  SfSelect,
  SfBreadcrumbs,
  SfLoader,
  SfColor,
  SfProperty,
} from '@storefront-ui/vue';
import { computed, ref } from '@nuxtjs/composition-api';
import {
  useCart,
  useWishlist,
  productGetters,
  useFacet,
  facetGetters,
  wishlistGetters,
} from '@propeller-commerce/propeller';
import { useUiHelpers, useUiState } from '~/composables';
import { onSSR } from '@vue-storefront/core';
import LazyHydrate from 'vue-lazy-hydration';
import cacheControl from './../../helpers/cacheControl';
import CategoryPageHeader from '~/components/CategoryPageHeader';

// TODO(addToCart qty, horizontal): https://github.com/vuestorefront/storefront-ui/issues/1606
export default {
  transition: 'fade',
  middleware: cacheControl({
    'max-age': 60,
    'stale-when-revalidate': 5,
  }),
  setup(props, context) {
    const th = useUiHelpers();
    const uiState = useUiState();
    const { addItem: addItemToCart, isInCart } = useCart();
    const { result, search, loading, error } = useFacet();
    const {
      addItem: addItemToWishlist,
      isInWishlist,
      removeItem: removeItemFromWishlist,
      wishlist,
    } = useWishlist();

    const productsQuantity = ref({});
    const products = computed(() => facetGetters.getProducts(result.value));
    const categoryTree = computed(() =>
      facetGetters.getCategoryTree(result.value)
    );
    const breadcrumbs = computed(() =>
      facetGetters.getBreadcrumbs(result.value)
    );
    const pagination = computed(() => facetGetters.getPagination(result.value));
    const activeCategory = computed(() => {
      const items = categoryTree.value.items;

      if (!items || !items.length) {
        return '';
      }

      const category = items.find(
        ({ isCurrent, items }) =>
          isCurrent || items.find(({ isCurrent }) => isCurrent)
      );

      return category?.label || items[0].label;
    });

    const removeProductFromWishlist = (productItem) => {
      const productsInWhishlist = computed(() =>
        wishlistGetters.getItems(wishlist.value)
      );
      const product = productsInWhishlist.value.find(
        (wishlistProduct) => wishlistProduct.variant.sku === productItem.sku
      );
      removeItemFromWishlist({ product });
    };

    const addToCart = ({ product, quantity }) => {
      const { classId, sku } = product;
      addItemToCart({
        product: { classId, sku },
        quantity,
      });
    };

    onSSR(async () => {
      await search({
        ...th.getFacetsFromURL(),
        categorySlug: 'examenbundel',
        hasBundle: true,
      });
      if (error?.value?.search) context.root.$nuxt.error({ statusCode: 404 });
    });

    return {
      ...uiState,
      th,
      products,
      categoryTree,
      loading,
      productGetters,
      pagination,
      activeCategory,
      breadcrumbs,
      addItemToWishlist,
      removeProductFromWishlist,
      isInWishlist,
      addToCart,
      isInCart,
      productsQuantity,
    };
  },
  components: {
    CategoryPageHeader,
    SfButton,
    SfSidebar,
    SfIcon,
    SfList,
    SfFilter,
    SfProductCard,
    SfProductCardHorizontal,
    SfPagination,
    SfMenuItem,
    SfAccordion,
    SfSelect,
    SfBreadcrumbs,
    SfLoader,
    SfColor,
    SfHeading,
    SfProperty,
    LazyHydrate,
  },
};
</script>

<style lang="scss" scoped>
#category {
  box-sizing: border-box;
  @include for-desktop {
    max-width: 1240px;
    margin: 0 auto;
  }
}
.main {
  &.section {
    padding: var(--spacer-xs);
    @include for-desktop {
      padding: 0;
    }
  }
}
.breadcrumbs {
  margin: var(--spacer-base) auto var(--spacer-lg);
}
.navbar {
  position: relative;
  display: flex;
  border: 1px solid var(--c-light);
  border-width: 0 0 1px 0;
  @include for-desktop {
    border-width: 1px 0 1px 0;
  }
  &.section {
    padding: var(--spacer-sm);
    @include for-desktop {
      padding: 0;
    }
  }
  &__aside {
    display: flex;
    align-items: center;
    padding: var(--spacer-sm) 0;
    flex: 0 0 15%;
    padding: var(--spacer-sm) var(--spacer-sm);
    border: 1px solid var(--c-light);
    border-width: 0 1px 0 0;
  }
  &__title {
    --heading-title-font-weight: var(--font-weight--semibold);
    --heading-title-font-size: var(--font-size--xl);
  }
}
.main {
  display: flex;
}
.list {
  --menu-item-font-size: var(--font-size--sm);
  &__item {
    &:not(:last-of-type) {
      --list-item-margin: 0 0 var(--spacer-sm) 0;
    }
    .nuxt-link-exact-active {
      text-decoration: underline;
    }
  }
}
.products {
  box-sizing: border-box;
  flex: 1;
  margin: 0;
  &__grid {
    justify-content: center;
    @include for-desktop {
      justify-content: flex-start;
    }
  }
  &__grid,
  &__list {
    display: flex;
    flex-wrap: wrap;
  }
  &__product-card {
    --product-card-title-margin: var(--spacer-base) 0 0 0;
    --product-card-title-font-weight: var(--font-weight--medium);
    --product-card-title-margin: var(--spacer-xs) 0 0 0;
    flex: 1 1 50%;
    @include for-desktop {
      --product-card-title-font-weight: var(--font-weight--normal);
      --product-card-add-button-bottom: var(--spacer-base);
      --product-card-title-margin: var(--spacer-sm) 0 0 0;
    }
  }
  &__product-card-horizontal {
    flex: 0 0 100%;
    @include for-mobile {
      ::v-deep .sf-image {
        --image-width: 5.3125rem;
        --image-height: 7.0625rem;
      }
    }
  }
  &__slide-enter {
    opacity: 0;
    transform: scale(0.5);
  }
  &__slide-enter-active {
    transition: all 0.2s ease;
    transition-delay: calc(0.1s * var(--index));
  }
  @include for-desktop {
    &__grid {
      margin: var(--spacer-sm) 0 0 var(--spacer-sm);
    }
    &__pagination {
      display: flex;
      justify-content: flex-start;
      margin: var(--spacer-xl) 0 0 0;
    }
    &__product-card-horizontal {
      margin: var(--spacer-lg) 0;
    }
    &__product-card {
      flex: 1 1 25%;
    }
    &__list {
      margin: 0 0 0 var(--spacer-sm);
    }
  }
  &__show-on-page {
    display: flex;
    justify-content: flex-end;
    align-items: baseline;
    &__label {
      font-family: var(--font-family--secondary);
      font-size: var(--font-size--sm);
    }
  }
}
.sidebar {
  flex: 0 0 15%;
  padding: var(--spacer-sm);
  border: 1px solid var(--c-light);
  border-width: 0 1px 0 0;
}
.loading {
  margin: var(--spacer-3xl) auto;
  @include for-desktop {
    margin-top: 6.25rem;
  }
  &--categories {
    @include for-desktop {
      margin-top: 3.75rem;
    }
  }
}
</style>
