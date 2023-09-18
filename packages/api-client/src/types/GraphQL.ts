/* eslint-disable no-use-before-define */
export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> }

/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  DateTime: any
  JSONObject: any
  Upload: any
}

export type Ace = {
  __typename?: 'Ace'
  aceId: Scalars['Int']
  alow: Scalars['Int']
  deny: Scalars['Int']
}

export type Address = {
  __typename?: 'Address'
  id: Scalars['Int']
  firstName?: Maybe<Scalars['String']>
  middleName?: Maybe<Scalars['String']>
  lastName?: Maybe<Scalars['String']>
  gender?: Maybe<Gender>
  company?: Maybe<Scalars['String']>
  street: Scalars['String']
  number?: Maybe<Scalars['String']>
  numberExtension?: Maybe<Scalars['String']>
  postalCode: Scalars['String']
  city: Scalars['String']
  region?: Maybe<Scalars['String']>
  country: Scalars['String']
  phone?: Maybe<Scalars['String']>
  mobile?: Maybe<Scalars['String']>
  email?: Maybe<Scalars['String']>
  fax?: Maybe<Scalars['String']>
  code?: Maybe<Scalars['String']>
  notes?: Maybe<Scalars['String']>
  isDefault: YesNo
  type: AddressType
  icp?: Maybe<YesNo>
  url?: Maybe<Scalars['String']>
  active?: Maybe<YesNo>
  name?: Maybe<Scalars['String']>
}

export enum AddressType {
  Delivery = 'delivery',
  Invoice = 'invoice',
  Home = 'home'
}

export type Attribute = {
  __typename?: 'Attribute'
  id: Scalars['Int']
  name: Scalars['String']
  searchId: Scalars['String']
  description: Array<LocalizedString>
  type: AttributeType
  typeParam: Scalars['String']
  group: Scalars['String']
  isSearchable: Scalars['Boolean']
  isPublic: Scalars['Boolean']
  isHidden?: Maybe<Scalars['Boolean']>
  textValue?: Maybe<Array<LocalizedStringArray>>
  enumValue?: Maybe<Array<Scalars['String']>>
  intValue?: Maybe<Array<Scalars['Int']>>
  decimalValue?: Maybe<Array<Scalars['Float']>>
  dateValue?: Maybe<Scalars['DateTime']>
}

export type AttributeDescriptionArgs = {
  language?: Maybe<Scalars['String']>
}

export type AttributeTextValueArgs = {
  language?: Maybe<Scalars['String']>
}

export enum AttributeClass {
  Contact = 'contact',
  Customer = 'customer',
  Product = 'product'
}

export type AttributeDecimalRangeFilter = IAttributeDecimalRangeFilter & {
  __typename?: 'AttributeDecimalRangeFilter'
  min: Scalars['Float']
  max: Scalars['Float']
}

export type AttributeDescription = {
  __typename?: 'AttributeDescription'
  id: Scalars['Int']
  name: Scalars['String']
  searchId: Scalars['String']
  description: Array<LocalizedString>
  type: AttributeType
  typeParam: Scalars['String']
  group: Scalars['String']
  isSearchable: Scalars['Boolean']
  isPublic: Scalars['Boolean']
  isHidden?: Maybe<Scalars['Boolean']>
}

export type AttributeDescriptionDescriptionArgs = {
  language?: Maybe<Scalars['String']>
}

export type AttributeDescriptionResponse = {
  __typename?: 'AttributeDescriptionResponse'
  items: Array<AttributeDescription>
  itemsFound: Scalars['Int']
  offset: Scalars['Int']
  page: Scalars['Int']
  pages: Scalars['Int']
  start: Scalars['Int']
  end: Scalars['Int']
}

export type AttributeDescriptionSearchInput = {
  isSearchable?: Maybe<Scalars['Boolean']>
  isPublic?: Maybe<Scalars['Boolean']>
  isHidden?: Maybe<Scalars['Boolean']>
  name?: Maybe<Array<Scalars['String']>>
  type?: Maybe<Array<AttributeType>>
  group?: Maybe<Array<Scalars['String']>>
  page?: Scalars['Int']
  offset?: Scalars['Int']
  class: Scalars['String']
}

export type AttributeFilter = IAttributeFilter & {
  __typename?: 'AttributeFilter'
  id: Scalars['String']
  searchId: Scalars['String']
  description: Scalars['String']
  type: AttributeType
  isSearchable: Scalars['Boolean']
  isPublic: Scalars['Boolean']
  isHidden?: Maybe<Scalars['Boolean']>
  textFilter?: Maybe<Array<AttributeTextFilter>>
  integerRangeFilter?: Maybe<AttributeIntegerRangeFilter>
  decimalRangeFilter?: Maybe<AttributeDecimalRangeFilter>
}

export type AttributeFilterInput = {
  isSearchable?: Maybe<Scalars['Boolean']>
  isPublic?: Maybe<Scalars['Boolean']>
  isHidden?: Maybe<Scalars['Boolean']>
  name?: Maybe<Array<Scalars['String']>>
  type?: Maybe<Array<AttributeType>>
  group?: Maybe<Array<Scalars['String']>>
  page?: Scalars['Int']
  offset?: Scalars['Int']
}

export type AttributeIntegerRangeFilter = IAttributeIntegerRangeFilter & {
  __typename?: 'AttributeIntegerRangeFilter'
  min: Scalars['Int']
  max: Scalars['Int']
}

export type AttributeTextFilter = IAttributeTextFilter & {
  __typename?: 'AttributeTextFilter'
  value: Scalars['String']
  count: Scalars['Int']
  countTotal?: Maybe<Scalars['Int']>
  countActive?: Maybe<Scalars['Int']>
  isSelected: Scalars['Boolean']
}

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
  Decimal = 'decimal'
}

export type AttributeValue = {
  __typename?: 'AttributeValue'
  attributeId: Scalars['Int']
  textValue?: Maybe<Array<LocalizedStringArray>>
  enumValue?: Maybe<Array<Scalars['String']>>
  intValue?: Maybe<Array<Scalars['Int']>>
  decimalValue?: Maybe<Array<Scalars['Float']>>
  dateValue?: Maybe<Scalars['DateTime']>
  attributeDescription: AttributeDescription
}

export type AttributeValueTextValueArgs = {
  language?: Maybe<Scalars['String']>
}

export type AttributeValueObjectSearchInput = {
  class: AttributeClass
  type: AttributeType
  name: Scalars['String']
  textValue?: Maybe<LocalizedStringArrayInput>
  enumValue?: Maybe<Array<Scalars['String']>>
  intValue?: Maybe<Scalars['Int']>
  decimalValue?: Maybe<Scalars['Float']>
  isSearchable?: Maybe<Scalars['Boolean']>
  isPublic?: Maybe<Scalars['Boolean']>
  isHidden?: Maybe<Scalars['Boolean']>
}

export type AttributeValueResponse = {
  __typename?: 'AttributeValueResponse'
  items: Array<AttributeValue>
  itemsFound: Scalars['Int']
  offset: Scalars['Int']
  page: Scalars['Int']
  pages: Scalars['Int']
  start: Scalars['Int']
  end: Scalars['Int']
}

export enum Auto {
  Webp = 'WEBP'
}

export type Base64File = {
  __typename?: 'Base64File'
  base64: Scalars['String']
  contentType: Scalars['String']
  fileName: Scalars['String']
}

export type Base64FileInput = {
  base64: Scalars['String']
  contentType: Scalars['String']
  fileName: Scalars['String']
}

export type BulkPrice = {
  __typename?: 'BulkPrice'

  /** @deprecated Bulk price value deprecated in favor of 'net' and 'gross' fields */
  price: Scalars['Float']
  gross: Scalars['Float']
  from: Scalars['Int']
  to?: Maybe<Scalars['Int']>
  net?: Maybe<Scalars['Float']>
}

export type BulkPriceNetArgs = {
  taxZone?: Maybe<Scalars['String']>
}

export type Bundle = IBundle & {
  __typename?: 'Bundle'
  id: Scalars['Float']

  /** @deprecated The comboId is deprecated and will be removed in the future. Please use the id field instead. */
  comboId?: Maybe<Scalars['Float']>
  name: Scalars['String']
  description?: Maybe<Scalars['String']>
  discount?: Maybe<Scalars['Float']>
  condition?: Maybe<BundleCondition>
  price?: Maybe<BundlePrice>
  items?: Maybe<Array<BundleItem>>
}

export type BundleAddItemsInput = {
  items?: Maybe<Array<BundleItemInput>>
}

export enum BundleCondition {
  All = 'ALL',
  Ep = 'EP',
}

export type BundleItem = IBundleItem & {
  __typename?: 'BundleItem'
  productId: Scalars['Int']
  price?: Maybe<BundlePrice>
  isLeader: YesNo
  product: Product
}

export type BundleItemInput = {
  productId: Scalars['Int']
  isLeader?: Maybe<YesNo>
}

export type BundlePrice = IBundlePrice & {
  __typename?: 'BundlePrice'
  net?: Maybe<Scalars['Float']>
  gross?: Maybe<Scalars['Float']>
  originalNet?: Maybe<Scalars['Float']>
  originalGross?: Maybe<Scalars['Float']>
}

export type BundleSearchInput = {
  id: Scalars['Int']
  taxZone?: Maybe<Scalars['String']>
}

export type BusinessHours = {
  __typename?: 'BusinessHours'
  dayOfWeek: Scalars['Float']
  openingTime: Scalars['String']
  closingTime: Scalars['String']
  lunchBeakStartTime?: Maybe<Scalars['String']>
  lunchBeakEndTime?: Maybe<Scalars['String']>
}

export type BusinessHoursInput = {
  dayOfWeek: Scalars['Float']
  openingTime: Scalars['String']
  closingTime: Scalars['String']
  lunchBeakStartTime?: Maybe<Scalars['String']>
  lunchBeakEndTime?: Maybe<Scalars['String']>
}

export type CacheControlInput = {
  type?: Maybe<CacheControlType>
  maxAge?: Maybe<Scalars['Int']>
}

export enum CacheControlType {
  NoStore = 'NO_STORE',
  Public = 'PUBLIC'
}

export type CanvasInput = {
  width?: Maybe<Scalars['Int']>
  height?: Maybe<Scalars['Int']>
  widthRatio?: Maybe<Scalars['Int']>
  heightRatio?: Maybe<Scalars['Int']>
  x?: Maybe<Scalars['Int']>
  y?: Maybe<Scalars['Int']>
  offsetX?: Maybe<Scalars['Int']>
  offsetY?: Maybe<Scalars['Int']>
}

export type Cart = ICart & {
  __typename?: 'Cart'
  cartId: Scalars['String']
  userId: Scalars['Int']
  channelId?: Maybe<Scalars['Int']>
  carrier: Scalars['String']
  notes?: Maybe<Scalars['String']>
  reference?: Maybe<Scalars['String']>
  extra3?: Maybe<Scalars['String']>
  extra4?: Maybe<Scalars['String']>
  orderStatus?: Maybe<Scalars['String']>
  actionCode?: Maybe<Scalars['String']>
  couponCode?: Maybe<Scalars['String']>
  vouchers?: Maybe<Array<CartVoucher>>
  paymentData?: Maybe<CartPaymentData>
  postageData?: Maybe<CartPostageData>
  total?: Maybe<CartTotal>
  items?: Maybe<Array<CartMainItem>>
  bonusItems?: Maybe<Array<CartBaseItem>>
  invoiceAddress: CartAddress
  deliveryAddress: CartAddress
  taxLevels?: Maybe<Array<CartTaxLevel>>
  payMethods?: Maybe<Array<CartPaymethod>>
  carriers?: Maybe<Array<CartCarrier>>
  dateCreated?: Maybe<Scalars['DateTime']>
  dateChanged?: Maybe<Scalars['DateTime']>
  incentives?: Maybe<Array<CartIncentive>>
  valuePoints?: Maybe<Scalars['Int']>
  user: IBaseUser
}

export type CartAddBundleInput = {
  cartId: Scalars['String']
  quantity?: Maybe<Scalars['Int']>
  notes?: Maybe<Scalars['String']>
  bundleId: Scalars['Int']
}

export type CartAddItemInput = {
  cartId: Scalars['String']
  quantity?: Maybe<Scalars['Int']>
  notes?: Maybe<Scalars['String']>
  productId: Scalars['Int']
  price?: Maybe<Scalars['Float']>
  childItems?: Maybe<Array<CartChildItemInput>>
}

export type CartAddress = {
  __typename?: 'CartAddress'
  company?: Maybe<Scalars['String']>
  gender?: Maybe<Gender>
  firstName: Scalars['String']
  middleName?: Maybe<Scalars['String']>
  lastName: Scalars['String']
  street: Scalars['String']
  number?: Maybe<Scalars['String']>
  numberExtension?: Maybe<Scalars['String']>
  postalCode: Scalars['String']
  city: Scalars['String']
  region?: Maybe<Scalars['String']>
  country: Scalars['String']
  code?: Maybe<Scalars['String']>
  email?: Maybe<Scalars['String']>
  mobile?: Maybe<Scalars['String']>
  phone?: Maybe<Scalars['String']>
  url?: Maybe<Scalars['String']>
  icp?: Maybe<YesNo>
  notes?: Maybe<Scalars['String']>
}

export enum CartAddressType {
  Invoice = 'invoice',
  Delivery = 'delivery'
}

export type CartBaseItem = ICartBaseItem & {
  __typename?: 'CartBaseItem'
  id: Scalars['Int']
  notes: Scalars['String']
  price: Scalars['Float']
  priceNet: Scalars['Float']
  totalPrice: Scalars['Float']
  totalPriceNet: Scalars['Float']
  sum: Scalars['Float']
  sumNet: Scalars['Float']
  totalSum: Scalars['Float']
  totalSumNet: Scalars['Float']
  quantity: Scalars['Int']
  bundleId?: Maybe<Scalars['Int']>
  productId?: Maybe<Scalars['Int']>
  taxCode: Taxcode
  expectedDeliveryDate?: Maybe<Scalars['DateTime']>
  deliveryDeadline?: Maybe<Scalars['DateTime']>
  discount: Scalars['Float']
  discountPercentage: Scalars['Float']
  product: Product
}

export type CartCarrier = {
  __typename?: 'CartCarrier'
  name: Scalars['String']
  description: Scalars['String']
  logo: Scalars['String']
  price: Scalars['Float']
}

export type CartChildItemInput = {
  productId: Scalars['Int']
  price?: Maybe<Scalars['Float']>
}

export type CartDeleteItemInput = {
  cartId: Scalars['String']
  itemId: Scalars['Int']
}

export type CartDeleteResponse = {
  __typename?: 'CartDeleteResponse'
  message: Scalars['String']
  success: Scalars['Boolean']
}

export type CartIncentive = {
  __typename?: 'CartIncentive'
  ruleId: Scalars['Int']
  name: Scalars['String']
  content: Scalars['String']
}

export type CartMainItem = ICartBaseItem & {
  __typename?: 'CartMainItem'
  id: Scalars['Int']
  productId?: Maybe<Scalars['Int']>
  bundleId?: Maybe<Scalars['Int']>
  bundle?: Maybe<Bundle>
  notes: Scalars['String']
  price: Scalars['Float']
  priceNet: Scalars['Float']
  totalPrice: Scalars['Float']
  totalPriceNet: Scalars['Float']
  sum: Scalars['Float']
  sumNet: Scalars['Float']
  totalSum: Scalars['Float']
  totalSumNet: Scalars['Float']
  quantity: Scalars['Int']
  taxCode: Taxcode
  expectedDeliveryDate?: Maybe<Scalars['DateTime']>
  deliveryDeadline?: Maybe<Scalars['DateTime']>
  discount: Scalars['Float']
  discountPercentage: Scalars['Float']
  childItems?: Maybe<Array<CartBaseItem>>
  product?: Maybe<Product>
}

export type CartMainItemBundleArgs = {
  taxZone?: Maybe<Scalars['String']>
}

export type CartPaymentData = {
  __typename?: 'CartPaymentData'
  netAmount: Scalars['Float']
  grossAmount: Scalars['Float']
  tax: Scalars['Float']
  taxPercentage: Scalars['Float']
  method: Scalars['String']
}

export type CartPaymentDataInput = {
  method?: Maybe<Scalars['String']>
}

export type CartPaymethod = {
  __typename?: 'CartPaymethod'
  description: Scalars['String']
  code: Scalars['String']
  externalCode: Scalars['String']
  type: Scalars['String']
  taxCode: Taxcode
  price: Scalars['Float']
  amount: Scalars['Float']
}

export type CartPostageData = {
  __typename?: 'CartPostageData'
  shippingMethod: Scalars['String']
  postageTaxPercentage: Scalars['Float']
  requestDate: Scalars['DateTime']
  postage: Scalars['Float']
  postageNet: Scalars['Float']
  priceMode: PriceMode
  partialDeliveryAllowed?: Maybe<YesNo>
  pickUpLocationId?: Maybe<Scalars['Int']>
  warehouse?: Maybe<Warehouse>
}

export type CartPostageDataInput = {
  shippingMethod?: Maybe<Scalars['String']>
  requestDate?: Maybe<Scalars['DateTime']>
  partialDeliveryAllowed?: Maybe<YesNo>
  postage?: Maybe<Scalars['Float']>
}

export type CartProcessInput = {
  cartId: Scalars['String']
  orderStatus: Scalars['String']
  language?: Maybe<Scalars['String']>
}

export type CartProcessResponse = {
  __typename?: 'CartProcessResponse'
  cartOrderId: Scalars['Int']
  response: CartResponseData
  order: Order
}

export type CartResponse = {
  __typename?: 'CartResponse'
  cart: Cart
  response: CartResponseData
}

export type CartResponseData = {
  __typename?: 'CartResponseData'
  data: Scalars['JSONObject']
  error: Scalars['Boolean']
  messages: Array<Scalars['String']>
}

export type CartSetUserInput = {
  cartId: Scalars['String']
  userId: Scalars['Int']
}

export type CartTaxLevel = {
  __typename?: 'CartTaxLevel'
  taxCode: Taxcode
  price: Scalars['Float']
}

export type CartTotal = {
  __typename?: 'CartTotal'
  subTotal: Scalars['Float']
  subTotalNet: Scalars['Float']
  discountPercentage: Scalars['Float']
  totalNet: Scalars['Float']
  totalGross: Scalars['Float']
  discountNet: Scalars['Float']
  discountGross: Scalars['Float']
}

export type CartUpdateAddressInput = {
  cartId: Scalars['String']
  type: CartAddressType
  company?: Maybe<Scalars['String']>
  gender?: Maybe<Gender>
  firstName: Scalars['String']
  middleName?: Maybe<Scalars['String']>
  lastName: Scalars['String']
  street: Scalars['String']
  number?: Maybe<Scalars['String']>
  numberExtension?: Maybe<Scalars['String']>
  postalCode: Scalars['String']
  city: Scalars['String']
  region?: Maybe<Scalars['String']>
  country?: Maybe<Scalars['String']>
  code?: Maybe<Scalars['String']>
  email?: Maybe<Scalars['String']>
  mobile?: Maybe<Scalars['String']>
  phone?: Maybe<Scalars['String']>
  url?: Maybe<Scalars['String']>
  icp?: Maybe<YesNo>
  notes?: Maybe<Scalars['String']>
}

export type CartUpdateInput = {
  cartId: Scalars['String']
  paymentData?: Maybe<CartPaymentDataInput>
  postageData?: Maybe<CartPostageDataInput>
  notes?: Maybe<Scalars['String']>
  reference?: Maybe<Scalars['String']>
  extra3?: Maybe<Scalars['String']>
  extra4?: Maybe<Scalars['String']>
  carrier?: Maybe<Scalars['String']>
}

export type CartUpdateItemInput = {
  cartId: Scalars['String']
  quantity?: Maybe<Scalars['Int']>
  notes?: Maybe<Scalars['String']>
  itemId: Scalars['Int']
  price?: Maybe<Scalars['Float']>
}

