// TODO: Import types/enums from GraphQL.ts
export enum CartAddressType {
  invoice,
  delivery,
}

export enum Gender {
  M,
  F,
  U,
}

export enum YesNo {
  Y = 'Y',
  N = 'N',
}

export enum CrossupsellTypes {
  ACCESSORIES,
  ALTERNATIVES,
  OPTIONS,
  PARTS,
  RELATED,
}

export enum SortOrder {
  asc,
  desc,
}

enum SortableFields {
  sku,
  supplierCode,
  dateCreated,
  dateChanged,
  name,
  shortName,
  price,
  relevance,
}

type ImagesInput = {
  siteId: number;
};

type LanguageInput = {
  language: string;
};

type CartAddBundle = {
  cartId: string;
  bundleId: number;
  quantity: number;
  notes?: string;
};

type CartAddItem = {
  cartId: string;
  productId: number;
  quantity: number;
};

type CartDeleteItem = {
  cartId: string;
  itemId: number;
};

type CartProcess = {
  cartId: string;
  orderStatus: string;
};

type CartUpdateAddress = {
  cartId: string;
  type: CartAddressType;
  postalCode: string;
  street: string;
  city: string;
  number: string;
  firstName: string;
  lastName: string;
  middleName?: string;
  company?: string;
  gender?: Gender;
  numberExtension?: string;
  region?: string;
  country?: string;
  code?: string;
  email?: string;
  mobile?: string;
  phone?: string;
  url?: string;
  icp?: YesNo;
  notes?: string;
};

type CartUpdateItem = {
  cartId: string;
  quantity: number;
  notes?: string;
  itemId: number;
};

type CartSetUser = {
  cartId: string;
  userId: number;
};

type CrossUpsellTypesInput = {
  types?: [CrossupsellTypes];
  subTypes?: [string];
};

type CrossUpsellInput = {
  input: CrossUpsellTypesInput;
};

type CrossUpsellTypes = {
  crossupsellTypesInput?: CrossUpsellInput;
};

export type AttributeFilterInput = {
  name?: [string?];
  isPublic?: boolean;
};

export type AttributeFilter = {
  attributeFilters?: AttributeFilterInput;
};

export type CartSetUserInput = {
  input: CartSetUser;
};

export type CartStartInput = {
  siteId: number;
};

export type CategoriesInput = {
  categoryId: number;
};

export type TextFilterInput = {
  searchId: string;
  values: [string];
  exclude?: boolean;
  type?: any;
};

export type SortInput = {
  field: SortableFields;
  order: SortOrder;
};

export interface BundleDetailInput
  extends AttributeFilter,
    ImagesInput,
    LanguageInput {
  bundleId: number;
}

export interface CartInput extends AttributeFilter, ImagesInput, LanguageInput {
  cartId: string;
}

export interface CartAddActionCodeInput
  extends AttributeFilter,
    ImagesInput,
    LanguageInput {
  cartId: string;
  actionCode: string;
}

export interface CartAddBundleInput
  extends AttributeFilter,
    ImagesInput,
    LanguageInput {
  input: CartAddBundle;
}

export interface CartAddItemInput
  extends AttributeFilter,
    ImagesInput,
    LanguageInput {
  input: CartAddItem;
}

export interface CartDeleteItemInput
  extends AttributeFilter,
    ImagesInput,
    LanguageInput {
  input: CartDeleteItem;
}

export interface CartProcessInput extends AttributeFilter {
  input: CartProcess;
}

export interface CartRemoveActionCodeInput
  extends AttributeFilter,
    ImagesInput,
    LanguageInput {
  cartId: string;
  actionCode: string;
}

export interface CartUpdateAddressInput {
  input: CartUpdateAddress;
}

export interface CartUpdateItemInput
  extends AttributeFilter,
    ImagesInput,
    LanguageInput {
  input: CartUpdateItem;
}

export interface ProductInput
  extends AttributeFilter,
    CrossUpsellTypes,
    ImagesInput,
    LanguageInput {
  id?: number;
  productId?: number;
  sku?: string;
  slug?: string;
}

export interface ProductsInput extends ImagesInput, LanguageInput {
  slug: string;
  offset?: number;
  page?: number;
  sort?: SortInput;
  textFilters?: [TextFilterInput];
  attributeFilters?: AttributeFilterInput;
  hasBundle?: YesNo;
  isBundleLeader?: YesNo;
}
