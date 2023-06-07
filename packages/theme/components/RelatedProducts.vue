<template>
  <SfSection :title-heading="title" class="section">
    <SfLoader :class="{ loading }" :loading="loading">
      <SfCarousel
        :settings="{ peek: 16, breakpoints: { 1023: { peek: 0, perView: 2 } } }"
        class="carousel"
      >
        <SfCarouselItem
          class="carousel__item"
          v-for="(crossupsell, i) in crossupsells"
          :key="i"
        >
          <SfProductCard
            :title="productGetters.getName(crossupsell.item)"
            :image="productGetters.getCoverImage(crossupsell.item)"
            :regular-price="
              $n(
                productGetters.getPrice(crossupsell.item).regular,
                'currency'
              )
            "
            :max-rating="5"
            :show-add-to-cart-button="true"
            :link="
              localePath(
                `/p/${productGetters.getId(
                  crossupsell.item
                )}/${productGetters.getSlug(crossupsell.item)}`
              )
            "
            class="product-card"
            @click:add-to-cart="
              addItemToCart({ product: crossupsell.item, quantity: 1 })
            "
          />
        </SfCarouselItem>
      </SfCarousel>
    </SfLoader>
  </SfSection>
</template>

<script lang="ts">
import {
  SfCarousel,
  SfProductCard,
  SfSection,
  SfLoader,
} from '@storefront-ui/vue';
import {
  productGetters,
  useWishlist, // eslint-disable-line @typescript-eslint/no-unused-vars, no-unused-vars
  wishlistGetters, // eslint-disable-line @typescript-eslint/no-unused-vars, no-unused-vars
  useCart,
} from '@propeller-commerce/propeller';
import { computed } from '@vue/composition-api'; // eslint-disable-line @typescript-eslint/no-unused-vars, no-unused-vars
import { addBasePath } from '@vue-storefront/core';

export default {
  name: 'RelatedProducts',
  components: {
    SfCarousel,
    SfProductCard,
    SfSection,
    SfLoader,
  },
  props: {
    title: String,
    crossupsells: Array,
    loading: Boolean,
  },
  setup() {
    const { addItem: addItemToCart, isInCart } = useCart();

    return {
      productGetters,
      addItemToCart,
      isInCart,
      addBasePath,
    };
  },
};
</script>

<style lang="scss" scoped>
.section {
  margin-top: var(--spacer-base);
}

.carousel {
  margin: 0 calc(0 - var(--spacer-sm)) 0 0;
  @include for-desktop {
    margin: 0;
  }
  &__item {
    margin: 1.9375rem 0 2.4375rem 0;
  }
}
</style>