export type CartUpdateItemsInput = {
  quantity?: Maybe<Scalars['Int']>
  notes?: Maybe<Scalars['String']>
  itemId: Scalars['Int']
  price?: Maybe<Scalars['Float']>
}

export type CartVoucher = {
  __typename?: 'CartVoucher'
  code: Scalars['String']
  name: Scalars['String']
  description: Scalars['String']
  ruleId: Scalars['Int']
  redeemed: YesNo
  combinable: YesNo
  partialRedemption: YesNo
  available: Scalars['Float']
  remaining: Scalars['Float']
}

export type Category = {
  __typename?: 'Category'
  id: Scalars['Int']
  categoryId: Scalars['Int']
  attributeValues: AttributeValueResponse
  name: Array<LocalizedString>
  description: Array<LocalizedString>
  shortDescription: Array<LocalizedString>
  slug: Array<LocalizedString>
  path: Scalars['String']
  categories?: Maybe<Array<Category>>
  parent?: Maybe<Category>
  defaultLanguage: Scalars['String']
  categoryPath: Array<Category>
  products: ProductsResponse
}

export type CategoryAttributeValuesArgs = {
  filter?: Maybe<AttributeFilterInput>
}

export type CategoryNameArgs = {
  language?: Maybe<Scalars['String']>
}

export type CategoryDescriptionArgs = {
  language?: Maybe<Scalars['String']>
}

export type CategoryShortDescriptionArgs = {
  language?: Maybe<Scalars['String']>
}

export type CategorySlugArgs = {
  language?: Maybe<Scalars['String']>
}

export type CategoryProductsArgs = {
  term?: Maybe<Scalars['String']>
  manufacturer?: Maybe<Array<Scalars['String']>>
  supplierCode?: Maybe<Array<Scalars['String']>>
  supplier?: Maybe<Array<Scalars['String']>>
  manufacturerCode?: Maybe<Array<Scalars['String']>>
  EANCode?: Maybe<Array<Scalars['String']>>
  id?: Maybe<Array<Scalars['Int']>>
  classId?: Maybe<Array<Scalars['Int']>>
  class?: Maybe<ProductClass>
  tag?: Maybe<Array<Scalars['String']>>
  language?: Scalars['String']
  page?: Scalars['Int']
  offset?: Scalars['Int']
  textFilters?: Maybe<Array<TextFilterInput>>
  rangeFilters?: Maybe<Array<RangeFilterInput>>
  price?: Maybe<PriceFilterInput>
  status?: Maybe<Array<ProductStatus>>
  hidden?: Maybe<Scalars['Boolean']>
  sort?: Maybe<Array<SortInput>>
  searchFields?: Maybe<Array<SearchFieldsInput>>
  hasBundle?: Maybe<YesNo>
  isBundleLeader?: Maybe<YesNo>
  parentSlug?: Maybe<Scalars['String']>
  pathSlug?: Maybe<Scalars['String']>
  userId?: Maybe<Scalars['Int']>
  getDescendants?: Maybe<Scalars['Boolean']>
  sku?: Maybe<Array<Scalars['String']>>
}

export type Channel = {
  __typename?: 'Channel'
  channelId: Scalars['Int']
  id: Scalars['Int']
  name: Scalars['String']
  catalogRootId?: Maybe<Scalars['Int']>
  defaultLetterId?: Maybe<Scalars['Int']>
  anonymousUserId?: Maybe<Scalars['Int']>
  shop?: Maybe<Shop>
}

export type Cluster = ICluster &
  IBaseProduct &
  IResource & {
    __typename?: 'Cluster'
    id: Scalars['Int']
    categoryId: Scalars['Int']
    clusterId: Scalars['Int']
    attributeValues: AttributeValueResponse
    category: Category
    categoryPath: Array<Category>

    /** @deprecated Deprecated in favor of productId and clusterId */
    classId: Scalars['Int']
    crossupsells: Array<Crossupsell>
    language?: Maybe<Scalars['String']>
    class: Scalars['String']
    isHidden: YesNo
    name: Array<LocalizedString>
    description: Array<LocalizedString>
    shortDescription: Array<LocalizedString>
    slug: Array<LocalizedString>
    sku: Scalars['String']

    /** @deprecated Path is no longer supported */
    path?: Maybe<Scalars['String']>
    defaultLanguage: Scalars['String']
    products?: Maybe<Array<Product>>
    options?: Maybe<Array<ClusterOption>>
    drillDown?: Maybe<Array<ClusterDrillDown>>
    defaultProduct?: Maybe<Product>
  }

export type ClusterAttributeValuesArgs = {
  filter?: Maybe<AttributeFilterInput>
}

export type ClusterCrossupsellsArgs = {
  input?: Maybe<CrossupsellTypesInput>
}

export type ClusterNameArgs = {
  language?: Maybe<Scalars['String']>
}

export type ClusterDescriptionArgs = {
  language?: Maybe<Scalars['String']>
}

export type ClusterShortDescriptionArgs = {
  language?: Maybe<Scalars['String']>
}

export type ClusterSlugArgs = {
  language?: Maybe<Scalars['String']>
}

export type ClusterDrillDown = IClusterDrillDown & {
  __typename?: 'ClusterDrillDown'
  attributeId: Scalars['String']
  attribute: AttributeDescription
  priority: Scalars['Int']
  displayType: ClusterDrillDownDisplayTypes
}

export enum ClusterDrillDownDisplayTypes {
  Radio = 'radio',
  Dropdown = 'dropdown',
  Image = 'image',
  Color = 'color'
}

export type ClusterOption = IClusterOption & {
  __typename?: 'ClusterOption'
  id: Scalars['Int']
  clusterOptionId: Scalars['Int']
  isRequired: Scalars['Boolean']
  isHidden: YesNo
  defaultProduct?: Maybe<Product>
  products: Array<Product>
  name: Array<LocalizedString>
  description: Array<LocalizedString>
  shortDescription: Array<LocalizedString>
}

export type ClusterOptionNameArgs = {
  language?: Maybe<Scalars['String']>
}

export type ClusterOptionDescriptionArgs = {
  language?: Maybe<Scalars['String']>
}

export type ClusterOptionShortDescriptionArgs = {
  language?: Maybe<Scalars['String']>
}

export type CompaniesResponse = {
  __typename?: 'CompaniesResponse'
  items: Array<Company>
  itemsFound: Scalars['Int']
  offset: Scalars['Int']
  page: Scalars['Int']
  pages: Scalars['Int']
  start: Scalars['Int']
  end: Scalars['Int']
}

export type Company = {
  __typename?: 'Company'
  id: Scalars['Int']
  companyId: Scalars['Int']
  addresses: Array<Address>
  name: Scalars['String']
  taxNumber?: Maybe<Scalars['String']>
  hidden?: Maybe<YesNo>
  inheritProductList?: Maybe<YesNo>
  path?: Maybe<Scalars['String']>
  slug?: Maybe<Scalars['String']>
  tag?: Maybe<Scalars['String']>
  dateCreated?: Maybe<Scalars['DateTime']>
  parentUsergroupId: Scalars['Int']
  usergroup?: Maybe<Usergroup>
  contacts?: Maybe<ContactsResponse>
  managers?: Maybe<Array<IBaseUser>>
}

export type CompanyAddressesArgs = {
  type?: Maybe<AddressType>
  isDefault?: Maybe<YesNo>
}

export type CompanyContactsArgs = {
  input?: Maybe<ContactSearchArguments>
}

export type CompanyAddressCreateInput = {
  firstName?: Maybe<Scalars['String']>
  middleName?: Maybe<Scalars['String']>
  lastName?: Maybe<Scalars['String']>
  gender?: Maybe<Gender>
  company?: Maybe<Scalars['String']>
  street: Scalars['String']
  number?: Maybe<Scalars['String']>
  numberExtension?: Maybe<Scalars['String']>
  postalCode: Scalars['String']
  city: Scalars['String']
  region?: Maybe<Scalars['String']>
  country: Scalars['String']
  phone?: Maybe<Scalars['String']>
  mobile?: Maybe<Scalars['String']>
  email?: Maybe<Scalars['String']>
  code?: Maybe<Scalars['String']>
  notes?: Maybe<Scalars['String']>
  isDefault?: Maybe<YesNo>
  companyId: Scalars['Int']
  type: AddressType
}

export type CompanyAddressDeleteInput = {
  id: Scalars['Int']
  companyId: Scalars['Int']
}

export type CompanyAddressUpdateInput = {
  firstName?: Maybe<Scalars['String']>
  middleName?: Maybe<Scalars['String']>
  lastName?: Maybe<Scalars['String']>
  gender?: Maybe<Gender>
  company?: Maybe<Scalars['String']>
  street?: Maybe<Scalars['String']>
  number?: Maybe<Scalars['String']>
  numberExtension?: Maybe<Scalars['String']>
  postalCode?: Maybe<Scalars['String']>
  city?: Maybe<Scalars['String']>
  region?: Maybe<Scalars['String']>
  country?: Maybe<Scalars['String']>
  phone?: Maybe<Scalars['String']>
  mobile?: Maybe<Scalars['String']>
  email?: Maybe<Scalars['String']>
  code?: Maybe<Scalars['String']>
  notes?: Maybe<Scalars['String']>
  isDefault?: Maybe<YesNo>
  companyId: Scalars['Int']
  id: Scalars['Int']
}

export type CompanySearchArguments = {
  usergroupId?: Maybe<Scalars['Int']>
  name?: Maybe<Scalars['String']>
  managedCompaniesOnly?: Maybe<Scalars['Boolean']>
  page?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  sort?: Maybe<Array<CompanySortInput>>
}

export enum CompanySortableFields {
  Name = 'name'
}

export type CompanySortInput = {
  field: CompanySortableFields
  order?: Maybe<SortOrder>
}

export type Contact = IBaseUser & {
  __typename?: 'Contact'
  id: Scalars['Int']
  contactId: Scalars['Int']

  /**
   * @deprecated Deprecated is favour of attributeValues.
   *       Added pagination to ther query the default offset will be 12 values.
   *       Increasing the offset in a listed view will impact the performance of the api.
   *
   */
  attributes: Array<Attribute>
  attributeValues: AttributeValueResponse
  debtorId?: Maybe<Scalars['String']>
  gender?: Maybe<Gender>
  firstName: Scalars['String']
  middleName?: Maybe<Scalars['String']>
  lastName: Scalars['String']
  cocNumber?: Maybe<Scalars['String']>
  phone?: Maybe<Scalars['String']>
  mobile?: Maybe<Scalars['String']>
  email: Scalars['String']
  iban?: Maybe<Scalars['String']>
  bankAccount?: Maybe<Scalars['String']>
  bic?: Maybe<Scalars['String']>
  notes?: Maybe<Scalars['String']>
  primaryLanguage?: Maybe<Scalars['String']>
  expires?: Maybe<Scalars['DateTime']>
  dateOfBirth?: Maybe<Scalars['DateTime']>
  mailingList?: Maybe<YesNo>
  isLoggedIn?: Maybe<Scalars['Boolean']>
  parentCompanyId: Scalars['Int']
  company?: Maybe<Company>
  managedCompanies?: Maybe<Array<Company>>
}

export type ContactAttributesArgs = {
  filter?: Maybe<AttributeFilterInput>
}

export type ContactAttributeValuesArgs = {
  filter?: Maybe<AttributeFilterInput>
}

export type ContactSearchArguments = {
  firstName?: Maybe<Scalars['String']>
  middleName?: Maybe<Scalars['String']>
  lastName?: Maybe<Scalars['String']>
  email?: Maybe<Scalars['String']>
  gender?: Maybe<Gender>
  attribute?: Maybe<UserManagementAttributeSearchInput>
  page?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  sort?: Maybe<Array<ContactSortInput>>
}

export enum ContactSortableFields {
  FirstName = 'firstName',
  LastName = 'lastName'
}

export type ContactSortInput = {
  field: ContactSortableFields
  order?: Maybe<SortOrder>
}

export type ContactsResponse = {
  __typename?: 'ContactsResponse'
  items: Array<Contact>
  itemsFound: Scalars['Int']
  offset: Scalars['Int']
  page: Scalars['Int']
  pages: Scalars['Int']
  start: Scalars['Int']
  end: Scalars['Int']
}

export type CreateAuthenticationInput = {
  email: Scalars['String']
  password?: Maybe<Scalars['String']>
  phoneNumber?: Maybe<Scalars['String']>
  displayName?: Maybe<Scalars['String']>
  uid?: Maybe<Scalars['String']>
}

export type CreateBundleInput = {
  name: Scalars['String']
  description: Scalars['String']
  discount?: Maybe<Scalars['Float']>
  condition?: Maybe<BundleCondition>
  price?: Maybe<Scalars['Float']>
  addBundleItems?: Maybe<Array<BundleItemInput>>
}

export type CreateCategoryInput = {
  name: Array<LocalizedStringInput>
  description: Array<LocalizedStringInput>
  shortDescription: Array<LocalizedStringInput>
  parent?: Maybe<Scalars['Int']>
  defaultLanguage: Scalars['String']
}

export type CreateCompanyInput = {
  name: Scalars['String']
  taxNumber?: Maybe<Scalars['String']>
  parentId: Scalars['Int']
}

export type CreateContactInput = {
  firstName: Scalars['String']
  middleName?: Maybe<Scalars['String']>
  lastName: Scalars['String']
  gender?: Maybe<Gender>
  email?: Maybe<Scalars['String']>
  homepage?: Maybe<Scalars['String']>
  cocNumber?: Maybe<Scalars['String']>
  phone?: Maybe<Scalars['String']>
  mobile?: Maybe<Scalars['String']>
  dateOfBirth?: Maybe<Scalars['DateTime']>
  mailingList?: Maybe<YesNo>
  parentId: Scalars['Int']
  primaryLanguage?: Maybe<Scalars['String']>
  attributes?: Maybe<Array<UserManagementAttributeValueInput>>
}

export type CreateCustomerInput = {
  firstName: Scalars['String']
  middleName?: Maybe<Scalars['String']>
  lastName: Scalars['String']
  gender?: Maybe<Gender>
  email?: Maybe<Scalars['String']>
  homepage?: Maybe<Scalars['String']>
  cocNumber?: Maybe<Scalars['String']>
  phone?: Maybe<Scalars['String']>
  mobile?: Maybe<Scalars['String']>
  dateOfBirth?: Maybe<Scalars['DateTime']>
  mailingList?: Maybe<YesNo>
  parentId: Scalars['Int']
  primaryLanguage?: Maybe<Scalars['String']>
  attributes?: Maybe<Array<UserManagementAttributeValueInput>>
}

export type CreatePaymentInput = {
  userId?: Maybe<Scalars['Int']>
  anonymousId?: Maybe<Scalars['Int']>
  paymentId?: Maybe<Scalars['String']>
  orderId: Scalars['Int']
  amount: Scalars['Int']
  currency: Scalars['String']
  method: Scalars['String']
  status: PaymentStatuses
  addTransaction?: Maybe<CreateTransactionInput>
}

export type CreateSparePartInput = {
  name?: Maybe<Array<LocalizedStringInput>>
  quantity: Scalars['Int']
  sku: Scalars['String']
}

export type CreateSparePartsMachineInput = {
  externalReference: ExternalReferenceInput
  name: Array<LocalizedStringInput>
  description?: Maybe<Array<LocalizedStringInput>>
  machines?: Maybe<Array<CreateSparePartsMachineInput>>
  parts?: Maybe<Array<CreateSparePartInput>>
}

export type CreateTaxInput = {
  shopId?: Maybe<Scalars['Int']>
  code?: Maybe<Scalars['String']>
  zone?: Scalars['String']
  ratio?: Maybe<Scalars['Float']>
  exportCode?: Maybe<Scalars['String']>
}

export type CreateTransactionInput = {
  transactionId: Scalars['String']
  paymentId?: Maybe<Scalars['String']>
  amount: Scalars['Int']
  currency: Scalars['String']
  description?: Maybe<Scalars['String']>
  timestamp?: Maybe<Scalars['DateTime']>
  type: TransactionTypes
  provider?: Maybe<Scalars['String']>
  status: TransactionStatuses
}

export type CreateUsergroupInput = {
  name: Scalars['String']
  parentId: Scalars['Int']
}

export type CreateUserInput = {
  firstName: Scalars['String']
  middleName?: Maybe<Scalars['String']>
  lastName: Scalars['String']
  gender?: Maybe<Gender>
  company?: Maybe<Scalars['String']>
  email: Scalars['String']
  homepage?: Maybe<Scalars['String']>
  cocNumber?: Maybe<Scalars['String']>
  taxNumber?: Maybe<Scalars['String']>
  phone?: Maybe<Scalars['String']>
  mobile?: Maybe<Scalars['String']>
  dateOfBirth?: Maybe<Scalars['DateTime']>
  mailingList?: Maybe<YesNo>
  parentId: Scalars['Int']
  primaryLanguage?: Maybe<Scalars['String']>
}

export type CreateWarehouseAddressInput = {
  firstName?: Maybe<Scalars['String']>
  middleName?: Maybe<Scalars['String']>
  lastName?: Maybe<Scalars['String']>
  gender?: Maybe<Gender>
  company?: Maybe<Scalars['String']>
  street: Scalars['String']
  number?: Maybe<Scalars['String']>
  numberExtension?: Maybe<Scalars['String']>
  postalCode: Scalars['String']
  city: Scalars['String']
  region?: Maybe<Scalars['String']>
  country: Scalars['String']
  phone?: Maybe<Scalars['String']>
  mobile?: Maybe<Scalars['String']>
  email?: Maybe<Scalars['String']>
  code?: Maybe<Scalars['String']>
  notes?: Maybe<Scalars['String']>
}

export type CreateWarehouseInput = {
  name: Scalars['String']
  description: Scalars['String']
  notes: Scalars['String']
  isActive: Scalars['Boolean']
  isStore: Scalars['Boolean']
  isPickupLocation: Scalars['Boolean']
  shopId?: Maybe<Scalars['Int']>
  businessHours: Array<BusinessHoursInput>
  createWarehouseAddress?: Maybe<CreateWarehouseAddressInput>
}

export type CropInput = {
  width?: Maybe<Scalars['Int']>
  height?: Maybe<Scalars['Int']>
  widthRatio?: Maybe<Scalars['Int']>
  heightRatio?: Maybe<Scalars['Int']>
  x?: Maybe<Scalars['Int']>
  y?: Maybe<Scalars['Int']>
  offsetX?: Maybe<Scalars['Int']>
  offsetY?: Maybe<Scalars['Int']>
  smart?: Maybe<Scalars['String']>
  safe?: Maybe<Scalars['String']>
}

export type Crossupsell = {
  __typename?: 'Crossupsell'
  productId?: Maybe<Scalars['Int']>
  clusterId?: Maybe<Scalars['Int']>
  type: CrossupsellTypes
  subtype: Scalars['String']

  /** @deprecated Deprecated in favor of item */
  product?: Maybe<Product>
  item?: Maybe<IBaseProduct>
}

export type CrossupsellInput = {
  types?: Maybe<Array<CrossupsellTypes>>
  subTypes?: Maybe<Array<Scalars['String']>>
  productId?: Maybe<Scalars['Int']>
  clusterId?: Maybe<Scalars['Int']>
}

export enum CrossupsellTypes {
  Accessories = 'ACCESSORIES',
  Alternatives = 'ALTERNATIVES',
  Options = 'OPTIONS',
  Parts = 'PARTS',
  Related = 'RELATED'
}

export type CrossupsellTypesInput = {
  types?: Maybe<Array<CrossupsellTypes>>
  subTypes?: Maybe<Array<Scalars['String']>>
}

