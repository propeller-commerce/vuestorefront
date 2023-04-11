/* eslint-disable no-use-before-define */
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};

/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  JSONObject: any;
  Upload: any;
};

export type Ace = {
  __typename?: 'Ace';
  aceId: Scalars['Int'];
  alow: Scalars['Int'];
  deny: Scalars['Int'];
};

export type Address = {
  __typename?: 'Address';
  id: Scalars['Int'];
  firstName?: Maybe<Scalars['String']>;
  middleName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  gender?: Maybe<Gender>;
  company?: Maybe<Scalars['String']>;
  street: Scalars['String'];
  number?: Maybe<Scalars['String']>;
  numberExtension?: Maybe<Scalars['String']>;
  postalCode: Scalars['String'];
  city: Scalars['String'];
  region?: Maybe<Scalars['String']>;
  country: Scalars['String'];
  phone?: Maybe<Scalars['String']>;
  mobile?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  fax?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  isDefault: YesNo;
  type: AddressType;
  icp?: Maybe<YesNo>;
  url?: Maybe<Scalars['String']>;
  active?: Maybe<YesNo>;
  name?: Maybe<Scalars['String']>;
};

export enum AddressType {
  Delivery = 'delivery',
  Invoice = 'invoice',
  Home = 'home',
}

export type Attribute = {
  __typename?: 'Attribute';
  id: Scalars['String'];
  name: Scalars['String'];
  searchId: Scalars['String'];
  description: Array<LocalizedString>;
  type: AttributeType;
  typeParam: Scalars['String'];
  group: Scalars['String'];
  isSearchable: Scalars['Boolean'];
  isPublic: Scalars['Boolean'];
  isHidden?: Maybe<Scalars['Boolean']>;
  textValue?: Maybe<Array<LocalizedStringArray>>;
  enumValue?: Maybe<Array<Scalars['String']>>;
  intValue?: Maybe<Array<Scalars['Int']>>;
  decimalValue?: Maybe<Array<Scalars['Float']>>;
  dateValue?: Maybe<Scalars['DateTime']>;
};

export type AttributeDescriptionArgs = {
  language?: Maybe<Scalars['String']>;
};

export type AttributeTextValueArgs = {
  language?: Maybe<Scalars['String']>;
};

export type AttributeDecimalRangeFilter = IAttributeDecimalRangeFilter & {
  __typename?: 'AttributeDecimalRangeFilter';
  min: Scalars['Float'];
  max: Scalars['Float'];
};

export type AttributeFilter = IAttributeFilter & {
  __typename?: 'AttributeFilter';
  id: Scalars['String'];
  searchId: Scalars['String'];
  description: Scalars['String'];
  type: AttributeType;
  isSearchable: Scalars['Boolean'];
  isPublic: Scalars['Boolean'];
  isHidden?: Maybe<Scalars['Boolean']>;
  textFilter?: Maybe<Array<AttributeTextFilter>>;
  integerRangeFilter?: Maybe<AttributeIntegerRangeFilter>;
  decimalRangeFilter?: Maybe<AttributeDecimalRangeFilter>;
};

export type AttributeFilterInput = {
  isSearchable?: Maybe<Scalars['Boolean']>;
  isPublic?: Maybe<Scalars['Boolean']>;
  isHidden?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Array<Scalars['String']>>;
  type?: Maybe<Array<AttributeType>>;
  group?: Maybe<Array<Scalars['String']>>;
};

export type AttributeIntegerRangeFilter = IAttributeIntegerRangeFilter & {
  __typename?: 'AttributeIntegerRangeFilter';
  min: Scalars['Int'];
  max: Scalars['Int'];
};

export type AttributeTextFilter = IAttributeTextFilter & {
  __typename?: 'AttributeTextFilter';
  value: Scalars['String'];
  count: Scalars['Int'];
  countTotal?: Maybe<Scalars['Int']>;
  countActive?: Maybe<Scalars['Int']>;
  isSelected: Scalars['Boolean'];
};

export enum AttributeType {
  Text = 'text',
  List = 'list',
  Enum = 'enum',
  Enumlist = 'enumlist',
  Color = 'color',
  Date = 'date',
  Datetime = 'datetime',
  Object = 'object',
  Integer = 'integer',
  Decimal = 'decimal',
}

export enum Auto {
  Webp = 'WEBP',
}

export type Base64File = {
  __typename?: 'Base64File';
  base64: Scalars['String'];
  contentType: Scalars['String'];
  fileName: Scalars['String'];
};

export type Base64FileInput = {
  base64: Scalars['String'];
  contentType: Scalars['String'];
  fileName: Scalars['String'];
};

export type BulkPrice = {
  __typename?: 'BulkPrice';

  /** @deprecated Bulk price value deprecated in favor of 'net' and 'gross' fields */
  price: Scalars['Float'];
  gross: Scalars['Float'];
  net: Scalars['Float'];
  from: Scalars['Int'];
  to?: Maybe<Scalars['Int']>;
};

export type Bundle = IBundle & {
  __typename?: 'Bundle';
  id: Scalars['Float'];
  comboId: Scalars['Float'];
  name: Scalars['String'];
  description: Scalars['String'];
  discount?: Maybe<Scalars['Float']>;
  condition?: Maybe<Scalars['String']>;
  price?: Maybe<BundlePrice>;
  items?: Maybe<Array<BundleItem>>;
};

export type BundleItem = IBundleItem & {
  __typename?: 'BundleItem';
  productId: Scalars['Int'];
  price?: Maybe<BundlePrice>;
  isLeader: Scalars['String'];
  product: Product;
};

export type BundlePrice = IBundlePrice & {
  __typename?: 'BundlePrice';
  net: Scalars['Float'];
  gross: Scalars['Float'];
  originalNet: Scalars['Float'];
  originalGross: Scalars['Float'];
};

export type CanvasInput = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  widthRatio?: Maybe<Scalars['Int']>;
  heightRatio?: Maybe<Scalars['Int']>;
  x?: Maybe<Scalars['Int']>;
  y?: Maybe<Scalars['Int']>;
  offsetX?: Maybe<Scalars['Int']>;
  offsetY?: Maybe<Scalars['Int']>;
};

export type Cart = ICart & {
  __typename?: 'Cart';
  cartId: Scalars['String'];
  userId: Scalars['Int'];
  carrier: Scalars['String'];
  notes?: Maybe<Scalars['String']>;
  reference?: Maybe<Scalars['String']>;
  extra3?: Maybe<Scalars['String']>;
  extra4?: Maybe<Scalars['String']>;
  orderStatus?: Maybe<Scalars['String']>;
  actionCode?: Maybe<Scalars['String']>;
  couponCode?: Maybe<Scalars['String']>;
  vouchers?: Maybe<Array<CartVoucher>>;
  paymentData?: Maybe<CartPaymentData>;
  postageData?: Maybe<CartPostageData>;
  total?: Maybe<CartTotal>;
  items?: Maybe<Array<CartBaseItem>>;
  bonusItems?: Maybe<Array<CartBaseItem>>;
  invoiceAddress: CartAddress;
  deliveryAddress: CartAddress;
  taxLevels?: Maybe<Array<CartTaxLevel>>;
  payMethods?: Maybe<Array<CartPaymethod>>;
  carriers?: Maybe<Array<CartCarrier>>;
  dateCreated?: Maybe<Scalars['DateTime']>;
  dateChanged?: Maybe<Scalars['DateTime']>;
  incentives?: Maybe<Array<CartIncentive>>;
  valuePoints?: Maybe<Scalars['Int']>;
  user: IBaseUser;
};

export type CartAddBundleInput = {
  cartId: Scalars['String'];
  quantity?: Maybe<Scalars['Int']>;
  notes?: Maybe<Scalars['String']>;
  bundleId: Scalars['Int'];
};

export type CartAddItemInput = {
  cartId: Scalars['String'];
  quantity?: Maybe<Scalars['Int']>;
  notes?: Maybe<Scalars['String']>;
  productId: Scalars['Int'];
};

export type CartAddress = {
  __typename?: 'CartAddress';
  company?: Maybe<Scalars['String']>;
  gender?: Maybe<Gender>;
  firstName: Scalars['String'];
  middleName?: Maybe<Scalars['String']>;
  lastName: Scalars['String'];
  street: Scalars['String'];
  number: Scalars['String'];
  numberExtension?: Maybe<Scalars['String']>;
  postalCode: Scalars['String'];
  city: Scalars['String'];
  region?: Maybe<Scalars['String']>;
  country: Scalars['String'];
  code?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  mobile?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  icp?: Maybe<YesNo>;
  notes?: Maybe<Scalars['String']>;
};

export enum CartAddressType {
  Invoice = 'invoice',
  Delivery = 'delivery',
}

export type CartBaseItem = {
  __typename?: 'CartBaseItem';
  id: Scalars['Int'];
  productId?: Maybe<Scalars['Int']>;
  bundleId?: Maybe<Scalars['Int']>;
  bundle?: Maybe<Bundle>;
  notes: Scalars['String'];
  price: Scalars['Float'];
  priceNet: Scalars['Float'];
  totalPrice: Scalars['Float'];
  totalPriceNet: Scalars['Float'];
  sum: Scalars['Float'];
  sumNet: Scalars['Float'];
  totalSum: Scalars['Float'];
  totalSumNet: Scalars['Float'];
  quantity: Scalars['Int'];
  taxCode: Taxcode;
  expectedDeliveryDate?: Maybe<Scalars['DateTime']>;
  deliveryDeadline?: Maybe<Scalars['DateTime']>;
  discount: Scalars['Float'];
  discountPercentage: Scalars['Float'];
  product?: Maybe<Product>;
};

export type CartBaseItemBundleArgs = {
  taxZone?: Maybe<Scalars['String']>;
};

export type CartCarrier = {
  __typename?: 'CartCarrier';
  name: Scalars['String'];
  description: Scalars['String'];
  logo: Scalars['String'];
  price: Scalars['Float'];
};

export type CartDeleteItemInput = {
  cartId: Scalars['String'];
  itemId: Scalars['Int'];
};

export type CartDeleteResponse = {
  __typename?: 'CartDeleteResponse';
  message: Scalars['String'];
  success: Scalars['Boolean'];
};

export type CartIncentive = {
  __typename?: 'CartIncentive';
  ruleId: Scalars['Int'];
  name: Scalars['String'];
  content: Scalars['String'];
};

export type CartPaymentData = {
  __typename?: 'CartPaymentData';
  netAmount: Scalars['Float'];
  grossAmount: Scalars['Float'];
  tax: Scalars['Float'];
  taxPercentage: Scalars['Float'];
  method: Scalars['String'];
};

export type CartPaymentDataInput = {
  method?: Maybe<Scalars['String']>;
};

export type CartPaymethod = {
  __typename?: 'CartPaymethod';
  description: Scalars['String'];
  code: Scalars['String'];
  externalCode: Scalars['String'];
  type: Scalars['String'];
  taxCode: Taxcode;
  price: Scalars['Float'];
  amount: Scalars['Float'];
};

export type CartPostageData = {
  __typename?: 'CartPostageData';
  shippingMethod: Scalars['String'];
  postageTaxPercentage: Scalars['Float'];
  requestDate: Scalars['DateTime'];
  postage: Scalars['Float'];
  postageNet: Scalars['Float'];
  partialDeliveryAllowed?: Maybe<YesNo>;
};

export type CartPostageDataInput = {
  shippingMethod?: Maybe<Scalars['String']>;
  requestDate?: Maybe<Scalars['DateTime']>;
  partialDeliveryAllowed?: Maybe<YesNo>;
};

export type CartProcessInput = {
  cartId: Scalars['String'];
  orderStatus: Scalars['String'];
};

export type CartProcessResponse = {
  __typename?: 'CartProcessResponse';
  cartOrderId: Scalars['Int'];
  response: CartResponseData;
  order: Order;
};

export type CartResponse = {
  __typename?: 'CartResponse';
  cart: Cart;
  response: CartResponseData;
};

export type CartResponseData = {
  __typename?: 'CartResponseData';
  data: Scalars['JSONObject'];
  error: Scalars['Boolean'];
  messages: Array<Scalars['String']>;
};

export type CartSetUserInput = {
  cartId: Scalars['String'];
  userId: Scalars['Int'];
};

export type CartTaxLevel = {
  __typename?: 'CartTaxLevel';
  taxCode: Taxcode;
  price: Scalars['Float'];
};

export type CartTotal = {
  __typename?: 'CartTotal';
  subTotal: Scalars['Float'];
  subTotalNet: Scalars['Float'];
  discountPercentage: Scalars['Float'];
  totalNet: Scalars['Float'];
  totalGross: Scalars['Float'];
  discountNet: Scalars['Float'];
  discountGross: Scalars['Float'];
};

export type CartUpdateAddressInput = {
  cartId: Scalars['String'];
  type: CartAddressType;
  company?: Maybe<Scalars['String']>;
  gender?: Maybe<Gender>;
  firstName: Scalars['String'];
  middleName?: Maybe<Scalars['String']>;
  lastName: Scalars['String'];
  street: Scalars['String'];
  number: Scalars['String'];
  numberExtension?: Maybe<Scalars['String']>;
  postalCode: Scalars['String'];
  city: Scalars['String'];
  region?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  mobile?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  icp?: Maybe<YesNo>;
  notes?: Maybe<Scalars['String']>;
};

export type CartUpdateInput = {
  cartId: Scalars['String'];
  paymentData?: Maybe<CartPaymentDataInput>;
  postageData?: Maybe<CartPostageDataInput>;
  notes?: Maybe<Scalars['String']>;
  reference?: Maybe<Scalars['String']>;
  extra3?: Maybe<Scalars['String']>;
  extra4?: Maybe<Scalars['String']>;
  carrier?: Maybe<Scalars['String']>;
};

