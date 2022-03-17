import {
  YesNo,
  SortInput,
  TextFilterInput,
  Gender,
  CartAddressType,
} from './Inputs';

export type BundleDetailArguments = {
  bundleId: string;
};

export type CartAddActionCodeArguments = {
  cartId: string;
  actionCode: string;
};

export type CartAddBundleArguments = {
  cartId: string;
  bundleId: number;
  quantity: number;
};

export type CartAddItemArguments = {
  cartId: string;
  productId: number;
  quantity: number;
};

export type CartDeleteItemArguments = {
  cartId: string;
  itemId: number;
};

export type CartProcessArguments = {
  cartId: string;
  orderStatus: string;
};

export type CartRemoveActionCodeArguments = {
  cartId: string;
  actionCode: string;
};

export type CartSetUserArguments = {
  cartId: string;
  userId: number;
};

export type CartUpdateAddressArguments = {
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

export type CartUpdateItemArguments = {
  cartId: string;
  quantity: number;
  notes?: string;
  itemId: number;
};

export type ProductDetailArguments = {
  id?: string;
};

export type ProductsArguments = {
  categorySlug: string;
  offset?: number;
  page?: number;
  sort?: SortInput;
  textFilters?: [TextFilterInput];
  hasBundle?: YesNo;
  isBundleLeader?: YesNo;
};