export type Customer = IBaseUser & {
  __typename?: 'Customer'
  id: Scalars['Int']
  customerId: Scalars['Int']
  addresses: Array<Address>

  /**
   * @deprecated Deprecated is favour of attributeValues.
   *       Added pagination to ther query the default offset will be 12 values.
   *       Increasing the offset in a listed view will impact the performance of the api.
   *
   */
  attributes: Array<Attribute>
  attributeValues: AttributeValueResponse
  debtorId?: Maybe<Scalars['String']>
  gender?: Maybe<Gender>
  firstName: Scalars['String']
  middleName?: Maybe<Scalars['String']>
  lastName: Scalars['String']
  cocNumber?: Maybe<Scalars['String']>
  phone?: Maybe<Scalars['String']>
  mobile?: Maybe<Scalars['String']>
  email: Scalars['String']
  iban?: Maybe<Scalars['String']>
  bankAccount?: Maybe<Scalars['String']>
  bic?: Maybe<Scalars['String']>
  notes?: Maybe<Scalars['String']>
  primaryLanguage?: Maybe<Scalars['String']>
  expires?: Maybe<Scalars['DateTime']>
  dateOfBirth?: Maybe<Scalars['DateTime']>
  mailingList?: Maybe<YesNo>
  isLoggedIn?: Maybe<Scalars['Boolean']>
  parentUsergroupId: Scalars['Int']
  usergroup?: Maybe<Usergroup>
}

export type CustomerAddressesArgs = {
  type?: Maybe<AddressType>
  isDefault?: Maybe<YesNo>
}

export type CustomerAttributesArgs = {
  filter?: Maybe<AttributeFilterInput>
}

export type CustomerAttributeValuesArgs = {
  filter?: Maybe<AttributeFilterInput>
}

export type CustomerAddressCreateInput = {
  firstName?: Maybe<Scalars['String']>
  middleName?: Maybe<Scalars['String']>
  lastName?: Maybe<Scalars['String']>
  gender?: Maybe<Gender>
  company?: Maybe<Scalars['String']>
  street: Scalars['String']
  number?: Maybe<Scalars['String']>
  numberExtension?: Maybe<Scalars['String']>
  postalCode: Scalars['String']
  city: Scalars['String']
  region?: Maybe<Scalars['String']>
  country: Scalars['String']
  phone?: Maybe<Scalars['String']>
  mobile?: Maybe<Scalars['String']>
  email?: Maybe<Scalars['String']>
  code?: Maybe<Scalars['String']>
  notes?: Maybe<Scalars['String']>
  isDefault?: Maybe<YesNo>
  customerId: Scalars['Int']
  type: AddressType
}

export type CustomerAddressDeleteInput = {
  id: Scalars['Int']
  customerId: Scalars['Int']
}

export type CustomerAddressUpdateInput = {
  firstName?: Maybe<Scalars['String']>
  middleName?: Maybe<Scalars['String']>
  lastName?: Maybe<Scalars['String']>
  gender?: Maybe<Gender>
  company?: Maybe<Scalars['String']>
  street?: Maybe<Scalars['String']>
  number?: Maybe<Scalars['String']>
  numberExtension?: Maybe<Scalars['String']>
  postalCode?: Maybe<Scalars['String']>
  city?: Maybe<Scalars['String']>
  region?: Maybe<Scalars['String']>
  country?: Maybe<Scalars['String']>
  phone?: Maybe<Scalars['String']>
  mobile?: Maybe<Scalars['String']>
  email?: Maybe<Scalars['String']>
  code?: Maybe<Scalars['String']>
  notes?: Maybe<Scalars['String']>
  isDefault?: Maybe<YesNo>
  customerId: Scalars['Int']
  id: Scalars['Int']
}

export type CustomerSearchArguments = {
  firstName?: Maybe<Scalars['String']>
  middleName?: Maybe<Scalars['String']>
  lastName?: Maybe<Scalars['String']>
  email?: Maybe<Scalars['String']>
  gender?: Maybe<Gender>
  attribute?: Maybe<UserManagementAttributeSearchInput>
  page?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  sort?: Maybe<Array<CustomerSortInput>>
}

export enum CustomerSortableFields {
  Name = 'name'
}

export type CustomerSortInput = {
  field: CustomerSortableFields
  order?: Maybe<SortOrder>
}

export type CustomersResponse = {
  __typename?: 'CustomersResponse'
  items: Array<Customer>
  itemsFound: Scalars['Int']
  offset: Scalars['Int']
  page: Scalars['Int']
  pages: Scalars['Int']
  start: Scalars['Int']
  end: Scalars['Int']
}

export type DeleteMediaDocumentResponse = {
  __typename?: 'DeleteMediaDocumentResponse'
  mediaId: Scalars['String']
}

export type DeleteMediaImageResponse = {
  __typename?: 'DeleteMediaImageResponse'
  mediaId: Scalars['String']
}

export type DeleteMediaVideoResponse = {
  __typename?: 'DeleteMediaVideoResponse'
  mediaId: Scalars['String']
}

export type DeleteWarehouseAddressInput = {
  id: Scalars['Int']
}

export type Discount = {
  __typename?: 'Discount'
  discountId: Scalars['String']
  formula: Scalars['String']
  type: Scalars['String']
  quantity: Scalars['Int']
  value?: Maybe<Scalars['Float']>
  validFrom?: Maybe<Scalars['DateTime']>
  validTo?: Maybe<Scalars['DateTime']>
  hops?: Maybe<Scalars['Float']>
}

export enum DiscountType {
  Amount = 'amount',
  Percentage = 'percentage'
}

export type EmailEventInput = {
  type: EmailEventType
  siteId?: Maybe<Scalars['Int']>
  orderId?: Maybe<Scalars['Int']>
  userId?: Maybe<Scalars['Int']>
  letterId?: Maybe<Scalars['Int']>
  subject?: Maybe<Scalars['String']>
  content?: Maybe<Scalars['String']>
  from?: Maybe<EmailSendContactInput>
  to?: Maybe<Array<EmailSendContactInput>>
  attachments?: Maybe<Array<Base64FileInput>>
  variables?: Maybe<Scalars['JSONObject']>
  language?: Maybe<Scalars['String']>
}

export enum EmailEventType {
  Orderconfirm = 'orderconfirm',
  Quotation = 'quotation',
  Registration = 'registration',
  Campaign = 'campaign',
  Transactional = 'transactional',
  Custom = 'custom',
  System = 'system',
  Error = 'error'
}

export type EmailSendContactInput = {
  email: Scalars['String']
  name?: Maybe<Scalars['String']>
}

export type EmailSendEventInput = {
  subject: Scalars['String']
  content: Scalars['String']
  from: EmailSendContactInput
  to: Array<EmailSendContactInput>
  cc?: Maybe<Array<EmailSendContactInput>>
  bcc?: Maybe<Array<EmailSendContactInput>>
  attachments?: Maybe<Array<Base64FileInput>>
  campaignId?: Maybe<Scalars['String']>
  messageId?: Maybe<Scalars['String']>
  utmTags?: Maybe<Scalars['String']>
  variables?: Maybe<Scalars['JSONObject']>
}

export type ExchangeRefreshTokenInput = {
  refreshToken: Scalars['String']
}

export type ExternalAddress = {
  __typename?: 'ExternalAddress'
  id: Scalars['Int']
  firstName?: Maybe<Scalars['String']>
  middleName?: Maybe<Scalars['String']>
  lastName?: Maybe<Scalars['String']>
  gender?: Maybe<Gender>
  company?: Maybe<Scalars['String']>
  street: Scalars['String']
  number?: Maybe<Scalars['String']>
  numberExtension?: Maybe<Scalars['String']>
  postalCode: Scalars['String']
  city: Scalars['String']
  region?: Maybe<Scalars['String']>
  country: Scalars['String']
  phone?: Maybe<Scalars['String']>
  mobile?: Maybe<Scalars['String']>
  email?: Maybe<Scalars['String']>
  fax?: Maybe<Scalars['String']>
  code?: Maybe<Scalars['String']>
  notes?: Maybe<Scalars['String']>
  icp?: Maybe<YesNo>
  url?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
}

export type ExternalAddressCreateInput = {
  firstName?: Maybe<Scalars['String']>
  middleName?: Maybe<Scalars['String']>
  lastName?: Maybe<Scalars['String']>
  gender?: Maybe<Gender>
  company?: Maybe<Scalars['String']>
  street: Scalars['String']
  number?: Maybe<Scalars['String']>
  numberExtension?: Maybe<Scalars['String']>
  postalCode: Scalars['String']
  city: Scalars['String']
  region?: Maybe<Scalars['String']>
  country: Scalars['String']
  phone?: Maybe<Scalars['String']>
  mobile?: Maybe<Scalars['String']>
  email?: Maybe<Scalars['String']>
  code?: Maybe<Scalars['String']>
  notes?: Maybe<Scalars['String']>
}

export type ExternalAddressDeleteInput = {
  id: Scalars['Int']
}

export type ExternalAddressUpdateInput = {
  firstName?: Maybe<Scalars['String']>
  middleName?: Maybe<Scalars['String']>
  lastName?: Maybe<Scalars['String']>
  gender?: Maybe<Gender>
  company?: Maybe<Scalars['String']>
  street?: Maybe<Scalars['String']>
  number?: Maybe<Scalars['String']>
  numberExtension?: Maybe<Scalars['String']>
  postalCode?: Maybe<Scalars['String']>
  city?: Maybe<Scalars['String']>
  region?: Maybe<Scalars['String']>
  country?: Maybe<Scalars['String']>
  phone?: Maybe<Scalars['String']>
  mobile?: Maybe<Scalars['String']>
  email?: Maybe<Scalars['String']>
  code?: Maybe<Scalars['String']>
  notes?: Maybe<Scalars['String']>
  id: Scalars['Int']
}

export type ExternalReferenceInput = {
  source: Scalars['String']
  sourceId: Scalars['String']
}

export enum FeaturesEnableDisable {
  Upscale = 'UPSCALE'
}

export type FilterAvailableAttributeInput = {
  isPublic?: Maybe<Scalars['Boolean']>
  isSearchable?: Maybe<Scalars['Boolean']>
  id?: Maybe<Array<Scalars['String']>>
  searchId?: Maybe<Array<Scalars['String']>>
  type?: Maybe<Array<AttributeType>>
}

export type Firebase = {
  __typename?: 'Firebase'
  identities?: Maybe<Scalars['JSONObject']>
  sign_in_provider: Scalars['String']
  sign_in_second_factor?: Maybe<Scalars['String']>
  second_factor_identifier?: Maybe<Scalars['String']>
  tenant?: Maybe<Scalars['String']>
}

export enum Fit {
  Bounds = 'BOUNDS',
  Cover = 'COVER',
  Crop = 'CROP'
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
  Mp4 = 'MP4'
}

export type GcipMetadata = {
  __typename?: 'GCIPMetadata'
  lastSignInTime?: Maybe<Scalars['String']>
  creationTime?: Maybe<Scalars['String']>
  lastRefreshTime?: Maybe<Scalars['String']>
}

export type GcipProviderData = {
  __typename?: 'GCIPProviderData'
  uid?: Maybe<Scalars['String']>
  providerId?: Maybe<Scalars['String']>
  displayName?: Maybe<Scalars['String']>
  photoUrl?: Maybe<Scalars['String']>
  federatedId?: Maybe<Scalars['String']>
  email?: Maybe<Scalars['String']>
  rawId?: Maybe<Scalars['String']>
  screenName?: Maybe<Scalars['String']>
  phoneNumber?: Maybe<Scalars['String']>
}

export type GcipUser = {
  __typename?: 'GCIPUser'
  uid: Scalars['String']
  email?: Maybe<Scalars['String']>
  emailVerified?: Maybe<Scalars['Boolean']>
  displayName?: Maybe<Scalars['String']>
  photoUrl?: Maybe<Scalars['String']>
  phoneNumber?: Maybe<Scalars['String']>
  disabled?: Maybe<Scalars['Boolean']>
  isAnonymous?: Maybe<Scalars['Boolean']>
  metadata?: Maybe<GcipMetadata>
  tokensValidAfterTime?: Maybe<Scalars['String']>
  tenantId?: Maybe<Scalars['String']>
  providerData: Array<GcipProviderData>
  passwordHash?: Maybe<Scalars['String']>
  passwordSalt?: Maybe<Scalars['String']>
  authDomain?: Maybe<Scalars['String']>
  lastLoginAt?: Maybe<Scalars['DateTime']>
  createdAt?: Maybe<Scalars['DateTime']>
  accessToken: Scalars['String']
  refreshToken: Scalars['String']
  expirationTime: Scalars['DateTime']
}

export enum Gender {
  M = 'M',
  F = 'F',
  U = 'U'
}

export type IAttributeDecimalRangeFilter = {
  min: Scalars['Float']
  max: Scalars['Float']
}

export type IAttributeFilter = {
  id: Scalars['String']
  searchId: Scalars['String']
  description: Scalars['String']
  type: AttributeType
  isSearchable: Scalars['Boolean']
  isPublic: Scalars['Boolean']
  isHidden?: Maybe<Scalars['Boolean']>
  textFilter?: Maybe<Array<AttributeTextFilter>>
  integerRangeFilter?: Maybe<AttributeIntegerRangeFilter>
  decimalRangeFilter?: Maybe<AttributeDecimalRangeFilter>
}

export type IAttributeIntegerRangeFilter = {
  min: Scalars['Int']
  max: Scalars['Int']
}

export type IAttributeTextFilter = {
  value: Scalars['String']
  count: Scalars['Int']
  countTotal?: Maybe<Scalars['Int']>
  countActive?: Maybe<Scalars['Int']>
  isSelected: Scalars['Boolean']
}

export type IBaseProduct = {
  id: Scalars['Int']
  language?: Maybe<Scalars['String']>
  class: Scalars['String']

  /** @deprecated Deprecated in favor of productId and clusterId */
  classId: Scalars['Int']
  isHidden: YesNo
  name: Array<LocalizedString>
  description: Array<LocalizedString>
  shortDescription: Array<LocalizedString>
  slug: Array<LocalizedString>
  sku: Scalars['String']
  categoryId: Scalars['Int']

  /** @deprecated Path is no longer supported */
  path?: Maybe<Scalars['String']>
  defaultLanguage: Scalars['String']
}

export type IBaseProductNameArgs = {
  language?: Maybe<Scalars['String']>
}

export type IBaseProductDescriptionArgs = {
  language?: Maybe<Scalars['String']>
}

export type IBaseProductShortDescriptionArgs = {
  language?: Maybe<Scalars['String']>
}

export type IBaseProductSlugArgs = {
  language?: Maybe<Scalars['String']>
}

export type IBaseUser = {
  id: Scalars['Int']
  debtorId?: Maybe<Scalars['String']>
  gender?: Maybe<Gender>
  firstName: Scalars['String']
  middleName?: Maybe<Scalars['String']>
  lastName: Scalars['String']
  cocNumber?: Maybe<Scalars['String']>
  phone?: Maybe<Scalars['String']>
  mobile?: Maybe<Scalars['String']>
  email: Scalars['String']
  iban?: Maybe<Scalars['String']>
  bankAccount?: Maybe<Scalars['String']>
  bic?: Maybe<Scalars['String']>
  notes?: Maybe<Scalars['String']>
  primaryLanguage?: Maybe<Scalars['String']>
  expires?: Maybe<Scalars['DateTime']>
  dateOfBirth?: Maybe<Scalars['DateTime']>
  mailingList?: Maybe<YesNo>
  isLoggedIn?: Maybe<Scalars['Boolean']>
}

export type IBundle = {
  id: Scalars['Float']

  /** @deprecated The comboId is deprecated and will be removed in the future. Please use the id field instead. */
  comboId?: Maybe<Scalars['Float']>
  name: Scalars['String']
  description?: Maybe<Scalars['String']>
  discount?: Maybe<Scalars['Float']>
  condition?: Maybe<BundleCondition>
  price?: Maybe<BundlePrice>
  items?: Maybe<Array<BundleItem>>
}

export type IBundleItem = {
  productId: Scalars['Int']
  price?: Maybe<BundlePrice>
  isLeader: YesNo
}

export type IBundlePrice = {
  net?: Maybe<Scalars['Float']>
  gross?: Maybe<Scalars['Float']>
  originalNet?: Maybe<Scalars['Float']>
  originalGross?: Maybe<Scalars['Float']>
}

export type ICart = {
  cartId: Scalars['String']
  userId: Scalars['Int']
  channelId?: Maybe<Scalars['Int']>
  carrier: Scalars['String']
  notes?: Maybe<Scalars['String']>
  reference?: Maybe<Scalars['String']>
  extra3?: Maybe<Scalars['String']>
  extra4?: Maybe<Scalars['String']>
  orderStatus?: Maybe<Scalars['String']>
  actionCode?: Maybe<Scalars['String']>
  couponCode?: Maybe<Scalars['String']>
  vouchers?: Maybe<Array<CartVoucher>>
  paymentData?: Maybe<CartPaymentData>
  postageData?: Maybe<CartPostageData>
  total?: Maybe<CartTotal>
  items?: Maybe<Array<CartMainItem>>
  bonusItems?: Maybe<Array<CartBaseItem>>
  invoiceAddress: CartAddress
  deliveryAddress: CartAddress
  taxLevels?: Maybe<Array<CartTaxLevel>>
  payMethods?: Maybe<Array<CartPaymethod>>
  carriers?: Maybe<Array<CartCarrier>>
  dateCreated?: Maybe<Scalars['DateTime']>
  dateChanged?: Maybe<Scalars['DateTime']>
  incentives?: Maybe<Array<CartIncentive>>
  valuePoints?: Maybe<Scalars['Int']>
  user: IBaseUser
}

export type ICartBaseItem = {
  id: Scalars['Int']
  notes: Scalars['String']
  price: Scalars['Float']
  priceNet: Scalars['Float']
  totalPrice: Scalars['Float']
  totalPriceNet: Scalars['Float']
  sum: Scalars['Float']
  sumNet: Scalars['Float']
  totalSum: Scalars['Float']
  totalSumNet: Scalars['Float']
  quantity: Scalars['Int']
  bundleId?: Maybe<Scalars['Int']>
  productId?: Maybe<Scalars['Int']>
  taxCode: Taxcode
  expectedDeliveryDate?: Maybe<Scalars['DateTime']>
  deliveryDeadline?: Maybe<Scalars['DateTime']>
  discount: Scalars['Float']
  discountPercentage: Scalars['Float']
  product?: Maybe<Product>
}

export type ICluster = {
  id: Scalars['Int']
  language?: Maybe<Scalars['String']>
  class: Scalars['String']

  /** @deprecated Deprecated in favor of productId and clusterId */
  classId: Scalars['Int']
  isHidden: YesNo
  name: Array<LocalizedString>
  description: Array<LocalizedString>
  shortDescription: Array<LocalizedString>
  slug: Array<LocalizedString>
  sku: Scalars['String']
  categoryId: Scalars['Int']

  /** @deprecated Path is no longer supported */
  path?: Maybe<Scalars['String']>
  defaultLanguage: Scalars['String']
  clusterId: Scalars['Int']
  products?: Maybe<Array<Product>>
  options?: Maybe<Array<ClusterOption>>
  drillDown?: Maybe<Array<ClusterDrillDown>>
  defaultProduct?: Maybe<Product>
}

export type IClusterNameArgs = {
  language?: Maybe<Scalars['String']>
}

export type IClusterDescriptionArgs = {
  language?: Maybe<Scalars['String']>
}

export type IClusterShortDescriptionArgs = {
  language?: Maybe<Scalars['String']>
}

export type IClusterSlugArgs = {
  language?: Maybe<Scalars['String']>
}

export type IClusterDrillDown = {
  attributeId: Scalars['String']
  priority: Scalars['Int']
  displayType: ClusterDrillDownDisplayTypes
}

export type IClusterOption = {
  id: Scalars['Int']
  clusterOptionId: Scalars['Int']
  isRequired: Scalars['Boolean']
  isHidden: YesNo
  defaultProduct?: Maybe<Product>
  products: Array<Product>
  name: Array<LocalizedString>
  description: Array<LocalizedString>
  shortDescription: Array<LocalizedString>
}

export type ImageTransformationInput = {
  name: Scalars['String']
  transformation: TransformationInput
}

export type ImageVariant = {
  __typename?: 'ImageVariant'
  name: Scalars['String']
  language: Scalars['String']
  url: Scalars['String']
  mimeType: Scalars['String']
}

