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
};

export type Ace = {
  __typename?: 'Ace';
  aceId: Scalars['Int'];
  alow: Scalars['Int'];
  deny: Scalars['Int'];
};

export type Address = {
  __typename?: 'Address';
  city: Scalars['String'];
  code?: Maybe<Scalars['String']>;
  company?: Maybe<Scalars['String']>;
  country: Scalars['String'];
  email?: Maybe<Scalars['String']>;
  firstName: Scalars['String'];
  gender?: Maybe<Gender>;
  id: Scalars['Int'];
  isDefault: YesNo;
  lastName: Scalars['String'];
  middleName?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  number: Scalars['String'];
  numberExtension?: Maybe<Scalars['String']>;
  postalCode: Scalars['String'];
  region?: Maybe<Scalars['String']>;
  street: Scalars['String'];
  telephone?: Maybe<Scalars['String']>;
  type: UserAddressType;
};

export type Attribute = {
  __typename?: 'Attribute';
  dateValue?: Maybe<Scalars['DateTime']>;
  decimalValue?: Maybe<Array<Scalars['Float']>>;
  description: Array<LocalizedString>;
  enumValue?: Maybe<Array<Scalars['String']>>;
  group: Scalars['String'];
  id: Scalars['String'];
  intValue?: Maybe<Array<Scalars['Int']>>;
  isHidden?: Maybe<Scalars['Boolean']>;
  isPublic: Scalars['Boolean'];
  isSearchable: Scalars['Boolean'];
  name: Scalars['String'];
  searchId: Scalars['String'];
  textValue?: Maybe<Array<LocalizedStringArray>>;
  type: AttributeType;
  typeParam: Scalars['String'];
};

export type AttributeDescriptionArgs = {
  language?: Maybe<Scalars['String']>;
};

export type AttributeTextValueArgs = {
  language?: Maybe<Scalars['String']>;
};

export type AttributeDecimalRangeFilter = IAttributeDecimalRangeFilter & {
  __typename?: 'AttributeDecimalRangeFilter';
  max: Scalars['Float'];
  min: Scalars['Float'];
};

export type AttributeFilter = IAttributeFilter & {
  __typename?: 'AttributeFilter';
  decimalRangeFilter?: Maybe<IAttributeDecimalRangeFilter>;
  description: Scalars['String'];
  id: Scalars['String'];
  integerRangeFilter?: Maybe<IAttributeIntegerRangeFilter>;
  isHidden?: Maybe<Scalars['Boolean']>;
  isPublic: Scalars['Boolean'];
  isSearchable: Scalars['Boolean'];
  searchId: Scalars['String'];
  textFilter?: Maybe<Array<AttributeTextFilter>>;
  type: AttributeType;
};

export type AttributeFilterInput = {
  group?: Maybe<Array<Scalars['String']>>;
  isHidden?: Maybe<Scalars['Boolean']>;
  isPublic?: Maybe<Scalars['Boolean']>;
  isSearchable?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Array<Scalars['String']>>;
  type?: Maybe<Array<AttributeType>>;
};

export type AttributeIntegerRangeFilter = IAttributeIntegerRangeFilter & {
  __typename?: 'AttributeIntegerRangeFilter';
  max: Scalars['Int'];
  min: Scalars['Int'];
};

export type AttributeTextFilter = IAttributeTextFilter & {
  __typename?: 'AttributeTextFilter';
  count: Scalars['Int'];
  value: Scalars['String'];
};

export enum AttributeType {
  Color = 'color',
  Date = 'date',
  Datetime = 'datetime',
  Decimal = 'decimal',
  Enum = 'enum',
  Enumlist = 'enumlist',
  Integer = 'integer',
  List = 'list',
  Object = 'object',
  Text = 'text',
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
  from: Scalars['Int'];
  gross: Scalars['Float'];
  net: Scalars['Float'];
  /** @deprecated Bulk price value deprecated in favor of 'net' and 'gross' fields */
  price: Scalars['Float'];
  to?: Maybe<Scalars['Int']>;
};

export type Bundle = IBundle & {
  __typename?: 'Bundle';
  comboId: Scalars['Float'];
  condition?: Maybe<Scalars['String']>;
  description: Scalars['String'];
  discount?: Maybe<Scalars['Float']>;
  id: Scalars['Float'];
  items?: Maybe<Array<BundleItem>>;
  name: Scalars['String'];
  price?: Maybe<BundlePrice>;
};

export type BundleItem = IBundleItem & {
  __typename?: 'BundleItem';
  isLeader: Scalars['String'];
  price?: Maybe<BundlePrice>;
  product: Product;
  productId: Scalars['Int'];
};

export type BundlePrice = IBundlePrice & {
  __typename?: 'BundlePrice';
  gross: Scalars['Float'];
  net: Scalars['Float'];
  originalGross: Scalars['Float'];
  originalNet: Scalars['Float'];
};

export type Cart = ICart & {
  __typename?: 'Cart';
  actionCode?: Maybe<Scalars['String']>;
  bonusItems?: Maybe<Array<CartBaseItem>>;
  carrier: Scalars['String'];
  carriers?: Maybe<Array<CartCarrier>>;
  cartId: Scalars['String'];
  couponCode?: Maybe<Scalars['String']>;
  dateChanged?: Maybe<Scalars['DateTime']>;
  dateCreated?: Maybe<Scalars['DateTime']>;
  deliveryAddress: CartAddress;
  extra3?: Maybe<Scalars['String']>;
  extra4?: Maybe<Scalars['String']>;
  incentives?: Maybe<Array<CartIncentive>>;
  invoiceAddress: CartAddress;
  items?: Maybe<Array<CartBaseItem>>;
  notes?: Maybe<Scalars['String']>;
  orderStatus?: Maybe<Scalars['String']>;
  payMethods?: Maybe<Array<CartPaymethod>>;
  paymentData?: Maybe<CartPaymentData>;
  postageData?: Maybe<CartPostageData>;
  reference?: Maybe<Scalars['String']>;
  taxLevels?: Maybe<Array<CartTaxLevel>>;
  total?: Maybe<CartTotal>;
  userId: Scalars['Int'];
  valuePoints?: Maybe<Scalars['Int']>;
  vouchers?: Maybe<Array<CartVoucher>>;
};

export type CartAddBundleInput = {
  bundleId: Scalars['Int'];
  cartId: Scalars['String'];
  notes?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['Int']>;
};

export type CartAddItemInput = {
  cartId: Scalars['String'];
  notes?: Maybe<Scalars['String']>;
  productId: Scalars['Int'];
  quantity?: Maybe<Scalars['Int']>;
};

export type CartAddress = {
  __typename?: 'CartAddress';
  city: Scalars['String'];
  code?: Maybe<Scalars['String']>;
  company?: Maybe<Scalars['String']>;
  country: Scalars['String'];
  email?: Maybe<Scalars['String']>;
  firstName: Scalars['String'];
  gender?: Maybe<Gender>;
  icp?: Maybe<YesNo>;
  lastName: Scalars['String'];
  middleName?: Maybe<Scalars['String']>;
  mobile?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  number: Scalars['String'];
  numberExtension?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  postalCode: Scalars['String'];
  region?: Maybe<Scalars['String']>;
  street: Scalars['String'];
  url?: Maybe<Scalars['String']>;
};

export enum CartAddressType {
  Delivery = 'delivery',
  Invoice = 'invoice',
}

export type CartBaseItem = {
  __typename?: 'CartBaseItem';
  bundle?: Maybe<Bundle>;
  bundleId?: Maybe<Scalars['Int']>;
  deliveryDeadline?: Maybe<Scalars['DateTime']>;
  expectedDeliveryDate?: Maybe<Scalars['DateTime']>;
  id: Scalars['Int'];
  notes: Scalars['String'];
  price: Scalars['Float'];
  priceNet: Scalars['Float'];
  product?: Maybe<Product>;
  productId?: Maybe<Scalars['Int']>;
  quantity: Scalars['Int'];
  sum: Scalars['Float'];
  sumNet: Scalars['Float'];
  taxCode: Taxcode;
  totalPrice: Scalars['Float'];
  totalPriceNet: Scalars['Float'];
  totalSum: Scalars['Float'];
  totalSumNet: Scalars['Float'];
};

