<template>
  <div class="sf-header__navigation desktop" v-if="!isMobile">
    <SfHeaderNavigationItem
      v-for="(category, index) in categoryTree"
      :key="index"
      class="nav-item"
      v-e2e="`app-header-url_${category.label}`"
      :label="category.label"
      :link="localePath(getAgnosticCatLink(category))"
    />
  </div>
  <SfModal v-else :visible="isMobileMenuOpen">
    <SfHeaderNavigationItem
      v-for="(category, index) in categoryTree"
      :key="index"
      class="nav-item"
      v-e2e="`app-header-url_${category.label}`"
    >
      <template #mobile-navigation-item>
        <SfMenuItem
          :label="category.label"
          class="sf-header-navigation-item__menu-item"
          :link="localePath(getAgnosticCatLink(category))"
          @click="toggleMobileMenu"
        />
      </template>
    </SfHeaderNavigationItem>
  </SfModal>
</template>

<script>
import { SfMenuItem, SfModal } from '@storefront-ui/vue';
import { useUiState, useUiHelpers } from '~/composables';
import { computed } from '@nuxtjs/composition-api';
import { categoryGetters, useCategory } from '@propeller-commerce/propeller';
import { onSSR } from '@vue-storefront/core';

export default {
  name: 'HeaderNavigation',
  components: {
    SfMenuItem,
    SfModal,
  },
  props: {
    isMobile: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    const { isMobileMenuOpen, toggleMobileMenu } = useUiState();
    const { getAgnosticCatLink } = useUiHelpers();

    const { categories: categoryList, search: categoriesListSearch } =
      useCategory('HeaderNavigation:CategoryList');

    const categoryTree = computed(() =>
      categoryGetters.getTree(categoryList.value)
    );
    // ?.items.filter((c) => c.count > 0)

    onSSR(async () => {
      await categoriesListSearch();
    });

    return {
      categoryTree,
      isMobileMenuOpen,
      toggleMobileMenu,
      getAgnosticCatLink,
    };
  },
};
</script>

<style lang="scss" scoped>
.sf-header-navigation-item {
  ::v-deep &__item--mobile {
    display: block;
  }
}
.sf-modal {
  ::v-deep &__bar {
    display: none;
  }
  ::v-deep &__content {
    padding: var(--modal-content-padding, var(--spacer-base) 0);
  }
}
</style>