export type Inventory = {
  __typename?: 'Inventory'
  id: Scalars['ID']
  productId: Scalars['Int']
  quantity: Scalars['Int']
  costPrice: Scalars['Float']
  supplier: Scalars['String']
  supplierCode: Scalars['String']
  sku: Scalars['String']
  dateModified: Scalars['DateTime']
  warehouseId: Scalars['Int']
  location: Scalars['String']
  nextDeliveryDate: Scalars['DateTime']
  notes: Scalars['String']
}

export type InventoryDeleteResponse = {
  __typename?: 'InventoryDeleteResponse'
  messages: Array<Scalars['String']>
}

export type InventoryResponse = {
  __typename?: 'InventoryResponse'
  id: Scalars['ID']
  productId: Scalars['Int']
  quantity: Scalars['Int']
  costPrice: Scalars['Float']
  supplier: Scalars['String']
  supplierCode: Scalars['String']
  sku: Scalars['String']
  dateModified: Scalars['DateTime']
  warehouseId: Scalars['Int']
  location: Scalars['String']
  nextDeliveryDate: Scalars['DateTime']
  notes: Scalars['String']
  messages: Array<Scalars['String']>
  total: Scalars['Int']
  warehouse?: Maybe<Warehouse>
}

export type IProduct = {
  id: Scalars['Int']
  language?: Maybe<Scalars['String']>
  class: Scalars['String']

  /** @deprecated Deprecated in favor of productId and clusterId */
  classId: Scalars['Int']
  isHidden: YesNo
  name: Array<LocalizedString>
  description: Array<LocalizedString>
  shortDescription: Array<LocalizedString>
  slug: Array<LocalizedString>
  sku: Scalars['String']
  categoryId: Scalars['Int']

  /** @deprecated Path is no longer supported */
  path?: Maybe<Scalars['String']>
  defaultLanguage: Scalars['String']
  productId: Scalars['Int']
  shortName: Scalars['String']
  manufacturerCode: Scalars['String']
  eanCode: Scalars['String']
  manufacturer: Scalars['String']
  supplier: Scalars['String']
  supplierCode: Scalars['String']
  tag: Scalars['String']
  taxCode: TaxCode
  status: ProductStatus
  isOrderable: YesNo
  isReturnable: YesNo
  hasBundle: YesNo
  isBundleLeader: YesNo
  package: Scalars['String']
  packageUnit: Scalars['String']
  packageUnitQuantity: Scalars['String']
  originalPrice: Scalars['Float']
  costPrice: Scalars['Float']
  suggestedPrice: Scalars['Float']
  storePrice: Scalars['Float']
  creditPoints: Scalars['Float']
  minimumQuantity: Scalars['Float']
  unit: Scalars['Int']
  purchaseUnit: Scalars['Int']
  purchaseMinimumQuantity: Scalars['Int']
  econommicOrderQuantity: Scalars['Int']
  orderableFrom?: Maybe<Scalars['DateTime']>
  orderableTo?: Maybe<Scalars['DateTime']>
  releaseDate?: Maybe<Scalars['DateTime']>
  dateCreated: Scalars['DateTime']
  dateChanged: Scalars['DateTime']
  offers?: Maybe<Array<ProductOffer>>
  containerClass: Scalars['String']
}

export type IProductNameArgs = {
  language?: Maybe<Scalars['String']>
}

export type IProductDescriptionArgs = {
  language?: Maybe<Scalars['String']>
}

export type IProductShortDescriptionArgs = {
  language?: Maybe<Scalars['String']>
}

export type IProductSlugArgs = {
  language?: Maybe<Scalars['String']>
}

export type IProductOffer = {
  id: Scalars['String']
  price: Scalars['Float']
  validFrom: Scalars['DateTime']
  validTo: Scalars['DateTime']
  formula: Scalars['String']
}

export type IResource = {
  id: Scalars['Int']
  language?: Maybe<Scalars['String']>
  class: Scalars['String']

  /** @deprecated Deprecated in favor of productId and clusterId */
  classId: Scalars['Int']
  isHidden: YesNo
}

export type ITenderBaseItem = {
  id: Scalars['Int']
  orderItemId?: Maybe<Scalars['Int']>
  name: Scalars['String']
  productId: Scalars['Int']
  sku: Scalars['String']
  quantity: Scalars['Int']
  supplier: Scalars['String']
  supplierCode: Scalars['String']
  price: Scalars['Float']
  priceNet: Scalars['Float']
  totalPrice: Scalars['Float']
  totalPriceNet: Scalars['Float']
  taxCode: Taxcode
  taxPercentage: Scalars['Int']
  customerDiscountPercentage: Scalars['Float']
  discountPercentage: Scalars['Float']
  totalDiscountPercentage: Scalars['Float']
  marginAmount: Scalars['Float']
  marginPercentage: Scalars['Float']
  saleMarginAmount: Scalars['Float']
  saleMarginPercentage: Scalars['Float']
  attributedSaleDiscount: Scalars['Float']
  attributedSaleMargin: Scalars['Float']
  originalPrice: Scalars['Float']
  costPrice: Scalars['Float']
  customerPrice: Scalars['Float']
  valuePoints?: Maybe<Scalars['Int']>
  expectedDeliveryDate?: Maybe<Scalars['DateTime']>
  externalOrderitemId?: Maybe<Scalars['String']>
  notes: Scalars['String']
  type: TenderOrderItemType
}

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
  Level_6_2 = 'LEVEL_6_2'
}

export type LocalizedDocument = {
  __typename?: 'LocalizedDocument'
  language: Scalars['String']
  originalUrl: Scalars['String']
  mimeType: Scalars['String']
}

export type LocalizedImage = {
  __typename?: 'LocalizedImage'
  language: Scalars['String']
  originalUrl: Scalars['String']
  mimeType: Scalars['String']
}

export type LocalizedString = {
  __typename?: 'LocalizedString'
  language: Scalars['String']
  value?: Maybe<Scalars['String']>
}

export type LocalizedStringArray = {
  __typename?: 'LocalizedStringArray'
  language: Scalars['String']
  values?: Maybe<Array<Scalars['String']>>
}

export type LocalizedStringArrayInput = {
  language: Scalars['String']
  values?: Maybe<Array<Scalars['String']>>
}

export type LocalizedStringInput = {
  language: Scalars['String']
  value?: Maybe<Scalars['String']>
}

export type LocalizedVideo = {
  __typename?: 'LocalizedVideo'
  language: Scalars['String']
  uri: Scalars['String']
  mimeType: Scalars['String']
}

export type Login = {
  __typename?: 'Login'
  providerId?: Maybe<Scalars['String']>
  operationType?: Maybe<Scalars['String']>
  session?: Maybe<GcipUser>
}

export type LoginInput = {
  email: Scalars['String']
  password: Scalars['String']
  provider?: Maybe<Scalars['String']>
}

export type Logout = {
  __typename?: 'Logout'
  todo: Scalars['String']
}

export type Media = {
  __typename?: 'Media'
  image?: Maybe<MediaImage>
  images?: Maybe<PaginatedMediaImageResponse>
  video?: Maybe<MediaVideo>
  videos?: Maybe<PaginatedMediaVideoResponse>
  document?: Maybe<MediaDocument>
  documents?: Maybe<PaginatedMediaDocumentResponse>
}

export type MediaImageArgs = {
  mediaId: Scalars['String']
}

export type MediaImagesArgs = {
  search?: Maybe<MediaImageSearchInput>
}

export type MediaVideoArgs = {
  mediaId: Scalars['String']
}

export type MediaVideosArgs = {
  search?: Maybe<MediaVideoSearchInput>
}

export type MediaDocumentArgs = {
  mediaId: Scalars['String']
}

export type MediaDocumentsArgs = {
  search?: Maybe<MediaDocumentSearchInput>
}

export type MediaBase64FileInput = {
  base64: Scalars['String']
  fileName: Scalars['String']
}

export type MediaDocument = {
  __typename?: 'MediaDocument'
  id: Scalars['ID']
  productId?: Maybe<Scalars['ID']>
  clusterId?: Maybe<Scalars['ID']>
  categoryId?: Maybe<Scalars['ID']>
  sparePartsMachineId?: Maybe<Scalars['ID']>
  alt: Array<LocalizedString>
  description: Array<LocalizedString>
  tags: Array<LocalizedStringArray>
  type?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['DateTime']>
  lastModifiedAt?: Maybe<Scalars['DateTime']>
  priority?: Maybe<Scalars['Int']>
  documents?: Maybe<Array<LocalizedDocument>>
}

export type MediaDocumentAltArgs = {
  language?: Maybe<Scalars['String']>
}

export type MediaDocumentDescriptionArgs = {
  language?: Maybe<Scalars['String']>
}

export type MediaDocumentTagsArgs = {
  language?: Maybe<Scalars['String']>
}

export type MediaDocumentInput = {
  productId?: Maybe<Scalars['ID']>
  clusterId?: Maybe<Scalars['ID']>
  categoryId?: Maybe<Scalars['ID']>
  sparePartsMachineId?: Maybe<Scalars['ID']>
  alt: Array<MediaLocalizedStringInput>
  description: Array<MediaLocalizedStringInput>
  tags: Array<MediaLocalizedStringArrayInput>
  priority?: Maybe<Scalars['Int']>
  uploadDocuments: Array<UploadFileInput>
}

export type MediaDocumentProductSearchInput = {
  description?: Maybe<MediaLocalizedStringInput>
  tag?: Maybe<MediaLocalizedStringInput>
  sort?: Maybe<Sort>
  page?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
}

export type MediaDocumentSearchInput = {
  productId?: Maybe<Scalars['Int']>
  categoryId?: Maybe<Scalars['Int']>
  clusterId?: Maybe<Scalars['Int']>
  sparePartsMachineId?: Maybe<Scalars['String']>
  description?: Maybe<MediaLocalizedStringInput>
  tag?: Maybe<MediaLocalizedStringInput>
  sort?: Maybe<Sort>
  page?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
}

export type MediaImage = {
  __typename?: 'MediaImage'
  id: Scalars['ID']
  productId?: Maybe<Scalars['ID']>
  clusterId?: Maybe<Scalars['ID']>
  categoryId?: Maybe<Scalars['ID']>
  sparePartsMachineId?: Maybe<Scalars['ID']>
  alt: Array<LocalizedString>
  description: Array<LocalizedString>
  tags: Array<LocalizedStringArray>
  type?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['DateTime']>
  lastModifiedAt?: Maybe<Scalars['DateTime']>
  priority?: Maybe<Scalars['Int']>
  images?: Maybe<Array<LocalizedImage>>
  imageVariants?: Maybe<Array<ImageVariant>>
}

export type MediaImageAltArgs = {
  language?: Maybe<Scalars['String']>
}

export type MediaImageDescriptionArgs = {
  language?: Maybe<Scalars['String']>
}

export type MediaImageTagsArgs = {
  language?: Maybe<Scalars['String']>
}

export type MediaImageImageVariantsArgs = {
  input: TransformationsInput
}

export type MediaImageInput = {
  productId?: Maybe<Scalars['ID']>
  clusterId?: Maybe<Scalars['ID']>
  categoryId?: Maybe<Scalars['ID']>
  sparePartsMachineId?: Maybe<Scalars['ID']>
  alt: Array<MediaLocalizedStringInput>
  description: Array<MediaLocalizedStringInput>
  tags: Array<MediaLocalizedStringArrayInput>
  priority?: Maybe<Scalars['Int']>
  uploadImages: Array<UploadFileInput>
}

export type MediaImageProductSearchInput = {
  description?: Maybe<MediaLocalizedStringInput>
  tag?: Maybe<MediaLocalizedStringInput>
  sort?: Maybe<Sort>
  page?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
}

export type MediaImageSearchInput = {
  productId?: Maybe<Scalars['Int']>
  categoryId?: Maybe<Scalars['Int']>
  clusterId?: Maybe<Scalars['Int']>
  sparePartsMachineId?: Maybe<Scalars['String']>
  description?: Maybe<MediaLocalizedStringInput>
  tag?: Maybe<MediaLocalizedStringInput>
  sort?: Maybe<Sort>
  page?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
}

export type MediaLocalizedStringArrayInput = {
  language: Scalars['String']
  values?: Maybe<Array<Scalars['String']>>
}

export type MediaLocalizedStringInput = {
  language: Scalars['String']
  value: Scalars['String']
}

export type MediaVideo = {
  __typename?: 'MediaVideo'
  id: Scalars['ID']
  productId?: Maybe<Scalars['ID']>
  clusterId?: Maybe<Scalars['ID']>
  categoryId?: Maybe<Scalars['ID']>
  sparePartsMachineId?: Maybe<Scalars['ID']>
  alt: Array<LocalizedString>
  description: Array<LocalizedString>
  tags: Array<LocalizedStringArray>
  type?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['DateTime']>
  lastModifiedAt?: Maybe<Scalars['DateTime']>
  priority?: Maybe<Scalars['Int']>
  videos?: Maybe<Array<LocalizedVideo>>
}

export type MediaVideoAltArgs = {
  language?: Maybe<Scalars['String']>
}

export type MediaVideoDescriptionArgs = {
  language?: Maybe<Scalars['String']>
}

export type MediaVideoTagsArgs = {
  language?: Maybe<Scalars['String']>
}

export type MediaVideoInput = {
  productId?: Maybe<Scalars['ID']>
  clusterId?: Maybe<Scalars['ID']>
  categoryId?: Maybe<Scalars['ID']>
  sparePartsMachineId?: Maybe<Scalars['ID']>
  alt: Array<MediaLocalizedStringInput>
  description: Array<MediaLocalizedStringInput>
  tags: Array<MediaLocalizedStringArrayInput>
  priority?: Maybe<Scalars['Int']>
  videos: Array<UploadVideoInput>
}

export type MediaVideoProductSearchInput = {
  description?: Maybe<MediaLocalizedStringInput>
  tag?: Maybe<MediaLocalizedStringInput>
  sort?: Maybe<Sort>
  page?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
}

export type MediaVideoSearchInput = {
  productId?: Maybe<Scalars['Int']>
  categoryId?: Maybe<Scalars['Int']>
  clusterId?: Maybe<Scalars['Int']>
  sparePartsMachineId?: Maybe<Scalars['String']>
  description?: Maybe<MediaLocalizedStringInput>
  tag?: Maybe<MediaLocalizedStringInput>
  sort?: Maybe<Sort>
  page?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
}

export type Mutation = {
  __typename?: 'Mutation'
  userAddressCreate: Address
  customerAddressCreate: Address
  companyAddressCreate: Address
  externalAddressCreate: ExternalAddress
  userAddressUpdate: Address
  customerAddressUpdate: Address
  companyAddressUpdate: Address
  externalAddressUpdate: ExternalAddress
  userAddressDelete: Scalars['Boolean']
  customerAddressDelete: Scalars['Boolean']
  companyAddressDelete: Scalars['Boolean']
  externalAddressDelete: Scalars['Boolean']
  startSession: Login
  login: Login
  logout: Logout
  authenticationCreate: Login
  authenticationDelete: Scalars['Boolean']
  claimsReset: Scalars['Boolean']
  verifyToken: VerifyToken
  exchangeRefreshToken: RefreshTokenResponse
  passwordResetLink: Scalars['String']
  bundleCreate: Bundle
  bundleUpdate: Bundle
  bundleDelete: Scalars['Boolean']
  bundleAddItems: Array<BundleItem>
  bundleRemoveItem: Scalars['Boolean']
  cartStart: Cart
  cartAddItem: CartResponse
  cartAddBundle: CartResponse
  cartUpdateItem: CartResponse
  cartUpdateItems: CartResponse
  cartDeleteItem: CartResponse
  cartSetUser: CartResponse
  cartUpdate: CartResponse
  cartUpdateAddress: CartResponse
  cartAddActionCode: CartResponse
  cartRemoveActionCode: CartResponse
  cartAddVoucherCode: CartResponse
  cartRemoveVoucherCode: CartResponse
  cartProcess: CartProcessResponse
  cartDelete: CartDeleteResponse
  channelInvalidateCache: Scalars['Boolean']
  paymentCreate: Payment
  paymentUpdate: Payment
  paymentDelete: Payment
  publishEmailEvent: PublishEmailEventResponse
  publishEmailSendEvent: PublishEmailEventResponse
  inventoryUpdate: InventoryResponse
  inventoryDelete: InventoryDeleteResponse
  mediaImageCreate: MediaImage
  mediaImageUpdate: MediaImage
  mediaImageDelete: DeleteMediaImageResponse
  mediaVideoCreate: MediaVideo
  mediaVideoUpdate: MediaVideo
  mediaVideoDelete: DeleteMediaVideoResponse
  mediaDocumentCreate: MediaDocument
  mediaDocumentUpdate: MediaDocument
  mediaDocumentDelete: DeleteMediaDocumentResponse
  orderSendConfirmationEmail: SendOrderConfirmResponseType
  orderSetStatus: Order
  permissionsInvalidateCache: Scalars['Boolean']
  discountInvalidateCache: Scalars['Boolean']
  shopInvalidateCache: Scalars['Boolean']
  machineCreate: SparePartsMachine
  machineDelete: Scalars['Boolean']
  taxCreate: Tax
  taxUpdate: Tax
  taxDelete: Tax
  tenderStart: Tender
  tenderUpdateAddress: Tender
  tenderAddItems: TenderResponse
  tenderUpdateItem: Tender
  tenderDeleteItem: Tender
  tenderUpdateInvoiceUser: Tender
  tenderUpdate: Tender
  tenderUpdateDiscount: Tender
  tenderUpdatePostage: Tender
  tenderUpdatePayment: Tender
  tenderApplyIncentives: Tender
  tenderProcess: TenderProcessResponse
  tenderDelete: Scalars['String']
  usergroupCreate: Usergroup
  companyCreate: Company
  contactCreate: Contact
  contactRegister: RegisterContactResponse
  contactUpdate: Contact
  customerCreate: Customer
  customerRegister: RegisterCustomerResponse
  customerUpdate: Customer
  userCreate: IBaseUser
  userRegister: RegisterUserResponse
  userUpdate: IBaseUser
  addCompanyManager: Scalars['String']
  removeCompanyManager: Scalars['String']
  warehouseCreate: Warehouse
  warehouseUpdate: Warehouse
  warehouseDelete: Warehouse
  warehouseAddressCreate: WarehouseAddress
  warehouseAddressUpdate: WarehouseAddress
  warehouseAddressDelete: Scalars['Boolean']
}

export type MutationUserAddressCreateArgs = {
  input: UserAddressCreateInput
}

export type MutationCustomerAddressCreateArgs = {
  input: CustomerAddressCreateInput
}

export type MutationCompanyAddressCreateArgs = {
  input: CompanyAddressCreateInput
}

export type MutationExternalAddressCreateArgs = {
  input: ExternalAddressCreateInput
}

export type MutationUserAddressUpdateArgs = {
  input: UserAddressUpdateInput
}

export type MutationCustomerAddressUpdateArgs = {
  input: CustomerAddressUpdateInput
}

export type MutationCompanyAddressUpdateArgs = {
  input: CompanyAddressUpdateInput
}

export type MutationExternalAddressUpdateArgs = {
  input: ExternalAddressUpdateInput
}

export type MutationUserAddressDeleteArgs = {
  input: UserAddressDeleteInput
}

export type MutationCustomerAddressDeleteArgs = {
  input: CustomerAddressDeleteInput
}

export type MutationCompanyAddressDeleteArgs = {
  input: CompanyAddressDeleteInput
}

export type MutationExternalAddressDeleteArgs = {
  input: ExternalAddressDeleteInput
}

export type MutationStartSessionArgs = {
  siteId?: Maybe<Scalars['Int']>
}

export type MutationLoginArgs = {
  input: LoginInput
}

export type MutationLogoutArgs = {
  siteId?: Maybe<Scalars['Int']>
}

export type MutationAuthenticationCreateArgs = {
  input: CreateAuthenticationInput
}

export type MutationAuthenticationDeleteArgs = {
  uid: Scalars['String']
}