export type CartUpdateItemInput = {
  cartId: Scalars['String'];
  quantity?: Maybe<Scalars['Int']>;
  notes?: Maybe<Scalars['String']>;
  itemId: Scalars['Int'];
};

export type CartVoucher = {
  __typename?: 'CartVoucher';
  code: Scalars['String'];
  name: Scalars['String'];
  description: Scalars['String'];
  ruleId: Scalars['Int'];
  redeemed: YesNo;
  combinable: YesNo;
  partialRedemption: YesNo;
  available: Scalars['Float'];
  remaining: Scalars['Float'];
};

export type Category = {
  __typename?: 'Category';
  id: Scalars['Int'];
  categoryId: Scalars['Int'];
  name: Array<LocalizedString>;
  description: Array<LocalizedString>;
  shortDescription: Array<LocalizedString>;
  slug: Array<LocalizedString>;
  path: Scalars['String'];
  categories?: Maybe<Array<Category>>;
  parent?: Maybe<Category>;
  defaultLanguage: Scalars['String'];
  products: ProductsResponse;
};

export type CategoryNameArgs = {
  language?: Maybe<Scalars['String']>;
};

export type CategoryDescriptionArgs = {
  language?: Maybe<Scalars['String']>;
};

export type CategoryShortDescriptionArgs = {
  language?: Maybe<Scalars['String']>;
};

export type CategorySlugArgs = {
  language?: Maybe<Scalars['String']>;
};

export type CategoryProductsArgs = {
  term?: Maybe<Scalars['String']>;
  sku?: Maybe<Array<Scalars['String']>>;
  manufacturer?: Maybe<Array<Scalars['String']>>;
  supplierCode?: Maybe<Array<Scalars['String']>>;
  supplier?: Maybe<Array<Scalars['String']>>;
  manufacturerCode?: Maybe<Array<Scalars['String']>>;
  EANCode?: Maybe<Array<Scalars['String']>>;
  id?: Maybe<Array<Scalars['Int']>>;
  classId?: Maybe<Array<Scalars['Int']>>;
  class?: Maybe<ProductClass>;
  tag?: Maybe<Array<Scalars['String']>>;
  language?: Maybe<Scalars['String']>;
  page?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  textFilters?: Maybe<Array<TextFilterInput>>;
  rangeFilters?: Maybe<Array<RangeFilterInput>>;
  price?: Maybe<PriceFilterInput>;
  status?: Maybe<Array<ProductStatus>>;
  hidden?: Maybe<Scalars['Boolean']>;
  sort?: Maybe<Array<SortInput>>;
  searchFields?: Maybe<Array<SearchFieldsInput>>;
  hasBundle?: Maybe<YesNo>;
  isBundleLeader?: Maybe<YesNo>;
  parentSlug?: Maybe<Scalars['String']>;
  pathSlug?: Maybe<Scalars['String']>;
  getDescendants?: Maybe<Scalars['Boolean']>;
};

export type Cluster = ICluster &
  IBaseProduct &
  IResource & {
    __typename?: 'Cluster';
    id: Scalars['Int'];
    language?: Maybe<Scalars['String']>;
    class: Scalars['String'];

    /** @deprecated Deprecated in favor of productId and clusterId */
    classId: Scalars['Int'];
    isHidden: YesNo;
    name: Array<LocalizedString>;
    description: Array<LocalizedString>;
    shortDescription: Array<LocalizedString>;
    slug: Array<LocalizedString>;
    sku: Scalars['String'];
    categoryId: Scalars['Int'];

    /** @deprecated Path is no longer supported */
    path?: Maybe<Scalars['String']>;
    defaultLanguage: Scalars['String'];
    clusterId: Scalars['Int'];
    products?: Maybe<Array<Product>>;
    options?: Maybe<Array<ClusterOption>>;
    drillDown?: Maybe<Array<ClusterDrillDown>>;
  };

export type ClusterNameArgs = {
  language?: Maybe<Scalars['String']>;
};

export type ClusterDescriptionArgs = {
  language?: Maybe<Scalars['String']>;
};

export type ClusterShortDescriptionArgs = {
  language?: Maybe<Scalars['String']>;
};

export type ClusterSlugArgs = {
  language?: Maybe<Scalars['String']>;
};

export type ClusterDrillDown = IClusterDrillDown & {
  __typename?: 'ClusterDrillDown';
  attributeId: Scalars['String'];
  priority: Scalars['Int'];
  displayType: ClusterDrillDownDisplayTypes;
};

export enum ClusterDrillDownDisplayTypes {
  Radio = 'radio',
  Dropdown = 'dropdown',
  Image = 'image',
  Color = 'color',
}

export type ClusterOption = IClusterOption & {
  __typename?: 'ClusterOption';
  id: Scalars['Int'];
  clusterOptionId: Scalars['Int'];
  isRequired: Scalars['Boolean'];
  isHidden: YesNo;
  defaultProduct?: Maybe<Product>;
  products: Array<Product>;
  name: Array<LocalizedString>;
  description: Array<LocalizedString>;
  shortDescription: Array<LocalizedString>;
};

export type ClusterOptionNameArgs = {
  language?: Maybe<Scalars['String']>;
};

export type ClusterOptionDescriptionArgs = {
  language?: Maybe<Scalars['String']>;
};

export type ClusterOptionShortDescriptionArgs = {
  language?: Maybe<Scalars['String']>;
};

export type CompaniesResponse = {
  __typename?: 'CompaniesResponse';
  items: Array<Company>;
  itemsFound: Scalars['Int'];
  offset: Scalars['Int'];
  page: Scalars['Int'];
  pages: Scalars['Int'];
  start: Scalars['Int'];
  end: Scalars['Int'];
};

export type Company = {
  __typename?: 'Company';
  id: Scalars['Int'];
  companyId: Scalars['Int'];
  addresses: Array<Address>;
  name: Scalars['String'];
  hidden?: Maybe<YesNo>;
  inheritProductList?: Maybe<YesNo>;
  primaryLanguage?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  tag?: Maybe<Scalars['String']>;
  dateCreated?: Maybe<Scalars['DateTime']>;
  parentUsergroupId: Scalars['Int'];
  usergroup?: Maybe<Usergroup>;
  contacts?: Maybe<ContactsResponse>;
};

export type CompanyAddressesArgs = {
  type?: Maybe<AddressType>;
  isDefault?: Maybe<YesNo>;
};

export type CompanyContactsArgs = {
  input?: Maybe<ContactSearchArguments>;
};

export type CompanyAddressCreateInput = {
  firstName?: Maybe<Scalars['String']>;
  middleName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  gender?: Maybe<Gender>;
  company?: Maybe<Scalars['String']>;
  street: Scalars['String'];
  number?: Maybe<Scalars['String']>;
  numberExtension?: Maybe<Scalars['String']>;
  postalCode: Scalars['String'];
  city: Scalars['String'];
  region?: Maybe<Scalars['String']>;
  country: Scalars['String'];
  phone?: Maybe<Scalars['String']>;
  mobile?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  isDefault?: Maybe<YesNo>;
  companyId: Scalars['Int'];
  type: AddressType;
};

export type CompanyAddressDeleteInput = {
  id: Scalars['Int'];
  companyId: Scalars['Int'];
};

export type CompanyAddressUpdateInput = {
  firstName?: Maybe<Scalars['String']>;
  middleName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  gender?: Maybe<Gender>;
  company?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
  number?: Maybe<Scalars['String']>;
  numberExtension?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  mobile?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  isDefault?: Maybe<YesNo>;
  companyId: Scalars['Int'];
  id: Scalars['Int'];
};

export type CompanySearchArguments = {
  name?: Maybe<Scalars['String']>;
  page?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<CompanySortInput>>;
};

export enum CompanySortableFields {
  Name = 'name',
}

export type CompanySortInput = {
  field: CompanySortableFields;
  order?: Maybe<SortOrder>;
};

export type Contact = IBaseUser & {
  __typename?: 'Contact';
  id: Scalars['Int'];
  debtorId?: Maybe<Scalars['String']>;
  gender?: Maybe<Gender>;
  firstName: Scalars['String'];
  middleName?: Maybe<Scalars['String']>;
  lastName: Scalars['String'];
  taxNumber?: Maybe<Scalars['String']>;
  cocNumber?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  mobile?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  iban?: Maybe<Scalars['String']>;
  bankAccount?: Maybe<Scalars['String']>;
  bic?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  primaryLanguage?: Maybe<Scalars['String']>;
  expires?: Maybe<Scalars['DateTime']>;
  dateOfBirth?: Maybe<Scalars['DateTime']>;
  mailingList?: Maybe<YesNo>;
  isLoggedIn?: Maybe<Scalars['Boolean']>;
  usergroup: Usergroup;
  contactId: Scalars['Int'];
  parentCompanyId: Scalars['Int'];
  company?: Maybe<Company>;
};

export type ContactSearchArguments = {
  firstName?: Maybe<Scalars['String']>;
  middleName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  gender?: Maybe<Gender>;
  page?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<ContactSortInput>>;
};

export enum ContactSortableFields {
  FirstName = 'firstName',
  LastName = 'lastName',
}

export type ContactSortInput = {
  field: ContactSortableFields;
  order?: Maybe<SortOrder>;
};

export type ContactsResponse = {
  __typename?: 'ContactsResponse';
  items: Array<Contact>;
  itemsFound: Scalars['Int'];
  offset: Scalars['Int'];
  page: Scalars['Int'];
  pages: Scalars['Int'];
  start: Scalars['Int'];
  end: Scalars['Int'];
};

export type CreateAuthenticationInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  phoneNumber?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  uid?: Maybe<Scalars['String']>;
};

export type CreateCompanyInput = {
  name: Scalars['String'];
  parentId: Scalars['Int'];
};

export type CreateContactInput = {
  firstName: Scalars['String'];
  middleName?: Maybe<Scalars['String']>;
  lastName: Scalars['String'];
  gender?: Maybe<Gender>;
  email?: Maybe<Scalars['String']>;
  homepage?: Maybe<Scalars['String']>;
  cocNumber?: Maybe<Scalars['String']>;
  taxNumber?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  mobile?: Maybe<Scalars['String']>;
  dateOfBirth?: Maybe<Scalars['DateTime']>;
  mailingList?: Maybe<YesNo>;
  parentId: Scalars['Int'];
};

export type CreateCustomerInput = {
  firstName: Scalars['String'];
  middleName?: Maybe<Scalars['String']>;
  lastName: Scalars['String'];
  gender?: Maybe<Gender>;
  email?: Maybe<Scalars['String']>;
  homepage?: Maybe<Scalars['String']>;
  cocNumber?: Maybe<Scalars['String']>;
  taxNumber?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  mobile?: Maybe<Scalars['String']>;
  dateOfBirth?: Maybe<Scalars['DateTime']>;
  mailingList?: Maybe<YesNo>;
  parentId: Scalars['Int'];
};

export type CreatePaymentInput = {
  userId?: Maybe<Scalars['Int']>;
  anonymousId?: Maybe<Scalars['Int']>;
  paymentId?: Maybe<Scalars['String']>;
  orderId: Scalars['Int'];
  amount: Scalars['Int'];
  currency: Scalars['String'];
  method: Scalars['String'];
  status: PaymentStatuses;
  addTransaction?: Maybe<CreateTransactionInput>;
};

export type CreateTaxInput = {
  shopId?: Maybe<Scalars['Int']>;
  code?: Maybe<Scalars['String']>;
  zone?: Maybe<Scalars['String']>;
  ratio?: Maybe<Scalars['Float']>;
  exportCode?: Maybe<Scalars['String']>;
};

export type CreateTransactionInput = {
  transactionId: Scalars['String'];
  paymentId?: Maybe<Scalars['String']>;
  amount: Scalars['Int'];
  currency: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['DateTime']>;
  type: TransactionTypes;
  provider?: Maybe<Scalars['String']>;
  status: TransactionStatuses;
};

export type CreateUsergroupInput = {
  name: Scalars['String'];
  parentId: Scalars['Int'];
};

export type CreateUserInput = {
  firstName: Scalars['String'];
  middleName?: Maybe<Scalars['String']>;
  lastName: Scalars['String'];
  gender?: Maybe<Gender>;
  company?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  homepage?: Maybe<Scalars['String']>;
  cocNumber?: Maybe<Scalars['String']>;
  taxNumber?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  mobile?: Maybe<Scalars['String']>;
  dateOfBirth?: Maybe<Scalars['DateTime']>;
  mailingList?: Maybe<YesNo>;
  parentId: Scalars['Int'];
};

export type CropInput = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  widthRatio?: Maybe<Scalars['Int']>;
  heightRatio?: Maybe<Scalars['Int']>;
  x?: Maybe<Scalars['Int']>;
  y?: Maybe<Scalars['Int']>;
  offsetX?: Maybe<Scalars['Int']>;
  offsetY?: Maybe<Scalars['Int']>;
  smart?: Maybe<Scalars['String']>;
  safe?: Maybe<Scalars['String']>;
};

export type Crossupsell = {
  __typename?: 'Crossupsell';
  productId: Scalars['Int'];
  type: CrossupsellTypes;
  subtype: Scalars['String'];
  product?: Maybe<Product>;
};

export type CrossupsellInput = {
  types?: Maybe<Array<CrossupsellTypes>>;
  subTypes?: Maybe<Array<Scalars['String']>>;
  productId: Scalars['Int'];
};

export enum CrossupsellTypes {
  Accessories = 'ACCESSORIES',
  Alternatives = 'ALTERNATIVES',
  Options = 'OPTIONS',
  Parts = 'PARTS',
  Related = 'RELATED',
}

export type CrossupsellTypesInput = {
  types?: Maybe<Array<CrossupsellTypes>>;
  subTypes?: Maybe<Array<Scalars['String']>>;
};