export type CartBaseItemBundleArgs = {
  taxZone?: Maybe<Scalars['String']>;
};

export type CartCarrier = {
  __typename?: 'CartCarrier';
  description: Scalars['String'];
  logo: Scalars['String'];
  name: Scalars['String'];
  price: Scalars['Float'];
};

export type CartDeleteItemInput = {
  cartId: Scalars['String'];
  itemId: Scalars['Int'];
};

export type CartIncentive = {
  __typename?: 'CartIncentive';
  content: Scalars['String'];
  name: Scalars['String'];
  ruleId: Scalars['Int'];
};

export type CartPaymentData = {
  __typename?: 'CartPaymentData';
  grossAmount: Scalars['Float'];
  method: Scalars['String'];
  netAmount: Scalars['Float'];
  tax: Scalars['Float'];
  taxPercentage: Scalars['Float'];
};

export type CartPaymentDataInput = {
  method?: Maybe<Scalars['String']>;
};

export type CartPaymethod = {
  __typename?: 'CartPaymethod';
  amount: Scalars['Float'];
  code: Scalars['String'];
  description: Scalars['String'];
  externalCode: Scalars['String'];
  price: Scalars['Float'];
  taxCode: Taxcode;
  type: Scalars['String'];
};

export type CartPostageData = {
  __typename?: 'CartPostageData';
  partialDeliveryAllowed?: Maybe<YesNo>;
  postage: Scalars['Float'];
  postageNet: Scalars['Float'];
  postageTaxPercentage: Scalars['Float'];
  requestDate: Scalars['DateTime'];
  shippingMethod: Scalars['String'];
};

export type CartPostageDataInput = {
  partialDeliveryAllowed?: Maybe<YesNo>;
  requestDate?: Maybe<Scalars['DateTime']>;
  shippingMethod?: Maybe<Scalars['String']>;
};

export type CartProcessInput = {
  cartId: Scalars['String'];
  orderStatus: Scalars['String'];
};

export type CartProcessResponse = {
  __typename?: 'CartProcessResponse';
  cartOrderId: Scalars['Int'];
  order: Order;
  response: CartResponseData;
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
  price: Scalars['Float'];
  taxCode: Taxcode;
};

export type CartTotal = {
  __typename?: 'CartTotal';
  discountGross: Scalars['Float'];
  discountNet: Scalars['Float'];
  discountPercentage: Scalars['Float'];
  subTotal: Scalars['Float'];
  subTotalNet: Scalars['Float'];
  totalGross: Scalars['Float'];
  totalNet: Scalars['Float'];
};

export type CartUpdateAddressInput = {
  cartId: Scalars['String'];
  city: Scalars['String'];
  code?: Maybe<Scalars['String']>;
  company?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  firstName: Scalars['String'];
  gender?: Maybe<Gender>;
  icp?: Maybe<YesNo>;
  lastName: Scalars['String'];
  middleName?: Maybe<Scalars['String']>;
  mobile?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  number: Scalars['String'];
  numberExtension?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  postalCode: Scalars['String'];
  region?: Maybe<Scalars['String']>;
  street: Scalars['String'];
  type: CartAddressType;
  url?: Maybe<Scalars['String']>;
};

export type CartUpdateInput = {
  carrier?: Maybe<Scalars['String']>;
  cartId: Scalars['String'];
  extra3?: Maybe<Scalars['String']>;
  extra4?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  paymentData?: Maybe<CartPaymentDataInput>;
  postageData?: Maybe<CartPostageDataInput>;
  reference?: Maybe<Scalars['String']>;
};

export type CartUpdateItemInput = {
  cartId: Scalars['String'];
  itemId: Scalars['Int'];
  notes?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['Int']>;
};

export type CartVoucher = {
  __typename?: 'CartVoucher';
  available: Scalars['Float'];
  code: Scalars['String'];
  combinable: YesNo;
  description: Scalars['String'];
  name: Scalars['String'];
  partialRedemption: YesNo;
  redeemed: YesNo;
  remaining: Scalars['Float'];
  ruleId: Scalars['Int'];
};

export type Category = {
  __typename?: 'Category';
  categories?: Maybe<Array<Category>>;
  categoryId: Scalars['Int'];
  defaultLanguage: Scalars['String'];
  description: Array<LocalizedString>;
  id: Scalars['Int'];
  name: Array<LocalizedString>;
  parent?: Maybe<Category>;
  path: Scalars['String'];
  products: ProductsResponse;
  shortDescription: Array<LocalizedString>;
  slug: Array<LocalizedString>;
};

export type CategoryDescriptionArgs = {
  language?: Maybe<Scalars['String']>;
};

export type CategoryNameArgs = {
  language?: Maybe<Scalars['String']>;
};

export type CategoryProductsArgs = {
  EANCode?: Maybe<Array<Scalars['String']>>;
  categoryId?: Maybe<Scalars['Int']>;
  class?: Maybe<ProductClass>;
  classId?: Maybe<Array<Scalars['Int']>>;
  hasBundle?: Maybe<YesNo>;
  hidden?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Array<Scalars['Int']>>;
  isBundleLeader?: Maybe<YesNo>;
  language?: Maybe<Scalars['String']>;
  manufacturer?: Maybe<Array<Scalars['String']>>;
  manufacturerCode?: Maybe<Array<Scalars['String']>>;
  offset?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  parentSlug?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  pathSlug?: Maybe<Scalars['String']>;
  price?: Maybe<PriceFilterInput>;
  rangeFilters?: Maybe<Array<RangeFilterInput>>;
  searchFields?: Maybe<Array<SearchFieldsInput>>;
  sku?: Maybe<Array<Scalars['String']>>;
  sort?: Maybe<Array<SortInput>>;
  status?: Maybe<Array<ProductStatus>>;
  supplier?: Maybe<Array<Scalars['String']>>;
  supplierCode?: Maybe<Array<Scalars['String']>>;
  tag?: Maybe<Array<Scalars['String']>>;
  term?: Maybe<Scalars['String']>;
  textFilters?: Maybe<Array<TextFilterInput>>;
};

export type CategoryShortDescriptionArgs = {
  language?: Maybe<Scalars['String']>;
};

export type CategorySlugArgs = {
  language?: Maybe<Scalars['String']>;
};

export type Cluster = IBaseProduct &
  ICluster &
  IResource & {
    __typename?: 'Cluster';
    categoryId: Scalars['Int'];
    class: Scalars['String'];
    classId: Scalars['Int'];
    description: Array<LocalizedString>;
    id: Scalars['Int'];
    isHidden: YesNo;
    language: Scalars['String'];
    name: Array<LocalizedString>;
    path: Scalars['String'];
    shortDescription: Array<LocalizedString>;
    sku: Scalars['String'];
    slug: Array<LocalizedString>;
  };

export type ClusterDescriptionArgs = {
  language?: Maybe<Scalars['String']>;
};

export type ClusterNameArgs = {
  language?: Maybe<Scalars['String']>;
};

export type ClusterShortDescriptionArgs = {
  language?: Maybe<Scalars['String']>;
};

export type ClusterSlugArgs = {
  language?: Maybe<Scalars['String']>;
};

export type CreateAuthenticationInput = {
  displayName?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  password: Scalars['String'];
  phoneNumber?: Maybe<Scalars['String']>;
  uid?: Maybe<Scalars['String']>;
};

export type CreatePaymentInput = {
  amount: Scalars['Int'];
  anonymousId?: Maybe<Scalars['Int']>;
  currency: Scalars['String'];
  method: Scalars['String'];
  orderId: Scalars['Int'];
  paymentId: Scalars['String'];
  status: PaymentStatuses;
  transactions: Array<CreateTransactionInput>;
  userId?: Maybe<Scalars['Int']>;
};