export type MutationClaimsResetArgs = {
  uid: Scalars['String']
  email: Scalars['String']
}

export type MutationVerifyTokenArgs = {
  input: VerifyTokenInput
}

export type MutationExchangeRefreshTokenArgs = {
  input: ExchangeRefreshTokenInput
}

export type MutationPasswordResetLinkArgs = {
  email?: Maybe<Scalars['String']>
  redirectUrl?: Maybe<Scalars['String']>
  input?: Maybe<PasswordRecoveryLinkInput>
}

export type MutationBundleCreateArgs = {
  input: CreateBundleInput
}

export type MutationBundleUpdateArgs = {
  id: Scalars['Int']
  input: UpdateBundleInput
}

export type MutationBundleDeleteArgs = {
  id: Scalars['Int']
}

export type MutationBundleAddItemsArgs = {
  id: Scalars['Int']
  input: BundleAddItemsInput
}

export type MutationBundleRemoveItemArgs = {
  id: Scalars['Int']
  productId: Scalars['Int']
}

export type MutationCartStartArgs = {
  siteId?: Maybe<Scalars['Int']>
  channelId?: Maybe<Scalars['Int']>
  userId?: Maybe<Scalars['Int']>
}

export type MutationCartAddItemArgs = {
  input: CartAddItemInput
}

export type MutationCartAddBundleArgs = {
  input: CartAddBundleInput
}

export type MutationCartUpdateItemArgs = {
  input: CartUpdateItemInput
}

export type MutationCartUpdateItemsArgs = {
  cartId: Scalars['String']
  items: Array<CartUpdateItemsInput>
}

export type MutationCartDeleteItemArgs = {
  input: CartDeleteItemInput
}

export type MutationCartSetUserArgs = {
  input: CartSetUserInput
}

export type MutationCartUpdateArgs = {
  input: CartUpdateInput
}

export type MutationCartUpdateAddressArgs = {
  input: CartUpdateAddressInput
}

export type MutationCartAddActionCodeArgs = {
  cartId: Scalars['String']
  actionCode: Scalars['String']
}

export type MutationCartRemoveActionCodeArgs = {
  cartId: Scalars['String']
  actionCode: Scalars['String']
}

export type MutationCartAddVoucherCodeArgs = {
  cartId: Scalars['String']
  voucherCode: Scalars['String']
}

export type MutationCartRemoveVoucherCodeArgs = {
  cartId: Scalars['String']
  voucherCode: Scalars['String']
}

export type MutationCartProcessArgs = {
  input: CartProcessInput
}

export type MutationCartDeleteArgs = {
  cartId: Scalars['String']
}

export type MutationPaymentCreateArgs = {
  input: CreatePaymentInput
}

export type MutationPaymentUpdateArgs = {
  searchBy: SearchByInput
  input: UpdatePaymentInput
}

export type MutationPaymentDeleteArgs = {
  searchBy: SearchByInput
}

export type MutationPublishEmailEventArgs = {
  input: EmailEventInput
}

export type MutationPublishEmailSendEventArgs = {
  input: EmailSendEventInput
}

export type MutationInventoryUpdateArgs = {
  id: Scalars['Int']
  input: UpdateInventoryInput
}

export type MutationInventoryDeleteArgs = {
  id: Scalars['Int']
}

export type MutationMediaImageCreateArgs = {
  input: MediaImageInput
}

export type MutationMediaImageUpdateArgs = {
  input: UpdateMediaImageInput
}

export type MutationMediaImageDeleteArgs = {
  mediaId: Scalars['String']
}

export type MutationMediaVideoCreateArgs = {
  input: MediaVideoInput
}

export type MutationMediaVideoUpdateArgs = {
  input: UpdateMediaVideoInput
}

export type MutationMediaVideoDeleteArgs = {
  mediaId: Scalars['String']
}

export type MutationMediaDocumentCreateArgs = {
  input: MediaDocumentInput
}

export type MutationMediaDocumentUpdateArgs = {
  input: UpdateMediaDocumentInput
}

export type MutationMediaDocumentDeleteArgs = {
  mediaId: Scalars['String']
}

export type MutationOrderSendConfirmationEmailArgs = {
  orderId: Scalars['Int']
  attachments?: Maybe<Array<Base64FileInput>>
}

export type MutationOrderSetStatusArgs = {
  input: OrderSetStatusInput
}

export type MutationPermissionsInvalidateCacheArgs = {
  userIds: Array<Scalars['Int']>
}

export type MutationDiscountInvalidateCacheArgs = {
  userIds: Array<Scalars['Int']>
}

export type MutationMachineCreateArgs = {
  input: CreateSparePartsMachineInput
}

export type MutationMachineDeleteArgs = {
  id: Scalars['String']
}

export type MutationTaxCreateArgs = {
  input: CreateTaxInput
}

export type MutationTaxUpdateArgs = {
  id: Scalars['ID']
  input: UpdateTaxInput
}

export type MutationTaxDeleteArgs = {
  id: Scalars['ID']
}

export type MutationTenderStartArgs = {
  input: TenderStart
}

export type MutationTenderUpdateAddressArgs = {
  input: TenderUpdateAddressInput
}

export type MutationTenderAddItemsArgs = {
  input: TenderAddItemsInput
}

export type MutationTenderUpdateItemArgs = {
  input: TenderUpdateItemInput
}

export type MutationTenderDeleteItemArgs = {
  input: TenderDeleteItemInput
}

export type MutationTenderUpdateInvoiceUserArgs = {
  tenderid: Scalars['String']
  userId: Scalars['Int']
}

export type MutationTenderUpdateArgs = {
  input: TenderUpdateInput
}

export type MutationTenderUpdateDiscountArgs = {
  input: TenderDiscountInput
}

export type MutationTenderUpdatePostageArgs = {
  input: TenderPostageInput
}

export type MutationTenderUpdatePaymentArgs = {
  input: TenderPaymentInput
}

export type MutationTenderApplyIncentivesArgs = {
  tenderId: Scalars['String']
}

export type MutationTenderProcessArgs = {
  tenderId: Scalars['String']
}

export type MutationTenderDeleteArgs = {
  tenderId: Scalars['String']
}

export type MutationUsergroupCreateArgs = {
  input: CreateUsergroupInput
}

export type MutationCompanyCreateArgs = {
  input: CreateCompanyInput
}

export type MutationContactCreateArgs = {
  input: CreateContactInput
}

export type MutationContactRegisterArgs = {
  input: RegisterContactInput
}

export type MutationContactUpdateArgs = {
  input: UpdateContactInput
}

export type MutationCustomerCreateArgs = {
  input: CreateCustomerInput
}

export type MutationCustomerRegisterArgs = {
  input: RegisterCustomerInput
}

export type MutationCustomerUpdateArgs = {
  input: UpdateCustomerInput
}

export type MutationUserCreateArgs = {
  input: CreateUserInput
}

export type MutationUserRegisterArgs = {
  input: RegisterUserInput
}

export type MutationUserUpdateArgs = {
  input: UpdateUserInput
}

export type MutationAddCompanyManagerArgs = {
  userId: Scalars['Int']
  companyId: Scalars['Int']
}

export type MutationRemoveCompanyManagerArgs = {
  userId: Scalars['Int']
  companyId: Scalars['Int']
}

export type MutationWarehouseCreateArgs = {
  input: CreateWarehouseInput
}

export type MutationWarehouseUpdateArgs = {
  id: Scalars['Float']
  input: UpdateWarehouseInput
}

export type MutationWarehouseDeleteArgs = {
  id: Scalars['Float']
}

export type MutationWarehouseAddressCreateArgs = {
  id: Scalars['Float']
  input: CreateWarehouseAddressInput
}

export type MutationWarehouseAddressUpdateArgs = {
  id: Scalars['Float']
  input: UpdateWarehouseAddressInput
}

export type MutationWarehouseAddressDeleteArgs = {
  id: Scalars['Float']
  input: DeleteWarehouseAddressInput
}

export type ObjectMediaSearchInput = {
  description?: Maybe<MediaLocalizedStringInput>
  tag?: Maybe<MediaLocalizedStringInput>
  sort?: Maybe<Sort>
  page?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
}

export enum Optimize {
  Low = 'LOW',
  Medium = 'MEDIUM',
  High = 'HIGH'
}

export type Order = {
  __typename?: 'Order'
  id: Scalars['Int']
  addresses: Array<Address>
  userId: Scalars['Int']
  accountManagerId: Scalars['Int']

  /** @deprecated Deprecated in favour of postageData.pickUpLocationId */
  pickupStoreId?: Maybe<Scalars['Int']>
  cartId?: Maybe<Scalars['String']>

  /** @deprecated Deprecated in favour of channelId */
  siteId?: Maybe<Scalars['Int']>
  channelId?: Maybe<Scalars['Int']>
  uuid: Scalars['String']
  externalId?: Maybe<Scalars['String']>
  status: Scalars['String']
  type: OrderType
  source: Scalars['String']
  email: Scalars['String']
  emailDate?: Maybe<Scalars['DateTime']>
  remarks: Scalars['String']
  reference: Scalars['String']
  currency: Scalars['String']
  currencyRatio: Scalars['Float']
  language: Scalars['String']
  date: Scalars['DateTime']
  statusDate?: Maybe<Scalars['DateTime']>
  postageData: OrderPostageData
  paymentData: OrderPaymentData
  total: OrderTotals
  items: Array<OrderItem>
  shipments?: Maybe<Array<Shipment>>
}

export type OrderAddressesArgs = {
  type?: Maybe<AddressType>
}

export enum OrderDiscountType {
  N = 'N',
  P = 'P',
  A = 'A'
}

export type OrderItem = {
  __typename?: 'OrderItem'
  id: Scalars['Int']
  orderId: Scalars['Int']
  uuid: Scalars['String']
  class: Scalars['String']
  productId?: Maybe<Scalars['Int']>
  parentOrderItemId?: Maybe<Scalars['Int']>
  sku: Scalars['String']
  quantity: Scalars['Int']
  notes: Scalars['String']
  name: Scalars['String']
  supplier: Scalars['String']
  supplierCode: Scalars['String']
  manufacturer: Scalars['String']
  manufacturerCode: Scalars['String']
  eanCode: Scalars['String']
  price: Scalars['Float']
  priceTotal: Scalars['Float']
  discount: Scalars['Float']
  tax: Scalars['Float']
  taxCode: Taxcode
  taxPercentage: Scalars['Float']
  isBonus: YesNo
  product?: Maybe<Product>
}

export type OrderPaymentData = {
  __typename?: 'OrderPaymentData'
  net: Scalars['Float']
  gross: Scalars['Float']
  tax: Scalars['Float']
  taxPercentage?: Maybe<Scalars['Float']>
  method: Scalars['String']
  status: Scalars['String']
  statusDate?: Maybe<Scalars['DateTime']>
}

export type OrderPostageData = {
  __typename?: 'OrderPostageData'
  method: Scalars['String']
  taxPercentage: Scalars['Float']
  requestDate?: Maybe<Scalars['DateTime']>
  gross: Scalars['Float']
  net: Scalars['Float']
  tax: Scalars['Float']
  partialDeliveryAllowed?: Maybe<YesNo>
  pickUpLocationId?: Maybe<Scalars['Int']>
  warehouse?: Maybe<Warehouse>
}

export type OrderResponse = {
  __typename?: 'OrderResponse'
  items: Array<Order>
  itemsFound: Scalars['Int']
  offset: Scalars['Int']
  page: Scalars['Int']
  pages: Scalars['Int']
  start: Scalars['Int']
  end: Scalars['Int']
}

export type OrderSearchArguments = {
  userId?: Maybe<Array<Scalars['Int']>>
  status?: Maybe<Array<Scalars['String']>>
  type?: Maybe<Array<OrderType>>
  page?: Scalars['Int']
  offset?: Scalars['Int']
}

export type OrderSetStatusInput = {
  orderId: Scalars['Int']
  status?: Maybe<Scalars['String']>
  payStatus?: Maybe<Scalars['String']>
  sendOrderConfirmationEmail?: Maybe<Scalars['Boolean']>
  addPDFAttachment?: Maybe<Scalars['Boolean']>
  deleteCart?: Maybe<Scalars['Boolean']>
}

export type OrderTotals = {
  __typename?: 'OrderTotals'
  gross: Scalars['Float']
  net: Scalars['Float']
  tax: Scalars['Float']
  discountType: OrderDiscountType

  /** @deprecated discountPercentage will be removed. Use discountValue i.c.w. discountType instead. This field will remain null */
  discountPercentage?: Maybe<Scalars['Float']>
  discountValue: Scalars['Float']
  taxPercentages: Array<OrderTotalTaxPercentage>
}

export type OrderTotalTaxPercentage = {
  __typename?: 'OrderTotalTaxPercentage'
  percentage: Scalars['Int']
  total: Scalars['Float']
}

export enum OrderType {
  Dropshipment = 'dropshipment',
  Purchase = 'purchase',
  Quotation = 'quotation'
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
  Eight = 'EIGHT'
}

export type PadInput = {
  top?: Maybe<Scalars['Int']>
  right?: Maybe<Scalars['Int']>
  bottom?: Maybe<Scalars['Int']>
  left?: Maybe<Scalars['Int']>
}

export type PaginatedMediaDocumentResponse = {
  __typename?: 'PaginatedMediaDocumentResponse'
  items: Array<MediaDocument>
  itemsFound: Scalars['Int']
  offset: Scalars['Int']
  page: Scalars['Int']
  pages: Scalars['Int']
  start: Scalars['Int']
  end: Scalars['Int']
}

export type PaginatedMediaImageResponse = {
  __typename?: 'PaginatedMediaImageResponse'
  items: Array<MediaImage>
  itemsFound: Scalars['Int']
  offset: Scalars['Int']
  page: Scalars['Int']
  pages: Scalars['Int']
  start: Scalars['Int']
  end: Scalars['Int']
}

export type PaginatedMediaVideoResponse = {
  __typename?: 'PaginatedMediaVideoResponse'
  items: Array<MediaVideo>
  itemsFound: Scalars['Int']
  offset: Scalars['Int']
  page: Scalars['Int']
  pages: Scalars['Int']
  start: Scalars['Int']
  end: Scalars['Int']
}

export type PasswordRecoveryLinkInput = {
  email: Scalars['String']
  redirectUrl: Scalars['String']
  language?: Maybe<Scalars['String']>
}

export type Payment = {
  __typename?: 'Payment'
  id: Scalars['ID']
  userId?: Maybe<Scalars['Int']>
  anonymousId?: Maybe<Scalars['Int']>
  paymentId?: Maybe<Scalars['String']>
  orderId: Scalars['Int']
  amount: Scalars['Int']
  currency: Scalars['String']
  method: Scalars['String']
  status: PaymentStatuses
  transactions?: Maybe<Array<Transaction>>
  createdAt: Scalars['DateTime']
  createdBy?: Maybe<Scalars['String']>
  lastModifiedAt: Scalars['DateTime']
  lastModifiedBy?: Maybe<Scalars['String']>
}

export type PaymentsResponse = {
  __typename?: 'PaymentsResponse'
  items: Array<Payment>
  itemsFound: Scalars['Int']
  offset: Scalars['Int']
  page: Scalars['Int']
  pages: Scalars['Int']
  start: Scalars['Int']
  end: Scalars['Int']
}

export enum PaymentStatuses {
  Open = 'OPEN',
  Pending = 'PENDING',
  Authorized = 'AUTHORIZED',
  Cancelled = 'CANCELLED',
  Expired = 'EXPIRED',
  Failed = 'FAILED',
  Paid = 'PAID',
  Refunded = 'REFUNDED',
  Chargeback = 'CHARGEBACK'
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
  CreateobjectWritedata = 'CREATEOBJECT_WRITEDATA'
}

export type PriceFilterInput = {
  from: Scalars['Float']
  to: Scalars['Float']
}

export enum PriceMode {
  Platform = 'PLATFORM',
  External = 'EXTERNAL'
}

export type Product = IResource &
  IBaseProduct &
  IProduct & {
    __typename?: 'Product'
    id: Scalars['Int']

    /** @deprecated Deprecated in favor of productId and clusterId */
    classId: Scalars['Int']
    categoryId: Scalars['Int']

    /**
     * @deprecated Deprecated is favour of attributeValues.
     *       Added pagination to ther query the default offset will be 12 values.
     *       Increasing the offset in a listed view will impact the performance of the api.
     *
     */
    attributes: Array<Attribute>
    attributeValues: AttributeValueResponse
    productId: Scalars['Int']
    bundles?: Maybe<Array<Bundle>>
    category?: Maybe<Category>
    categoryPath: Array<Category>
    crossupsells: Array<Crossupsell>
    inventory?: Maybe<ProductInventory>

    /** @deprecated Deprecated in favor of `media.images` */
    mediaImages?: Maybe<PaginatedMediaImageResponse>

    /** @deprecated Deprecated in favor of `media.videos` */
    mediaVideos?: Maybe<PaginatedMediaVideoResponse>

    /** @deprecated Deprecated in favor of `media.documents` */
    mediaDocuments?: Maybe<PaginatedMediaDocumentResponse>
    media?: Maybe<ProductMedia>
    isAllowed: Scalars['Boolean']
    price?: Maybe<ProductPrice>
    bulkPrices?: Maybe<Array<BulkPrice>>
    language?: Maybe<Scalars['String']>
    class: Scalars['String']
    isHidden: YesNo
    name: Array<LocalizedString>
    description: Array<LocalizedString>
    shortDescription: Array<LocalizedString>
    slug: Array<LocalizedString>
    sku: Scalars['String']

    /** @deprecated Path is no longer supported */
    path?: Maybe<Scalars['String']>
    defaultLanguage: Scalars['String']
    shortName: Scalars['String']
    manufacturerCode: Scalars['String']
    eanCode: Scalars['String']
    manufacturer: Scalars['String']
    supplier: Scalars['String']
    supplierCode: Scalars['String']
    tag: Scalars['String']
    taxCode: TaxCode
    status: ProductStatus
    isOrderable: YesNo
    isReturnable: YesNo
    hasBundle: YesNo
    isBundleLeader: YesNo
    package: Scalars['String']
    packageUnit: Scalars['String']
    packageUnitQuantity: Scalars['String']
    originalPrice: Scalars['Float']
    costPrice: Scalars['Float']
    suggestedPrice: Scalars['Float']
    storePrice: Scalars['Float']
    creditPoints: Scalars['Float']
    minimumQuantity: Scalars['Float']
    unit: Scalars['Int']
    purchaseUnit: Scalars['Int']
    purchaseMinimumQuantity: Scalars['Int']
    econommicOrderQuantity: Scalars['Int']
    orderableFrom?: Maybe<Scalars['DateTime']>
    orderableTo?: Maybe<Scalars['DateTime']>
    releaseDate?: Maybe<Scalars['DateTime']>
    dateCreated: Scalars['DateTime']
    dateChanged: Scalars['DateTime']
    offers?: Maybe<Array<ProductOffer>>
    containerClass: Scalars['String']
    cluster?: Maybe<Cluster>
  }

export type ProductAttributesArgs = {
  filter?: Maybe<AttributeFilterInput>
}

export type ProductAttributeValuesArgs = {
  filter?: Maybe<AttributeFilterInput>
}

export type ProductBundlesArgs = {
  taxZone?: Maybe<Scalars['String']>
}

export type ProductCrossupsellsArgs = {
  input?: Maybe<CrossupsellTypesInput>
}

export type ProductMediaVideosArgs = {
  search?: Maybe<MediaVideoProductSearchInput>
}

export type ProductMediaDocumentsArgs = {
  search?: Maybe<MediaDocumentProductSearchInput>
}

export type ProductIsAllowedArgs = {
  userId: Scalars['Int']
  permission: Permission
}

export type ProductPriceArgs = {
  quantity?: Maybe<Scalars['Int']>
  taxZone?: Scalars['String']
  userId?: Maybe<Scalars['Int']>
}

export type ProductBulkPricesArgs = {
  taxZone?: Scalars['String']
}