export type Customer = IBaseUser & {
  __typename?: 'Customer';
  id: Scalars['Int'];
  customerId: Scalars['Int'];
  addresses: Array<Address>;
  debtorId?: Maybe<Scalars['String']>;
  gender?: Maybe<Gender>;
  firstName: Scalars['String'];
  middleName?: Maybe<Scalars['String']>;
  lastName: Scalars['String'];
  taxNumber?: Maybe<Scalars['String']>;
  cocNumber?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  mobile?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  iban?: Maybe<Scalars['String']>;
  bankAccount?: Maybe<Scalars['String']>;
  bic?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  primaryLanguage?: Maybe<Scalars['String']>;
  expires?: Maybe<Scalars['DateTime']>;
  dateOfBirth?: Maybe<Scalars['DateTime']>;
  mailingList?: Maybe<YesNo>;
  isLoggedIn?: Maybe<Scalars['Boolean']>;
  usergroup: Usergroup;
  parentUsergroupId: Scalars['Int'];
};

export type CustomerAddressesArgs = {
  type?: Maybe<AddressType>;
  isDefault?: Maybe<YesNo>;
};

export type CustomerAddressCreateInput = {
  firstName?: Maybe<Scalars['String']>;
  middleName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  gender?: Maybe<Gender>;
  company?: Maybe<Scalars['String']>;
  street: Scalars['String'];
  number?: Maybe<Scalars['String']>;
  numberExtension?: Maybe<Scalars['String']>;
  postalCode: Scalars['String'];
  city: Scalars['String'];
  region?: Maybe<Scalars['String']>;
  country: Scalars['String'];
  phone?: Maybe<Scalars['String']>;
  mobile?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  isDefault?: Maybe<YesNo>;
  customerId: Scalars['Int'];
  type: AddressType;
};

export type CustomerAddressDeleteInput = {
  id: Scalars['Int'];
  customerId: Scalars['Int'];
};

export type CustomerAddressUpdateInput = {
  firstName?: Maybe<Scalars['String']>;
  middleName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  gender?: Maybe<Gender>;
  company?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
  number?: Maybe<Scalars['String']>;
  numberExtension?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  mobile?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  isDefault?: Maybe<YesNo>;
  customerId: Scalars['Int'];
  id: Scalars['Int'];
};

export type CustomerSearchArguments = {
  firstName?: Maybe<Scalars['String']>;
  middleName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  gender?: Maybe<Gender>;
  page?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<CustomerSortInput>>;
};

export enum CustomerSortableFields {
  Name = 'name',
}

export type CustomerSortInput = {
  field: CustomerSortableFields;
  order?: Maybe<SortOrder>;
};

export type CustomersResponse = {
  __typename?: 'CustomersResponse';
  items: Array<Customer>;
  itemsFound: Scalars['Int'];
  offset: Scalars['Int'];
  page: Scalars['Int'];
  pages: Scalars['Int'];
  start: Scalars['Int'];
  end: Scalars['Int'];
};

export type DeleteMediaImageResponse = {
  __typename?: 'DeleteMediaImageResponse';
  mediaId: Scalars['String'];
};

export type Discount = {
  __typename?: 'Discount';
  discountId: Scalars['String'];
  formula: Scalars['String'];
  type: Scalars['String'];
  quantity: Scalars['Int'];
  value?: Maybe<Scalars['Float']>;
  validFrom?: Maybe<Scalars['DateTime']>;
  validTo?: Maybe<Scalars['DateTime']>;
  hops?: Maybe<Scalars['Float']>;
};

export enum DiscountType {
  Amount = 'amount',
  Percentage = 'percentage',
}

export type EmailEventInput = {
  type: EmailEventType;
  siteId?: Maybe<Scalars['Int']>;
  orderId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
  letterId?: Maybe<Scalars['Int']>;
  subject?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  from?: Maybe<EmailSendContactInput>;
  to?: Maybe<Array<EmailSendContactInput>>;
  attachments?: Maybe<Array<Base64FileInput>>;
  variables?: Maybe<Scalars['JSONObject']>;
  language?: Maybe<Scalars['String']>;
};

export enum EmailEventType {
  Orderconfirm = 'orderconfirm',
  Registration = 'registration',
  Campaign = 'campaign',
  Transactional = 'transactional',
  Custom = 'custom',
  System = 'system',
  Error = 'error',
}

export type EmailSendContactInput = {
  email: Scalars['String'];
  name?: Maybe<Scalars['String']>;
};

export type EmailSendEventInput = {
  subject: Scalars['String'];
  content: Scalars['String'];
  from: EmailSendContactInput;
  to: Array<EmailSendContactInput>;
  cc?: Maybe<Array<EmailSendContactInput>>;
  bcc?: Maybe<Array<EmailSendContactInput>>;
  attachments?: Maybe<Array<Base64FileInput>>;
  campaignId?: Maybe<Scalars['String']>;
  messageId?: Maybe<Scalars['String']>;
  utmTags?: Maybe<Scalars['String']>;
  variables?: Maybe<Scalars['JSONObject']>;
};

export type ExchangeRefreshTokenInput = {
  refreshToken: Scalars['String'];
};

