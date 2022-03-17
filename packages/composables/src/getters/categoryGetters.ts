import { CategoryGetters, AgnosticCategoryTree } from '@vue-storefront/core';
import type { Category } from '@propeller-commerce/propeller-api';

// TODO: Add category type
const createAgnosticCategory = (category: any): AgnosticCategoryTree => {
  return {
    label: category.name[0].value,
    slug: `/${category.slug[0].value}`,
    items: [], // TODO
    isCurrent: false,
  };
};
// TODO: Add category type
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getTree(category: any): AgnosticCategoryTree {
  return category.map((categoryTree) => createAgnosticCategory(categoryTree));
}

export const categoryGetters: CategoryGetters<Category> = {
  getTree,
};