export type ProductNameArgs = {
  language?: Maybe<Scalars['String']>
}

export type ProductDescriptionArgs = {
  language?: Maybe<Scalars['String']>
}

export type ProductShortDescriptionArgs = {
  language?: Maybe<Scalars['String']>
}

export type ProductSlugArgs = {
  language?: Maybe<Scalars['String']>
}

export enum ProductClass {
  Product = 'product',
  Cluster = 'cluster'
}

export type ProductDefaultPrice = {
  __typename?: 'ProductDefaultPrice'
  gross?: Maybe<Scalars['Float']>
  taxCode?: Maybe<Scalars['String']>
  productId?: Maybe<Scalars['Int']>
  net?: Maybe<Scalars['Float']>
}

export type ProductDefaultPriceNetArgs = {
  taxZone?: Maybe<Scalars['String']>
}

export type ProductInventory = {
  __typename?: 'ProductInventory'
  productId: Scalars['Int']
  totalQuantity: Scalars['Int']
  supplierQuantity: Scalars['Int']
  localQuantity: Scalars['Int']
  nextDeliveryDate: Scalars['DateTime']
  balance?: Maybe<Array<Inventory>>
}

export type ProductMedia = {
  __typename?: 'ProductMedia'
  images?: Maybe<PaginatedMediaImageResponse>
  videos?: Maybe<PaginatedMediaVideoResponse>
  documents?: Maybe<PaginatedMediaDocumentResponse>
}

export type ProductMediaImagesArgs = {
  search?: Maybe<MediaImageProductSearchInput>
}

export type ProductOffer = IProductOffer & {
  __typename?: 'ProductOffer'
  id: Scalars['String']
  price: Scalars['Float']
  validFrom: Scalars['DateTime']
  validTo: Scalars['DateTime']
  formula: Scalars['String']
}

export type ProductPrice = {
  __typename?: 'ProductPrice'

  /** @deprecated Product price value deprecated in favor of 'net' and 'gross' fields */
  value: Scalars['Float']
  gross: Scalars['Float']
  quantity: Scalars['Int']
  discount?: Maybe<Discount>
  taxCode: Scalars['String']
  type: ProductPriceType
  net?: Maybe<Scalars['Float']>
}

export type ProductPriceNetArgs = {
  taxZone?: Maybe<Scalars['String']>
}

export enum ProductPriceType {
  Default = 'default',
  ProductDiscount = 'productDiscount',
  Discount = 'discount',
  Bulk1 = 'bulk1',
  Bulk2 = 'bulk2',
  Bulk3 = 'bulk3',
  Bulk4 = 'bulk4'
}

export type ProductsResponse = {
  __typename?: 'ProductsResponse'
  items: Array<IBaseProduct>
  itemsFound: Scalars['Int']
  offset: Scalars['Int']
  page: Scalars['Int']
  pages: Scalars['Int']
  start: Scalars['Int']
  end: Scalars['Int']
  minPrice: Scalars['Int']
  maxPrice: Scalars['Int']

  /** @deprecated Deprecated in favor of filters */
  availableAttributes?: Maybe<Array<AttributeFilter>>
  filters?: Maybe<Array<AttributeFilter>>
}

export type ProductsResponseFiltersArgs = {
  filter?: Maybe<FilterAvailableAttributeInput>
}

export enum ProductStatus {
  A = 'A',
  N = 'N',
  P = 'P',
  S = 'S',
  R = 'R',
  T = 'T'
}

export type PublishEmailEventResponse = {
  __typename?: 'PublishEmailEventResponse'
  success: Scalars['Boolean']
  messageId?: Maybe<Scalars['String']>
}

export type Query = {
  __typename?: 'Query'
  addressesByUserId: Array<Address>
  addressesByCustomerId: Array<Address>
  addressesByCompanyId: Array<Address>
  addressesByOrderId: Array<Address>
  externalAddress: ExternalAddress
  productAttributeValues: AttributeValueResponse
  userAttributeValues: AttributeValueResponse
  contactAttributeValues: AttributeValueResponse
  customerAttributeValues: AttributeValueResponse

  /** @deprecated Deprecated in favor of productAttributeValues */
  productAttributes: Array<Attribute>

  /** @deprecated Deprecated in favor of userAttributeValues */
  userAttributes: Array<Attribute>
  attributeClassIdsByNameAndValue: Array<Scalars['Int']>
  attributeDescription: AttributeDescriptionResponse
  authentication: GcipUser
  bundles: Array<Bundle>
  bundle: Bundle
  cart: ICart
  category: Category

  /** @deprecated Deprecated in favor of channel */
  site: Site
  channel: Channel
  channels: Array<Channel>
  payment?: Maybe<Payment>
  payments: PaymentsResponse
  crossupsells: Array<Crossupsell>
  inventory: InventoryResponse

  /** @deprecated Deprecated in favor of `media.image` */
  mediaImage: MediaImage

  /** @deprecated Deprecated in favor of `media.images` */
  mediaImages: PaginatedMediaImageResponse

  /** @deprecated Deprecated in favor of `media.video` */
  mediaVideo: MediaVideo

  /** @deprecated Deprecated in favor of `media.videos` */
  mediaVideos: PaginatedMediaVideoResponse

  /** @deprecated Deprecated in favor of `media.document` */
  mediaDocument: MediaDocument

  /** @deprecated Deprecated in favor of `media.documents` */
  mediaDocuments: PaginatedMediaDocumentResponse
  media?: Maybe<Media>
  orders: OrderResponse
  order: Order
  orderGetPDF: Base64File

  /** @deprecated Deprecated, use mutation instead */
  orderSendConfirmationEmail: SendOrderConfirmResponseType
  userAclList: Array<Scalars['Int']>
  explainPrice: Array<ProductPrice>
  bulkPrice: Array<BulkPrice>
  userDiscounts: Array<Discount>
  defaultPrice: Array<ProductDefaultPrice>
  products: ProductsResponse
  product: Product
  cluster: Cluster
  shop: Shop
  shops: Array<Shop>
  machine?: Maybe<SparePartsMachine>
  machines: SparePartsMachineResponse
  tax: Tax
  taxes: TaxesResponse
  tender: Tender
  usergroup: Usergroup
  usergroups: UsergroupsResponse
  company: Company
  companies: CompaniesResponse
  contact: Contact
  contacts: ContactsResponse
  customer: Customer
  customers: CustomersResponse
  user: IBaseUser
  viewer: IBaseUser
  warehouse: Warehouse
  warehouses: WarehousesResponse
}

export type QueryAddressesByUserIdArgs = {
  userId: Scalars['Float']
  type?: Maybe<AddressType>
}

export type QueryAddressesByCustomerIdArgs = {
  customerId: Scalars['Float']
  type?: Maybe<AddressType>
}

export type QueryAddressesByCompanyIdArgs = {
  companyId: Scalars['Float']
  type?: Maybe<AddressType>
}

export type QueryAddressesByOrderIdArgs = {
  orderId: Scalars['Float']
  type?: Maybe<AddressType>
}

export type QueryExternalAddressArgs = {
  id: Scalars['Float']
}

export type QueryProductAttributeValuesArgs = {
  productId: Scalars['Int']
  filter?: Maybe<AttributeFilterInput>
}

export type QueryUserAttributeValuesArgs = {
  userId: Scalars['Int']
  filter?: Maybe<AttributeFilterInput>
}

export type QueryContactAttributeValuesArgs = {
  contactId: Scalars['Int']
  filter?: Maybe<AttributeFilterInput>
}

export type QueryCustomerAttributeValuesArgs = {
  customerId: Scalars['Int']
  filter?: Maybe<AttributeFilterInput>
}

export type QueryProductAttributesArgs = {
  productId: Scalars['Int']
  filter?: Maybe<AttributeFilterInput>
}

export type QueryUserAttributesArgs = {
  userId: Scalars['Int']
  filter?: Maybe<AttributeFilterInput>
}

export type QueryAttributeClassIdsByNameAndValueArgs = {
  input?: Maybe<AttributeValueObjectSearchInput>
}

export type QueryAttributeDescriptionArgs = {
  input: AttributeDescriptionSearchInput
}

export type QueryAuthenticationArgs = {
  email: Scalars['String']
}

export type QueryBundlesArgs = {
  productId: Array<Scalars['Float']>
  taxZone?: Maybe<Scalars['String']>
}

export type QueryBundleArgs = {
  bundleId?: Maybe<Scalars['Float']>
  taxZone?: Maybe<Scalars['String']>
  input?: Maybe<BundleSearchInput>
}

export type QueryCartArgs = {
  cartId: Scalars['String']
}

export type QueryCategoryArgs = {
  id?: Maybe<Scalars['Float']>
  categoryId?: Maybe<Scalars['Float']>
  slug?: Maybe<Scalars['String']>
  userId?: Maybe<Scalars['Int']>
}

export type QuerySiteArgs = {
  siteId: Scalars['Int']
}

export type QueryChannelArgs = {
  channelId: Scalars['Int']
}

export type QueryPaymentArgs = {
  searchBy: SearchByInput
}

export type QueryCrossupsellsArgs = {
  input: CrossupsellInput
}

export type QueryInventoryArgs = {
  id: Scalars['Int']
}

export type QueryMediaImageArgs = {
  mediaId: Scalars['String']
}

export type QueryMediaImagesArgs = {
  search?: Maybe<MediaImageSearchInput>
}

export type QueryMediaVideoArgs = {
  mediaId: Scalars['String']
}

export type QueryMediaVideosArgs = {
  search?: Maybe<MediaVideoSearchInput>
}

export type QueryMediaDocumentArgs = {
  mediaId: Scalars['String']
}

export type QueryMediaDocumentsArgs = {
  search?: Maybe<MediaDocumentSearchInput>
}

export type QueryOrdersArgs = {
  input: OrderSearchArguments
}

export type QueryOrderArgs = {
  orderId?: Maybe<Scalars['Int']>
  orderUUID?: Maybe<Scalars['String']>
}

export type QueryOrderGetPdfArgs = {
  orderId: Scalars['Int']
}

export type QueryOrderSendConfirmationEmailArgs = {
  orderId: Scalars['Int']
  attachments?: Maybe<Array<Base64FileInput>>
}

export type QueryUserAclListArgs = {
  userId: Scalars['Int']
  permission: Permission
}

export type QueryExplainPriceArgs = {
  productId: Scalars['Float']
  quantity?: Maybe<Scalars['Float']>
  userId?: Maybe<Scalars['Float']>
  taxZone?: Scalars['String']
}

export type QueryBulkPriceArgs = {
  productId: Scalars['Float']
  userId?: Maybe<Scalars['Float']>
  taxZone?: Scalars['String']
}

export type QueryUserDiscountsArgs = {
  userId?: Maybe<Scalars['Int']>
  userDirectoryId?: Maybe<Scalars['Int']>
}

export type QueryDefaultPriceArgs = {
  productIds: Array<Scalars['Int']>
  taxZone?: Scalars['String']
}

export type QueryProductsArgs = {
  term?: Maybe<Scalars['String']>
  manufacturer?: Maybe<Array<Scalars['String']>>
  supplierCode?: Maybe<Array<Scalars['String']>>
  supplier?: Maybe<Array<Scalars['String']>>
  manufacturerCode?: Maybe<Array<Scalars['String']>>
  EANCode?: Maybe<Array<Scalars['String']>>
  id?: Maybe<Array<Scalars['Int']>>
  classId?: Maybe<Array<Scalars['Int']>>
  class?: Maybe<ProductClass>
  tag?: Maybe<Array<Scalars['String']>>
  language?: Scalars['String']
  page?: Scalars['Int']
  offset?: Scalars['Int']
  textFilters?: Maybe<Array<TextFilterInput>>
  rangeFilters?: Maybe<Array<RangeFilterInput>>
  price?: Maybe<PriceFilterInput>
  status?: Maybe<Array<ProductStatus>>
  hidden?: Maybe<Scalars['Boolean']>
  sort?: Maybe<Array<SortInput>>
  searchFields?: Maybe<Array<SearchFieldsInput>>
  hasBundle?: Maybe<YesNo>
  isBundleLeader?: Maybe<YesNo>
  parentSlug?: Maybe<Scalars['String']>
  pathSlug?: Maybe<Scalars['String']>
  userId?: Maybe<Scalars['Int']>
  path?: Maybe<Scalars['String']>
  categoryId?: Maybe<Scalars['Int']>
  sku?: Maybe<Array<Scalars['String']>>
  getDescendants?: Maybe<Scalars['Boolean']>
}

export type QueryProductArgs = {
  id?: Maybe<Scalars['Int']>
  productId?: Maybe<Scalars['Int']>
  slug?: Maybe<Scalars['String']>
  sku?: Maybe<Scalars['String']>
  language?: Maybe<Scalars['String']>
}

export type QueryClusterArgs = {
  id?: Maybe<Scalars['Int']>
  clusterId?: Maybe<Scalars['Int']>
  slug?: Maybe<Scalars['String']>
  language?: Maybe<Scalars['String']>
}

export type QueryShopArgs = {
  shopId: Scalars['Int']
}

export type QueryMachineArgs = {
  id?: Maybe<Scalars['String']>
  slug?: Maybe<Scalars['String']>
  language?: Maybe<Scalars['String']>
  source?: Maybe<Scalars['String']>
  sourceId?: Maybe<Scalars['String']>
}

export type QueryMachinesArgs = {
  input?: Maybe<SearchSparePartsMachineInput>
}

export type QueryTaxArgs = {
  id?: Maybe<Scalars['ID']>
  code?: Maybe<Scalars['String']>
  zone?: Maybe<Scalars['String']>
  shopId?: Maybe<Scalars['Int']>
}

export type QueryTaxesArgs = {
  input?: Maybe<TaxSearchInput>
}

export type QueryTenderArgs = {
  tenderId?: Maybe<Scalars['String']>
  orderId?: Maybe<Scalars['Int']>
}

export type QueryUsergroupArgs = {
  id?: Maybe<Scalars['Float']>
  usergroupId?: Maybe<Scalars['Float']>
}

export type QueryUsergroupsArgs = {
  input: UsergroupSearchArguments
}

export type QueryCompanyArgs = {
  id?: Maybe<Scalars['Float']>
  companyId?: Maybe<Scalars['Float']>
}

export type QueryCompaniesArgs = {
  input?: Maybe<CompanySearchArguments>
}

export type QueryContactArgs = {
  id?: Maybe<Scalars['Float']>
  contactId?: Maybe<Scalars['Float']>
}

export type QueryContactsArgs = {
  input?: Maybe<ContactSearchArguments>
}

export type QueryCustomerArgs = {
  id?: Maybe<Scalars['Float']>
  customerId?: Maybe<Scalars['Float']>
}

export type QueryCustomersArgs = {
  input?: Maybe<CustomerSearchArguments>
}

export type QueryUserArgs = {
  id?: Maybe<Scalars['Float']>
  userId?: Maybe<Scalars['Float']>
  login?: Maybe<Scalars['String']>
}

export type QueryWarehouseArgs = {
  id: Scalars['Int']
}

export type QueryWarehousesArgs = {
  input?: Maybe<WarehousesSearchInput>
}

export type RangeFilterInput = {
  from: Scalars['Float']
  to: Scalars['Float']
  searchId: Scalars['String']
  exclude?: Scalars['Boolean']
  type?: Maybe<AttributeType>
}

export type RefreshTokenResponse = {
  __typename?: 'RefreshTokenResponse'
  access_token: Scalars['String']
  refresh_token: Scalars['String']
  expires_in: Scalars['Int']
  token_type: Scalars['String']
  user_id: Scalars['String']
}

export type RegisterContactInput = {
  firstName: Scalars['String']
  middleName?: Maybe<Scalars['String']>
  lastName: Scalars['String']
  gender?: Maybe<Gender>
  email?: Maybe<Scalars['String']>
  homepage?: Maybe<Scalars['String']>
  cocNumber?: Maybe<Scalars['String']>
  phone?: Maybe<Scalars['String']>
  mobile?: Maybe<Scalars['String']>
  dateOfBirth?: Maybe<Scalars['DateTime']>
  mailingList?: Maybe<YesNo>
  parentId: Scalars['Int']
  primaryLanguage?: Maybe<Scalars['String']>
  attributes?: Maybe<Array<UserManagementAttributeValueInput>>
  password?: Maybe<Scalars['String']>
}

export type RegisterContactResponse = {
  __typename?: 'RegisterContactResponse'
  contact: IBaseUser
  session: RegisterUserSession
}

export type RegisterCustomerInput = {
  firstName: Scalars['String']
  middleName?: Maybe<Scalars['String']>
  lastName: Scalars['String']
  gender?: Maybe<Gender>
  email?: Maybe<Scalars['String']>
  homepage?: Maybe<Scalars['String']>
  cocNumber?: Maybe<Scalars['String']>
  phone?: Maybe<Scalars['String']>
  mobile?: Maybe<Scalars['String']>
  dateOfBirth?: Maybe<Scalars['DateTime']>
  mailingList?: Maybe<YesNo>
  parentId: Scalars['Int']
  primaryLanguage?: Maybe<Scalars['String']>
  attributes?: Maybe<Array<UserManagementAttributeValueInput>>
  password?: Maybe<Scalars['String']>
}

export type RegisterCustomerResponse = {
  __typename?: 'RegisterCustomerResponse'
  customer: IBaseUser
  session: RegisterUserSession
}

export type RegisterUserInput = {
  firstName: Scalars['String']
  middleName?: Maybe<Scalars['String']>
  lastName: Scalars['String']
  gender?: Maybe<Gender>
  company?: Maybe<Scalars['String']>
  email: Scalars['String']
  homepage?: Maybe<Scalars['String']>
  cocNumber?: Maybe<Scalars['String']>
  taxNumber?: Maybe<Scalars['String']>
  phone?: Maybe<Scalars['String']>
  mobile?: Maybe<Scalars['String']>
  dateOfBirth?: Maybe<Scalars['DateTime']>
  mailingList?: Maybe<YesNo>
  parentId: Scalars['Int']
  primaryLanguage?: Maybe<Scalars['String']>
  password?: Maybe<Scalars['String']>
  createAccount?: Maybe<Scalars['Boolean']>
  autoLogin?: Maybe<Scalars['Boolean']>
}

export type RegisterUserResponse = {
  __typename?: 'RegisterUserResponse'
  user: IBaseUser
  session: RegisterUserSession
}

export type RegisterUserSession = {
  __typename?: 'RegisterUserSession'
  accessToken: Scalars['String']
  refreshToken: Scalars['String']
  expirationTime: Scalars['DateTime']
}

export enum ResizeFilter {
  Nearest = 'NEAREST',
  Bilinear = 'BILINEAR',
  Bicubic = 'BICUBIC',
  Lanczos2 = 'LANCZOS2',
  Lanczos3 = 'LANCZOS3'
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
  EanCode = 'eanCode'
}

export type SearchByInput = {
  id?: Maybe<Scalars['ID']>
  paymentId?: Maybe<Scalars['String']>
  orderId?: Maybe<Scalars['Float']>
}

export type SearchFieldsInput = {
  fieldNames: Array<Searchablefields>
  boost: Scalars['Int']
}

export type SearchSparePartsMachineInput = {
  page?: Scalars['Int']
  offset?: Scalars['Int']
}

export type SendOrderConfirmResponseType = {
  __typename?: 'SendOrderConfirmResponseType'
  messageId: Scalars['String']
  success: Scalars['Boolean']
}

export type SharpenInput = {
  amount?: Maybe<Scalars['Float']>
  radius?: Maybe<Scalars['Int']>
  threshold?: Maybe<Scalars['Int']>
}

export type Shipment = {
  __typename?: 'Shipment'
  id: Scalars['Int']
  orderId: Scalars['Int']
  status: Scalars['String']
  date: Scalars['DateTime']
  totalGross: Scalars['Float']
  totalNet: Scalars['Float']
  totalTax: Scalars['Float']
  totalDiscountValue: Scalars['Float']
  printDate?: Maybe<Scalars['DateTime']>
  items?: Maybe<Array<ShipmentItem>>
  trackAndTrace?: Maybe<Array<TrackAndTrace>>
}