export type CreateTaxInput = {
  code?: Maybe<Scalars['String']>;
  exportCode?: Maybe<Scalars['String']>;
  ratio?: Maybe<Scalars['Float']>;
  shopId?: Maybe<Scalars['Int']>;
  zone?: Maybe<Scalars['String']>;
};

export type CreateTransactionInput = {
  amount: Scalars['Int'];
  currency: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  status?: Maybe<TransactionStatuses>;
  timestamp?: Maybe<Scalars['DateTime']>;
  transactionId: Scalars['String'];
  type: TransactionTypes;
};

export type CreateUserInput = {
  cocNumber?: Maybe<Scalars['String']>;
  company?: Maybe<Scalars['String']>;
  dateOfBirth?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  firstName: Scalars['String'];
  gender?: Maybe<Gender>;
  homepage?: Maybe<Scalars['String']>;
  lastName: Scalars['String'];
  mailingList?: Maybe<Scalars['String']>;
  middleName?: Maybe<Scalars['String']>;
  mobile?: Maybe<Scalars['String']>;
  parentId: Scalars['Int'];
  phone?: Maybe<Scalars['String']>;
  taxNumber?: Maybe<Scalars['String']>;
};

export type Crossupsell = {
  __typename?: 'Crossupsell';
  product?: Maybe<Product>;
  productId: Scalars['Int'];
  subtype: Scalars['String'];
  type: CrossupsellTypes;
};

export type CrossupsellInput = {
  productId: Scalars['Int'];
  subTypes?: Maybe<Array<Scalars['String']>>;
  types?: Maybe<Array<CrossupsellTypes>>;
};

export enum CrossupsellTypes {
  Accessories = 'ACCESSORIES',
  Alternatives = 'ALTERNATIVES',
  Options = 'OPTIONS',
  Parts = 'PARTS',
  Related = 'RELATED',
}

export type CrossupsellTypesInput = {
  subTypes?: Maybe<Array<Scalars['String']>>;
  types?: Maybe<Array<CrossupsellTypes>>;
};

export type Discount = {
  __typename?: 'Discount';
  discountId: Scalars['String'];
  formula: Scalars['String'];
  hops?: Maybe<Scalars['Float']>;
  quantity: Scalars['Int'];
  type: Scalars['String'];
  validFrom?: Maybe<Scalars['DateTime']>;
  validTo?: Maybe<Scalars['DateTime']>;
  value?: Maybe<Scalars['Float']>;
};

export type EmailEventInput = {
  attachments?: Maybe<Array<Base64FileInput>>;
  content?: Maybe<Scalars['String']>;
  from?: Maybe<EmailSendContactInput>;
  language?: Maybe<Scalars['String']>;
  letterId?: Maybe<Scalars['Int']>;
  orderId?: Maybe<Scalars['Int']>;
  siteId?: Maybe<Scalars['Int']>;
  subject?: Maybe<Scalars['String']>;
  to?: Maybe<Array<EmailSendContactInput>>;
  type: EmailEventType;
  userId?: Maybe<Scalars['Int']>;
  variables?: Maybe<Scalars['JSONObject']>;
};

export enum EmailEventType {
  Campaign = 'campaign',
  Custom = 'custom',
  Error = 'error',
  Orderconfirm = 'orderconfirm',
  Registration = 'registration',
  System = 'system',
  Transactional = 'transactional',
}

export type EmailSendContactInput = {
  email: Scalars['String'];
  name?: Maybe<Scalars['String']>;
};

export type EmailSendEventInput = {
  attachments?: Maybe<Array<Base64FileInput>>;
  bcc?: Maybe<Array<EmailSendContactInput>>;
  campaignId?: Maybe<Scalars['String']>;
  cc?: Maybe<Array<EmailSendContactInput>>;
  content: Scalars['String'];
  from: EmailSendContactInput;
  messageId?: Maybe<Scalars['String']>;
  subject: Scalars['String'];
  to: Array<EmailSendContactInput>;
  utmTags?: Maybe<Scalars['String']>;
  variables?: Maybe<Scalars['JSONObject']>;
};

export type ExchangeRefreshTokenInput = {
  refreshToken: Scalars['String'];
};

export type Firebase = {
  __typename?: 'Firebase';
  identities?: Maybe<Scalars['JSONObject']>;
  second_factor_identifier?: Maybe<Scalars['String']>;
  sign_in_provider: Scalars['String'];
  sign_in_second_factor?: Maybe<Scalars['String']>;
  tenant?: Maybe<Scalars['String']>;
};

export type GcipMetadata = {
  __typename?: 'GCIPMetadata';
  creationTime?: Maybe<Scalars['String']>;
  lastRefreshTime?: Maybe<Scalars['String']>;
  lastSignInTime?: Maybe<Scalars['String']>;
};

export type GcipProviderData = {
  __typename?: 'GCIPProviderData';
  displayName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  federatedId?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  photoUrl?: Maybe<Scalars['String']>;
  providerId?: Maybe<Scalars['String']>;
  rawId?: Maybe<Scalars['String']>;
  screenName?: Maybe<Scalars['String']>;
  uid?: Maybe<Scalars['String']>;
};

export type GcipUser = {
  __typename?: 'GCIPUser';
  accessToken: Scalars['String'];
  authDomain?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  disabled?: Maybe<Scalars['Boolean']>;
  displayName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  emailVerified?: Maybe<Scalars['Boolean']>;
  expirationTime: Scalars['DateTime'];
  isAnonymous?: Maybe<Scalars['Boolean']>;
  lastLoginAt?: Maybe<Scalars['DateTime']>;
  metadata?: Maybe<GcipMetadata>;
  passwordHash?: Maybe<Scalars['String']>;
  passwordSalt?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  photoUrl?: Maybe<Scalars['String']>;
  providerData: Array<GcipProviderData>;
  refreshToken: Scalars['String'];
  tenantId?: Maybe<Scalars['String']>;
  tokensValidAfterTime?: Maybe<Scalars['String']>;
  uid: Scalars['String'];
};

export enum Gender {
  F = 'F',
  M = 'M',
  U = 'U',
}

export type IAttributeDecimalRangeFilter = {
  max: Scalars['Float'];
  min: Scalars['Float'];
};

export type IAttributeFilter = {
  decimalRangeFilter?: Maybe<IAttributeDecimalRangeFilter>;
  description: Scalars['String'];
  id: Scalars['String'];
  integerRangeFilter?: Maybe<IAttributeIntegerRangeFilter>;
  isHidden?: Maybe<Scalars['Boolean']>;
  isPublic: Scalars['Boolean'];
  isSearchable: Scalars['Boolean'];
  searchId: Scalars['String'];
  textFilter?: Maybe<Array<AttributeTextFilter>>;
  type: AttributeType;
};

export type IAttributeIntegerRangeFilter = {
  max: Scalars['Int'];
  min: Scalars['Int'];
};

export type IAttributeTextFilter = {
  count: Scalars['Int'];
  value: Scalars['String'];
};

export type IBaseProduct = {
  categoryId: Scalars['Int'];
  description: Array<LocalizedString>;
  name: Array<LocalizedString>;
  path: Scalars['String'];
  shortDescription: Array<LocalizedString>;
  sku: Scalars['String'];
  slug: Array<LocalizedString>;
};

export type IBaseProductDescriptionArgs = {
  language?: Maybe<Scalars['String']>;
};

export type IBaseProductNameArgs = {
  language?: Maybe<Scalars['String']>;
};

export type IBaseProductShortDescriptionArgs = {
  language?: Maybe<Scalars['String']>;
};

export type IBaseProductSlugArgs = {
  language?: Maybe<Scalars['String']>;
};

export type IBundle = {
  comboId: Scalars['Float'];
  condition?: Maybe<Scalars['String']>;
  description: Scalars['String'];
  discount?: Maybe<Scalars['Float']>;
  id: Scalars['Float'];
  items?: Maybe<Array<BundleItem>>;
  name: Scalars['String'];
  price?: Maybe<BundlePrice>;
};