export type ExternalAddress = {
  __typename?: 'ExternalAddress';
  id: Scalars['Int'];
  firstName?: Maybe<Scalars['String']>;
  middleName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  gender?: Maybe<Gender>;
  company?: Maybe<Scalars['String']>;
  street: Scalars['String'];
  number?: Maybe<Scalars['String']>;
  numberExtension?: Maybe<Scalars['String']>;
  postalCode: Scalars['String'];
  city: Scalars['String'];
  region?: Maybe<Scalars['String']>;
  country: Scalars['String'];
  phone?: Maybe<Scalars['String']>;
  mobile?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  fax?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  icp?: Maybe<YesNo>;
  url?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type ExternalAddressCreateInput = {
  firstName?: Maybe<Scalars['String']>;
  middleName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  gender?: Maybe<Gender>;
  company?: Maybe<Scalars['String']>;
  street: Scalars['String'];
  number?: Maybe<Scalars['String']>;
  numberExtension?: Maybe<Scalars['String']>;
  postalCode: Scalars['String'];
  city: Scalars['String'];
  region?: Maybe<Scalars['String']>;
  country: Scalars['String'];
  phone?: Maybe<Scalars['String']>;
  mobile?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
};

export type ExternalAddressDeleteInput = {
  id: Scalars['Int'];
};

export type ExternalAddressUpdateInput = {
  firstName?: Maybe<Scalars['String']>;
  middleName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  gender?: Maybe<Gender>;
  company?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
  number?: Maybe<Scalars['String']>;
  numberExtension?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  mobile?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
};

export enum FeaturesEnableDisable {
  Upscale = 'UPSCALE',
}

export type FilterAvailableAttributeInput = {
  isPublic?: Maybe<Scalars['Boolean']>;
  isSearchable?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Array<Scalars['String']>>;
  searchId?: Maybe<Array<Scalars['String']>>;
  type?: Maybe<Array<AttributeType>>;
};

export type Firebase = {
  __typename?: 'Firebase';
  identities?: Maybe<Scalars['JSONObject']>;
  sign_in_provider: Scalars['String'];
  sign_in_second_factor?: Maybe<Scalars['String']>;
  second_factor_identifier?: Maybe<Scalars['String']>;
  tenant?: Maybe<Scalars['String']>;
};

export enum Fit {
  Bounds = 'BOUNDS',
  Cover = 'COVER',
  Crop = 'CROP',
}

export enum Format {
  Gif = 'GIF',
  Png = 'PNG',
  Png8 = 'PNG8',
  Jpg = 'JPG',
  Pjpg = 'PJPG',
  Bjpg = 'BJPG',
  Webp = 'WEBP',
  Webpll = 'WEBPLL',
  Webply = 'WEBPLY',
  Mp4 = 'MP4',
}

export type GcipMetadata = {
  __typename?: 'GCIPMetadata';
  lastSignInTime?: Maybe<Scalars['String']>;
  creationTime?: Maybe<Scalars['String']>;
  lastRefreshTime?: Maybe<Scalars['String']>;
};

export type GcipProviderData = {
  __typename?: 'GCIPProviderData';
  uid?: Maybe<Scalars['String']>;
  providerId?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  photoUrl?: Maybe<Scalars['String']>;
  federatedId?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  rawId?: Maybe<Scalars['String']>;
  screenName?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
};

export type GcipUser = {
  __typename?: 'GCIPUser';
  uid: Scalars['String'];
  email?: Maybe<Scalars['String']>;
  emailVerified?: Maybe<Scalars['Boolean']>;
  displayName?: Maybe<Scalars['String']>;
  photoUrl?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  disabled?: Maybe<Scalars['Boolean']>;
  isAnonymous?: Maybe<Scalars['Boolean']>;
  metadata?: Maybe<GcipMetadata>;
  tokensValidAfterTime?: Maybe<Scalars['String']>;
  tenantId?: Maybe<Scalars['String']>;
  providerData: Array<GcipProviderData>;
  passwordHash?: Maybe<Scalars['String']>;
  passwordSalt?: Maybe<Scalars['String']>;
  authDomain?: Maybe<Scalars['String']>;
  lastLoginAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  accessToken: Scalars['String'];
  refreshToken: Scalars['String'];
  expirationTime: Scalars['DateTime'];
};

export enum Gender {
  M = 'M',
  F = 'F',
  U = 'U',
}

export type IAttributeDecimalRangeFilter = {
  min: Scalars['Float'];
  max: Scalars['Float'];
};

export type IAttributeFilter = {
  id: Scalars['String'];
  searchId: Scalars['String'];
  description: Scalars['String'];
  type: AttributeType;
  isSearchable: Scalars['Boolean'];
  isPublic: Scalars['Boolean'];
  isHidden?: Maybe<Scalars['Boolean']>;
  textFilter?: Maybe<Array<AttributeTextFilter>>;
  integerRangeFilter?: Maybe<AttributeIntegerRangeFilter>;
  decimalRangeFilter?: Maybe<AttributeDecimalRangeFilter>;
};

export type IAttributeIntegerRangeFilter = {
  min: Scalars['Int'];
  max: Scalars['Int'];
};

export type IAttributeTextFilter = {
  value: Scalars['String'];
  count: Scalars['Int'];
  countTotal?: Maybe<Scalars['Int']>;
  countActive?: Maybe<Scalars['Int']>;
  isSelected: Scalars['Boolean'];
};

export type IBaseProduct = {
  id: Scalars['Int'];
  language?: Maybe<Scalars['String']>;
  class: Scalars['String'];

  /** @deprecated Deprecated in favor of productId and clusterId */
  classId: Scalars['Int'];
  isHidden: YesNo;
  name: Array<LocalizedString>;
  description: Array<LocalizedString>;
  shortDescription: Array<LocalizedString>;
  slug: Array<LocalizedString>;
  sku: Scalars['String'];
  categoryId: Scalars['Int'];

  /** @deprecated Path is no longer supported */
  path?: Maybe<Scalars['String']>;
  defaultLanguage: Scalars['String'];
};

export type IBaseProductNameArgs = {
  language?: Maybe<Scalars['String']>;
};

export type IBaseProductDescriptionArgs = {
  language?: Maybe<Scalars['String']>;
};

export type IBaseProductShortDescriptionArgs = {
  language?: Maybe<Scalars['String']>;
};

export type IBaseProductSlugArgs = {
  language?: Maybe<Scalars['String']>;
};

export type IBaseUser = {
  id: Scalars['Int'];
  debtorId?: Maybe<Scalars['String']>;
  gender?: Maybe<Gender>;
  firstName: Scalars['String'];
  middleName?: Maybe<Scalars['String']>;
  lastName: Scalars['String'];
  taxNumber?: Maybe<Scalars['String']>;
  cocNumber?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  mobile?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  iban?: Maybe<Scalars['String']>;
  bankAccount?: Maybe<Scalars['String']>;
  bic?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  primaryLanguage?: Maybe<Scalars['String']>;
  expires?: Maybe<Scalars['DateTime']>;
  dateOfBirth?: Maybe<Scalars['DateTime']>;
  mailingList?: Maybe<YesNo>;
  isLoggedIn?: Maybe<Scalars['Boolean']>;
  usergroup: Usergroup;
};

export type IBundle = {
  id: Scalars['Float'];
  comboId: Scalars['Float'];
  name: Scalars['String'];
  description: Scalars['String'];
  discount?: Maybe<Scalars['Float']>;
  condition?: Maybe<Scalars['String']>;
  price?: Maybe<BundlePrice>;
  items?: Maybe<Array<BundleItem>>;
};

export type IBundleItem = {
  productId: Scalars['Int'];
  price?: Maybe<BundlePrice>;
  isLeader: Scalars['String'];
};

export type IBundlePrice = {
  net: Scalars['Float'];
  gross: Scalars['Float'];
  originalNet: Scalars['Float'];
  originalGross: Scalars['Float'];
};

export type ICart = {
  cartId: Scalars['String'];
  userId: Scalars['Int'];
  carrier: Scalars['String'];
  notes?: Maybe<Scalars['String']>;
  reference?: Maybe<Scalars['String']>;
  extra3?: Maybe<Scalars['String']>;
  extra4?: Maybe<Scalars['String']>;
  orderStatus?: Maybe<Scalars['String']>;
  actionCode?: Maybe<Scalars['String']>;
  couponCode?: Maybe<Scalars['String']>;
  vouchers?: Maybe<Array<CartVoucher>>;
  paymentData?: Maybe<CartPaymentData>;
  postageData?: Maybe<CartPostageData>;
  total?: Maybe<CartTotal>;
  items?: Maybe<Array<CartBaseItem>>;
  bonusItems?: Maybe<Array<CartBaseItem>>;
  invoiceAddress: CartAddress;
  deliveryAddress: CartAddress;
  taxLevels?: Maybe<Array<CartTaxLevel>>;
  payMethods?: Maybe<Array<CartPaymethod>>;
  carriers?: Maybe<Array<CartCarrier>>;
  dateCreated?: Maybe<Scalars['DateTime']>;
  dateChanged?: Maybe<Scalars['DateTime']>;
  incentives?: Maybe<Array<CartIncentive>>;
  valuePoints?: Maybe<Scalars['Int']>;
  user: IBaseUser;
};

export type ICluster = {
  id: Scalars['Int'];
  language?: Maybe<Scalars['String']>;
  class: Scalars['String'];

  /** @deprecated Deprecated in favor of productId and clusterId */
  classId: Scalars['Int'];
  isHidden: YesNo;
  name: Array<LocalizedString>;
  description: Array<LocalizedString>;
  shortDescription: Array<LocalizedString>;
  slug: Array<LocalizedString>;
  sku: Scalars['String'];
  categoryId: Scalars['Int'];

  /** @deprecated Path is no longer supported */
  path?: Maybe<Scalars['String']>;
  defaultLanguage: Scalars['String'];
  clusterId: Scalars['Int'];
  products?: Maybe<Array<Product>>;
  options?: Maybe<Array<ClusterOption>>;
  drillDown?: Maybe<Array<ClusterDrillDown>>;
};

export type IClusterNameArgs = {
  language?: Maybe<Scalars['String']>;
};

export type IClusterDescriptionArgs = {
  language?: Maybe<Scalars['String']>;
};

export type IClusterShortDescriptionArgs = {
  language?: Maybe<Scalars['String']>;
};

export type IClusterSlugArgs = {
  language?: Maybe<Scalars['String']>;
};

export type IClusterDrillDown = {
  attributeId: Scalars['String'];
  priority: Scalars['Int'];
  displayType: ClusterDrillDownDisplayTypes;
};

export type IClusterOption = {
  id: Scalars['Int'];
  clusterOptionId: Scalars['Int'];
  isRequired: Scalars['Boolean'];
  isHidden: YesNo;
  defaultProduct?: Maybe<Product>;
  products: Array<Product>;
  name: Array<LocalizedString>;
  description: Array<LocalizedString>;
  shortDescription: Array<LocalizedString>;
};

export type Image = {
  __typename?: 'Image';
  id: Scalars['Int'];
  imageId: Scalars['Int'];
  name: Scalars['String'];
  url: Scalars['String'];
  type: Scalars['String'];
  order: Scalars['Int'];
};

export type ImageUrlArgs = {
  fillColor?: Maybe<Scalars['String']>;
  method: ImageResizeMethod;
  height: Scalars['Float'];
  width: Scalars['Float'];
};

export enum ImageResizeMethod {
  Crop = 'crop',
  Fill = 'fill',
}

export type ImageTransformationInput = {
  name: Scalars['String'];
  transformation: TransformationInput;
};

export type ImageVariant = {
  __typename?: 'ImageVariant';
  name: Scalars['String'];
  language: Scalars['String'];
  url: Scalars['String'];
  mimeType: Scalars['String'];
};

export type Inventory = {
  __typename?: 'Inventory';
  id: Scalars['ID'];
  productId: Scalars['Int'];
  quantity: Scalars['Int'];
  costPrice: Scalars['Float'];
  supplier: Scalars['String'];
  supplierCode: Scalars['String'];
  sku: Scalars['String'];
  dateModified: Scalars['DateTime'];
  warehouseId: Scalars['Int'];
  location: Scalars['String'];
  nextDeliveryDate: Scalars['DateTime'];
  notes: Scalars['String'];
};

export type InventoryDeleteResponse = {
  __typename?: 'InventoryDeleteResponse';
  messages: Array<Scalars['String']>;
};

export type InventoryResponse = {
  __typename?: 'InventoryResponse';
  id: Scalars['ID'];
  productId: Scalars['Int'];
  quantity: Scalars['Int'];
  costPrice: Scalars['Float'];
  supplier: Scalars['String'];
  supplierCode: Scalars['String'];
  sku: Scalars['String'];
  dateModified: Scalars['DateTime'];
  warehouseId: Scalars['Int'];
  location: Scalars['String'];
  nextDeliveryDate: Scalars['DateTime'];
  notes: Scalars['String'];
  messages: Array<Scalars['String']>;
  total: Scalars['Int'];
};

export type IProduct = {
  id: Scalars['Int'];
  language?: Maybe<Scalars['String']>;
  class: Scalars['String'];

  /** @deprecated Deprecated in favor of productId and clusterId */
  classId: Scalars['Int'];
  isHidden: YesNo;
  name: Array<LocalizedString>;
  description: Array<LocalizedString>;
  shortDescription: Array<LocalizedString>;
  slug: Array<LocalizedString>;
  sku: Scalars['String'];
  categoryId: Scalars['Int'];

  /** @deprecated Path is no longer supported */
  path?: Maybe<Scalars['String']>;
  defaultLanguage: Scalars['String'];
  productId: Scalars['Int'];
  shortName: Scalars['String'];
  manufacturerCode: Scalars['String'];
  eanCode: Scalars['String'];
  manufacturer: Scalars['String'];
  supplier: Scalars['String'];
  supplierCode: Scalars['String'];
  tag: Scalars['String'];
  taxCode: TaxCode;
  status: ProductStatus;
  isOrderable: YesNo;
  isReturnable: YesNo;
  hasBundle: YesNo;
  isBundleLeader: YesNo;
  package: Scalars['String'];
  packageUnit: Scalars['String'];
  packageUnitQuantity: Scalars['String'];
  originalPrice: Scalars['Float'];
  costPrice: Scalars['Float'];
  suggestedPrice: Scalars['Float'];
  storePrice: Scalars['Float'];
  creditPoints: Scalars['Float'];
  minimumQuantity: Scalars['Float'];
  unit: Scalars['Int'];
  purchaseUnit: Scalars['Int'];
  purchaseMinimumQuantity: Scalars['Int'];
  econommicOrderQuantity: Scalars['Int'];
  orderableFrom?: Maybe<Scalars['DateTime']>;
  orderableTo?: Maybe<Scalars['DateTime']>;
  releaseDate?: Maybe<Scalars['DateTime']>;
  dateCreated: Scalars['DateTime'];
  dateChanged: Scalars['DateTime'];
  offers?: Maybe<Array<ProductOffer>>;
  containerClass: Scalars['String'];
};

export type IProductNameArgs = {
  language?: Maybe<Scalars['String']>;
};

export type IProductDescriptionArgs = {
  language?: Maybe<Scalars['String']>;
};

export type IProductShortDescriptionArgs = {
  language?: Maybe<Scalars['String']>;
};

export type IProductSlugArgs = {
  language?: Maybe<Scalars['String']>;
};

export type IProductOffer = {
  id: Scalars['String'];
  price: Scalars['Float'];
  validFrom: Scalars['DateTime'];
  validTo: Scalars['DateTime'];
  formula: Scalars['String'];
};

export type IResource = {
  id: Scalars['Int'];
  language?: Maybe<Scalars['String']>;
  class: Scalars['String'];

  /** @deprecated Deprecated in favor of productId and clusterId */
  classId: Scalars['Int'];
  isHidden: YesNo;
};

export enum Level {
  Level_1_0 = 'LEVEL_1_0',
  Level_1_1 = 'LEVEL_1_1',
  Level_1_2 = 'LEVEL_1_2',
  Level_2_0 = 'LEVEL_2_0',
  Level_2_1 = 'LEVEL_2_1',
  Level_2_2 = 'LEVEL_2_2',
  Level_3_0 = 'LEVEL_3_0',
  Level_3_1 = 'LEVEL_3_1',
  Level_3_2 = 'LEVEL_3_2',
  Level_4_0 = 'LEVEL_4_0',
  Level_4_1 = 'LEVEL_4_1',
  Level_4_2 = 'LEVEL_4_2',
  Level_5_0 = 'LEVEL_5_0',
  Level_5_1 = 'LEVEL_5_1',
  Level_5_2 = 'LEVEL_5_2',
  Level_6_0 = 'LEVEL_6_0',
  Level_6_1 = 'LEVEL_6_1',
  Level_6_2 = 'LEVEL_6_2',
}

export type LocalizedImage = {
  __typename?: 'LocalizedImage';
  language: Scalars['String'];
  originalUrl: Scalars['String'];
  mimeType: Scalars['String'];
};

export type LocalizedString = {
  __typename?: 'LocalizedString';
  language: Scalars['String'];
  value?: Maybe<Scalars['String']>;
};

export type LocalizedStringArray = {
  __typename?: 'LocalizedStringArray';
  language: Scalars['String'];
  values?: Maybe<Array<Scalars['String']>>;
};

export type Login = {
  __typename?: 'Login';
  providerId?: Maybe<Scalars['String']>;
  operationType?: Maybe<Scalars['String']>;
  session?: Maybe<GcipUser>;
};

export type LoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
};

export type Logout = {
  __typename?: 'Logout';
  todo: Scalars['String'];
};

export type MediaBase64FileInput = {
  base64: Scalars['String'];
  fileName: Scalars['String'];
};

export type MediaImage = {
  __typename?: 'MediaImage';
  id: Scalars['ID'];
  productId?: Maybe<Scalars['ID']>;
  alt: Array<MediaLocalizedString>;
  description: Array<MediaLocalizedString>;
  tags: Array<MediaLocalizedStringArray>;
  type?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  lastModifiedAt?: Maybe<Scalars['DateTime']>;
  priority?: Maybe<Scalars['Int']>;
  images?: Maybe<Array<LocalizedImage>>;
  imageVariants?: Maybe<Array<ImageVariant>>;
};

export type MediaImageAltArgs = {
  language?: Maybe<Scalars['String']>;
};

export type MediaImageDescriptionArgs = {
  language?: Maybe<Scalars['String']>;
};

export type MediaImageTagsArgs = {
  language?: Maybe<Scalars['String']>;
};

export type MediaImageImageVariantsArgs = {
  input: TransformationsInput;
};

export type MediaImageInput = {
  productId?: Maybe<Scalars['ID']>;
  alt: Array<MediaLocalizedStringInput>;
  description: Array<MediaLocalizedStringInput>;
  tags: Array<MediaLocalizedStringArrayInput>;
  priority?: Maybe<Scalars['Int']>;
  uploadImages: Array<UploadFileInput>;
};