export type ShipmentItem = {
  __typename?: 'ShipmentItem'
  id: Scalars['Int']
  shipmentId: Scalars['Int']
  orderItemId: Scalars['Int']
  uuid: Scalars['String']
  productId?: Maybe<Scalars['Int']>
  sku: Scalars['String']
  quantity: Scalars['Int']
  name: Scalars['String']
  supplier: Scalars['String']
  supplierCode: Scalars['String']
  price: Scalars['Float']
  priceTotal: Scalars['Float']
  discount: Scalars['Float']
  tax: Scalars['Float']
  taxPercentage: Scalars['Float']
}

export type Shop = {
  __typename?: 'Shop'
  shopId: Scalars['Int']
  name: Scalars['String']
  purchaseRootId?: Maybe<Scalars['Int']>
  userRootId?: Maybe<Scalars['Int']>
  enableIncentives: Scalars['Boolean']
  priceCalculationConfig: ShopPriceCalculationConfig
  debtorId?: Maybe<Scalars['String']>
  cocNumber?: Maybe<Scalars['String']>
  taxNumber?: Maybe<Scalars['String']>
}

export type ShopPriceCalculationConfig = {
  __typename?: 'ShopPriceCalculationConfig'
  isVatIncludedLeading: Scalars['Boolean']
  inheritCatalogDiscountOnPriceList: Scalars['Boolean']
  useMultipleCostprices: Scalars['Boolean']
  calculateDiscountOverBulkPrices: Scalars['Boolean']
}

export type Site = {
  __typename?: 'Site'
  id: Scalars['Int']
  url: Scalars['String']
  alternartiveUrl?: Maybe<Scalars['String']>
  mobileUrl: Scalars['String']
  fileUrl: Scalars['String']
  anonymousUserId: Scalars['Int']
}

export enum Sort {
  Asc = 'ASC',
  Desc = 'DESC'
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
  CategoryOrder = 'categoryOrder'
}

export type SortInput = {
  field: SortableFields
  order?: Maybe<SortOrder>
}

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type SparePart = {
  __typename?: 'SparePart'
  id: Scalars['ID']
  sku: Scalars['String']
  quantity: Scalars['Int']
  name?: Maybe<Array<LocalizedString>>
  product?: Maybe<IBaseProduct>
}

export type SparePartNameArgs = {
  language?: Maybe<Scalars['String']>
}

export type SparePartsMachine = {
  __typename?: 'SparePartsMachine'
  id: Scalars['ID']
  parts?: Maybe<Array<SparePart>>
  media?: Maybe<SparePartsMachineMedia>
  sparePartProducts?: Maybe<SparePartsResponse>
  name: Array<LocalizedString>
  description?: Maybe<Array<LocalizedString>>
  slug?: Maybe<Array<LocalizedString>>
  machines?: Maybe<Array<SparePartsMachine>>
}

export type SparePartsMachineSparePartProductsArgs = {
  term?: Maybe<Scalars['String']>
  manufacturer?: Maybe<Array<Scalars['String']>>
  supplierCode?: Maybe<Array<Scalars['String']>>
  supplier?: Maybe<Array<Scalars['String']>>
  manufacturerCode?: Maybe<Array<Scalars['String']>>
  EANCode?: Maybe<Array<Scalars['String']>>
  id?: Maybe<Array<Scalars['Int']>>
  classId?: Maybe<Array<Scalars['Int']>>
  class?: Maybe<ProductClass>
  tag?: Maybe<Array<Scalars['String']>>
  language?: Scalars['String']
  page?: Scalars['Int']
  offset?: Scalars['Int']
  textFilters?: Maybe<Array<TextFilterInput>>
  rangeFilters?: Maybe<Array<RangeFilterInput>>
  price?: Maybe<PriceFilterInput>
  status?: Maybe<Array<ProductStatus>>
  hidden?: Maybe<Scalars['Boolean']>
  sort?: Maybe<Array<SortInput>>
  searchFields?: Maybe<Array<SearchFieldsInput>>
  hasBundle?: Maybe<YesNo>
  isBundleLeader?: Maybe<YesNo>
  parentSlug?: Maybe<Scalars['String']>
  pathSlug?: Maybe<Scalars['String']>
  userId?: Maybe<Scalars['Int']>
}

export type SparePartsMachineNameArgs = {
  language?: Maybe<Scalars['String']>
}

export type SparePartsMachineDescriptionArgs = {
  language?: Maybe<Scalars['String']>
}

export type SparePartsMachineSlugArgs = {
  language?: Maybe<Scalars['String']>
}

export type SparePartsMachineMedia = {
  __typename?: 'SparePartsMachineMedia'
  images?: Maybe<PaginatedMediaImageResponse>
  videos?: Maybe<PaginatedMediaVideoResponse>
  documents?: Maybe<PaginatedMediaDocumentResponse>
}

export type SparePartsMachineMediaImagesArgs = {
  search?: Maybe<ObjectMediaSearchInput>
}

export type SparePartsMachineMediaVideosArgs = {
  search?: Maybe<ObjectMediaSearchInput>
}

export type SparePartsMachineMediaDocumentsArgs = {
  search?: Maybe<ObjectMediaSearchInput>
}

export type SparePartsMachineResponse = {
  __typename?: 'SparePartsMachineResponse'
  items: Array<SparePartsMachine>
  itemsFound: Scalars['Int']
  offset: Scalars['Int']
  page: Scalars['Int']
  pages: Scalars['Int']
  start: Scalars['Int']
  end: Scalars['Int']
}

export type SparePartsResponse = {
  __typename?: 'SparePartsResponse'
  items: Array<SparePart>
  itemsFound: Scalars['Int']
  offset: Scalars['Int']
  page: Scalars['Int']
  pages: Scalars['Int']
  start: Scalars['Int']
  end: Scalars['Int']
  minPrice: Scalars['Int']
  maxPrice: Scalars['Int']

  /** @deprecated Deprecated in favor of filters */
  availableAttributes?: Maybe<Array<AttributeFilter>>
  filters?: Maybe<Array<AttributeFilter>>
}

export type StandardFileUploadInput = {
  file: Scalars['Upload']
  fileName?: Maybe<Scalars['String']>
}

export type Tax = {
  __typename?: 'Tax'
  id: Scalars['ID']
  shopId: Scalars['Int']
  code?: Maybe<Scalars['String']>
  zone: Scalars['String']
  ratio?: Maybe<Scalars['Float']>
  exportCode?: Maybe<Scalars['String']>
}

export enum Taxcode {
  H = 'H',
  L = 'L',
  N = 'N'
}

export enum TaxCode {
  H = 'H',
  L = 'L',
  N = 'N'
}

export type TaxesResponse = {
  __typename?: 'TaxesResponse'
  items: Array<Tax>
  itemsFound: Scalars['Int']
  offset: Scalars['Int']
  page: Scalars['Int']
  pages: Scalars['Int']
  start: Scalars['Int']
  end: Scalars['Int']
}

export type TaxSearchInput = {
  type?: Maybe<Scalars['String']>
  page?: Scalars['Int']
  offset?: Scalars['Int']
}

export type Tender = {
  __typename?: 'Tender'
  tenderId: Scalars['String']
  orderId?: Maybe<Scalars['Int']>
  type: TenderOrderType

  /** @deprecated Deprecated in favor of channelId */
  siteId?: Maybe<Scalars['Int']>
  channelId?: Maybe<Scalars['Int']>
  shopId: Scalars['Int']
  date: Scalars['DateTime']
  userId: Scalars['Int']
  invoiceUserId?: Maybe<Scalars['Int']>
  status: Scalars['String']
  firstName: Scalars['String']
  middleName: Scalars['String']
  lastName: Scalars['String']
  email: Scalars['String']
  debtorId: Scalars['String']
  invoiceAddress?: Maybe<TenderAddress>
  deliveryAddress?: Maybe<TenderAddress>
  itemCount?: Maybe<Scalars['Int']>
  items?: Maybe<Array<TenderMainItem>>
  paymentData?: Maybe<TenderPayment>
  postageData?: Maybe<TenderPostage>
  total?: Maybe<TenderTotal>
  carriers?: Maybe<Array<TenderCarrier>>
  payMethods?: Maybe<Array<TenderPaymethod>>
  source?: Maybe<Scalars['String']>
  valuePoints?: Maybe<Scalars['Int']>
  incentivesApplied?: Maybe<Scalars['Boolean']>
  creditPoints?: Maybe<Scalars['Int']>
  couponCode?: Maybe<Scalars['String']>
  actionCode?: Maybe<Scalars['String']>
  reference?: Maybe<Scalars['String']>
  remarks?: Maybe<Scalars['String']>
  externalId?: Maybe<Scalars['String']>
  extra3?: Maybe<Scalars['String']>
  extra4?: Maybe<Scalars['String']>
  isEditable: Scalars['Boolean']
  user: IBaseUser
}

export type TenderAddItemInput = {
  quantity: Scalars['Int']
  name?: Maybe<Scalars['String']>
  price?: Maybe<Scalars['Float']>
  supplier?: Maybe<Scalars['String']>
  deliveryDate?: Maybe<Scalars['DateTime']>
  notes?: Maybe<Scalars['String']>
  productId: Scalars['Int']
  childItems?: Maybe<Array<TenderChildItemInput>>
}

export type TenderAddItemsInput = {
  tenderId: Scalars['String']
  products: Array<TenderAddItemInput>
  forceAdd?: Maybe<Scalars['Boolean']>
  validateOrderList?: Maybe<Scalars['Boolean']>
  validateBudget?: Maybe<Scalars['Boolean']>
}

export type TenderAddress = {
  __typename?: 'TenderAddress'
  company?: Maybe<Scalars['String']>
  gender?: Maybe<Gender>
  firstName: Scalars['String']
  middleName?: Maybe<Scalars['String']>
  lastName: Scalars['String']
  street: Scalars['String']
  number?: Maybe<Scalars['String']>
  numberExtension?: Maybe<Scalars['String']>
  postalCode: Scalars['String']
  city: Scalars['String']
  region?: Maybe<Scalars['String']>
  country: Scalars['String']
  code?: Maybe<Scalars['String']>
  email?: Maybe<Scalars['String']>
  mobile?: Maybe<Scalars['String']>
  phone?: Maybe<Scalars['String']>
  fax?: Maybe<Scalars['String']>
  url?: Maybe<Scalars['String']>
  icp?: Maybe<YesNo>
  notes?: Maybe<Scalars['String']>
}

export enum TenderAddressType {
  Invoice = 'invoice',
  Delivery = 'delivery'
}

export type TenderBaseItem = ITenderBaseItem & {
  __typename?: 'TenderBaseItem'
  id: Scalars['Int']
  orderItemId?: Maybe<Scalars['Int']>
  name: Scalars['String']
  productId: Scalars['Int']
  sku: Scalars['String']
  quantity: Scalars['Int']
  supplier: Scalars['String']
  supplierCode: Scalars['String']
  price: Scalars['Float']
  priceNet: Scalars['Float']
  totalPrice: Scalars['Float']
  totalPriceNet: Scalars['Float']
  taxCode: Taxcode
  taxPercentage: Scalars['Int']
  customerDiscountPercentage: Scalars['Float']
  discountPercentage: Scalars['Float']
  totalDiscountPercentage: Scalars['Float']
  marginAmount: Scalars['Float']
  marginPercentage: Scalars['Float']
  saleMarginAmount: Scalars['Float']
  saleMarginPercentage: Scalars['Float']
  attributedSaleDiscount: Scalars['Float']
  attributedSaleMargin: Scalars['Float']
  originalPrice: Scalars['Float']
  costPrice: Scalars['Float']
  customerPrice: Scalars['Float']
  valuePoints?: Maybe<Scalars['Int']>
  expectedDeliveryDate?: Maybe<Scalars['DateTime']>
  externalOrderitemId?: Maybe<Scalars['String']>
  notes: Scalars['String']
  type: TenderOrderItemType
}

export type TenderCarrier = {
  __typename?: 'TenderCarrier'
  name: Scalars['String']
  description: Scalars['String']
  logo: Scalars['String']
  amount: Scalars['Float']
}

export type TenderChildItemInput = {
  productId: Scalars['Int']
  name?: Maybe<Scalars['String']>
  price?: Maybe<Scalars['Float']>
  deliveryDate?: Maybe<Scalars['DateTime']>
  notes?: Maybe<Scalars['String']>
}

export type TenderDeleteItemInput = {
  tenderId: Scalars['String']
  itemId: Scalars['Int']
}

export type TenderDiscountInput = {
  tenderId: Scalars['String']
  type: DiscountType
  value: Scalars['Float']
}

export type TenderMainItem = ITenderBaseItem & {
  __typename?: 'TenderMainItem'
  id: Scalars['Int']
  productId: Scalars['Int']
  product?: Maybe<Product>
  orderItemId?: Maybe<Scalars['Int']>
  name: Scalars['String']
  sku: Scalars['String']
  quantity: Scalars['Int']
  supplier: Scalars['String']
  supplierCode: Scalars['String']
  price: Scalars['Float']
  priceNet: Scalars['Float']
  totalPrice: Scalars['Float']
  totalPriceNet: Scalars['Float']
  taxCode: Taxcode
  taxPercentage: Scalars['Int']
  customerDiscountPercentage: Scalars['Float']
  discountPercentage: Scalars['Float']
  totalDiscountPercentage: Scalars['Float']
  marginAmount: Scalars['Float']
  marginPercentage: Scalars['Float']
  saleMarginAmount: Scalars['Float']
  saleMarginPercentage: Scalars['Float']
  attributedSaleDiscount: Scalars['Float']
  attributedSaleMargin: Scalars['Float']
  originalPrice: Scalars['Float']
  costPrice: Scalars['Float']
  customerPrice: Scalars['Float']
  valuePoints?: Maybe<Scalars['Int']>
  expectedDeliveryDate?: Maybe<Scalars['DateTime']>
  externalOrderitemId?: Maybe<Scalars['String']>
  notes: Scalars['String']
  type: TenderOrderItemType
  childItems?: Maybe<Array<ITenderBaseItem>>
  sum: Scalars['Float']
  sumNet: Scalars['Float']
  totalSum: Scalars['Float']
  totalSumNet: Scalars['Float']
  discountPercentageSum: Scalars['Float']
  totalDiscountPercentageSum: Scalars['Float']
  saleMarginAmountSum: Scalars['Float']
  saleMarginPercentageSum: Scalars['Float']
  attributedSaleDiscountSum: Scalars['Float']
  attributedSaleMarginSum: Scalars['Float']
}

export enum TenderOrderItemType {
  Product = 'product',
  Surcharge = 'surcharge',
  Incentive = 'incentive'
}

export enum TenderOrderType {
  Dropshipment = 'dropshipment',
  Stock = 'stock',
  Purchase = 'purchase',
  Quotation = 'quotation'
}

export type TenderPayment = {
  __typename?: 'TenderPayment'
  amountNet: Scalars['Float']
  amountGross: Scalars['Float']
  overruled: Scalars['Boolean']
  tax: Scalars['Float']
  taxPercentage: Scalars['Float']
  method: Scalars['String']
  status?: Maybe<Scalars['String']>
  statusDate?: Maybe<Scalars['DateTime']>
  transactionId?: Maybe<Scalars['String']>
  accountingId?: Maybe<Scalars['String']>
}

export type TenderPaymentInput = {
  tenderId: Scalars['String']
  amountGross?: Maybe<Scalars['Float']>
  method?: Maybe<Scalars['String']>
  status?: Maybe<Scalars['String']>
  transactionId?: Maybe<Scalars['String']>
  accountingId?: Maybe<Scalars['String']>
}

export type TenderPaymethod = {
  __typename?: 'TenderPaymethod'
  code: Scalars['String']
  externalCode?: Maybe<Scalars['String']>
  type?: Maybe<Scalars['String']>
  description: Scalars['String']
  taxCode: Taxcode
  amount: Scalars['Float']
  allowed: Scalars['Boolean']
}

export type TenderPostage = {
  __typename?: 'TenderPostage'
  shippingMethod: Scalars['String']
  trackTrace: Scalars['String']
  taxPercentage: Scalars['Float']
  requestDate: Scalars['DateTime']
  carrier: Scalars['String']
  postageGross: Scalars['Float']
  postageNet: Scalars['Float']
  overruled: Scalars['Boolean']
  partialDeliveryAllowed?: Maybe<Scalars['Boolean']>
  pickUpLocationId?: Maybe<Scalars['Int']>
  warehouse?: Maybe<Warehouse>
}

export type TenderPostageInput = {
  tenderId: Scalars['String']
  shippingMethod?: Maybe<Scalars['String']>
  trackTrace?: Maybe<Scalars['String']>
  requestDate?: Maybe<Scalars['DateTime']>
  carrier?: Maybe<Scalars['String']>
  postageGross?: Maybe<Scalars['Float']>
  partialDeliveryAllowed?: Maybe<Scalars['Boolean']>
  pickUpLocationId?: Maybe<Scalars['Int']>
}

export type TenderProcessResponse = {
  __typename?: 'TenderProcessResponse'
  orderId: Scalars['Int']
}

export type TenderResponse = {
  __typename?: 'TenderResponse'
  tender: Tender
  response: TenderResponseData
}

export type TenderResponseData = {
  __typename?: 'TenderResponseData'
  data: Scalars['JSONObject']
  error: Scalars['Boolean']
  messages?: Maybe<Array<Scalars['String']>>
}

export type TenderStart = {
  siteId?: Maybe<Scalars['Int']>
  channelId?: Maybe<Scalars['Int']>
  userId: Scalars['Int']
  ownerId?: Maybe<Scalars['Int']>
  type?: Maybe<TenderOrderType>
  currency?: Maybe<Scalars['String']>
}

export type TenderTaxLevel = {
  __typename?: 'TenderTaxLevel'
  taxCode: Taxcode
  price: Scalars['Float']
}

export type TenderTotal = {
  __typename?: 'TenderTotal'
  subTotal: Scalars['Float']
  subTotalNet: Scalars['Float']
  discountPercentage: Scalars['Float']
  discountType: DiscountType
  discountOverruled: Scalars['Boolean']
  totalNet: Scalars['Float']
  totalGross: Scalars['Float']
  discountNet: Scalars['Float']
  discountGross: Scalars['Float']
  totalTax: Scalars['Float']
  taxLevels?: Maybe<Array<TenderTaxLevel>>
}

export type TenderUpdateAddressInput = {
  tenderId: Scalars['String']
  type: TenderAddressType
  company?: Maybe<Scalars['String']>
  gender?: Maybe<Gender>
  firstName?: Maybe<Scalars['String']>
  middleName?: Maybe<Scalars['String']>
  lastName?: Maybe<Scalars['String']>
  street: Scalars['String']
  number?: Maybe<Scalars['String']>
  numberExtension?: Maybe<Scalars['String']>
  postalCode: Scalars['String']
  city: Scalars['String']
  region?: Maybe<Scalars['String']>
  country: Scalars['String']
  code?: Maybe<Scalars['String']>
  email?: Maybe<Scalars['String']>
  mobile?: Maybe<Scalars['String']>
  phone?: Maybe<Scalars['String']>
  fax?: Maybe<Scalars['String']>
  url?: Maybe<Scalars['String']>
  icp?: Maybe<YesNo>
  notes?: Maybe<Scalars['String']>
}

export type TenderUpdateInput = {
  tenderId: Scalars['String']
  status?: Maybe<Scalars['String']>
  reference?: Maybe<Scalars['String']>
  remarks?: Maybe<Scalars['String']>
}

export type TenderUpdateItemInput = {
  quantity?: Maybe<Scalars['Int']>
  name?: Maybe<Scalars['String']>
  price?: Maybe<Scalars['Float']>
  supplier?: Maybe<Scalars['String']>
  deliveryDate?: Maybe<Scalars['DateTime']>
  notes?: Maybe<Scalars['String']>
  tenderId: Scalars['String']
  itemId: Scalars['Int']
  validateOrderList?: Maybe<Scalars['Boolean']>
  validateBudget?: Maybe<Scalars['Boolean']>
}