export type IBundleItem = {
  isLeader: Scalars['String'];
  price?: Maybe<BundlePrice>;
  productId: Scalars['Int'];
};

export type IBundlePrice = {
  gross: Scalars['Float'];
  net: Scalars['Float'];
  originalGross: Scalars['Float'];
  originalNet: Scalars['Float'];
};

export type ICart = {
  actionCode?: Maybe<Scalars['String']>;
  bonusItems?: Maybe<Array<CartBaseItem>>;
  carrier: Scalars['String'];
  carriers?: Maybe<Array<CartCarrier>>;
  cartId: Scalars['String'];
  couponCode?: Maybe<Scalars['String']>;
  dateChanged?: Maybe<Scalars['DateTime']>;
  dateCreated?: Maybe<Scalars['DateTime']>;
  deliveryAddress: CartAddress;
  extra3?: Maybe<Scalars['String']>;
  extra4?: Maybe<Scalars['String']>;
  incentives?: Maybe<Array<CartIncentive>>;
  invoiceAddress: CartAddress;
  items?: Maybe<Array<CartBaseItem>>;
  notes?: Maybe<Scalars['String']>;
  orderStatus?: Maybe<Scalars['String']>;
  payMethods?: Maybe<Array<CartPaymethod>>;
  paymentData?: Maybe<CartPaymentData>;
  postageData?: Maybe<CartPostageData>;
  reference?: Maybe<Scalars['String']>;
  taxLevels?: Maybe<Array<CartTaxLevel>>;
  total?: Maybe<CartTotal>;
  userId: Scalars['Int'];
  valuePoints?: Maybe<Scalars['Int']>;
  vouchers?: Maybe<Array<CartVoucher>>;
};

export type ICluster = {
  categoryId: Scalars['Int'];
  description: Array<LocalizedString>;
  name: Array<LocalizedString>;
  path: Scalars['String'];
  shortDescription: Array<LocalizedString>;
  sku: Scalars['String'];
  slug: Array<LocalizedString>;
};

export type IClusterDescriptionArgs = {
  language?: Maybe<Scalars['String']>;
};

export type IClusterNameArgs = {
  language?: Maybe<Scalars['String']>;
};

export type IClusterShortDescriptionArgs = {
  language?: Maybe<Scalars['String']>;
};

export type IClusterSlugArgs = {
  language?: Maybe<Scalars['String']>;
};

export type IProduct = {
  categoryId: Scalars['Int'];
  costPrice: Scalars['Float'];
  creditPoints: Scalars['Float'];
  dateChanged: Scalars['DateTime'];
  dateCreated: Scalars['DateTime'];
  description: Array<LocalizedString>;
  eanCode: Scalars['String'];
  econommicOrderQuantity: Scalars['Int'];
  hasBundle: YesNo;
  isBundleLeader: YesNo;
  isOrderable: YesNo;
  isReturnable: YesNo;
  manufacturer: Scalars['String'];
  manufacturerCode: Scalars['String'];
  minimumQuantity: Scalars['Float'];
  name: Array<LocalizedString>;
  offers?: Maybe<Array<ProductOffer>>;
  orderableFrom?: Maybe<Scalars['DateTime']>;
  orderableTo?: Maybe<Scalars['DateTime']>;
  originalPrice: Scalars['Float'];
  package: Scalars['String'];
  packageUnit: Scalars['String'];
  packageUnitQuantity: Scalars['String'];
  path: Scalars['String'];
  purchaseMinimumQuantity: Scalars['Int'];
  purchaseUnit: Scalars['Int'];
  releaseDate?: Maybe<Scalars['DateTime']>;
  shortDescription: Array<LocalizedString>;
  shortName: Scalars['String'];
  sku: Scalars['String'];
  slug: Array<LocalizedString>;
  status: ProductStatus;
  storePrice: Scalars['Float'];
  suggestedPrice: Scalars['Float'];
  supplier: Scalars['String'];
  supplierCode: Scalars['String'];
  tag: Scalars['String'];
  taxCode: TaxCode;
  unit: Scalars['Int'];
};

export type IProductDescriptionArgs = {
  language?: Maybe<Scalars['String']>;
};

export type IProductNameArgs = {
  language?: Maybe<Scalars['String']>;
};

export type IProductShortDescriptionArgs = {
  language?: Maybe<Scalars['String']>;
};

export type IProductSlugArgs = {
  language?: Maybe<Scalars['String']>;
};

export type IProductOffer = {
  formula: Scalars['String'];
  id: Scalars['String'];
  price: Scalars['Float'];
  validFrom: Scalars['DateTime'];
  validTo: Scalars['DateTime'];
};

export type IResource = {
  class: Scalars['String'];
  classId: Scalars['Int'];
  id: Scalars['Int'];
  isHidden: YesNo;
  language: Scalars['String'];
};

export type Image = {
  __typename?: 'Image';
  id: Scalars['Int'];
  imageId: Scalars['Int'];
  name: Scalars['String'];
  order: Scalars['Int'];
  type: Scalars['String'];
  url: Scalars['String'];
};

export type ImageUrlArgs = {
  fillColor?: Maybe<Scalars['String']>;
  height: Scalars['Float'];
  method: ImageResizeMethod;
  width: Scalars['Float'];
};

export enum ImageResizeMethod {
  Crop = 'crop',
  Fill = 'fill',
}

export type Inventory = {
  __typename?: 'Inventory';
  costPrice: Scalars['Float'];
  dateModified: Scalars['DateTime'];
  id: Scalars['ID'];
  location: Scalars['String'];
  nextDeliveryDate: Scalars['DateTime'];
  notes: Scalars['String'];
  productId: Scalars['Int'];
  quantity: Scalars['Int'];
  sku: Scalars['String'];
  supplier: Scalars['String'];
  supplierCode: Scalars['String'];
  warehouseId: Scalars['Int'];
};

export type InventoryDeleteResponse = {
  __typename?: 'InventoryDeleteResponse';
  messages: Array<Scalars['String']>;
};