export type MediaImageProductSearchInput = {
  description?: Maybe<MediaLocalizedStringInput>;
  tag?: Maybe<MediaLocalizedStringInput>;
  sort?: Maybe<Sort>;
  page?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type MediaImageSearchInput = {
  productId?: Maybe<Scalars['Int']>;
  description?: Maybe<MediaLocalizedStringInput>;
  tag?: Maybe<MediaLocalizedStringInput>;
  sort?: Maybe<Sort>;
  page?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type MediaLocalizedString = {
  __typename?: 'MediaLocalizedString';
  language: Scalars['String'];
  value?: Maybe<Scalars['String']>;
};

export type MediaLocalizedStringArray = {
  __typename?: 'MediaLocalizedStringArray';
  language: Scalars['String'];
  values?: Maybe<Array<Scalars['String']>>;
};

export type MediaLocalizedStringArrayInput = {
  language: Scalars['String'];
  values?: Maybe<Array<Scalars['String']>>;
};

export type MediaLocalizedStringInput = {
  language: Scalars['String'];
  value: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  userAddressCreate: Address;
  customerAddressCreate: Address;
  companyAddressCreate: Address;
  externalAddressCreate: ExternalAddress;
  userAddressUpdate: Address;
  customerAddressUpdate: Address;
  companyAddressUpdate: Address;
  externalAddressUpdate: ExternalAddress;
  userAddressDelete: Scalars['Boolean'];
  customerAddressDelete: Scalars['Boolean'];
  companyAddressDelete: Scalars['Boolean'];
  externalAddressDelete: Scalars['Boolean'];
  startSession: Login;
  login: Login;
  logout: Logout;
  authenticationCreate: Login;
  authenticationDelete: Scalars['Boolean'];
  verifyToken: VerifyToken;
  exchangeRefreshToken: RefreshTokenResponse;
  passwordResetLink: Scalars['String'];
  cartStart: Cart;
  cartAddItem: CartResponse;
  cartAddBundle: CartResponse;
  cartUpdateItem: CartResponse;
  cartDeleteItem: CartResponse;
  cartSetUser: CartResponse;
  cartUpdate: CartResponse;
  cartUpdateAddress: CartResponse;
  cartAddActionCode: CartResponse;
  cartRemoveActionCode: CartResponse;
  cartAddVoucherCode: CartResponse;
  cartRemoveVoucherCode: CartResponse;
  cartProcess: CartProcessResponse;
  cartDelete: CartDeleteResponse;
  paymentCreate: Payment;
  paymentUpdate: Payment;
  paymentDelete: Payment;
  publishEmailEvent: PublishEmailEventResponse;
  publishEmailSendEvent: PublishEmailEventResponse;
  inventoryUpdate: InventoryResponse;
  inventoryDelete: InventoryDeleteResponse;
  mediaImageCreate: MediaImage;
  mediaImageUpdate: MediaImage;
  mediaImageDelete: DeleteMediaImageResponse;
  orderSetStatus: Order;
  taxCreate: Tax;
  taxUpdate: Tax;
  taxDelete: Tax;
  tenderStart: Tender;
  tenderUpdateAddress: Tender;
  tenderAddItems: TenderResponse;
  tenderUpdateItem: Tender;
  tenderDeleteItem: Tender;
  tenderUpdateInvoiceUser: Tender;
  tenderUpdate: Tender;
  tenderUpdateDiscount: Tender;
  tenderUpdatePostage: Tender;
  tenderUpdatePayment: Tender;
  tenderApplyIncentives: Tender;
  tenderProcess: TenderProcessResponse;
  tenderDelete: Scalars['String'];
  usergroupCreate: Usergroup;
  companyCreate: Company;
  contactCreate: Contact;
  customerCreate: Customer;
  userCreate: IBaseUser;
  userRegister: RegisterUserResponse;
  userUpdate: IBaseUser;
};

export type MutationUserAddressCreateArgs = {
  input: UserAddressCreateInput;
};

export type MutationCustomerAddressCreateArgs = {
  input: CustomerAddressCreateInput;
};

export type MutationCompanyAddressCreateArgs = {
  input: CompanyAddressCreateInput;
};

export type MutationExternalAddressCreateArgs = {
  input: ExternalAddressCreateInput;
};

export type MutationUserAddressUpdateArgs = {
  input: UserAddressUpdateInput;
};

export type MutationCustomerAddressUpdateArgs = {
  input: CustomerAddressUpdateInput;
};

export type MutationCompanyAddressUpdateArgs = {
  input: CompanyAddressUpdateInput;
};

export type MutationExternalAddressUpdateArgs = {
  input: ExternalAddressUpdateInput;
};

export type MutationUserAddressDeleteArgs = {
  input: UserAddressDeleteInput;
};

export type MutationCustomerAddressDeleteArgs = {
  input: CustomerAddressDeleteInput;
};

export type MutationCompanyAddressDeleteArgs = {
  input: CompanyAddressDeleteInput;
};

export type MutationExternalAddressDeleteArgs = {
  input: ExternalAddressDeleteInput;
};

export type MutationStartSessionArgs = {
  siteId: Scalars['Int'];
};

export type MutationLoginArgs = {
  input: LoginInput;
};

export type MutationLogoutArgs = {
  siteId: Scalars['Int'];
};

export type MutationAuthenticationCreateArgs = {
  input: CreateAuthenticationInput;
};

export type MutationAuthenticationDeleteArgs = {
  uid: Scalars['String'];
};

export type MutationVerifyTokenArgs = {
  input: VerifyTokenInput;
};

export type MutationExchangeRefreshTokenArgs = {
  input: ExchangeRefreshTokenInput;
};

export type MutationPasswordResetLinkArgs = {
  redirectUrl: Scalars['String'];
  email: Scalars['String'];
};

export type MutationCartStartArgs = {
  userId?: Maybe<Scalars['Int']>;
  siteId: Scalars['Int'];
};

export type MutationCartAddItemArgs = {
  input: CartAddItemInput;
};

export type MutationCartAddBundleArgs = {
  input: CartAddBundleInput;
};

export type MutationCartUpdateItemArgs = {
  input: CartUpdateItemInput;
};

export type MutationCartDeleteItemArgs = {
  input: CartDeleteItemInput;
};

export type MutationCartSetUserArgs = {
  input: CartSetUserInput;
};

export type MutationCartUpdateArgs = {
  input: CartUpdateInput;
};

export type MutationCartUpdateAddressArgs = {
  input: CartUpdateAddressInput;
};

export type MutationCartAddActionCodeArgs = {
  actionCode: Scalars['String'];
  cartId: Scalars['String'];
};

export type MutationCartRemoveActionCodeArgs = {
  actionCode: Scalars['String'];
  cartId: Scalars['String'];
};

export type MutationCartAddVoucherCodeArgs = {
  voucherCode: Scalars['String'];
  cartId: Scalars['String'];
};

export type MutationCartRemoveVoucherCodeArgs = {
  voucherCode: Scalars['String'];
  cartId: Scalars['String'];
};

export type MutationCartProcessArgs = {
  input: CartProcessInput;
};

export type MutationCartDeleteArgs = {
  cartId: Scalars['String'];
};

export type MutationPaymentCreateArgs = {
  input: CreatePaymentInput;
};

export type MutationPaymentUpdateArgs = {
  input: UpdatePaymentInput;
  searchBy: SearchByInput;
};

export type MutationPaymentDeleteArgs = {
  searchBy: SearchByInput;
};

export type MutationPublishEmailEventArgs = {
  input: EmailEventInput;
};

export type MutationPublishEmailSendEventArgs = {
  input: EmailSendEventInput;
};

export type MutationInventoryUpdateArgs = {
  input: UpdateInventoryInput;
  id: Scalars['Int'];
};

export type MutationInventoryDeleteArgs = {
  id: Scalars['Int'];
};

export type MutationMediaImageCreateArgs = {
  input: MediaImageInput;
};

export type MutationMediaImageUpdateArgs = {
  input: UpdateMediaImageInput;
};

export type MutationMediaImageDeleteArgs = {
  mediaId: Scalars['String'];
};

export type MutationOrderSetStatusArgs = {
  input: OrderSetStatusInput;
};

export type MutationTaxCreateArgs = {
  input: CreateTaxInput;
};

export type MutationTaxUpdateArgs = {
  input: UpdateTaxInput;
  id: Scalars['ID'];
};

export type MutationTaxDeleteArgs = {
  id: Scalars['ID'];
};

export type MutationTenderStartArgs = {
  input: TenderStart;
};

export type MutationTenderUpdateAddressArgs = {
  input: TenderUpdateAddressInput;
};

export type MutationTenderAddItemsArgs = {
  input: TenderAddItemsInput;
};

export type MutationTenderUpdateItemArgs = {
  input: TenderUpdateItemInput;
};

export type MutationTenderDeleteItemArgs = {
  input: TenderDeleteItemInput;
};

export type MutationTenderUpdateInvoiceUserArgs = {
  userId: Scalars['Int'];
  tenderid: Scalars['String'];
};

export type MutationTenderUpdateArgs = {
  input: TenderUpdateInput;
};

export type MutationTenderUpdateDiscountArgs = {
  input: TenderDiscountInput;
};

export type MutationTenderUpdatePostageArgs = {
  input: TenderPostageInput;
};

export type MutationTenderUpdatePaymentArgs = {
  input: TenderPaymentInput;
};

export type MutationTenderApplyIncentivesArgs = {
  tenderId: Scalars['String'];
};

export type MutationTenderProcessArgs = {
  tenderId: Scalars['String'];
};

export type MutationTenderDeleteArgs = {
  tenderId: Scalars['String'];
};

export type MutationUsergroupCreateArgs = {
  input: CreateUsergroupInput;
};

export type MutationCompanyCreateArgs = {
  input: CreateCompanyInput;
};

export type MutationContactCreateArgs = {
  input: CreateContactInput;
};

export type MutationCustomerCreateArgs = {
  input: CreateCustomerInput;
};

export type MutationUserCreateArgs = {
  input: CreateUserInput;
};

export type MutationUserRegisterArgs = {
  input: RegisterUserInput;
};

export type MutationUserUpdateArgs = {
  input: UpdateUserInput;
};

export enum Optimize {
  Low = 'LOW',
  Medium = 'MEDIUM',
  High = 'HIGH',
}

export type Order = {
  __typename?: 'Order';
  id: Scalars['Int'];
  addresses: Array<Address>;
  userId: Scalars['Int'];
  accountManagerId: Scalars['Int'];
  pickupStoreId?: Maybe<Scalars['Int']>;
  cartId?: Maybe<Scalars['String']>;
  siteId: Scalars['Int'];
  uuid: Scalars['String'];
  externalId?: Maybe<Scalars['String']>;
  status: Scalars['String'];
  type: OrderType;
  source: Scalars['String'];
  email: Scalars['String'];
  emailDate?: Maybe<Scalars['DateTime']>;
  remarks: Scalars['String'];
  reference: Scalars['String'];
  currency: Scalars['String'];
  currencyRatio: Scalars['Float'];
  language: Scalars['String'];
  date: Scalars['DateTime'];
  statusDate?: Maybe<Scalars['DateTime']>;
  postageData: PostageData;
  paymentData: OrderPaymentData;
  total: OrderTotals;
  items: Array<OrderItem>;
  shipments?: Maybe<Array<Shipment>>;
};

export type OrderAddressesArgs = {
  type?: Maybe<AddressType>;
};

export enum OrderDiscountType {
  N = 'N',
  P = 'P',
  A = 'A',
}

export type OrderItem = {
  __typename?: 'OrderItem';
  id: Scalars['Int'];
  orderId: Scalars['Int'];
  uuid: Scalars['String'];
  class: Scalars['String'];
  productId?: Maybe<Scalars['Int']>;
  parentOrderItemId?: Maybe<Scalars['Int']>;
  sku: Scalars['String'];
  quantity: Scalars['Int'];
  notes: Scalars['String'];
  name: Scalars['String'];
  supplier: Scalars['String'];
  supplierCode: Scalars['String'];
  manufacturer: Scalars['String'];
  manufacturerCode: Scalars['String'];
  eanCode: Scalars['String'];
  price: Scalars['Float'];
  priceTotal: Scalars['Float'];
  discount: Scalars['Float'];
  tax: Scalars['Float'];
  taxCode: Taxcode;
  taxPercentage: Scalars['Float'];
  isBonus: YesNo;
  product?: Maybe<Product>;
};

export type OrderPaymentData = {
  __typename?: 'OrderPaymentData';
  net: Scalars['Float'];
  gross: Scalars['Float'];
  tax: Scalars['Float'];
  taxPercentage?: Maybe<Scalars['Float']>;
  method: Scalars['String'];
  status: Scalars['String'];
  statusDate?: Maybe<Scalars['DateTime']>;
};

export type OrderResponse = {
  __typename?: 'OrderResponse';
  items: Array<Order>;
  itemsFound: Scalars['Int'];
  offset: Scalars['Int'];
  page: Scalars['Int'];
  pages: Scalars['Int'];
  start: Scalars['Int'];
  end: Scalars['Int'];
};

export type OrderSearchArguments = {
  userId?: Maybe<Array<Scalars['Int']>>;
  status?: Maybe<Array<Scalars['String']>>;
  type?: Maybe<Array<OrderType>>;
  page?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type OrderSetStatusInput = {
  orderId: Scalars['Int'];
  status?: Maybe<Scalars['String']>;
  payStatus?: Maybe<Scalars['String']>;
  sendOrderConfirmationEmail?: Maybe<Scalars['Boolean']>;
  addPDFAttachment?: Maybe<Scalars['Boolean']>;
  deleteCart?: Maybe<Scalars['Boolean']>;
};

export type OrderTotals = {
  __typename?: 'OrderTotals';
  gross: Scalars['Float'];
  net: Scalars['Float'];
  tax: Scalars['Float'];
  discountType: OrderDiscountType;

  /** @deprecated discountPercentage will be removed. Use discountValue i.c.w. discountType instead. This field will remain null */
  discountPercentage?: Maybe<Scalars['Float']>;
  discountValue: Scalars['Float'];
  taxPercentages: Array<OrderTotalTaxPercentage>;
};

export type OrderTotalTaxPercentage = {
  __typename?: 'OrderTotalTaxPercentage';
  percentage: Scalars['Int'];
  total: Scalars['Float'];
};

export enum OrderType {
  Dropshipment = 'dropshipment',
  Purchase = 'purchase',
  Quotation = 'quotation',
}

export enum Orient {
  Right = 'RIGHT',
  Left = 'LEFT',
  HorizontalFlip = 'HORIZONTAL_FLIP',
  VerticalFlip = 'VERTICAL_FLIP',
  HvFlip = 'HV_FLIP',
  One = 'ONE',
  Two = 'TWO',
  Three = 'THREE',
  Four = 'FOUR',
  Five = 'FIVE',
  Six = 'SIX',
  Seven = 'SEVEN',
  Eight = 'EIGHT',
}

export type PadInput = {
  top?: Maybe<Scalars['Int']>;
  right?: Maybe<Scalars['Int']>;
  bottom?: Maybe<Scalars['Int']>;
  left?: Maybe<Scalars['Int']>;
};

export type PaginatedMediaImageResponse = {
  __typename?: 'PaginatedMediaImageResponse';
  items: Array<MediaImage>;
  itemsFound: Scalars['Int'];
  offset: Scalars['Int'];
  page: Scalars['Int'];
  pages: Scalars['Int'];
  start: Scalars['Int'];
  end: Scalars['Int'];
};

export type Payment = {
  __typename?: 'Payment';
  id: Scalars['ID'];
  userId?: Maybe<Scalars['Int']>;
  anonymousId?: Maybe<Scalars['Int']>;
  paymentId?: Maybe<Scalars['String']>;
  orderId: Scalars['Int'];
  amount: Scalars['Int'];
  currency: Scalars['String'];
  method: Scalars['String'];
  status: PaymentStatuses;
  transactions?: Maybe<Array<Transaction>>;
  createdAt: Scalars['DateTime'];
  createdBy?: Maybe<Scalars['String']>;
  lastModifiedAt: Scalars['DateTime'];
  lastModifiedBy?: Maybe<Scalars['String']>;
};

export type PaymentsResponse = {
  __typename?: 'PaymentsResponse';
  items: Array<Payment>;
  itemsFound: Scalars['Int'];
  offset: Scalars['Int'];
  page: Scalars['Int'];
  pages: Scalars['Int'];
  start: Scalars['Int'];
  end: Scalars['Int'];
};

export enum PaymentStatuses {
  Open = 'OPEN',
  Pending = 'PENDING',
  Authorized = 'AUTHORIZED',
  Cancelled = 'CANCELLED',
  Expired = 'EXPIRED',
  Failed = 'FAILED',
  Paid = 'PAID',
  Refunded = 'REFUNDED',
  Chargeback = 'CHARGEBACK',
}

export enum Permission {
  ListfolderReaddata = 'LISTFOLDER_READDATA',
  Readattributes = 'READATTRIBUTES',
  Writeattributes = 'WRITEATTRIBUTES',
  Detesubfoldersandfiles = 'DETESUBFOLDERSANDFILES',
  Delete = 'DELETE',
  Readpermissions = 'READPERMISSIONS',
  Changepermissions = 'CHANGEPERMISSIONS',
  Takeownership = 'TAKEOWNERSHIP',
  CreateobjectWritedata = 'CREATEOBJECT_WRITEDATA',
}

export type PostageData = {
  __typename?: 'PostageData';
  method: Scalars['String'];
  taxPercentage: Scalars['Float'];
  requestDate?: Maybe<Scalars['DateTime']>;
  gross: Scalars['Float'];
  net: Scalars['Float'];
  tax: Scalars['Float'];
  partialDeliveryAllowed?: Maybe<YesNo>;
};

export type PriceFilterInput = {
  from: Scalars['Float'];
  to: Scalars['Float'];
};

export type Product = IResource &
  IBaseProduct &
  IProduct & {
    __typename?: 'Product';
    id: Scalars['Int'];

    /** @deprecated Deprecated in favor of productId and clusterId */
    classId: Scalars['Int'];
    categoryId: Scalars['Int'];
    attributes: Array<Attribute>;
    bundles?: Maybe<Array<Bundle>>;
    category?: Maybe<Category>;
    crossupsells: Array<Crossupsell>;
    images: Array<Image>;
    inventory?: Maybe<ProductInventory>;
    mediaImages: PaginatedMediaImageResponse;
    isAllowed: Scalars['Boolean'];
    price: ProductPrice;
    bulkPrices: Array<BulkPrice>;
    language?: Maybe<Scalars['String']>;
    class: Scalars['String'];
    isHidden: YesNo;
    name: Array<LocalizedString>;
    description: Array<LocalizedString>;
    shortDescription: Array<LocalizedString>;
    slug: Array<LocalizedString>;
    sku: Scalars['String'];

    /** @deprecated Path is no longer supported */
    path?: Maybe<Scalars['String']>;
    defaultLanguage: Scalars['String'];
    productId: Scalars['Int'];
    shortName: Scalars['String'];
    manufacturerCode: Scalars['String'];
    eanCode: Scalars['String'];
    manufacturer: Scalars['String'];
    supplier: Scalars['String'];
    supplierCode: Scalars['String'];
    tag: Scalars['String'];
    taxCode: TaxCode;
    status: ProductStatus;
    isOrderable: YesNo;
    isReturnable: YesNo;
    hasBundle: YesNo;
    isBundleLeader: YesNo;
    package: Scalars['String'];
    packageUnit: Scalars['String'];
    packageUnitQuantity: Scalars['String'];
    originalPrice: Scalars['Float'];
    costPrice: Scalars['Float'];
    suggestedPrice: Scalars['Float'];
    storePrice: Scalars['Float'];
    creditPoints: Scalars['Float'];
    minimumQuantity: Scalars['Float'];
    unit: Scalars['Int'];
    purchaseUnit: Scalars['Int'];
    purchaseMinimumQuantity: Scalars['Int'];
    econommicOrderQuantity: Scalars['Int'];
    orderableFrom?: Maybe<Scalars['DateTime']>;
    orderableTo?: Maybe<Scalars['DateTime']>;
    releaseDate?: Maybe<Scalars['DateTime']>;
    dateCreated: Scalars['DateTime'];
    dateChanged: Scalars['DateTime'];
    offers?: Maybe<Array<ProductOffer>>;
    containerClass: Scalars['String'];
    cluster?: Maybe<Cluster>;
  };

export type ProductAttributesArgs = {
  filter?: Maybe<AttributeFilterInput>;
};

export type ProductBundlesArgs = {
  taxZone?: Maybe<Scalars['String']>;
};

export type ProductCrossupsellsArgs = {
  input?: Maybe<CrossupsellTypesInput>;
};

export type ProductImagesArgs = {
  type?: Maybe<Scalars['String']>;
  siteId: Scalars['Int'];
};

export type ProductMediaImagesArgs = {
  search: MediaImageProductSearchInput;
};

export type ProductIsAllowedArgs = {
  permission: Permission;
  userId: Scalars['Int'];
};

export type ProductPriceArgs = {
  taxZone?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['Int']>;
};

export type ProductBulkPricesArgs = {
  taxZone?: Maybe<Scalars['String']>;
};

export type ProductNameArgs = {
  language?: Maybe<Scalars['String']>;
};

export type ProductDescriptionArgs = {
  language?: Maybe<Scalars['String']>;
};

export type ProductShortDescriptionArgs = {
  language?: Maybe<Scalars['String']>;
};

export type ProductSlugArgs = {
  language?: Maybe<Scalars['String']>;
};

export enum ProductClass {
  Product = 'product',
  Cluster = 'cluster',
}

export type ProductInventory = {
  __typename?: 'ProductInventory';
  productId: Scalars['Int'];
  totalQuantity: Scalars['Int'];
  supplierQuantity: Scalars['Int'];
  localQuantity: Scalars['Int'];
  nextDeliveryDate: Scalars['DateTime'];
  balance?: Maybe<Array<Inventory>>;
};

export type ProductOffer = IProductOffer & {
  __typename?: 'ProductOffer';
  id: Scalars['String'];
  price: Scalars['Float'];
  validFrom: Scalars['DateTime'];
  validTo: Scalars['DateTime'];
  formula: Scalars['String'];
};

export type ProductPrice = {
  __typename?: 'ProductPrice';

  /** @deprecated Product price value deprecated in favor of 'net' and 'gross' fields */
  value: Scalars['Float'];
  gross: Scalars['Float'];
  net: Scalars['Float'];
  quantity: Scalars['Int'];
  discount?: Maybe<Discount>;
  taxCode: Scalars['String'];
  type: ProductPriceType;
};

export enum ProductPriceType {
  Default = 'default',
  ProductDiscount = 'productDiscount',
  Discount = 'discount',
  Bulk1 = 'bulk1',
  Bulk2 = 'bulk2',
  Bulk3 = 'bulk3',
  Bulk4 = 'bulk4',
}

export type ProductsResponse = {
  __typename?: 'ProductsResponse';
  items: Array<IBaseProduct>;
  itemsFound: Scalars['Int'];
  offset: Scalars['Int'];
  page: Scalars['Int'];
  pages: Scalars['Int'];
  start: Scalars['Int'];
  end: Scalars['Int'];
  minPrice: Scalars['Int'];
  maxPrice: Scalars['Int'];

  /** @deprecated Deprecated in favor of filters */
  availableAttributes?: Maybe<Array<AttributeFilter>>;
  filters?: Maybe<Array<AttributeFilter>>;
};

export type ProductsResponseFiltersArgs = {
  filter?: Maybe<FilterAvailableAttributeInput>;
};

export enum ProductStatus {
  A = 'A',
  N = 'N',
  P = 'P',
  S = 'S',
  R = 'R',
  T = 'T',
}

export type PublishEmailEventResponse = {
  __typename?: 'PublishEmailEventResponse';
  success: Scalars['Boolean'];
  messageId?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  addressesByUserId: Array<Address>;
  addressesByCustomerId: Array<Address>;
  addressesByCompanyId: Array<Address>;
  addressesByOrderId: Array<Address>;
  externalAddress: ExternalAddress;
  productAttributes: Array<Attribute>;
  userAttributes: Array<Attribute>;
  authentication: GcipUser;
  claims: UserClaims;
  bundles: Array<Bundle>;
  bundle: Bundle;
  cart: ICart;
  category: Category;
  payment?: Maybe<Payment>;
  payments: PaymentsResponse;
  crossupsells: Array<Crossupsell>;
  imagesByParentId: Array<Image>;
  inventory: InventoryResponse;
  mediaImage: MediaImage;
  mediaImages: PaginatedMediaImageResponse;
  orders: OrderResponse;
  order: Order;
  orderGetPDF: Base64File;
  orderSendConfirmationEmail: SendOrderConfirmResponseType;
  userAclList: Array<Scalars['Int']>;
  explainPrice: Array<ProductPrice>;
  bulkPrice: Array<BulkPrice>;
  userDiscounts: Array<Discount>;
  products: ProductsResponse;
  product: Product;
  cluster: Cluster;
  tax: Tax;
  taxes: TaxesResponse;
  tender: Tender;
  usergroup: Usergroup;
  usergroups: UsergroupsResponse;
  company: Company;
  companies: CompaniesResponse;
  contact: Contact;
  contacts: ContactsResponse;
  customer: Customer;
  customers: CustomersResponse;
  user: IBaseUser;
  viewer: IBaseUser;
};

export type QueryAddressesByUserIdArgs = {
  userId: Scalars['Float'];
  type?: Maybe<AddressType>;
};

export type QueryAddressesByCustomerIdArgs = {
  customerId: Scalars['Float'];
  type?: Maybe<AddressType>;
};

export type QueryAddressesByCompanyIdArgs = {
  companyId: Scalars['Float'];
  type?: Maybe<AddressType>;
};

export type QueryAddressesByOrderIdArgs = {
  orderId: Scalars['Float'];
  type?: Maybe<AddressType>;
};

export type QueryExternalAddressArgs = {
  id: Scalars['Float'];
};

export type QueryProductAttributesArgs = {
  filter?: Maybe<AttributeFilterInput>;
  productId: Scalars['Int'];
};

export type QueryUserAttributesArgs = {
  filter?: Maybe<AttributeFilterInput>;
  userId: Scalars['Int'];
};

export type QueryAuthenticationArgs = {
  email: Scalars['String'];
};

export type QueryClaimsArgs = {
  userId?: Maybe<Scalars['Int']>;
  email?: Maybe<Scalars['String']>;
};

export type QueryBundlesArgs = {
  taxZone?: Maybe<Scalars['String']>;
  productId: Array<Scalars['Float']>;
};

export type QueryBundleArgs = {
  taxZone?: Maybe<Scalars['String']>;
  bundleId: Scalars['Float'];
};

export type QueryCartArgs = {
  cartId: Scalars['String'];
};

export type QueryCategoryArgs = {
  slug?: Maybe<Scalars['String']>;
  categoryId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

export type QueryPaymentArgs = {
  searchBy: SearchByInput;
};

export type QueryCrossupsellsArgs = {
  input: CrossupsellInput;
};

export type QueryImagesByParentIdArgs = {
  siteId: Scalars['Float'];
  parentId: Scalars['Float'];
};

export type QueryInventoryArgs = {
  id: Scalars['Int'];
};

export type QueryMediaImageArgs = {
  mediaId: Scalars['String'];
};

export type QueryMediaImagesArgs = {
  search: MediaImageSearchInput;
};

export type QueryOrdersArgs = {
  input: OrderSearchArguments;
};

export type QueryOrderArgs = {
  orderId?: Maybe<Scalars['Int']>;
};

export type QueryOrderGetPdfArgs = {
  orderId: Scalars['Int'];
};

export type QueryOrderSendConfirmationEmailArgs = {
  orderId: Scalars['Int'];
};

export type QueryUserAclListArgs = {
  permission: Permission;
  userId: Scalars['Int'];
};

export type QueryExplainPriceArgs = {
  taxZone?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  productId: Scalars['Float'];
};

export type QueryBulkPriceArgs = {
  taxZone?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['Float']>;
  productId: Scalars['Float'];
};

export type QueryUserDiscountsArgs = {
  userDirectoryId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

export type QueryProductsArgs = {
  term?: Maybe<Scalars['String']>;
  sku?: Maybe<Array<Scalars['String']>>;
  manufacturer?: Maybe<Array<Scalars['String']>>;
  supplierCode?: Maybe<Array<Scalars['String']>>;
  supplier?: Maybe<Array<Scalars['String']>>;
  manufacturerCode?: Maybe<Array<Scalars['String']>>;
  EANCode?: Maybe<Array<Scalars['String']>>;
  id?: Maybe<Array<Scalars['Int']>>;
  classId?: Maybe<Array<Scalars['Int']>>;
  class?: Maybe<ProductClass>;
  tag?: Maybe<Array<Scalars['String']>>;
  language?: Maybe<Scalars['String']>;
  page?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  textFilters?: Maybe<Array<TextFilterInput>>;
  rangeFilters?: Maybe<Array<RangeFilterInput>>;
  price?: Maybe<PriceFilterInput>;
  status?: Maybe<Array<ProductStatus>>;
  hidden?: Maybe<Scalars['Boolean']>;
  sort?: Maybe<Array<SortInput>>;
  searchFields?: Maybe<Array<SearchFieldsInput>>;
  hasBundle?: Maybe<YesNo>;
  isBundleLeader?: Maybe<YesNo>;
  parentSlug?: Maybe<Scalars['String']>;
  pathSlug?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  categoryId?: Maybe<Scalars['Int']>;
  getDescendants?: Maybe<Scalars['Boolean']>;
};

export type QueryProductArgs = {
  language?: Maybe<Scalars['String']>;
  sku?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  productId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

export type QueryClusterArgs = {
  language?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  clusterId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

export type QueryTaxArgs = {
  zone?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
};

export type QueryTaxesArgs = {
  input?: Maybe<TaxSearchInput>;
};

export type QueryTenderArgs = {
  orderId?: Maybe<Scalars['Int']>;
  tenderId?: Maybe<Scalars['String']>;
};

export type QueryUsergroupArgs = {
  usergroupId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

export type QueryUsergroupsArgs = {
  input: UsergroupSearchArguments;
};

export type QueryCompanyArgs = {
  companyId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

export type QueryCompaniesArgs = {
  input: CompanySearchArguments;
};

export type QueryContactArgs = {
  contactId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

export type QueryContactsArgs = {
  input: ContactSearchArguments;
};

export type QueryCustomerArgs = {
  customerId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

export type QueryCustomersArgs = {
  input: CustomerSearchArguments;
};

export type QueryUserArgs = {
  login?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

export type RangeFilterInput = {
  from: Scalars['Float'];
  to: Scalars['Float'];
  searchId: Scalars['String'];
  exclude?: Maybe<Scalars['Boolean']>;
  type?: Maybe<AttributeType>;
};

export type RefreshTokenResponse = {
  __typename?: 'RefreshTokenResponse';
  access_token: Scalars['String'];
  refresh_token: Scalars['String'];
  expires_in: Scalars['Int'];
  token_type: Scalars['String'];
  user_id: Scalars['String'];
};

export type RegisterUserInput = {
  firstName: Scalars['String'];
  middleName?: Maybe<Scalars['String']>;
  lastName: Scalars['String'];
  gender?: Maybe<Gender>;
  company?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  homepage?: Maybe<Scalars['String']>;
  cocNumber?: Maybe<Scalars['String']>;
  taxNumber?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  mobile?: Maybe<Scalars['String']>;
  dateOfBirth?: Maybe<Scalars['DateTime']>;
  mailingList?: Maybe<YesNo>;
  parentId: Scalars['Int'];
  password?: Maybe<Scalars['String']>;
  createAccount?: Maybe<Scalars['Boolean']>;
  autoLogin?: Maybe<Scalars['Boolean']>;
};

export type RegisterUserResponse = {
  __typename?: 'RegisterUserResponse';
  user: IBaseUser;
  session: RegisterUserSession;
};

export type RegisterUserSession = {
  __typename?: 'RegisterUserSession';
  accessToken: Scalars['String'];
  refreshToken: Scalars['String'];
  expirationTime: Scalars['DateTime'];
};

export enum ResizeFilter {
  Nearest = 'NEAREST',
  Bilinear = 'BILINEAR',
  Bicubic = 'BICUBIC',
  Lanczos2 = 'LANCZOS2',
  Lanczos3 = 'LANCZOS3',
}

export enum Searchablefields {
  Name = 'name',
  Description = 'description',
  ShortDescription = 'shortDescription',
  Keywords = 'keywords',
  KeywordsCustom = 'keywordsCustom',
  Sku = 'sku',
  Manufacturer = 'manufacturer',
  ManufacturerCode = 'manufacturerCode',
  Supplier = 'supplier',
  SupplierCode = 'supplierCode',
  EanCode = 'eanCode',
}

export type SearchByInput = {
  id?: Maybe<Scalars['ID']>;
  paymentId?: Maybe<Scalars['String']>;
  orderId?: Maybe<Scalars['Float']>;
};

export type SearchFieldsInput = {
  fieldNames: Array<Searchablefields>;
  boost: Scalars['Int'];
};

export type SendOrderConfirmResponseType = {
  __typename?: 'SendOrderConfirmResponseType';
  messageId: Scalars['String'];
  success: Scalars['Boolean'];
};

export type SharpenInput = {
  amount?: Maybe<Scalars['Float']>;
  radius?: Maybe<Scalars['Int']>;
  threshold?: Maybe<Scalars['Int']>;
};

export type Shipment = {
  __typename?: 'Shipment';
  id: Scalars['Int'];
  orderId: Scalars['Int'];
  status: Scalars['String'];
  date: Scalars['DateTime'];
  totalGross: Scalars['Float'];
  totalNet: Scalars['Float'];
  totalTax: Scalars['Float'];
  totalDiscountValue: Scalars['Float'];
  printDate?: Maybe<Scalars['DateTime']>;
  items?: Maybe<Array<ShipmentItem>>;
  trackAndTrace?: Maybe<Array<TrackAndTrace>>;
};

export type ShipmentItem = {
  __typename?: 'ShipmentItem';
  id: Scalars['Int'];
  shipmentId: Scalars['Int'];
  orderItemId: Scalars['Int'];
  uuid: Scalars['String'];
  productId?: Maybe<Scalars['Int']>;
  sku: Scalars['String'];
  quantity: Scalars['Int'];
  name: Scalars['String'];
  supplier: Scalars['String'];
  supplierCode: Scalars['String'];
  price: Scalars['Float'];
  priceTotal: Scalars['Float'];
  discount: Scalars['Float'];
  tax: Scalars['Float'];
  taxPercentage: Scalars['Float'];
};

export enum Sort {
  Asc = 'ASC',
  Desc = 'DESC',
}

export enum SortableFields {
  Sku = 'sku',
  SupplierCode = 'supplierCode',
  DateCreated = 'dateCreated',
  DateChanged = 'dateChanged',
  Name = 'name',
  ShortName = 'shortName',
  Price = 'price',
  Relevance = 'relevance',
}

export type SortInput = {
  field: SortableFields;
  order?: Maybe<SortOrder>;
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc',
}

export type StandardFileUploadInput = {
  file: Scalars['Upload'];
  fileName?: Maybe<Scalars['String']>;
};

export type Tax = {
  __typename?: 'Tax';
  id: Scalars['ID'];
  shopId: Scalars['Int'];
  code?: Maybe<Scalars['String']>;
  zone: Scalars['String'];
  ratio?: Maybe<Scalars['Float']>;
  exportCode?: Maybe<Scalars['String']>;
};

export enum Taxcode {
  H = 'H',
  L = 'L',
  N = 'N',
}

export enum TaxCode {
  H = 'H',
  L = 'L',
  N = 'N',
}

export type TaxesResponse = {
  __typename?: 'TaxesResponse';
  items: Array<Tax>;
  itemsFound: Scalars['Int'];
  offset: Scalars['Int'];
  page: Scalars['Int'];
  pages: Scalars['Int'];
  start: Scalars['Int'];
  end: Scalars['Int'];
};

export type TaxSearchInput = {
  type?: Maybe<Scalars['String']>;
  page?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type Tender = {
  __typename?: 'Tender';
  tenderId: Scalars['String'];
  orderId?: Maybe<Scalars['Int']>;
  type: TenderOrderType;
  siteId: Scalars['Int'];
  shopId: Scalars['Int'];
  date: Scalars['DateTime'];
  userId: Scalars['Int'];
  invoiceUserId?: Maybe<Scalars['Int']>;
  status: Scalars['String'];
  email: Scalars['String'];
  debtorId: Scalars['String'];
  invoiceAddress?: Maybe<TenderAddress>;
  deliveryAddress?: Maybe<TenderAddress>;
  itemCount?: Maybe<Scalars['Int']>;
  items?: Maybe<Array<TenderItem>>;
  paymentData?: Maybe<TenderPayment>;
  postageData?: Maybe<TenderPostage>;
  total?: Maybe<TenderTotal>;
  payMethods?: Maybe<Array<TenderPaymethod>>;
  source?: Maybe<Scalars['String']>;
  valuePoints?: Maybe<Scalars['Int']>;
  incentivesApplied?: Maybe<Scalars['Boolean']>;
  creditPoints?: Maybe<Scalars['Int']>;
  couponCode?: Maybe<Scalars['String']>;
  actionCode?: Maybe<Scalars['String']>;
  reference?: Maybe<Scalars['String']>;
  remarks?: Maybe<Scalars['String']>;
  externalId?: Maybe<Scalars['String']>;
  extra3?: Maybe<Scalars['String']>;
  extra4?: Maybe<Scalars['String']>;
  editable?: Maybe<Scalars['Boolean']>;
  user: IBaseUser;
};

export type TenderAddItemInput = {
  quantity: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
  supplier?: Maybe<Scalars['String']>;
  deliveryDate?: Maybe<Scalars['DateTime']>;
  notes?: Maybe<Scalars['String']>;
  productId: Scalars['Int'];
};

export type TenderAddItemsInput = {
  tenderId: Scalars['String'];
  products: Array<TenderAddItemInput>;
  forceAdd?: Maybe<Scalars['Boolean']>;
  validateOrderList?: Maybe<Scalars['Boolean']>;
  validateBudget?: Maybe<Scalars['Boolean']>;
};

export type TenderAddress = {
  __typename?: 'TenderAddress';
  company?: Maybe<Scalars['String']>;
  gender?: Maybe<Gender>;
  firstName: Scalars['String'];
  middleName?: Maybe<Scalars['String']>;
  lastName: Scalars['String'];
  street: Scalars['String'];
  number: Scalars['String'];
  numberExtension?: Maybe<Scalars['String']>;
  postalCode: Scalars['String'];
  city: Scalars['String'];
  region?: Maybe<Scalars['String']>;
  country: Scalars['String'];
  code?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  mobile?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  fax?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  icp?: Maybe<YesNo>;
  notes?: Maybe<Scalars['String']>;
};

export enum TenderAddressType {
  Invoice = 'invoice',
  Delivery = 'delivery',
}

export type TenderChildItem = {
  __typename?: 'TenderChildItem';
  id: Scalars['Int'];
  orderItemId?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
  productId: Scalars['Int'];
  sku: Scalars['String'];
  quantity: Scalars['Int'];
  supplier: Scalars['String'];
  supplierCode: Scalars['String'];
  price: Scalars['Float'];
  priceNet: Scalars['Float'];
  totalPrice: Scalars['Float'];
  totalPriceNet: Scalars['Float'];
  taxCode: Taxcode;
  taxPercentage: Scalars['Int'];
  customerDiscountPercentage: Scalars['Float'];
  discountPercentage: Scalars['Float'];
  totalDiscountPercentage: Scalars['Float'];
  marginAmount: Scalars['Float'];
  marginPercentage: Scalars['Float'];
  saleMarginAmount: Scalars['Float'];
  saleMarginPercentage: Scalars['Float'];
  attributedSaleDiscount: Scalars['Float'];
  attributedSaleMargin: Scalars['Float'];
  originalPrice: Scalars['Float'];
  costPrice: Scalars['Float'];
  customerPrice: Scalars['Float'];
  valuePoints?: Maybe<Scalars['Int']>;
  expectedDeliveryDate?: Maybe<Scalars['DateTime']>;
  externalOrderitemId?: Maybe<Scalars['String']>;
  notes: Scalars['String'];
  type: TenderOrderItemType;
};

export type TenderDeleteItemInput = {
  tenderId: Scalars['String'];
  itemId: Scalars['Int'];
};

export type TenderDiscountInput = {
  tenderId: Scalars['String'];
  type: DiscountType;
  value: Scalars['Float'];
};

export type TenderItem = {
  __typename?: 'TenderItem';
  id: Scalars['Int'];
  orderItemId?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
  productId: Scalars['Int'];
  sku: Scalars['String'];
  quantity: Scalars['Int'];
  supplier: Scalars['String'];
  supplierCode: Scalars['String'];
  price: Scalars['Float'];
  priceNet: Scalars['Float'];
  totalPrice: Scalars['Float'];
  totalPriceNet: Scalars['Float'];
  taxCode: Taxcode;
  taxPercentage: Scalars['Int'];
  customerDiscountPercentage: Scalars['Float'];
  discountPercentage: Scalars['Float'];
  totalDiscountPercentage: Scalars['Float'];
  marginAmount: Scalars['Float'];
  marginPercentage: Scalars['Float'];
  saleMarginAmount: Scalars['Float'];
  saleMarginPercentage: Scalars['Float'];
  attributedSaleDiscount: Scalars['Float'];
  attributedSaleMargin: Scalars['Float'];
  originalPrice: Scalars['Float'];
  costPrice: Scalars['Float'];
  customerPrice: Scalars['Float'];
  valuePoints?: Maybe<Scalars['Int']>;
  expectedDeliveryDate?: Maybe<Scalars['DateTime']>;
  externalOrderitemId?: Maybe<Scalars['String']>;
  notes: Scalars['String'];
  childItems?: Maybe<Array<TenderChildItem>>;
  sum: Scalars['Float'];
  sumNet: Scalars['Float'];
  totalSum: Scalars['Float'];
  totalSumNet: Scalars['Float'];
  discountPercentageSum: Scalars['Float'];
  totalDiscountPercentageSum: Scalars['Float'];
  saleMarginAmountSum: Scalars['Float'];
  saleMarginPercentageSum: Scalars['Float'];
  attributedSaleDiscountSum: Scalars['Float'];
  attributedSaleMarginSum: Scalars['Float'];
};

export enum TenderOrderItemType {
  Product = 'product',
  Surcharge = 'surcharge',
  Incentive = 'incentive',
}

export enum TenderOrderType {
  Dropshipment = 'dropshipment',
  Stock = 'stock',
  Purchase = 'purchase',
  Quotation = 'quotation',
}

export type TenderPayment = {
  __typename?: 'TenderPayment';
  amountNet: Scalars['Float'];
  amountGross: Scalars['Float'];
  overruled: Scalars['Boolean'];
  tax: Scalars['Float'];
  taxPercentage: Scalars['Float'];
  method: Scalars['String'];
  status?: Maybe<Scalars['String']>;
  statusDate?: Maybe<Scalars['DateTime']>;
  transactionId?: Maybe<Scalars['String']>;
  accountingId?: Maybe<Scalars['String']>;
};

export type TenderPaymentInput = {
  tenderId: Scalars['String'];
  amountGross?: Maybe<Scalars['Float']>;
  method?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  transactionId?: Maybe<Scalars['String']>;
  accountingId?: Maybe<Scalars['String']>;
};

export type TenderPaymethod = {
  __typename?: 'TenderPaymethod';
  code: Scalars['String'];
  externalCode?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  description: Scalars['String'];
  taxCode: Taxcode;
  amount: Scalars['Float'];
  allowed: Scalars['Boolean'];
};

export type TenderPostage = {
  __typename?: 'TenderPostage';
  shippingMethod: Scalars['String'];
  trackTrace: Scalars['String'];
  taxPercentage: Scalars['Float'];
  requestDate: Scalars['DateTime'];
  carrier: Scalars['String'];
  postageGross: Scalars['Float'];
  postageNet: Scalars['Float'];
  overruled: Scalars['Boolean'];
  partialDeliveryAllowed?: Maybe<Scalars['Boolean']>;
  pickUpLocationId?: Maybe<Scalars['Int']>;
};

export type TenderPostageInput = {
  tenderId: Scalars['String'];
  shippingMethod?: Maybe<Scalars['String']>;
  trackTrace?: Maybe<Scalars['String']>;
  requestDate?: Maybe<Scalars['DateTime']>;
  carrier?: Maybe<Scalars['String']>;
  postageGross?: Maybe<Scalars['Float']>;
  partialDeliveryAllowed?: Maybe<Scalars['Boolean']>;
  pickUpLocationId?: Maybe<Scalars['Int']>;
};

export type TenderProcessResponse = {
  __typename?: 'TenderProcessResponse';
  orderId: Scalars['Int'];
};

export type TenderResponse = {
  __typename?: 'TenderResponse';
  tender: Tender;
  response: TenderResponseData;
};

export type TenderResponseData = {
  __typename?: 'TenderResponseData';
  data: Scalars['JSONObject'];
  error: Scalars['Boolean'];
  messages?: Maybe<Array<Scalars['String']>>;
};

export type TenderStart = {
  siteId: Scalars['Int'];
  userId: Scalars['Int'];
  ownerId?: Maybe<Scalars['Int']>;
  type?: Maybe<TenderOrderType>;
  currency?: Maybe<Scalars['String']>;
};

export type TenderTaxLevel = {
  __typename?: 'TenderTaxLevel';
  taxCode: Taxcode;
  price: Scalars['Float'];
};

export type TenderTotal = {
  __typename?: 'TenderTotal';
  subTotal: Scalars['Float'];
  subTotalNet: Scalars['Float'];
  discountPercentage: Scalars['Float'];
  discountType: DiscountType;
  discountOverruled: Scalars['Boolean'];
  totalNet: Scalars['Float'];
  totalGross: Scalars['Float'];
  discountNet: Scalars['Float'];
  discountGross: Scalars['Float'];
  totalTax: Scalars['Float'];
  taxLevels?: Maybe<Array<TenderTaxLevel>>;
};

export type TenderUpdateAddressInput = {
  tenderId: Scalars['String'];
  type: TenderAddressType;
  company?: Maybe<Scalars['String']>;
  gender?: Maybe<Gender>;
  firstName?: Maybe<Scalars['String']>;
  middleName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  street: Scalars['String'];
  number?: Maybe<Scalars['String']>;
  numberExtension?: Maybe<Scalars['String']>;
  postalCode: Scalars['String'];
  city: Scalars['String'];
  region?: Maybe<Scalars['String']>;
  country: Scalars['String'];
  code?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  mobile?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  fax?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  icp?: Maybe<YesNo>;
  notes?: Maybe<Scalars['String']>;
};

export type TenderUpdateInput = {
  tenderId: Scalars['String'];
  status?: Maybe<Scalars['String']>;
  reference?: Maybe<Scalars['String']>;
  remarks?: Maybe<Scalars['String']>;
};

export type TenderUpdateItemInput = {
  quantity?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
  supplier?: Maybe<Scalars['String']>;
  deliveryDate?: Maybe<Scalars['DateTime']>;
  notes?: Maybe<Scalars['String']>;
  tenderId: Scalars['String'];
  itemId: Scalars['Int'];
  validateOrderList?: Maybe<Scalars['Boolean']>;
  validateBudget?: Maybe<Scalars['Boolean']>;
};

export type TextFilterInput = {
  searchId: Scalars['String'];
  values: Array<Scalars['String']>;
  exclude?: Maybe<Scalars['Boolean']>;
  type?: Maybe<AttributeType>;
};

export type TrackAndTrace = {
  __typename?: 'TrackAndTrace';
  id: Scalars['Int'];
  orderId: Scalars['Int'];
  shipmentId: Scalars['Int'];
  carrierId: Scalars['Int'];
  code: Scalars['String'];
};

export type Transaction = {
  __typename?: 'Transaction';
  id: Scalars['ID'];
  transactionId: Scalars['String'];
  paymentId?: Maybe<Scalars['String']>;
  orderId: Scalars['Int'];
  amount: Scalars['Int'];
  currency: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['DateTime']>;
  type: TransactionTypes;
  provider?: Maybe<Scalars['String']>;
  status: TransactionStatuses;
};

export enum TransactionStatuses {
  Open = 'OPEN',
  Pending = 'PENDING',
  Failed = 'FAILED',
  Success = 'SUCCESS',
}

export enum TransactionTypes {
  Authorization = 'AUTHORIZATION',
  CancelAuthorization = 'CANCEL_AUTHORIZATION',
  Pay = 'PAY',
  Refund = 'REFUND',
  Chargeback = 'CHARGEBACK',
}

export type TransformationInput = {
  auto?: Maybe<Auto>;
  bgColor?: Maybe<Scalars['String']>;
  blur?: Maybe<Scalars['Float']>;
  brightness?: Maybe<Scalars['Int']>;
  canvas?: Maybe<CanvasInput>;
  contrast?: Maybe<Scalars['Int']>;
  crop?: Maybe<CropInput>;
  disable?: Maybe<FeaturesEnableDisable>;
  dpr?: Maybe<Scalars['Int']>;
  fit?: Maybe<Fit>;
  format?: Maybe<Format>;
  frame?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Float']>;
  level?: Maybe<Level>;
  optimize?: Maybe<Optimize>;
  orient?: Maybe<Orient>;
  pad?: Maybe<PadInput>;
  precrop?: Maybe<CropInput>;
  profile?: Maybe<Scalars['String']>;
  quality?: Maybe<Scalars['Float']>;
  resizeFilter?: Maybe<ResizeFilter>;
  saturation?: Maybe<Scalars['Int']>;
  sharpen?: Maybe<SharpenInput>;
  trim?: Maybe<TrimInput>;
  width?: Maybe<Scalars['Int']>;
};

export type TransformationsInput = {
  transformations: Array<ImageTransformationInput>;
};

export type TrimInput = {
  top?: Maybe<Scalars['Int']>;
  right?: Maybe<Scalars['Int']>;
  bottom?: Maybe<Scalars['Int']>;
  left?: Maybe<Scalars['Int']>;
};

export type UpdateInventoryInput = {
  code?: Maybe<Scalars['String']>;
  costPrice?: Maybe<Scalars['Float']>;
  date?: Maybe<Scalars['DateTime']>;
  dateArchived?: Maybe<Scalars['DateTime']>;
  location?: Maybe<Scalars['String']>;
  nextDeliveryDate?: Maybe<Scalars['DateTime']>;
  notes?: Maybe<Scalars['String']>;
  quality?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  supplier?: Maybe<Scalars['String']>;
  supplierCode?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  warehouse?: Maybe<Scalars['Int']>;
};

export type UpdateMediaImageInput = {
  productId?: Maybe<Scalars['ID']>;
  alt?: Maybe<Array<MediaLocalizedStringInput>>;
  description?: Maybe<Array<MediaLocalizedStringInput>>;
  tags?: Maybe<Array<MediaLocalizedStringArrayInput>>;
  priority?: Maybe<Scalars['Int']>;
  id: Scalars['String'];
  uploadImage: UploadFileInput;
};

export type UpdatePaymentInput = {
  userId?: Maybe<Scalars['Int']>;
  anonymousId?: Maybe<Scalars['Int']>;
  paymentId?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['Int']>;
  currency?: Maybe<Scalars['String']>;
  method?: Maybe<Scalars['String']>;
  status?: Maybe<PaymentStatuses>;
  addTransaction?: Maybe<CreateTransactionInput>;
};

export type UpdateTaxInput = {
  shopId?: Maybe<Scalars['Int']>;
  code?: Maybe<Scalars['String']>;
  zone?: Maybe<Scalars['String']>;
  ratio?: Maybe<Scalars['Float']>;
  exportCode?: Maybe<Scalars['String']>;
};

export type UpdateUserInput = {
  firstName: Scalars['String'];
  middleName?: Maybe<Scalars['String']>;
  lastName: Scalars['String'];
  gender?: Maybe<Gender>;
  company?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  homepage?: Maybe<Scalars['String']>;
  cocNumber?: Maybe<Scalars['String']>;
  taxNumber?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  mobile?: Maybe<Scalars['String']>;
  dateOfBirth?: Maybe<Scalars['DateTime']>;
  mailingList?: Maybe<YesNo>;
  parentId: Scalars['Int'];
  userId: Scalars['Int'];
};

export type UploadFileInput = {
  language?: Maybe<Scalars['String']>;
  uploadType: UploadType;
  base64File?: Maybe<MediaBase64FileInput>;
  file?: Maybe<StandardFileUploadInput>;
  urlFile?: Maybe<UrlFileUploadInput>;
};

export enum UploadType {
  Base64 = 'BASE64',
  File = 'FILE',
  Url = 'URL',
}

export type UrlFileUploadInput = {
  url: Scalars['String'];
  fileName: Scalars['String'];
};

export type User = IBaseUser & {
  __typename?: 'User';
  id: Scalars['Int'];
  userId: Scalars['Int'];
  addresses: Array<Address>;
  attributes?: Maybe<Array<Attribute>>;
  orders: OrderResponse;
  aclList: Array<Scalars['Int']>;
  isAllowed: Scalars['Boolean'];
  debtorId?: Maybe<Scalars['String']>;
  gender?: Maybe<Gender>;
  firstName: Scalars['String'];
  middleName?: Maybe<Scalars['String']>;
  lastName: Scalars['String'];
  taxNumber?: Maybe<Scalars['String']>;
  cocNumber?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  mobile?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  iban?: Maybe<Scalars['String']>;
  bankAccount?: Maybe<Scalars['String']>;
  bic?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  primaryLanguage?: Maybe<Scalars['String']>;
  expires?: Maybe<Scalars['DateTime']>;
  dateOfBirth?: Maybe<Scalars['DateTime']>;
  mailingList?: Maybe<YesNo>;
  isLoggedIn?: Maybe<Scalars['Boolean']>;
  usergroup: Usergroup;
  company?: Maybe<Scalars['String']>;
  parentUsergroupId: Scalars['Int'];
};

export type UserAddressesArgs = {
  type?: Maybe<AddressType>;
  isDefault?: Maybe<YesNo>;
};

export type UserAttributesArgs = {
  filter?: Maybe<AttributeFilterInput>;
};

export type UserAclListArgs = {
  permission: Permission;
};

export type UserIsAllowedArgs = {
  permission: Permission;
  userId: Scalars['Int'];
};

export type UserAddressCreateInput = {
  firstName?: Maybe<Scalars['String']>;
  middleName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  gender?: Maybe<Gender>;
  company?: Maybe<Scalars['String']>;
  street: Scalars['String'];
  number?: Maybe<Scalars['String']>;
  numberExtension?: Maybe<Scalars['String']>;
  postalCode: Scalars['String'];
  city: Scalars['String'];
  region?: Maybe<Scalars['String']>;
  country: Scalars['String'];
  phone?: Maybe<Scalars['String']>;
  mobile?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  isDefault?: Maybe<YesNo>;
  userId: Scalars['Int'];
  type: AddressType;
};

export type UserAddressDeleteInput = {
  id: Scalars['Int'];
  userId: Scalars['Int'];
};

export type UserAddressUpdateInput = {
  firstName?: Maybe<Scalars['String']>;
  middleName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  gender?: Maybe<Gender>;
  company?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
  number?: Maybe<Scalars['String']>;
  numberExtension?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  mobile?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  isDefault?: Maybe<YesNo>;
  userId: Scalars['Int'];
  id: Scalars['Int'];
};

export type UserClaims = {
  __typename?: 'UserClaims';
  userId: Scalars['Int'];
  userDirectoryId: Scalars['Int'];
  roles: Array<Scalars['String']>;
  discounts: Array<Scalars['String']>;
  acllist: Array<Scalars['Int']>;
  class: Scalars['String'];
};

export type Usergroup = {
  __typename?: 'Usergroup';
  id: Scalars['Int'];
  usergroupId: Scalars['Int'];
  name: Scalars['String'];
  hidden?: Maybe<YesNo>;
  inheritProductList?: Maybe<YesNo>;
  primaryLanguage?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  tag?: Maybe<Scalars['String']>;
  dateCreated?: Maybe<Scalars['DateTime']>;
  parentUsergroupId: Scalars['Int'];
  usergroup: Usergroup;
  usergroups: Array<Usergroup>;
  companies?: Maybe<CompaniesResponse>;
  customers: Array<Customer>;
};

export type UsergroupCompaniesArgs = {
  input?: Maybe<CompanySearchArguments>;
};

export type UsergroupSearchArguments = {
  name?: Maybe<Scalars['String']>;
  page?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<UsergroupSortInput>>;
};

export enum UsergroupSortableFields {
  Name = 'name',
}

export type UsergroupSortInput = {
  field: UsergroupSortableFields;
  order?: Maybe<SortOrder>;
};

export type UsergroupsResponse = {
  __typename?: 'UsergroupsResponse';
  items: Array<Usergroup>;
  itemsFound: Scalars['Int'];
  offset: Scalars['Int'];
  page: Scalars['Int'];
  pages: Scalars['Int'];
  start: Scalars['Int'];
  end: Scalars['Int'];
};

export type VerifyToken = {
  __typename?: 'VerifyToken';
  uid: Scalars['String'];
  name: Scalars['String'];
  claims?: Maybe<Scalars['JSONObject']>;
  iss: Scalars['String'];
  aud: Scalars['String'];
  auth_time: Scalars['Int'];
  user_id: Scalars['String'];
  sub: Scalars['String'];
  iat: Scalars['Int'];
  exp: Scalars['Int'];
  email: Scalars['String'];
  email_verified: Scalars['Boolean'];
  firebase?: Maybe<Firebase>;
};

export type VerifyTokenInput = {
  token: Scalars['String'];
};

export enum YesNo {
  Y = 'Y',
  N = 'N',
}