export type TextFilterInput = {
  searchId: Scalars['String']
  values: Array<Scalars['String']>
  exclude?: Scalars['Boolean']
  type?: Maybe<AttributeType>
}

export type TrackAndTrace = {
  __typename?: 'TrackAndTrace'
  id: Scalars['Int']
  orderId: Scalars['Int']
  shipmentId: Scalars['Int']
  carrierId: Scalars['Int']
  code: Scalars['String']
}

export type Transaction = {
  __typename?: 'Transaction'
  id: Scalars['ID']
  transactionId: Scalars['String']
  paymentId?: Maybe<Scalars['String']>
  orderId: Scalars['Int']
  amount: Scalars['Int']
  currency: Scalars['String']
  description?: Maybe<Scalars['String']>
  timestamp?: Maybe<Scalars['DateTime']>
  type: TransactionTypes
  provider?: Maybe<Scalars['String']>
  status: TransactionStatuses
}

export enum TransactionStatuses {
  Open = 'OPEN',
  Pending = 'PENDING',
  Failed = 'FAILED',
  Success = 'SUCCESS'
}

export enum TransactionTypes {
  Authorization = 'AUTHORIZATION',
  CancelAuthorization = 'CANCEL_AUTHORIZATION',
  Pay = 'PAY',
  Refund = 'REFUND',
  Chargeback = 'CHARGEBACK'
}

export type TransformationInput = {
  auto?: Maybe<Auto>
  bgColor?: Maybe<Scalars['String']>
  blur?: Maybe<Scalars['Float']>
  brightness?: Maybe<Scalars['Int']>
  canvas?: Maybe<CanvasInput>
  contrast?: Maybe<Scalars['Int']>
  crop?: Maybe<CropInput>
  disable?: Maybe<FeaturesEnableDisable>
  dpr?: Maybe<Scalars['Int']>
  fit?: Maybe<Fit>
  format?: Maybe<Format>
  frame?: Maybe<Scalars['Int']>
  height?: Maybe<Scalars['Float']>
  level?: Maybe<Level>
  optimize?: Maybe<Optimize>
  orient?: Maybe<Orient>
  pad?: Maybe<PadInput>
  precrop?: Maybe<CropInput>
  profile?: Maybe<Scalars['String']>
  quality?: Maybe<Scalars['Float']>
  resizeFilter?: Maybe<ResizeFilter>
  saturation?: Maybe<Scalars['Int']>
  sharpen?: Maybe<SharpenInput>
  trim?: Maybe<TrimInput>
  width?: Maybe<Scalars['Int']>
}

export type TransformationsInput = {
  transformations: Array<ImageTransformationInput>
}

export type TrimInput = {
  top?: Maybe<Scalars['Int']>
  right?: Maybe<Scalars['Int']>
  bottom?: Maybe<Scalars['Int']>
  left?: Maybe<Scalars['Int']>
}

export type UpdateBundleInput = {
  name?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  discount?: Maybe<Scalars['Float']>
  condition?: Maybe<BundleCondition>
  price?: Maybe<Scalars['Float']>
}

export type UpdateCategoryInput = {
  name?: Maybe<Array<LocalizedStringInput>>
  description?: Maybe<Array<LocalizedStringInput>>
  shortDescription?: Maybe<Array<LocalizedStringInput>>
  parent?: Maybe<Scalars['Int']>
  defaultLanguage?: Maybe<Scalars['String']>
}

export type UpdateContactInput = {
  contactId: Scalars['Int']
  firstName?: Maybe<Scalars['String']>
  middleName?: Maybe<Scalars['String']>
  lastName?: Maybe<Scalars['String']>
  gender?: Maybe<Gender>
  email?: Maybe<Scalars['String']>
  homepage?: Maybe<Scalars['String']>
  cocNumber?: Maybe<Scalars['String']>
  phone?: Maybe<Scalars['String']>
  mobile?: Maybe<Scalars['String']>
  dateOfBirth?: Maybe<Scalars['DateTime']>
  mailingList?: Maybe<YesNo>
  parentId?: Maybe<Scalars['Int']>
  primaryLanguage?: Maybe<Scalars['String']>
  attributes?: Maybe<Array<UserManagementAttributeValueInput>>
}

export type UpdateCustomerInput = {
  customerId: Scalars['Int']
  firstName?: Maybe<Scalars['String']>
  middleName?: Maybe<Scalars['String']>
  lastName?: Maybe<Scalars['String']>
  gender?: Maybe<Gender>
  email?: Maybe<Scalars['String']>
  homepage?: Maybe<Scalars['String']>
  cocNumber?: Maybe<Scalars['String']>
  phone?: Maybe<Scalars['String']>
  mobile?: Maybe<Scalars['String']>
  dateOfBirth?: Maybe<Scalars['DateTime']>
  mailingList?: Maybe<YesNo>
  parentId?: Maybe<Scalars['Int']>
  primaryLanguage?: Maybe<Scalars['String']>
  attributes?: Maybe<Array<UserManagementAttributeValueInput>>
}

export type UpdateInventoryInput = {
  code?: Maybe<Scalars['String']>
  costPrice?: Maybe<Scalars['Float']>
  date?: Maybe<Scalars['DateTime']>
  dateArchived?: Maybe<Scalars['DateTime']>
  location?: Maybe<Scalars['String']>
  nextDeliveryDate?: Maybe<Scalars['DateTime']>
  notes?: Maybe<Scalars['String']>
  quality?: Maybe<Scalars['String']>
  quantity?: Maybe<Scalars['Int']>
  status?: Maybe<Scalars['String']>
  supplier?: Maybe<Scalars['String']>
  supplierCode?: Maybe<Scalars['String']>
  type?: Maybe<Scalars['String']>
  warehouse?: Maybe<Scalars['Int']>
}

export type UpdateMediaDocumentInput = {
  productId?: Maybe<Scalars['ID']>
  clusterId?: Maybe<Scalars['ID']>
  categoryId?: Maybe<Scalars['ID']>
  sparePartsMachineId?: Maybe<Scalars['ID']>
  alt?: Maybe<Array<MediaLocalizedStringInput>>
  description?: Maybe<Array<MediaLocalizedStringInput>>
  tags?: Maybe<Array<MediaLocalizedStringArrayInput>>
  priority?: Maybe<Scalars['Int']>
  mediaId: Scalars['String']
  uploadDocument?: Maybe<UploadFileInput>
}

export type UpdateMediaImageInput = {
  productId?: Maybe<Scalars['ID']>
  clusterId?: Maybe<Scalars['ID']>
  categoryId?: Maybe<Scalars['ID']>
  sparePartsMachineId?: Maybe<Scalars['ID']>
  alt?: Maybe<Array<MediaLocalizedStringInput>>
  description?: Maybe<Array<MediaLocalizedStringInput>>
  tags?: Maybe<Array<MediaLocalizedStringArrayInput>>
  priority?: Maybe<Scalars['Int']>
  mediaId: Scalars['String']
  uploadImage?: Maybe<UploadFileInput>
}

export type UpdateMediaVideoInput = {
  productId?: Maybe<Scalars['ID']>
  clusterId?: Maybe<Scalars['ID']>
  categoryId?: Maybe<Scalars['ID']>
  sparePartsMachineId?: Maybe<Scalars['ID']>
  alt?: Maybe<Array<MediaLocalizedStringInput>>
  description?: Maybe<Array<MediaLocalizedStringInput>>
  tags?: Maybe<Array<MediaLocalizedStringArrayInput>>
  priority?: Maybe<Scalars['Int']>
  mediaId: Scalars['String']
  video?: Maybe<UploadVideoInput>
}

export type UpdatePaymentInput = {
  userId?: Maybe<Scalars['Int']>
  anonymousId?: Maybe<Scalars['Int']>
  paymentId?: Maybe<Scalars['String']>
  amount?: Maybe<Scalars['Int']>
  currency?: Maybe<Scalars['String']>
  method?: Maybe<Scalars['String']>
  status?: Maybe<PaymentStatuses>
  addTransaction?: Maybe<CreateTransactionInput>
}

export type UpdateTaxInput = {
  shopId?: Maybe<Scalars['Int']>
  code?: Maybe<Scalars['String']>
  zone?: Scalars['String']
  ratio?: Maybe<Scalars['Float']>
  exportCode?: Maybe<Scalars['String']>
}

export type UpdateUserInput = {
  firstName: Scalars['String']
  middleName?: Maybe<Scalars['String']>
  lastName: Scalars['String']
  gender?: Maybe<Gender>
  company?: Maybe<Scalars['String']>
  email: Scalars['String']
  homepage?: Maybe<Scalars['String']>
  cocNumber?: Maybe<Scalars['String']>
  taxNumber?: Maybe<Scalars['String']>
  phone?: Maybe<Scalars['String']>
  mobile?: Maybe<Scalars['String']>
  dateOfBirth?: Maybe<Scalars['DateTime']>
  mailingList?: Maybe<YesNo>
  parentId: Scalars['Int']
  primaryLanguage?: Maybe<Scalars['String']>
  userId: Scalars['Int']
}

export type UpdateWarehouseAddressInput = {
  firstName?: Maybe<Scalars['String']>
  middleName?: Maybe<Scalars['String']>
  lastName?: Maybe<Scalars['String']>
  gender?: Maybe<Gender>
  company?: Maybe<Scalars['String']>
  street?: Maybe<Scalars['String']>
  number?: Maybe<Scalars['String']>
  numberExtension?: Maybe<Scalars['String']>
  postalCode?: Maybe<Scalars['String']>
  city?: Maybe<Scalars['String']>
  region?: Maybe<Scalars['String']>
  country?: Maybe<Scalars['String']>
  phone?: Maybe<Scalars['String']>
  mobile?: Maybe<Scalars['String']>
  email?: Maybe<Scalars['String']>
  code?: Maybe<Scalars['String']>
  notes?: Maybe<Scalars['String']>
  id: Scalars['Int']
}

export type UpdateWarehouseInput = {
  name?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  notes?: Maybe<Scalars['String']>
  isActive?: Maybe<Scalars['Boolean']>
  isStore?: Maybe<Scalars['Boolean']>
  isPickupLocation?: Maybe<Scalars['Boolean']>
  shopId?: Maybe<Scalars['Int']>
  businessHours?: Maybe<Array<BusinessHoursInput>>
}

export type UploadFileInput = {
  language?: Maybe<Scalars['String']>
  uploadType: UploadType
  cacheControl?: Maybe<CacheControlInput>
  base64File?: Maybe<MediaBase64FileInput>
  file?: Maybe<StandardFileUploadInput>
  urlFile?: Maybe<UrlFileUploadInput>
}

export enum UploadType {
  Base64 = 'BASE64',
  File = 'FILE',
  Url = 'URL'
}

export type UploadVideoInput = {
  language?: Maybe<Scalars['String']>
  uri: Scalars['String']
}

export type UrlFileUploadInput = {
  url: Scalars['String']
  fileName: Scalars['String']
}

export type User = IBaseUser & {
  __typename?: 'User'
  id: Scalars['Int']
  userId: Scalars['Int']
  addresses: Array<Address>

  /**
   * @deprecated Deprecated is favour of attributeValues.
   *       Added pagination to ther query the default offset will be 12 values.
   *       Increasing the offset in a listed view will impact the performance of the api.
   *
   */
  attributes: Array<Attribute>
  attributeValues: AttributeValueResponse
  orders: OrderResponse
  aclList: Array<Scalars['Int']>
  isAllowed: Scalars['Boolean']
  debtorId?: Maybe<Scalars['String']>
  gender?: Maybe<Gender>
  firstName: Scalars['String']
  middleName?: Maybe<Scalars['String']>
  lastName: Scalars['String']
  cocNumber?: Maybe<Scalars['String']>
  phone?: Maybe<Scalars['String']>
  mobile?: Maybe<Scalars['String']>
  email: Scalars['String']
  iban?: Maybe<Scalars['String']>
  bankAccount?: Maybe<Scalars['String']>
  bic?: Maybe<Scalars['String']>
  notes?: Maybe<Scalars['String']>
  primaryLanguage?: Maybe<Scalars['String']>
  expires?: Maybe<Scalars['DateTime']>
  dateOfBirth?: Maybe<Scalars['DateTime']>
  mailingList?: Maybe<YesNo>
  isLoggedIn?: Maybe<Scalars['Boolean']>
  taxNumber?: Maybe<Scalars['String']>
  loginRoot?: Maybe<Scalars['Int']>
  company?: Maybe<Scalars['String']>
  parentUsergroupId: Scalars['Int']
  managedCompanies?: Maybe<Array<Company>>
  usergroup?: Maybe<Usergroup>
}

export type UserAddressesArgs = {
  type?: Maybe<AddressType>
  isDefault?: Maybe<YesNo>
}

export type UserAttributesArgs = {
  filter?: Maybe<AttributeFilterInput>
}

export type UserAttributeValuesArgs = {
  filter?: Maybe<AttributeFilterInput>
}

export type UserAclListArgs = {
  permission: Permission
}

export type UserIsAllowedArgs = {
  userId: Scalars['Int']
  permission: Permission
}

export type UserAddressCreateInput = {
  firstName?: Maybe<Scalars['String']>
  middleName?: Maybe<Scalars['String']>
  lastName?: Maybe<Scalars['String']>
  gender?: Maybe<Gender>
  company?: Maybe<Scalars['String']>
  street: Scalars['String']
  number?: Maybe<Scalars['String']>
  numberExtension?: Maybe<Scalars['String']>
  postalCode: Scalars['String']
  city: Scalars['String']
  region?: Maybe<Scalars['String']>
  country: Scalars['String']
  phone?: Maybe<Scalars['String']>
  mobile?: Maybe<Scalars['String']>
  email?: Maybe<Scalars['String']>
  code?: Maybe<Scalars['String']>
  notes?: Maybe<Scalars['String']>
  isDefault?: Maybe<YesNo>
  userId: Scalars['Int']
  type: AddressType
}

export type UserAddressDeleteInput = {
  id: Scalars['Int']
  userId: Scalars['Int']
}

export type UserAddressUpdateInput = {
  firstName?: Maybe<Scalars['String']>
  middleName?: Maybe<Scalars['String']>
  lastName?: Maybe<Scalars['String']>
  gender?: Maybe<Gender>
  company?: Maybe<Scalars['String']>
  street?: Maybe<Scalars['String']>
  number?: Maybe<Scalars['String']>
  numberExtension?: Maybe<Scalars['String']>
  postalCode?: Maybe<Scalars['String']>
  city?: Maybe<Scalars['String']>
  region?: Maybe<Scalars['String']>
  country?: Maybe<Scalars['String']>
  phone?: Maybe<Scalars['String']>
  mobile?: Maybe<Scalars['String']>
  email?: Maybe<Scalars['String']>
  code?: Maybe<Scalars['String']>
  notes?: Maybe<Scalars['String']>
  isDefault?: Maybe<YesNo>
  userId: Scalars['Int']
  id: Scalars['Int']
}

export type UserClaims = {
  __typename?: 'UserClaims'
  userId: Scalars['Int']
  userDirectoryId: Scalars['Int']
  roles: Array<Scalars['String']>
  discounts: Array<Scalars['String']>
  acllist: Array<Scalars['Int']>
  class: Scalars['String']
}

export type Usergroup = {
  __typename?: 'Usergroup'
  id: Scalars['Int']
  usergroupId: Scalars['Int']
  name: Scalars['String']
  hidden?: Maybe<YesNo>
  inheritProductList?: Maybe<YesNo>
  path?: Maybe<Scalars['String']>
  slug?: Maybe<Scalars['String']>
  tag?: Maybe<Scalars['String']>
  dateCreated?: Maybe<Scalars['DateTime']>
  parentUsergroupId: Scalars['Int']
  usergroup: Usergroup
  usergroups: Array<Usergroup>
  companies?: Maybe<CompaniesResponse>
  customers: Array<Customer>
}

export type UsergroupCompaniesArgs = {
  input?: Maybe<CompanySearchArguments>
}

export type UsergroupSearchArguments = {
  name?: Maybe<Scalars['String']>
  page?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  sort?: Maybe<Array<UsergroupSortInput>>
}

export enum UsergroupSortableFields {
  Name = 'name'
}

export type UsergroupSortInput = {
  field: UsergroupSortableFields
  order?: Maybe<SortOrder>
}

export type UsergroupsResponse = {
  __typename?: 'UsergroupsResponse'
  items: Array<Usergroup>
  itemsFound: Scalars['Int']
  offset: Scalars['Int']
  page: Scalars['Int']
  pages: Scalars['Int']
  start: Scalars['Int']
  end: Scalars['Int']
}

export type UserManagementAttributeSearchInput = {
  type: AttributeType
  name: Scalars['String']
  textValue?: Maybe<LocalizedStringArrayInput>
  enumValue?: Maybe<Array<Scalars['String']>>
  intValue?: Maybe<Scalars['Int']>
  decimalValue?: Maybe<Scalars['Float']>
}

export type UserManagementAttributeValueInput = {
  type: AttributeType
  name: Scalars['String']
  textValue?: Maybe<LocalizedStringArrayInput>
  enumValue?: Maybe<Array<Scalars['String']>>
  intValue?: Maybe<Scalars['Int']>
  decimalValue?: Maybe<Scalars['Float']>
}

export type VerifyToken = {
  __typename?: 'VerifyToken'
  uid: Scalars['String']
  name: Scalars['String']
  claims?: Maybe<Scalars['JSONObject']>
  iss: Scalars['String']
  aud: Scalars['String']
  auth_time: Scalars['Int']
  user_id: Scalars['String']
  sub: Scalars['String']
  iat: Scalars['Int']
  exp: Scalars['Int']
  email: Scalars['String']
  email_verified: Scalars['Boolean']
  firebase?: Maybe<Firebase>
}

export type VerifyTokenInput = {
  token: Scalars['String']
}

export type Warehouse = {
  __typename?: 'Warehouse'
  id: Scalars['ID']
  addressId?: Maybe<Scalars['Int']>
  address?: Maybe<WarehouseAddress>
  name: Scalars['String']
  description: Scalars['String']
  notes: Scalars['String']
  isActive: Scalars['Boolean']
  isStore: Scalars['Boolean']
  isPickupLocation: Scalars['Boolean']
  shopId?: Maybe<Scalars['Int']>
  businessHours: Array<BusinessHours>
  createdAt: Scalars['DateTime']
  lastModifiedAt: Scalars['DateTime']
}

export type WarehouseAddress = {
  __typename?: 'WarehouseAddress'
  id: Scalars['Int']
  firstName?: Maybe<Scalars['String']>
  middleName?: Maybe<Scalars['String']>
  lastName?: Maybe<Scalars['String']>
  gender?: Maybe<Gender>
  company?: Maybe<Scalars['String']>
  street: Scalars['String']
  number?: Maybe<Scalars['String']>
  numberExtension?: Maybe<Scalars['String']>
  postalCode: Scalars['String']
  city: Scalars['String']
  region?: Maybe<Scalars['String']>
  country: Scalars['String']
  phone?: Maybe<Scalars['String']>
  mobile?: Maybe<Scalars['String']>
  email?: Maybe<Scalars['String']>
  fax?: Maybe<Scalars['String']>
  code?: Maybe<Scalars['String']>
  notes?: Maybe<Scalars['String']>
  icp?: Maybe<YesNo>
  url?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
}

export type WarehousesResponse = {
  __typename?: 'WarehousesResponse'
  items: Array<Warehouse>
  itemsFound: Scalars['Int']
  offset: Scalars['Int']
  page: Scalars['Int']
  pages: Scalars['Int']
  start: Scalars['Int']
  end: Scalars['Int']
}

export type WarehousesSearchInput = {
  isActive?: Maybe<Scalars['Boolean']>
  isStore?: Maybe<Scalars['Boolean']>
  isPickupLocation?: Maybe<Scalars['Boolean']>
  page?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
}

export enum YesNo {
  Y = 'Y',
  N = 'N'
}