export type InventoryResponse = {
  __typename?: 'InventoryResponse';
  costPrice: Scalars['Float'];
  dateModified: Scalars['DateTime'];
  id: Scalars['ID'];
  location: Scalars['String'];
  messages: Array<Scalars['String']>;
  nextDeliveryDate: Scalars['DateTime'];
  notes: Scalars['String'];
  productId: Scalars['Int'];
  quantity: Scalars['Int'];
  sku: Scalars['String'];
  supplier: Scalars['String'];
  supplierCode: Scalars['String'];
  total: Scalars['Int'];
  warehouseId: Scalars['Int'];
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
  operationType?: Maybe<Scalars['String']>;
  providerId?: Maybe<Scalars['String']>;
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

export type Mutation = {
  __typename?: 'Mutation';
  authenticationCreate: Login;
  authenticationDelete: Scalars['Boolean'];
  cartAddActionCode: CartResponse;
  cartAddBundle: CartResponse;
  cartAddItem: CartResponse;
  cartAddVoucherCode: CartResponse;
  cartDeleteItem: CartResponse;
  cartProcess: CartProcessResponse;
  cartRemoveActionCode: CartResponse;
  cartRemoveVoucherCode: CartResponse;
  cartSetUser: CartResponse;
  cartStart: Cart;
  cartUpdate: CartResponse;
  cartUpdateAddress: CartResponse;
  cartUpdateItem: CartResponse;
  exchangeRefreshToken: RefreshTokenResponse;
  inventoryDelete: InventoryDeleteResponse;
  inventoryUpdate: InventoryResponse;
  login: Login;
  logout: Logout;
  orderSetStatus: Order;
  passwordResetLink: Scalars['String'];
  paymentCreate: Payment;
  paymentDelete: Payment;
  paymentUpdate: Payment;
  publishEmailEvent: PublishEmailEventResponse;
  publishEmailSendEvent: PublishEmailEventResponse;
  startSession: Login;
  taxCreate: Tax;
  taxDelete: Tax;
  taxUpdate: Tax;
  userAddressCreate: Address;
  userAddressDelete: Scalars['Boolean'];
  userAddressUpdate: Address;
  userCreate: User;
  userRegister: RegisterUserResponse;
  userUpdate: User;
  verifyToken: VerifyToken;
};

export type MutationAuthenticationCreateArgs = {
  input: CreateAuthenticationInput;
};

export type MutationAuthenticationDeleteArgs = {
  uid: Scalars['String'];
};

export type MutationCartAddActionCodeArgs = {
  actionCode: Scalars['String'];
  cartId: Scalars['String'];
};

export type MutationCartAddBundleArgs = {
  input: CartAddBundleInput;
};

export type MutationCartAddItemArgs = {
  input: CartAddItemInput;
};

export type MutationCartAddVoucherCodeArgs = {
  cartId: Scalars['String'];
  voucherCode: Scalars['String'];
};

export type MutationCartDeleteItemArgs = {
  input: CartDeleteItemInput;
};

export type MutationCartProcessArgs = {
  input: CartProcessInput;
};

export type MutationCartRemoveActionCodeArgs = {
  actionCode: Scalars['String'];
  cartId: Scalars['String'];
};

export type MutationCartRemoveVoucherCodeArgs = {
  cartId: Scalars['String'];
  voucherCode: Scalars['String'];
};

export type MutationCartSetUserArgs = {
  input: CartSetUserInput;
};

export type MutationCartStartArgs = {
  siteId: Scalars['Int'];
  userId?: Maybe<Scalars['Int']>;
};

export type MutationCartUpdateArgs = {
  input: CartUpdateInput;
};

export type MutationCartUpdateAddressArgs = {
  input: CartUpdateAddressInput;
};

export type MutationCartUpdateItemArgs = {
  input: CartUpdateItemInput;
};

export type MutationExchangeRefreshTokenArgs = {
  input: ExchangeRefreshTokenInput;
};

export type MutationInventoryDeleteArgs = {
  id: Scalars['Int'];
};

export type MutationInventoryUpdateArgs = {
  id: Scalars['Int'];
  input: UpdateInventoryInput;
};

export type MutationLoginArgs = {
  input: LoginInput;
};

export type MutationLogoutArgs = {
  siteId: Scalars['Int'];
};

export type MutationOrderSetStatusArgs = {
  input: OrderSetStatusInput;
};

export type MutationPasswordResetLinkArgs = {
  email: Scalars['String'];
  redirectUrl: Scalars['String'];
};

export type MutationPaymentCreateArgs = {
  input: CreatePaymentInput;
};

export type MutationPaymentDeleteArgs = {
  searchBy: SearchByInput;
};

export type MutationPaymentUpdateArgs = {
  input: UpdatePaymentInput;
  searchBy: SearchByInput;
};

export type MutationPublishEmailEventArgs = {
  input: EmailEventInput;
};

export type MutationPublishEmailSendEventArgs = {
  input: EmailSendEventInput;
};

export type MutationStartSessionArgs = {
  siteId: Scalars['Int'];
};

export type MutationTaxCreateArgs = {
  input: CreateTaxInput;
};

export type MutationTaxDeleteArgs = {
  id: Scalars['ID'];
};

export type MutationTaxUpdateArgs = {
  id: Scalars['ID'];
  input: UpdateTaxInput;
};

export type MutationUserAddressCreateArgs = {
  input: UserAddressCreateInput;
};

export type MutationUserAddressDeleteArgs = {
  input: UserAddressDeleteInput;
};

export type MutationUserAddressUpdateArgs = {
  input: UserAddressUpdateInput;
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

export type MutationVerifyTokenArgs = {
  input: VerifyTokenInput;
};

export type Order = {
  __typename?: 'Order';
  accountManagerId: Scalars['Int'];
  addresses: Array<Address>;
  cartId?: Maybe<Scalars['Int']>;
  currency: Scalars['String'];
  currencyRatio: Scalars['Float'];
  date: Scalars['DateTime'];
  email: Scalars['String'];
  emailDate?: Maybe<Scalars['DateTime']>;
  externalId?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  items: Array<OrderItem>;
  language: Scalars['String'];
  paymentData: OrderPaymentData;
  pickupStoreId?: Maybe<Scalars['Int']>;
  postageData: PostageData;
  reference: Scalars['String'];
  remarks: Scalars['String'];
  shipments: Array<Shipment>;
  siteId: Scalars['Int'];
  source: Scalars['String'];
  status: Scalars['String'];
  statusDate?: Maybe<Scalars['DateTime']>;
  total: OrderTotals;
  type: OrderType;
  userId: Scalars['Int'];
  uuid: Scalars['String'];
};

export type OrderAddressesArgs = {
  type?: Maybe<OrderAddressType>;
};

export enum OrderAddressType {
  Delivery = 'delivery',
  Home = 'home',
  Invoice = 'invoice',
}

export type OrderItem = {
  __typename?: 'OrderItem';
  class: Scalars['String'];
  discount: Scalars['Float'];
  eanCode: Scalars['String'];
  externalId: Scalars['String'];
  id: Scalars['Int'];
  isBonus: YesNo;
  manufacturer: Scalars['String'];
  manufacturerCode: Scalars['String'];
  name: Scalars['String'];
  notes: Scalars['String'];
  orderId: Scalars['Int'];
  parentOrderItemId?: Maybe<Scalars['Int']>;
  price: Scalars['Float'];
  priceTotal: Scalars['Float'];
  productId?: Maybe<Scalars['Int']>;
  quantity: Scalars['Int'];
  sku: Scalars['String'];
  supplier: Scalars['String'];
  supplierCode: Scalars['String'];
  tax: Scalars['Float'];
  taxCode: Taxcode;
  taxPercentage: Scalars['Float'];
  uuid: Scalars['String'];
};

export type OrderPaymentData = {
  __typename?: 'OrderPaymentData';
  gross: Scalars['Float'];
  method: Scalars['String'];
  net: Scalars['Float'];
  status: Scalars['String'];
  statusDate?: Maybe<Scalars['DateTime']>;
  tax: Scalars['Float'];
  taxPercentage: Scalars['Float'];
};

export type OrderResponse = {
  __typename?: 'OrderResponse';
  end: Scalars['Int'];
  items: Array<Order>;
  itemsFound: Scalars['Int'];
  offset: Scalars['Int'];
  page: Scalars['Int'];
  pages: Scalars['Int'];
  start: Scalars['Int'];
};

export type OrderSearchArguments = {
  offset?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  status?: Maybe<Array<Scalars['String']>>;
  type?: Maybe<Array<OrderType>>;
  userId?: Maybe<Array<Scalars['Int']>>;
};

export type OrderSetStatusInput = {
  addPDFAttachment?: Maybe<Scalars['Boolean']>;
  orderId: Scalars['Int'];
  payStatus?: Maybe<Scalars['String']>;
  sendOrderConfirmationEmail?: Maybe<Scalars['Boolean']>;
  status?: Maybe<Scalars['String']>;
};

export type OrderTotalTaxPercentage = {
  __typename?: 'OrderTotalTaxPercentage';
  percentage: Scalars['Int'];
  total: Scalars['Float'];
};

export type OrderTotals = {
  __typename?: 'OrderTotals';
  discountPercentage?: Maybe<Scalars['Float']>;
  discountValue: Scalars['Float'];
  gross: Scalars['Float'];
  net: Scalars['Float'];
  tax: Scalars['Float'];
  taxPercentages: Array<OrderTotalTaxPercentage>;
};

export enum OrderType {
  Dropshipment = 'dropshipment',
  Purchase = 'purchase',
  Quotation = 'quotation',
}

export type Payment = {
  __typename?: 'Payment';
  amount: Scalars['Int'];
  anonymousId?: Maybe<Scalars['Int']>;
  createdAt: Scalars['DateTime'];
  createdBy?: Maybe<Scalars['String']>;
  currency: Scalars['String'];
  id: Scalars['ID'];
  lastModifiedAt: Scalars['DateTime'];
  lastModifiedBy?: Maybe<Scalars['String']>;
  method: Scalars['String'];
  orderId: Scalars['Int'];
  paymentId: Scalars['String'];
  status: PaymentStatuses;
  transactions?: Maybe<Array<Transaction>>;
  userId?: Maybe<Scalars['Int']>;
};

export enum PaymentStatuses {
  Authorized = 'AUTHORIZED',
  Cancelled = 'CANCELLED',
  Chargeback = 'CHARGEBACK',
  Expired = 'EXPIRED',
  Failed = 'FAILED',
  Open = 'OPEN',
  Paid = 'PAID',
  Pending = 'PENDING',
  Refunded = 'REFUNDED',
}

export type PaymentsResponse = {
  __typename?: 'PaymentsResponse';
  end: Scalars['Int'];
  items: Array<Payment>;
  itemsFound: Scalars['Int'];
  offset: Scalars['Int'];
  page: Scalars['Int'];
  pages: Scalars['Int'];
  start: Scalars['Int'];
};

export enum Permission {
  Changepermissions = 'CHANGEPERMISSIONS',
  CreateobjectWritedata = 'CREATEOBJECT_WRITEDATA',
  Delete = 'DELETE',
  Detesubfoldersandfiles = 'DETESUBFOLDERSANDFILES',
  ListfolderReaddata = 'LISTFOLDER_READDATA',
  Readattributes = 'READATTRIBUTES',
  Readpermissions = 'READPERMISSIONS',
  Takeownership = 'TAKEOWNERSHIP',
  Writeattributes = 'WRITEATTRIBUTES',
}

export type PostageData = {
  __typename?: 'PostageData';
  gross: Scalars['Float'];
  method: Scalars['String'];
  net: Scalars['Float'];
  partialDeliveryAllowed?: Maybe<YesNo>;
  requestDate: Scalars['DateTime'];
  tax: Scalars['Float'];
  taxPercentage: Scalars['Float'];
};

export type PriceFilterInput = {
  from: Scalars['Float'];
  to: Scalars['Float'];
};

export type Product = IBaseProduct &
  IProduct &
  IResource & {
    __typename?: 'Product';
    attributes: Array<Attribute>;
    bulkPrices: Array<BulkPrice>;
    bundles?: Maybe<Array<Bundle>>;
    category: Category;
    categoryId: Scalars['Int'];
    class: Scalars['String'];
    classId: Scalars['Int'];
    costPrice: Scalars['Float'];
    creditPoints: Scalars['Float'];
    crossupsells: Array<Crossupsell>;
    dateChanged: Scalars['DateTime'];
    dateCreated: Scalars['DateTime'];
    description: Array<LocalizedString>;
    eanCode: Scalars['String'];
    econommicOrderQuantity: Scalars['Int'];
    hasBundle: YesNo;
    id: Scalars['Int'];
    images: Array<Image>;
    inventory?: Maybe<ProductInventory>;
    isAllowed: Scalars['Boolean'];
    isBundleLeader: YesNo;
    isHidden: YesNo;
    isOrderable: YesNo;
    isReturnable: YesNo;
    language: Scalars['String'];
    manufacturer: Scalars['String'];
    manufacturerCode: Scalars['String'];
    minimumQuantity: Scalars['Float'];
    name: Array<LocalizedString>;
    offers?: Maybe<Array<ProductOffer>>;
    orderableFrom?: Maybe<Scalars['DateTime']>;
    orderableTo?: Maybe<Scalars['DateTime']>;
    originalPrice: Scalars['Float'];
    package: Scalars['String'];
    packageUnit: Scalars['String'];
    packageUnitQuantity: Scalars['String'];
    path: Scalars['String'];
    price: ProductPrice;
    productPrice: ProductPrice;
    purchaseMinimumQuantity: Scalars['Int'];
    purchaseUnit: Scalars['Int'];
    releaseDate?: Maybe<Scalars['DateTime']>;
    shortDescription: Array<LocalizedString>;
    shortName: Scalars['String'];
    sku: Scalars['String'];
    slug: Array<LocalizedString>;
    status: ProductStatus;
    storePrice: Scalars['Float'];
    suggestedPrice: Scalars['Float'];
    supplier: Scalars['String'];
    supplierCode: Scalars['String'];
    tag: Scalars['String'];
    taxCode: TaxCode;
    unit: Scalars['Int'];
  };

export type ProductAttributesArgs = {
  filter?: Maybe<AttributeFilterInput>;
};

export type ProductBulkPricesArgs = {
  taxZone?: Maybe<Scalars['String']>;
};

export type ProductBundlesArgs = {
  taxZone?: Maybe<Scalars['String']>;
};

export type ProductCrossupsellsArgs = {
  input?: Maybe<CrossupsellTypesInput>;
};

export type ProductDescriptionArgs = {
  language?: Maybe<Scalars['String']>;
};

export type ProductImagesArgs = {
  siteId: Scalars['Int'];
  type?: Maybe<Scalars['String']>;
};

export type ProductIsAllowedArgs = {
  permission: Permission;
  userId: Scalars['Int'];
};

export type ProductNameArgs = {
  language?: Maybe<Scalars['String']>;
};

export type ProductPriceArgs = {
  quantity?: Maybe<Scalars['Int']>;
  taxZone?: Maybe<Scalars['String']>;
};

export type ProductShortDescriptionArgs = {
  language?: Maybe<Scalars['String']>;
};

export type ProductSlugArgs = {
  language?: Maybe<Scalars['String']>;
};

export enum ProductClass {
  Cluster = 'cluster',
  Product = 'product',
}

export type ProductInventory = {
  __typename?: 'ProductInventory';
  balance?: Maybe<Array<Inventory>>;
  localQuantity: Scalars['Int'];
  nextDeliveryDate: Scalars['DateTime'];
  productId: Scalars['Int'];
  supplierQuantity: Scalars['Int'];
  totalQuantity: Scalars['Int'];
};

export type ProductOffer = IProductOffer & {
  __typename?: 'ProductOffer';
  formula: Scalars['String'];
  id: Scalars['String'];
  price: Scalars['Float'];
  validFrom: Scalars['DateTime'];
  validTo: Scalars['DateTime'];
};

export type ProductPrice = {
  __typename?: 'ProductPrice';
  discount?: Maybe<Discount>;
  gross: Scalars['Float'];
  net: Scalars['Float'];
  quantity: Scalars['Int'];
  taxCode: Scalars['String'];
  type: ProductPriceType;
  /** @deprecated Product price value deprecated in favor of 'net' and 'gross' fields */
  value: Scalars['Float'];
};

export enum ProductPriceType {
  Bulk1 = 'bulk1',
  Bulk2 = 'bulk2',
  Bulk3 = 'bulk3',
  Bulk4 = 'bulk4',
  Default = 'default',
  Discount = 'discount',
  ProductDiscount = 'productDiscount',
}

export enum ProductStatus {
  A = 'A',
  N = 'N',
  P = 'P',
  R = 'R',
  S = 'S',
}

export type ProductsResponse = {
  __typename?: 'ProductsResponse';
  availableAttributes?: Maybe<Array<AttributeFilter>>;
  end: Scalars['Int'];
  filters?: Maybe<Array<AttributeFilter>>;
  items: Array<IBaseProduct>;
  itemsFound: Scalars['Int'];
  maxPrice: Scalars['Int'];
  minPrice: Scalars['Int'];
  offset: Scalars['Int'];
  page: Scalars['Int'];
  pages: Scalars['Int'];
  start: Scalars['Int'];
};

export type PublishEmailEventResponse = {
  __typename?: 'PublishEmailEventResponse';
  messageId?: Maybe<Scalars['String']>;
  success: Scalars['Boolean'];
};

export type Query = {
  __typename?: 'Query';
  addressesByOrderId: Array<Address>;
  addressesByUserId: Array<Address>;
  authentication: GcipUser;
  bulkPrice: Array<BulkPrice>;
  bundle: Bundle;
  bundles: Array<Bundle>;
  cart: ICart;
  category: Category;
  cluster: Cluster;
  crossupsells: Array<Crossupsell>;
  explainPrice: Array<ProductPrice>;
  imagesByParentId: Array<Image>;
  inventory: InventoryResponse;
  order: Order;
  orderGetPDF: Base64File;
  orderSendConfirmationEmail: SendOrderConfirmResponseType;
  orders: OrderResponse;
  payment?: Maybe<Payment>;
  payments: PaymentsResponse;
  product: Product;
  productAttributes: Array<Attribute>;
  products: ProductsResponse;
  tax: Tax;
  taxes: TaxesResponse;
  user: User;
  userAclList: Array<Scalars['Int']>;
  userAttributes: Array<Attribute>;
  userDiscounts: Array<Discount>;
  viewer: User;
};

export type QueryAddressesByOrderIdArgs = {
  orderId: Scalars['Float'];
  type?: Maybe<OrderAddressType>;
};

export type QueryAddressesByUserIdArgs = {
  type?: Maybe<UserAddressType>;
  userId: Scalars['Float'];
};

export type QueryAuthenticationArgs = {
  email: Scalars['String'];
};

export type QueryBulkPriceArgs = {
  productId: Scalars['Float'];
  taxZone?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['Float']>;
};

export type QueryBundleArgs = {
  bundleId: Scalars['Float'];
  taxZone?: Maybe<Scalars['String']>;
};

export type QueryBundlesArgs = {
  productId: Array<Scalars['Float']>;
  taxZone?: Maybe<Scalars['String']>;
};

export type QueryCartArgs = {
  cartId: Scalars['String'];
};

export type QueryCategoryArgs = {
  categoryId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  slug?: Maybe<Scalars['String']>;
};

export type QueryClusterArgs = {
  clusterId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  language?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
};

export type QueryCrossupsellsArgs = {
  input: CrossupsellInput;
};

export type QueryExplainPriceArgs = {
  productId: Scalars['Float'];
  quantity?: Maybe<Scalars['Float']>;
  taxZone?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['Float']>;
};

export type QueryImagesByParentIdArgs = {
  parentId: Scalars['Float'];
  siteId: Scalars['Float'];
};

export type QueryInventoryArgs = {
  id: Scalars['Int'];
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

export type QueryOrdersArgs = {
  input: OrderSearchArguments;
};

export type QueryPaymentArgs = {
  searchBy: SearchByInput;
};

export type QueryProductArgs = {
  id?: Maybe<Scalars['Int']>;
  language?: Maybe<Scalars['String']>;
  productId?: Maybe<Scalars['Int']>;
  sku?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
};

export type QueryProductAttributesArgs = {
  filter?: Maybe<AttributeFilterInput>;
  productId: Scalars['Int'];
};

export type QueryProductsArgs = {
  EANCode?: Maybe<Array<Scalars['String']>>;
  categoryId?: Maybe<Scalars['Int']>;
  class?: Maybe<ProductClass>;
  classId?: Maybe<Array<Scalars['Int']>>;
  hasBundle?: Maybe<YesNo>;
  hidden?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Array<Scalars['Int']>>;
  isBundleLeader?: Maybe<YesNo>;
  language?: Maybe<Scalars['String']>;
  manufacturer?: Maybe<Array<Scalars['String']>>;
  manufacturerCode?: Maybe<Array<Scalars['String']>>;
  offset?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  parentSlug?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  pathSlug?: Maybe<Scalars['String']>;
  price?: Maybe<PriceFilterInput>;
  rangeFilters?: Maybe<Array<RangeFilterInput>>;
  searchFields?: Maybe<Array<SearchFieldsInput>>;
  sku?: Maybe<Array<Scalars['String']>>;
  sort?: Maybe<Array<SortInput>>;
  status?: Maybe<Array<ProductStatus>>;
  supplier?: Maybe<Array<Scalars['String']>>;
  supplierCode?: Maybe<Array<Scalars['String']>>;
  tag?: Maybe<Array<Scalars['String']>>;
  term?: Maybe<Scalars['String']>;
  textFilters?: Maybe<Array<TextFilterInput>>;
};

export type QueryTaxArgs = {
  code?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  zone?: Maybe<Scalars['String']>;
};

export type QueryTaxesArgs = {
  input?: Maybe<TaxSearchInput>;
};

export type QueryUserArgs = {
  id?: Maybe<Scalars['Float']>;
  login?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['Float']>;
};

export type QueryUserAclListArgs = {
  permission: Permission;
  userId: Scalars['Int'];
};

export type QueryUserAttributesArgs = {
  filter?: Maybe<AttributeFilterInput>;
  userId: Scalars['Int'];
};

export type QueryUserDiscountsArgs = {
  userDirectoryId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

export type RangeFilterInput = {
  exclude?: Maybe<Scalars['Boolean']>;
  from: Scalars['Float'];
  searchId: Scalars['String'];
  to: Scalars['Float'];
  type?: Maybe<AttributeType>;
};

export type RefreshTokenResponse = {
  __typename?: 'RefreshTokenResponse';
  access_token: Scalars['String'];
  expires_in: Scalars['Int'];
  refresh_token: Scalars['String'];
  token_type: Scalars['String'];
  user_id: Scalars['String'];
};

export type RegisterUserInput = {
  autoLogin?: Maybe<Scalars['Boolean']>;
  cocNumber?: Maybe<Scalars['String']>;
  company?: Maybe<Scalars['String']>;
  createAccount?: Maybe<Scalars['Boolean']>;
  dateOfBirth?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  firstName: Scalars['String'];
  gender?: Maybe<Gender>;
  homepage?: Maybe<Scalars['String']>;
  lastName: Scalars['String'];
  mailingList?: Maybe<Scalars['String']>;
  middleName?: Maybe<Scalars['String']>;
  mobile?: Maybe<Scalars['String']>;
  parentId: Scalars['Int'];
  password?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  taxNumber?: Maybe<Scalars['String']>;
};

export type RegisterUserResponse = {
  __typename?: 'RegisterUserResponse';
  session: RegisterUserSession;
  user: User;
};

export type RegisterUserSession = {
  __typename?: 'RegisterUserSession';
  accessToken: Scalars['String'];
  expirationTime: Scalars['DateTime'];
  refreshToken: Scalars['String'];
};

export type SearchByInput = {
  id?: Maybe<Scalars['ID']>;
  orderId?: Maybe<Scalars['String']>;
  paymentId?: Maybe<Scalars['String']>;
};

export type SearchFieldsInput = {
  boost: Scalars['Int'];
  fieldNames: Array<Searchablefields>;
};

export enum Searchablefields {
  Description = 'description',
  EanCode = 'eanCode',
  Keywords = 'keywords',
  KeywordsCustom = 'keywordsCustom',
  Manufacturer = 'manufacturer',
  ManufacturerCode = 'manufacturerCode',
  Name = 'name',
  ShortDescription = 'shortDescription',
  Sku = 'sku',
  Supplier = 'supplier',
  SupplierCode = 'supplierCode',
}

export type SendOrderConfirmResponseType = {
  __typename?: 'SendOrderConfirmResponseType';
  messageId: Scalars['String'];
  success: Scalars['Boolean'];
};

export type Shipment = {
  __typename?: 'Shipment';
  date: Scalars['DateTime'];
  id: Scalars['Int'];
  items?: Maybe<Array<ShipmentItem>>;
  orderId: Scalars['Int'];
  printDate?: Maybe<Scalars['DateTime']>;
  status: Scalars['String'];
  totalDiscountValue: Scalars['Float'];
  totalGross: Scalars['Float'];
  totalNet: Scalars['Float'];
  totalTax: Scalars['Float'];
  trackAndTrace?: Maybe<Array<TrackAndTrace>>;
};

export type ShipmentItem = {
  __typename?: 'ShipmentItem';
  class: Scalars['String'];
  discount: Scalars['Float'];
  id: Scalars['Int'];
  name: Scalars['String'];
  notes: Scalars['String'];
  orderItemId: Scalars['Int'];
  price: Scalars['Float'];
  priceTotal: Scalars['Float'];
  productId?: Maybe<Scalars['Int']>;
  quantity: Scalars['Int'];
  shipmentId: Scalars['Int'];
  sku: Scalars['String'];
  supplier: Scalars['String'];
  supplierCode: Scalars['String'];
  tax: Scalars['Float'];
  taxPercentage: Scalars['Float'];
  uuid: Scalars['String'];
};

export type SortInput = {
  field: SortableFields;
  order?: Maybe<SortOrder>;
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc',
}

export enum SortableFields {
  DateChanged = 'dateChanged',
  DateCreated = 'dateCreated',
  Name = 'name',
  Price = 'price',
  Relevance = 'relevance',
  ShortName = 'shortName',
  Sku = 'sku',
  SupplierCode = 'supplierCode',
}

export type Tax = {
  __typename?: 'Tax';
  code?: Maybe<Scalars['String']>;
  exportCode?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  ratio?: Maybe<Scalars['Float']>;
  shopId: Scalars['Int'];
  zone: Scalars['String'];
};

export enum TaxCode {
  H = 'H',
  L = 'L',
  N = 'N',
}

export type TaxSearchInput = {
  offset?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
};

export enum Taxcode {
  H = 'H',
  L = 'L',
  N = 'N',
}

export type TaxesResponse = {
  __typename?: 'TaxesResponse';
  end: Scalars['Int'];
  items: Array<Tax>;
  itemsFound: Scalars['Int'];
  offset: Scalars['Int'];
  page: Scalars['Int'];
  pages: Scalars['Int'];
  start: Scalars['Int'];
};

export type TextFilterInput = {
  exclude?: Maybe<Scalars['Boolean']>;
  searchId: Scalars['String'];
  type?: Maybe<AttributeType>;
  values: Array<Scalars['String']>;
};

export type TrackAndTrace = {
  __typename?: 'TrackAndTrace';
  carrierId: Scalars['Int'];
  code: Scalars['String'];
  id: Scalars['Int'];
  orderId: Scalars['Int'];
  shipmentId: Scalars['Int'];
};

export type Transaction = {
  __typename?: 'Transaction';
  amount: Scalars['Int'];
  currency: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  paymentId: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
  status: TransactionStatuses;
  timestamp?: Maybe<Scalars['DateTime']>;
  transactionId: Scalars['String'];
  type: TransactionTypes;
};

export enum TransactionStatuses {
  Failed = 'FAILED',
  Open = 'OPEN',
  Pending = 'PENDING',
  Success = 'SUCCESS',
}

export enum TransactionTypes {
  Authorization = 'AUTHORIZATION',
  CancelAuthorization = 'CANCEL_AUTHORIZATION',
  Chargeback = 'CHARGEBACK',
  Na = 'NA',
  Paid = 'PAID',
  Refunded = 'REFUNDED',
}

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

export type UpdatePaymentInput = {
  addTransaction?: Maybe<CreateTransactionInput>;
  amount?: Maybe<Scalars['Int']>;
  anonymousId?: Maybe<Scalars['Int']>;
  currency?: Maybe<Scalars['String']>;
  method?: Maybe<Scalars['String']>;
  status?: Maybe<PaymentStatuses>;
  userId?: Maybe<Scalars['Int']>;
};

export type UpdateTaxInput = {
  code?: Maybe<Scalars['String']>;
  exportCode?: Maybe<Scalars['String']>;
  ratio?: Maybe<Scalars['Float']>;
  shopId?: Maybe<Scalars['Int']>;
  zone?: Maybe<Scalars['String']>;
};

export type UpdateUserInput = {
  cocNumber?: Maybe<Scalars['String']>;
  company?: Maybe<Scalars['String']>;
  dateOfBirth?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  firstName: Scalars['String'];
  gender?: Maybe<Gender>;
  homepage?: Maybe<Scalars['String']>;
  lastName: Scalars['String'];
  mailingList?: Maybe<Scalars['String']>;
  middleName?: Maybe<Scalars['String']>;
  mobile?: Maybe<Scalars['String']>;
  parentId: Scalars['Int'];
  phone?: Maybe<Scalars['String']>;
  taxNumber?: Maybe<Scalars['String']>;
  userId: Scalars['Int'];
};

export type User = {
  __typename?: 'User';
  aclList: Array<Scalars['Int']>;
  addresses: Array<Address>;
  bankaccount?: Maybe<Scalars['String']>;
  bic?: Maybe<Scalars['String']>;
  cocNumber?: Maybe<Scalars['String']>;
  company?: Maybe<Scalars['String']>;
  dateOfBirth?: Maybe<Scalars['DateTime']>;
  debtorId?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  expires?: Maybe<Scalars['DateTime']>;
  firstName: Scalars['String'];
  gender?: Maybe<Gender>;
  homepage?: Maybe<Scalars['String']>;
  iban?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  isAllowed: Scalars['Boolean'];
  isLoggedIn: Scalars['Boolean'];
  lastName: Scalars['String'];
  mailingList?: Maybe<YesNo>;
  middleName?: Maybe<Scalars['String']>;
  mobile?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  orders: OrderResponse;
  phone?: Maybe<Scalars['String']>;
  taxNumber?: Maybe<Scalars['String']>;
  userId: Scalars['Int'];
};

export type UserAclListArgs = {
  permission: Permission;
};

export type UserAddressesArgs = {
  isDefault?: Maybe<UserAddressType>;
  type?: Maybe<UserAddressType>;
};

export type UserIsAllowedArgs = {
  permission: Permission;
  userId: Scalars['Int'];
};

export type UserAddressCreateInput = {
  city: Scalars['String'];
  code?: Maybe<Scalars['String']>;
  company?: Maybe<Scalars['String']>;
  country: Scalars['String'];
  email?: Maybe<Scalars['String']>;
  firstName: Scalars['String'];
  gender?: Maybe<Gender>;
  isDefault?: Maybe<YesNo>;
  lastName: Scalars['String'];
  middleName?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  number: Scalars['String'];
  numberExtension?: Maybe<Scalars['String']>;
  postalCode: Scalars['String'];
  region?: Maybe<Scalars['String']>;
  street: Scalars['String'];
  telephone?: Maybe<Scalars['String']>;
  type: UserAddressType;
  userId: Scalars['Int'];
};

export type UserAddressDeleteInput = {
  id: Scalars['Int'];
  userId: Scalars['Int'];
};

export enum UserAddressType {
  Delivery = 'delivery',
  Home = 'home',
  Invoice = 'invoice',
}

export type UserAddressUpdateInput = {
  city: Scalars['String'];
  code?: Maybe<Scalars['String']>;
  company?: Maybe<Scalars['String']>;
  country: Scalars['String'];
  email?: Maybe<Scalars['String']>;
  firstName: Scalars['String'];
  gender?: Maybe<Gender>;
  id: Scalars['Int'];
  isDefault?: Maybe<YesNo>;
  lastName: Scalars['String'];
  middleName?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  number: Scalars['String'];
  numberExtension?: Maybe<Scalars['String']>;
  postalCode: Scalars['String'];
  region?: Maybe<Scalars['String']>;
  street: Scalars['String'];
  telephone?: Maybe<Scalars['String']>;
  userId: Scalars['Int'];
};

export type VerifyToken = {
  __typename?: 'VerifyToken';
  aud: Scalars['String'];
  auth_time: Scalars['Int'];
  claims?: Maybe<Scalars['JSONObject']>;
  email: Scalars['String'];
  email_verified: Scalars['Boolean'];
  exp: Scalars['Int'];
  firebase?: Maybe<Firebase>;
  iat: Scalars['Int'];
  iss: Scalars['String'];
  name: Scalars['String'];
  sub: Scalars['String'];
  uid: Scalars['String'];
  user_id: Scalars['String'];
};

export type VerifyTokenInput = {
  token: Scalars['String'];
};

export enum YesNo {
  N = 'N',
  Y = 'Y',
}
