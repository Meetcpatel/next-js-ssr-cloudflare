import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any; }
  /** The `Upload` scalar type represents a file upload. */
  Upload: { input: any; output: any; }
};

export type Address = {
  __typename?: 'Address';
  address?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  eventName?: Maybe<Array<Event>>;
  eventNameCount?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  isDeleted?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  remark?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
};


export type AddressEventNameArgs = {
  cursor?: InputMaybe<EventWhereUniqueInput>;
  orderBy?: Array<EventOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: EventWhereInput;
};


export type AddressEventNameCountArgs = {
  where?: EventWhereInput;
};

export type AddressCreateInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  eventName?: InputMaybe<EventRelateToManyForCreateInput>;
  isDeleted?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  remark?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<UserRelateToOneForCreateInput>;
};

export type AddressManyRelationFilter = {
  every?: InputMaybe<AddressWhereInput>;
  none?: InputMaybe<AddressWhereInput>;
  some?: InputMaybe<AddressWhereInput>;
};

export type AddressOrderByInput = {
  address?: InputMaybe<OrderDirection>;
  createdAt?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  isDeleted?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
  remark?: InputMaybe<OrderDirection>;
};

export type AddressRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<AddressWhereUniqueInput>>;
  create?: InputMaybe<Array<AddressCreateInput>>;
};

export type AddressRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<AddressWhereUniqueInput>>;
  create?: InputMaybe<Array<AddressCreateInput>>;
  disconnect?: InputMaybe<Array<AddressWhereUniqueInput>>;
  set?: InputMaybe<Array<AddressWhereUniqueInput>>;
};

export type AddressRelateToOneForCreateInput = {
  connect?: InputMaybe<AddressWhereUniqueInput>;
  create?: InputMaybe<AddressCreateInput>;
};

export type AddressRelateToOneForUpdateInput = {
  connect?: InputMaybe<AddressWhereUniqueInput>;
  create?: InputMaybe<AddressCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

export type AddressUpdateArgs = {
  data: AddressUpdateInput;
  where: AddressWhereUniqueInput;
};

export type AddressUpdateInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  eventName?: InputMaybe<EventRelateToManyForUpdateInput>;
  isDeleted?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  remark?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<UserRelateToOneForUpdateInput>;
};

export type AddressWhereInput = {
  AND?: InputMaybe<Array<AddressWhereInput>>;
  NOT?: InputMaybe<Array<AddressWhereInput>>;
  OR?: InputMaybe<Array<AddressWhereInput>>;
  address?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  eventName?: InputMaybe<EventManyRelationFilter>;
  id?: InputMaybe<IdFilter>;
  isDeleted?: InputMaybe<BooleanFilter>;
  name?: InputMaybe<StringFilter>;
  remark?: InputMaybe<StringFilter>;
  user?: InputMaybe<UserWhereInput>;
};

export type AddressWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type Arena = {
  __typename?: 'Arena';
  arenaBanner?: Maybe<ImageFieldOutput>;
  arenaDescription?: Maybe<Arena_ArenaDescription_Document>;
  arenaImage?: Maybe<ImageFieldOutput>;
  arenaName?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  links?: Maybe<Scalars['JSON']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  operatingHours?: Maybe<Scalars['JSON']['output']>;
  pricingLink?: Maybe<Scalars['String']['output']>;
  showArena?: Maybe<Scalars['Boolean']['output']>;
};

export type ArenaCreateInput = {
  arenaBanner?: InputMaybe<ImageFieldInput>;
  arenaDescription?: InputMaybe<Scalars['JSON']['input']>;
  arenaImage?: InputMaybe<ImageFieldInput>;
  arenaName?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  links?: InputMaybe<Scalars['JSON']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  operatingHours?: InputMaybe<Scalars['JSON']['input']>;
  pricingLink?: InputMaybe<Scalars['String']['input']>;
  showArena?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ArenaOrderByInput = {
  arenaName?: InputMaybe<OrderDirection>;
  createdAt?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  location?: InputMaybe<OrderDirection>;
  pricingLink?: InputMaybe<OrderDirection>;
  showArena?: InputMaybe<OrderDirection>;
};

export type ArenaUpdateArgs = {
  data: ArenaUpdateInput;
  where: ArenaWhereUniqueInput;
};

export type ArenaUpdateInput = {
  arenaBanner?: InputMaybe<ImageFieldInput>;
  arenaDescription?: InputMaybe<Scalars['JSON']['input']>;
  arenaImage?: InputMaybe<ImageFieldInput>;
  arenaName?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  links?: InputMaybe<Scalars['JSON']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  operatingHours?: InputMaybe<Scalars['JSON']['input']>;
  pricingLink?: InputMaybe<Scalars['String']['input']>;
  showArena?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ArenaWhereInput = {
  AND?: InputMaybe<Array<ArenaWhereInput>>;
  NOT?: InputMaybe<Array<ArenaWhereInput>>;
  OR?: InputMaybe<Array<ArenaWhereInput>>;
  arenaName?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<IdFilter>;
  location?: InputMaybe<StringFilter>;
  pricingLink?: InputMaybe<StringFilter>;
  showArena?: InputMaybe<BooleanFilter>;
};

export type ArenaWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type Arena_ArenaDescription_Document = {
  __typename?: 'Arena_arenaDescription_Document';
  document: Scalars['JSON']['output'];
};


export type Arena_ArenaDescription_DocumentDocumentArgs = {
  hydrateRelationships?: Scalars['Boolean']['input'];
};

export type AuthenticatedItem = User;

export type BooleanFilter = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<BooleanFilter>;
};

export type Community = {
  __typename?: 'Community';
  commuinityDescription?: Maybe<Community_CommuinityDescription_Document>;
  communityBanner?: Maybe<ImageFieldOutput>;
  communityImage?: Maybe<ImageFieldOutput>;
  communityName?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  links?: Maybe<Scalars['JSON']['output']>;
  showCommunity?: Maybe<Scalars['Boolean']['output']>;
};

export type CommunityCreateInput = {
  commuinityDescription?: InputMaybe<Scalars['JSON']['input']>;
  communityBanner?: InputMaybe<ImageFieldInput>;
  communityImage?: InputMaybe<ImageFieldInput>;
  communityName?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  links?: InputMaybe<Scalars['JSON']['input']>;
  showCommunity?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CommunityOrderByInput = {
  communityName?: InputMaybe<OrderDirection>;
  createdAt?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  showCommunity?: InputMaybe<OrderDirection>;
};

export type CommunityUpdateArgs = {
  data: CommunityUpdateInput;
  where: CommunityWhereUniqueInput;
};

export type CommunityUpdateInput = {
  commuinityDescription?: InputMaybe<Scalars['JSON']['input']>;
  communityBanner?: InputMaybe<ImageFieldInput>;
  communityImage?: InputMaybe<ImageFieldInput>;
  communityName?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  links?: InputMaybe<Scalars['JSON']['input']>;
  showCommunity?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CommunityWhereInput = {
  AND?: InputMaybe<Array<CommunityWhereInput>>;
  NOT?: InputMaybe<Array<CommunityWhereInput>>;
  OR?: InputMaybe<Array<CommunityWhereInput>>;
  communityName?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<IdFilter>;
  showCommunity?: InputMaybe<BooleanFilter>;
};

export type CommunityWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type Community_CommuinityDescription_Document = {
  __typename?: 'Community_commuinityDescription_Document';
  document: Scalars['JSON']['output'];
};


export type Community_CommuinityDescription_DocumentDocumentArgs = {
  hydrateRelationships?: Scalars['Boolean']['input'];
};

export type CreateInitialUserInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
};

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<DateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type DateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<DateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type Event = {
  __typename?: 'Event';
  address?: Maybe<Address>;
  canViewParticipantsBeforeJoin?: Maybe<Scalars['String']['output']>;
  dateTime?: Maybe<Scalars['DateTime']['output']>;
  endDateTime?: Maybe<Scalars['DateTime']['output']>;
  eventDescription?: Maybe<Scalars['String']['output']>;
  eventImage?: Maybe<ImageFieldOutput>;
  eventName?: Maybe<Scalars['String']['output']>;
  eventPayment?: Maybe<Array<EventPayment>>;
  eventPaymentCount?: Maybe<Scalars['Int']['output']>;
  eventPaymentMethod?: Maybe<Array<EventPaymentMethod>>;
  eventPaymentMethodCount?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  isEventEnrollmentOpen?: Maybe<Scalars['String']['output']>;
  isEventPublic?: Maybe<Scalars['String']['output']>;
  isPublished?: Maybe<Scalars['Boolean']['output']>;
  maxParticipants?: Maybe<Scalars['Int']['output']>;
  refundEventPayment?: Maybe<Array<RefundEventPayment>>;
  refundEventPaymentCount?: Maybe<Scalars['Int']['output']>;
  report?: Maybe<Array<Report>>;
  reportCount?: Maybe<Scalars['Int']['output']>;
  ticketType?: Maybe<Array<TicketType>>;
  ticketTypeCount?: Maybe<Scalars['Int']['output']>;
  user?: Maybe<User>;
};


export type EventEventPaymentArgs = {
  cursor?: InputMaybe<EventPaymentWhereUniqueInput>;
  orderBy?: Array<EventPaymentOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: EventPaymentWhereInput;
};


export type EventEventPaymentCountArgs = {
  where?: EventPaymentWhereInput;
};


export type EventEventPaymentMethodArgs = {
  cursor?: InputMaybe<EventPaymentMethodWhereUniqueInput>;
  orderBy?: Array<EventPaymentMethodOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: EventPaymentMethodWhereInput;
};


export type EventEventPaymentMethodCountArgs = {
  where?: EventPaymentMethodWhereInput;
};


export type EventRefundEventPaymentArgs = {
  cursor?: InputMaybe<RefundEventPaymentWhereUniqueInput>;
  orderBy?: Array<RefundEventPaymentOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: RefundEventPaymentWhereInput;
};


export type EventRefundEventPaymentCountArgs = {
  where?: RefundEventPaymentWhereInput;
};


export type EventReportArgs = {
  cursor?: InputMaybe<ReportWhereUniqueInput>;
  orderBy?: Array<ReportOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: ReportWhereInput;
};


export type EventReportCountArgs = {
  where?: ReportWhereInput;
};


export type EventTicketTypeArgs = {
  cursor?: InputMaybe<TicketTypeWhereUniqueInput>;
  orderBy?: Array<TicketTypeOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: TicketTypeWhereInput;
};


export type EventTicketTypeCountArgs = {
  where?: TicketTypeWhereInput;
};

export type EventCreateInput = {
  address?: InputMaybe<AddressRelateToOneForCreateInput>;
  canViewParticipantsBeforeJoin?: InputMaybe<Scalars['String']['input']>;
  dateTime?: InputMaybe<Scalars['DateTime']['input']>;
  endDateTime?: InputMaybe<Scalars['DateTime']['input']>;
  eventDescription?: InputMaybe<Scalars['String']['input']>;
  eventImage?: InputMaybe<ImageFieldInput>;
  eventName?: InputMaybe<Scalars['String']['input']>;
  eventPayment?: InputMaybe<EventPaymentRelateToManyForCreateInput>;
  eventPaymentMethod?: InputMaybe<EventPaymentMethodRelateToManyForCreateInput>;
  isEventEnrollmentOpen?: InputMaybe<Scalars['String']['input']>;
  isEventPublic?: InputMaybe<Scalars['String']['input']>;
  isPublished?: InputMaybe<Scalars['Boolean']['input']>;
  maxParticipants?: InputMaybe<Scalars['Int']['input']>;
  refundEventPayment?: InputMaybe<RefundEventPaymentRelateToManyForCreateInput>;
  report?: InputMaybe<ReportRelateToManyForCreateInput>;
  ticketType?: InputMaybe<TicketTypeRelateToManyForCreateInput>;
  user?: InputMaybe<UserRelateToOneForCreateInput>;
};

export type EventManyRelationFilter = {
  every?: InputMaybe<EventWhereInput>;
  none?: InputMaybe<EventWhereInput>;
  some?: InputMaybe<EventWhereInput>;
};

export type EventOrderByInput = {
  canViewParticipantsBeforeJoin?: InputMaybe<OrderDirection>;
  dateTime?: InputMaybe<OrderDirection>;
  endDateTime?: InputMaybe<OrderDirection>;
  eventDescription?: InputMaybe<OrderDirection>;
  eventName?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  isEventEnrollmentOpen?: InputMaybe<OrderDirection>;
  isEventPublic?: InputMaybe<OrderDirection>;
  isPublished?: InputMaybe<OrderDirection>;
  maxParticipants?: InputMaybe<OrderDirection>;
};

export type EventPayment = {
  __typename?: 'EventPayment';
  dateTime?: Maybe<Scalars['DateTime']['output']>;
  eventImage?: Maybe<ImageFieldOutput>;
  eventName?: Maybe<Event>;
  id: Scalars['ID']['output'];
  remark?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  ticketType?: Maybe<TicketType>;
  user?: Maybe<User>;
};

export type EventPaymentCreateInput = {
  dateTime?: InputMaybe<Scalars['DateTime']['input']>;
  eventImage?: InputMaybe<ImageFieldInput>;
  eventName?: InputMaybe<EventRelateToOneForCreateInput>;
  remark?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  ticketType?: InputMaybe<TicketTypeRelateToOneForCreateInput>;
  user?: InputMaybe<UserRelateToOneForCreateInput>;
};

export type EventPaymentManyRelationFilter = {
  every?: InputMaybe<EventPaymentWhereInput>;
  none?: InputMaybe<EventPaymentWhereInput>;
  some?: InputMaybe<EventPaymentWhereInput>;
};

export type EventPaymentMethod = {
  __typename?: 'EventPaymentMethod';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  eventName?: Maybe<Array<Event>>;
  eventNameCount?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  isDeleted?: Maybe<Scalars['Boolean']['output']>;
  paymentAccount?: Maybe<Scalars['String']['output']>;
  paymentInstruction?: Maybe<Scalars['String']['output']>;
  paymentTitle?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
};


export type EventPaymentMethodEventNameArgs = {
  cursor?: InputMaybe<EventWhereUniqueInput>;
  orderBy?: Array<EventOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: EventWhereInput;
};


export type EventPaymentMethodEventNameCountArgs = {
  where?: EventWhereInput;
};

export type EventPaymentMethodCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  eventName?: InputMaybe<EventRelateToManyForCreateInput>;
  isDeleted?: InputMaybe<Scalars['Boolean']['input']>;
  paymentAccount?: InputMaybe<Scalars['String']['input']>;
  paymentInstruction?: InputMaybe<Scalars['String']['input']>;
  paymentTitle?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<UserRelateToOneForCreateInput>;
};

export type EventPaymentMethodManyRelationFilter = {
  every?: InputMaybe<EventPaymentMethodWhereInput>;
  none?: InputMaybe<EventPaymentMethodWhereInput>;
  some?: InputMaybe<EventPaymentMethodWhereInput>;
};

export type EventPaymentMethodOrderByInput = {
  createdAt?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  isDeleted?: InputMaybe<OrderDirection>;
  paymentAccount?: InputMaybe<OrderDirection>;
  paymentInstruction?: InputMaybe<OrderDirection>;
  paymentTitle?: InputMaybe<OrderDirection>;
};

export type EventPaymentMethodRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<EventPaymentMethodWhereUniqueInput>>;
  create?: InputMaybe<Array<EventPaymentMethodCreateInput>>;
};

export type EventPaymentMethodRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<EventPaymentMethodWhereUniqueInput>>;
  create?: InputMaybe<Array<EventPaymentMethodCreateInput>>;
  disconnect?: InputMaybe<Array<EventPaymentMethodWhereUniqueInput>>;
  set?: InputMaybe<Array<EventPaymentMethodWhereUniqueInput>>;
};

export type EventPaymentMethodUpdateArgs = {
  data: EventPaymentMethodUpdateInput;
  where: EventPaymentMethodWhereUniqueInput;
};

export type EventPaymentMethodUpdateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  eventName?: InputMaybe<EventRelateToManyForUpdateInput>;
  isDeleted?: InputMaybe<Scalars['Boolean']['input']>;
  paymentAccount?: InputMaybe<Scalars['String']['input']>;
  paymentInstruction?: InputMaybe<Scalars['String']['input']>;
  paymentTitle?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<UserRelateToOneForUpdateInput>;
};

export type EventPaymentMethodWhereInput = {
  AND?: InputMaybe<Array<EventPaymentMethodWhereInput>>;
  NOT?: InputMaybe<Array<EventPaymentMethodWhereInput>>;
  OR?: InputMaybe<Array<EventPaymentMethodWhereInput>>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  eventName?: InputMaybe<EventManyRelationFilter>;
  id?: InputMaybe<IdFilter>;
  isDeleted?: InputMaybe<BooleanFilter>;
  paymentAccount?: InputMaybe<StringFilter>;
  paymentInstruction?: InputMaybe<StringFilter>;
  paymentTitle?: InputMaybe<StringFilter>;
  user?: InputMaybe<UserWhereInput>;
};

export type EventPaymentMethodWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type EventPaymentOrderByInput = {
  dateTime?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  remark?: InputMaybe<OrderDirection>;
  status?: InputMaybe<OrderDirection>;
};

export type EventPaymentRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<EventPaymentWhereUniqueInput>>;
  create?: InputMaybe<Array<EventPaymentCreateInput>>;
};

export type EventPaymentRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<EventPaymentWhereUniqueInput>>;
  create?: InputMaybe<Array<EventPaymentCreateInput>>;
  disconnect?: InputMaybe<Array<EventPaymentWhereUniqueInput>>;
  set?: InputMaybe<Array<EventPaymentWhereUniqueInput>>;
};

export type EventPaymentUpdateArgs = {
  data: EventPaymentUpdateInput;
  where: EventPaymentWhereUniqueInput;
};

export type EventPaymentUpdateInput = {
  dateTime?: InputMaybe<Scalars['DateTime']['input']>;
  eventImage?: InputMaybe<ImageFieldInput>;
  eventName?: InputMaybe<EventRelateToOneForUpdateInput>;
  remark?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  ticketType?: InputMaybe<TicketTypeRelateToOneForUpdateInput>;
  user?: InputMaybe<UserRelateToOneForUpdateInput>;
};

export type EventPaymentWhereInput = {
  AND?: InputMaybe<Array<EventPaymentWhereInput>>;
  NOT?: InputMaybe<Array<EventPaymentWhereInput>>;
  OR?: InputMaybe<Array<EventPaymentWhereInput>>;
  dateTime?: InputMaybe<DateTimeNullableFilter>;
  eventName?: InputMaybe<EventWhereInput>;
  id?: InputMaybe<IdFilter>;
  remark?: InputMaybe<StringFilter>;
  status?: InputMaybe<StringNullableFilter>;
  ticketType?: InputMaybe<TicketTypeWhereInput>;
  user?: InputMaybe<UserWhereInput>;
};

export type EventPaymentWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type EventRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<EventWhereUniqueInput>>;
  create?: InputMaybe<Array<EventCreateInput>>;
};

export type EventRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<EventWhereUniqueInput>>;
  create?: InputMaybe<Array<EventCreateInput>>;
  disconnect?: InputMaybe<Array<EventWhereUniqueInput>>;
  set?: InputMaybe<Array<EventWhereUniqueInput>>;
};

export type EventRelateToOneForCreateInput = {
  connect?: InputMaybe<EventWhereUniqueInput>;
  create?: InputMaybe<EventCreateInput>;
};

export type EventRelateToOneForUpdateInput = {
  connect?: InputMaybe<EventWhereUniqueInput>;
  create?: InputMaybe<EventCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

export type EventUpdateArgs = {
  data: EventUpdateInput;
  where: EventWhereUniqueInput;
};

export type EventUpdateInput = {
  address?: InputMaybe<AddressRelateToOneForUpdateInput>;
  canViewParticipantsBeforeJoin?: InputMaybe<Scalars['String']['input']>;
  dateTime?: InputMaybe<Scalars['DateTime']['input']>;
  endDateTime?: InputMaybe<Scalars['DateTime']['input']>;
  eventDescription?: InputMaybe<Scalars['String']['input']>;
  eventImage?: InputMaybe<ImageFieldInput>;
  eventName?: InputMaybe<Scalars['String']['input']>;
  eventPayment?: InputMaybe<EventPaymentRelateToManyForUpdateInput>;
  eventPaymentMethod?: InputMaybe<EventPaymentMethodRelateToManyForUpdateInput>;
  isEventEnrollmentOpen?: InputMaybe<Scalars['String']['input']>;
  isEventPublic?: InputMaybe<Scalars['String']['input']>;
  isPublished?: InputMaybe<Scalars['Boolean']['input']>;
  maxParticipants?: InputMaybe<Scalars['Int']['input']>;
  refundEventPayment?: InputMaybe<RefundEventPaymentRelateToManyForUpdateInput>;
  report?: InputMaybe<ReportRelateToManyForUpdateInput>;
  ticketType?: InputMaybe<TicketTypeRelateToManyForUpdateInput>;
  user?: InputMaybe<UserRelateToOneForUpdateInput>;
};

export type EventWhereInput = {
  AND?: InputMaybe<Array<EventWhereInput>>;
  NOT?: InputMaybe<Array<EventWhereInput>>;
  OR?: InputMaybe<Array<EventWhereInput>>;
  address?: InputMaybe<AddressWhereInput>;
  canViewParticipantsBeforeJoin?: InputMaybe<StringNullableFilter>;
  dateTime?: InputMaybe<DateTimeFilter>;
  endDateTime?: InputMaybe<DateTimeFilter>;
  eventDescription?: InputMaybe<StringFilter>;
  eventName?: InputMaybe<StringFilter>;
  eventPayment?: InputMaybe<EventPaymentManyRelationFilter>;
  eventPaymentMethod?: InputMaybe<EventPaymentMethodManyRelationFilter>;
  id?: InputMaybe<IdFilter>;
  isEventEnrollmentOpen?: InputMaybe<StringNullableFilter>;
  isEventPublic?: InputMaybe<StringNullableFilter>;
  isPublished?: InputMaybe<BooleanFilter>;
  maxParticipants?: InputMaybe<IntNullableFilter>;
  refundEventPayment?: InputMaybe<RefundEventPaymentManyRelationFilter>;
  report?: InputMaybe<ReportManyRelationFilter>;
  ticketType?: InputMaybe<TicketTypeManyRelationFilter>;
  user?: InputMaybe<UserWhereInput>;
};

export type EventWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type FloatNullableFilter = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<FloatNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type GroupChatParticipant = {
  __typename?: 'GroupChatParticipant';
  chatExited?: Maybe<Scalars['String']['output']>;
  event?: Maybe<Event>;
  id: Scalars['ID']['output'];
  reJoinRequested?: Maybe<Scalars['String']['output']>;
  reJoinRequestedDate?: Maybe<Scalars['DateTime']['output']>;
  user?: Maybe<User>;
};

export type GroupChatParticipantCreateInput = {
  chatExited?: InputMaybe<Scalars['String']['input']>;
  event?: InputMaybe<EventRelateToOneForCreateInput>;
  reJoinRequested?: InputMaybe<Scalars['String']['input']>;
  reJoinRequestedDate?: InputMaybe<Scalars['DateTime']['input']>;
  user?: InputMaybe<UserRelateToOneForCreateInput>;
};

export type GroupChatParticipantOrderByInput = {
  chatExited?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  reJoinRequested?: InputMaybe<OrderDirection>;
  reJoinRequestedDate?: InputMaybe<OrderDirection>;
};

export type GroupChatParticipantUpdateArgs = {
  data: GroupChatParticipantUpdateInput;
  where: GroupChatParticipantWhereUniqueInput;
};

export type GroupChatParticipantUpdateInput = {
  chatExited?: InputMaybe<Scalars['String']['input']>;
  event?: InputMaybe<EventRelateToOneForUpdateInput>;
  reJoinRequested?: InputMaybe<Scalars['String']['input']>;
  reJoinRequestedDate?: InputMaybe<Scalars['DateTime']['input']>;
  user?: InputMaybe<UserRelateToOneForUpdateInput>;
};

export type GroupChatParticipantWhereInput = {
  AND?: InputMaybe<Array<GroupChatParticipantWhereInput>>;
  NOT?: InputMaybe<Array<GroupChatParticipantWhereInput>>;
  OR?: InputMaybe<Array<GroupChatParticipantWhereInput>>;
  chatExited?: InputMaybe<StringNullableFilter>;
  event?: InputMaybe<EventWhereInput>;
  id?: InputMaybe<IdFilter>;
  reJoinRequested?: InputMaybe<StringNullableFilter>;
  reJoinRequestedDate?: InputMaybe<DateTimeNullableFilter>;
  user?: InputMaybe<UserWhereInput>;
};

export type GroupChatParticipantWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type IdFilter = {
  equals?: InputMaybe<Scalars['ID']['input']>;
  gt?: InputMaybe<Scalars['ID']['input']>;
  gte?: InputMaybe<Scalars['ID']['input']>;
  in?: InputMaybe<Array<Scalars['ID']['input']>>;
  lt?: InputMaybe<Scalars['ID']['input']>;
  lte?: InputMaybe<Scalars['ID']['input']>;
  not?: InputMaybe<IdFilter>;
  notIn?: InputMaybe<Array<Scalars['ID']['input']>>;
};

export enum ImageExtension {
  Gif = 'gif',
  Jpg = 'jpg',
  Png = 'png',
  Webp = 'webp'
}

export type ImageFieldInput = {
  upload: Scalars['Upload']['input'];
};

export type ImageFieldOutput = {
  __typename?: 'ImageFieldOutput';
  extension: ImageExtension;
  filesize: Scalars['Int']['output'];
  height: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  url: Scalars['String']['output'];
  width: Scalars['Int']['output'];
};

export type IntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<IntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type KeystoneAdminMeta = {
  __typename?: 'KeystoneAdminMeta';
  list?: Maybe<KeystoneAdminUiListMeta>;
  lists: Array<KeystoneAdminUiListMeta>;
};


export type KeystoneAdminMetaListArgs = {
  key: Scalars['String']['input'];
};

export type KeystoneAdminUiFieldGroupMeta = {
  __typename?: 'KeystoneAdminUIFieldGroupMeta';
  description?: Maybe<Scalars['String']['output']>;
  fields: Array<KeystoneAdminUiFieldMeta>;
  label: Scalars['String']['output'];
};

export type KeystoneAdminUiFieldMeta = {
  __typename?: 'KeystoneAdminUIFieldMeta';
  createView: KeystoneAdminUiFieldMetaCreateView;
  customViewsIndex?: Maybe<Scalars['Int']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  fieldMeta?: Maybe<Scalars['JSON']['output']>;
  isFilterable: Scalars['Boolean']['output'];
  isNonNull?: Maybe<Array<KeystoneAdminUiFieldMetaIsNonNull>>;
  isOrderable: Scalars['Boolean']['output'];
  itemView?: Maybe<KeystoneAdminUiFieldMetaItemView>;
  label: Scalars['String']['output'];
  listView: KeystoneAdminUiFieldMetaListView;
  path: Scalars['String']['output'];
  search?: Maybe<QueryMode>;
  viewsIndex: Scalars['Int']['output'];
};


export type KeystoneAdminUiFieldMetaItemViewArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type KeystoneAdminUiFieldMetaCreateView = {
  __typename?: 'KeystoneAdminUIFieldMetaCreateView';
  fieldMode: KeystoneAdminUiFieldMetaCreateViewFieldMode;
};

export enum KeystoneAdminUiFieldMetaCreateViewFieldMode {
  Edit = 'edit',
  Hidden = 'hidden'
}

export enum KeystoneAdminUiFieldMetaIsNonNull {
  Create = 'create',
  Read = 'read',
  Update = 'update'
}

export type KeystoneAdminUiFieldMetaItemView = {
  __typename?: 'KeystoneAdminUIFieldMetaItemView';
  fieldMode?: Maybe<KeystoneAdminUiFieldMetaItemViewFieldMode>;
  fieldPosition?: Maybe<KeystoneAdminUiFieldMetaItemViewFieldPosition>;
};

export enum KeystoneAdminUiFieldMetaItemViewFieldMode {
  Edit = 'edit',
  Hidden = 'hidden',
  Read = 'read'
}

export enum KeystoneAdminUiFieldMetaItemViewFieldPosition {
  Form = 'form',
  Sidebar = 'sidebar'
}

export type KeystoneAdminUiFieldMetaListView = {
  __typename?: 'KeystoneAdminUIFieldMetaListView';
  fieldMode: KeystoneAdminUiFieldMetaListViewFieldMode;
};

export enum KeystoneAdminUiFieldMetaListViewFieldMode {
  Hidden = 'hidden',
  Read = 'read'
}

export type KeystoneAdminUiListMeta = {
  __typename?: 'KeystoneAdminUIListMeta';
  description?: Maybe<Scalars['String']['output']>;
  fields: Array<KeystoneAdminUiFieldMeta>;
  groups: Array<KeystoneAdminUiFieldGroupMeta>;
  hideCreate: Scalars['Boolean']['output'];
  hideDelete: Scalars['Boolean']['output'];
  initialColumns: Array<Scalars['String']['output']>;
  initialSort?: Maybe<KeystoneAdminUiSort>;
  isHidden: Scalars['Boolean']['output'];
  isSingleton: Scalars['Boolean']['output'];
  itemQueryName: Scalars['String']['output'];
  key: Scalars['String']['output'];
  label: Scalars['String']['output'];
  labelField: Scalars['String']['output'];
  listQueryName: Scalars['String']['output'];
  pageSize: Scalars['Int']['output'];
  path: Scalars['String']['output'];
  plural: Scalars['String']['output'];
  singular: Scalars['String']['output'];
};

export type KeystoneAdminUiSort = {
  __typename?: 'KeystoneAdminUISort';
  direction: KeystoneAdminUiSortDirection;
  field: Scalars['String']['output'];
};

export enum KeystoneAdminUiSortDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type KeystoneMeta = {
  __typename?: 'KeystoneMeta';
  adminMeta: KeystoneAdminMeta;
};

export type MarketPlace = {
  __typename?: 'MarketPlace';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  isDeleted?: Maybe<Scalars['Boolean']['output']>;
  isSold?: Maybe<Scalars['Boolean']['output']>;
  itemDescription?: Maybe<MarketPlace_ItemDescription_Document>;
  itemImage?: Maybe<Array<MarketPlaceImage>>;
  itemImageCount?: Maybe<Scalars['Int']['output']>;
  itemName?: Maybe<Scalars['String']['output']>;
  itemPrice?: Maybe<Scalars['Float']['output']>;
  itemTag?: Maybe<Array<MartketPlaceTag>>;
  itemTagCount?: Maybe<Scalars['Int']['output']>;
  keyword?: Maybe<Scalars['String']['output']>;
  lastBumped?: Maybe<Scalars['DateTime']['output']>;
  savedBy?: Maybe<Array<User>>;
  savedByCount?: Maybe<Scalars['Int']['output']>;
  soldAt?: Maybe<Scalars['DateTime']['output']>;
  user?: Maybe<User>;
  views?: Maybe<Array<MarketPlaceItemView>>;
  viewsCount?: Maybe<Scalars['Int']['output']>;
};


export type MarketPlaceItemImageArgs = {
  cursor?: InputMaybe<MarketPlaceImageWhereUniqueInput>;
  orderBy?: Array<MarketPlaceImageOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: MarketPlaceImageWhereInput;
};


export type MarketPlaceItemImageCountArgs = {
  where?: MarketPlaceImageWhereInput;
};


export type MarketPlaceItemTagArgs = {
  cursor?: InputMaybe<MartketPlaceTagWhereUniqueInput>;
  orderBy?: Array<MartketPlaceTagOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: MartketPlaceTagWhereInput;
};


export type MarketPlaceItemTagCountArgs = {
  where?: MartketPlaceTagWhereInput;
};


export type MarketPlaceSavedByArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  orderBy?: Array<UserOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: UserWhereInput;
};


export type MarketPlaceSavedByCountArgs = {
  where?: UserWhereInput;
};


export type MarketPlaceViewsArgs = {
  cursor?: InputMaybe<MarketPlaceItemViewWhereUniqueInput>;
  orderBy?: Array<MarketPlaceItemViewOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: MarketPlaceItemViewWhereInput;
};


export type MarketPlaceViewsCountArgs = {
  where?: MarketPlaceItemViewWhereInput;
};

export type MarketPlaceCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  isDeleted?: InputMaybe<Scalars['Boolean']['input']>;
  isSold?: InputMaybe<Scalars['Boolean']['input']>;
  itemDescription?: InputMaybe<Scalars['JSON']['input']>;
  itemImage?: InputMaybe<MarketPlaceImageRelateToManyForCreateInput>;
  itemName?: InputMaybe<Scalars['String']['input']>;
  itemPrice?: InputMaybe<Scalars['Float']['input']>;
  itemTag?: InputMaybe<MartketPlaceTagRelateToManyForCreateInput>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  lastBumped?: InputMaybe<Scalars['DateTime']['input']>;
  savedBy?: InputMaybe<UserRelateToManyForCreateInput>;
  soldAt?: InputMaybe<Scalars['DateTime']['input']>;
  user?: InputMaybe<UserRelateToOneForCreateInput>;
  views?: InputMaybe<MarketPlaceItemViewRelateToManyForCreateInput>;
};

export type MarketPlaceImage = {
  __typename?: 'MarketPlaceImage';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  itemImage?: Maybe<ImageFieldOutput>;
  itemName?: Maybe<MarketPlace>;
  user?: Maybe<User>;
};

export type MarketPlaceImageCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  itemImage?: InputMaybe<ImageFieldInput>;
  itemName?: InputMaybe<MarketPlaceRelateToOneForCreateInput>;
  user?: InputMaybe<UserRelateToOneForCreateInput>;
};

export type MarketPlaceImageManyRelationFilter = {
  every?: InputMaybe<MarketPlaceImageWhereInput>;
  none?: InputMaybe<MarketPlaceImageWhereInput>;
  some?: InputMaybe<MarketPlaceImageWhereInput>;
};

export type MarketPlaceImageOrderByInput = {
  createdAt?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
};

export type MarketPlaceImageRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<MarketPlaceImageWhereUniqueInput>>;
  create?: InputMaybe<Array<MarketPlaceImageCreateInput>>;
};

export type MarketPlaceImageRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<MarketPlaceImageWhereUniqueInput>>;
  create?: InputMaybe<Array<MarketPlaceImageCreateInput>>;
  disconnect?: InputMaybe<Array<MarketPlaceImageWhereUniqueInput>>;
  set?: InputMaybe<Array<MarketPlaceImageWhereUniqueInput>>;
};

export type MarketPlaceImageUpdateArgs = {
  data: MarketPlaceImageUpdateInput;
  where: MarketPlaceImageWhereUniqueInput;
};

export type MarketPlaceImageUpdateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  itemImage?: InputMaybe<ImageFieldInput>;
  itemName?: InputMaybe<MarketPlaceRelateToOneForUpdateInput>;
  user?: InputMaybe<UserRelateToOneForUpdateInput>;
};

export type MarketPlaceImageWhereInput = {
  AND?: InputMaybe<Array<MarketPlaceImageWhereInput>>;
  NOT?: InputMaybe<Array<MarketPlaceImageWhereInput>>;
  OR?: InputMaybe<Array<MarketPlaceImageWhereInput>>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<IdFilter>;
  itemName?: InputMaybe<MarketPlaceWhereInput>;
  user?: InputMaybe<UserWhereInput>;
};

export type MarketPlaceImageWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type MarketPlaceItemView = {
  __typename?: 'MarketPlaceItemView';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  item?: Maybe<MarketPlace>;
  user?: Maybe<User>;
};

export type MarketPlaceItemViewCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  item?: InputMaybe<MarketPlaceRelateToOneForCreateInput>;
  user?: InputMaybe<UserRelateToOneForCreateInput>;
};

export type MarketPlaceItemViewManyRelationFilter = {
  every?: InputMaybe<MarketPlaceItemViewWhereInput>;
  none?: InputMaybe<MarketPlaceItemViewWhereInput>;
  some?: InputMaybe<MarketPlaceItemViewWhereInput>;
};

export type MarketPlaceItemViewOrderByInput = {
  createdAt?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
};

export type MarketPlaceItemViewRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<MarketPlaceItemViewWhereUniqueInput>>;
  create?: InputMaybe<Array<MarketPlaceItemViewCreateInput>>;
};

export type MarketPlaceItemViewRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<MarketPlaceItemViewWhereUniqueInput>>;
  create?: InputMaybe<Array<MarketPlaceItemViewCreateInput>>;
  disconnect?: InputMaybe<Array<MarketPlaceItemViewWhereUniqueInput>>;
  set?: InputMaybe<Array<MarketPlaceItemViewWhereUniqueInput>>;
};

export type MarketPlaceItemViewUpdateArgs = {
  data: MarketPlaceItemViewUpdateInput;
  where: MarketPlaceItemViewWhereUniqueInput;
};

export type MarketPlaceItemViewUpdateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  item?: InputMaybe<MarketPlaceRelateToOneForUpdateInput>;
  user?: InputMaybe<UserRelateToOneForUpdateInput>;
};

export type MarketPlaceItemViewWhereInput = {
  AND?: InputMaybe<Array<MarketPlaceItemViewWhereInput>>;
  NOT?: InputMaybe<Array<MarketPlaceItemViewWhereInput>>;
  OR?: InputMaybe<Array<MarketPlaceItemViewWhereInput>>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<IdFilter>;
  item?: InputMaybe<MarketPlaceWhereInput>;
  user?: InputMaybe<UserWhereInput>;
};

export type MarketPlaceItemViewWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type MarketPlaceManyRelationFilter = {
  every?: InputMaybe<MarketPlaceWhereInput>;
  none?: InputMaybe<MarketPlaceWhereInput>;
  some?: InputMaybe<MarketPlaceWhereInput>;
};

export type MarketPlaceOrderByInput = {
  createdAt?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  isDeleted?: InputMaybe<OrderDirection>;
  isSold?: InputMaybe<OrderDirection>;
  itemName?: InputMaybe<OrderDirection>;
  itemPrice?: InputMaybe<OrderDirection>;
  keyword?: InputMaybe<OrderDirection>;
  lastBumped?: InputMaybe<OrderDirection>;
  soldAt?: InputMaybe<OrderDirection>;
};

export type MarketPlaceRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<MarketPlaceWhereUniqueInput>>;
  create?: InputMaybe<Array<MarketPlaceCreateInput>>;
};

export type MarketPlaceRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<MarketPlaceWhereUniqueInput>>;
  create?: InputMaybe<Array<MarketPlaceCreateInput>>;
  disconnect?: InputMaybe<Array<MarketPlaceWhereUniqueInput>>;
  set?: InputMaybe<Array<MarketPlaceWhereUniqueInput>>;
};

export type MarketPlaceRelateToOneForCreateInput = {
  connect?: InputMaybe<MarketPlaceWhereUniqueInput>;
  create?: InputMaybe<MarketPlaceCreateInput>;
};

export type MarketPlaceRelateToOneForUpdateInput = {
  connect?: InputMaybe<MarketPlaceWhereUniqueInput>;
  create?: InputMaybe<MarketPlaceCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MarketPlaceUpdateArgs = {
  data: MarketPlaceUpdateInput;
  where: MarketPlaceWhereUniqueInput;
};

export type MarketPlaceUpdateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  isDeleted?: InputMaybe<Scalars['Boolean']['input']>;
  isSold?: InputMaybe<Scalars['Boolean']['input']>;
  itemDescription?: InputMaybe<Scalars['JSON']['input']>;
  itemImage?: InputMaybe<MarketPlaceImageRelateToManyForUpdateInput>;
  itemName?: InputMaybe<Scalars['String']['input']>;
  itemPrice?: InputMaybe<Scalars['Float']['input']>;
  itemTag?: InputMaybe<MartketPlaceTagRelateToManyForUpdateInput>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  lastBumped?: InputMaybe<Scalars['DateTime']['input']>;
  savedBy?: InputMaybe<UserRelateToManyForUpdateInput>;
  soldAt?: InputMaybe<Scalars['DateTime']['input']>;
  user?: InputMaybe<UserRelateToOneForUpdateInput>;
  views?: InputMaybe<MarketPlaceItemViewRelateToManyForUpdateInput>;
};

export type MarketPlaceWhereInput = {
  AND?: InputMaybe<Array<MarketPlaceWhereInput>>;
  NOT?: InputMaybe<Array<MarketPlaceWhereInput>>;
  OR?: InputMaybe<Array<MarketPlaceWhereInput>>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<IdFilter>;
  isDeleted?: InputMaybe<BooleanFilter>;
  isSold?: InputMaybe<BooleanFilter>;
  itemImage?: InputMaybe<MarketPlaceImageManyRelationFilter>;
  itemName?: InputMaybe<StringFilter>;
  itemPrice?: InputMaybe<FloatNullableFilter>;
  itemTag?: InputMaybe<MartketPlaceTagManyRelationFilter>;
  keyword?: InputMaybe<StringFilter>;
  lastBumped?: InputMaybe<DateTimeNullableFilter>;
  savedBy?: InputMaybe<UserManyRelationFilter>;
  soldAt?: InputMaybe<DateTimeNullableFilter>;
  user?: InputMaybe<UserWhereInput>;
  views?: InputMaybe<MarketPlaceItemViewManyRelationFilter>;
};

export type MarketPlaceWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type MarketPlace_ItemDescription_Document = {
  __typename?: 'MarketPlace_itemDescription_Document';
  document: Scalars['JSON']['output'];
};


export type MarketPlace_ItemDescription_DocumentDocumentArgs = {
  hydrateRelationships?: Scalars['Boolean']['input'];
};

export type MartketPlaceTag = {
  __typename?: 'MartketPlaceTag';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  items?: Maybe<Array<MarketPlace>>;
  itemsCount?: Maybe<Scalars['Int']['output']>;
  tag?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
  userSubScribed?: Maybe<Array<User>>;
  userSubScribedCount?: Maybe<Scalars['Int']['output']>;
};


export type MartketPlaceTagItemsArgs = {
  cursor?: InputMaybe<MarketPlaceWhereUniqueInput>;
  orderBy?: Array<MarketPlaceOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: MarketPlaceWhereInput;
};


export type MartketPlaceTagItemsCountArgs = {
  where?: MarketPlaceWhereInput;
};


export type MartketPlaceTagUserSubScribedArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  orderBy?: Array<UserOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: UserWhereInput;
};


export type MartketPlaceTagUserSubScribedCountArgs = {
  where?: UserWhereInput;
};

export type MartketPlaceTagCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  items?: InputMaybe<MarketPlaceRelateToManyForCreateInput>;
  tag?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<UserRelateToOneForCreateInput>;
  userSubScribed?: InputMaybe<UserRelateToManyForCreateInput>;
};

export type MartketPlaceTagManyRelationFilter = {
  every?: InputMaybe<MartketPlaceTagWhereInput>;
  none?: InputMaybe<MartketPlaceTagWhereInput>;
  some?: InputMaybe<MartketPlaceTagWhereInput>;
};

export type MartketPlaceTagOrderByInput = {
  createdAt?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  tag?: InputMaybe<OrderDirection>;
};

export type MartketPlaceTagRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<MartketPlaceTagWhereUniqueInput>>;
  create?: InputMaybe<Array<MartketPlaceTagCreateInput>>;
};

export type MartketPlaceTagRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<MartketPlaceTagWhereUniqueInput>>;
  create?: InputMaybe<Array<MartketPlaceTagCreateInput>>;
  disconnect?: InputMaybe<Array<MartketPlaceTagWhereUniqueInput>>;
  set?: InputMaybe<Array<MartketPlaceTagWhereUniqueInput>>;
};

export type MartketPlaceTagUpdateArgs = {
  data: MartketPlaceTagUpdateInput;
  where: MartketPlaceTagWhereUniqueInput;
};

export type MartketPlaceTagUpdateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  items?: InputMaybe<MarketPlaceRelateToManyForUpdateInput>;
  tag?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<UserRelateToOneForUpdateInput>;
  userSubScribed?: InputMaybe<UserRelateToManyForUpdateInput>;
};

export type MartketPlaceTagWhereInput = {
  AND?: InputMaybe<Array<MartketPlaceTagWhereInput>>;
  NOT?: InputMaybe<Array<MartketPlaceTagWhereInput>>;
  OR?: InputMaybe<Array<MartketPlaceTagWhereInput>>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<IdFilter>;
  items?: InputMaybe<MarketPlaceManyRelationFilter>;
  tag?: InputMaybe<StringFilter>;
  user?: InputMaybe<UserWhereInput>;
  userSubScribed?: InputMaybe<UserManyRelationFilter>;
};

export type MartketPlaceTagWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type Message = {
  __typename?: 'Message';
  conversationId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  eventHost?: Maybe<User>;
  id: Scalars['ID']['output'];
  isGroupChat?: Maybe<Scalars['Boolean']['output']>;
  messageId?: Maybe<Scalars['String']['output']>;
  messageImage?: Maybe<Scalars['String']['output']>;
  messageText?: Maybe<Scalars['String']['output']>;
  productId?: Maybe<MarketPlace>;
  received?: Maybe<Scalars['Boolean']['output']>;
  recipient?: Maybe<User>;
  sender?: Maybe<User>;
};

export type MessageCreateInput = {
  conversationId?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  eventHost?: InputMaybe<UserRelateToOneForCreateInput>;
  isGroupChat?: InputMaybe<Scalars['Boolean']['input']>;
  messageId?: InputMaybe<Scalars['String']['input']>;
  messageImage?: InputMaybe<Scalars['String']['input']>;
  messageText?: InputMaybe<Scalars['String']['input']>;
  productId?: InputMaybe<MarketPlaceRelateToOneForCreateInput>;
  received?: InputMaybe<Scalars['Boolean']['input']>;
  recipient?: InputMaybe<UserRelateToOneForCreateInput>;
  sender?: InputMaybe<UserRelateToOneForCreateInput>;
};

export type MessageOrderByInput = {
  conversationId?: InputMaybe<OrderDirection>;
  createdAt?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  isGroupChat?: InputMaybe<OrderDirection>;
  messageId?: InputMaybe<OrderDirection>;
  messageImage?: InputMaybe<OrderDirection>;
  messageText?: InputMaybe<OrderDirection>;
  received?: InputMaybe<OrderDirection>;
};

export type MessageUpdateArgs = {
  data: MessageUpdateInput;
  where: MessageWhereUniqueInput;
};

export type MessageUpdateInput = {
  conversationId?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  eventHost?: InputMaybe<UserRelateToOneForUpdateInput>;
  isGroupChat?: InputMaybe<Scalars['Boolean']['input']>;
  messageId?: InputMaybe<Scalars['String']['input']>;
  messageImage?: InputMaybe<Scalars['String']['input']>;
  messageText?: InputMaybe<Scalars['String']['input']>;
  productId?: InputMaybe<MarketPlaceRelateToOneForUpdateInput>;
  received?: InputMaybe<Scalars['Boolean']['input']>;
  recipient?: InputMaybe<UserRelateToOneForUpdateInput>;
  sender?: InputMaybe<UserRelateToOneForUpdateInput>;
};

export type MessageWhereInput = {
  AND?: InputMaybe<Array<MessageWhereInput>>;
  NOT?: InputMaybe<Array<MessageWhereInput>>;
  OR?: InputMaybe<Array<MessageWhereInput>>;
  conversationId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  eventHost?: InputMaybe<UserWhereInput>;
  id?: InputMaybe<IdFilter>;
  isGroupChat?: InputMaybe<BooleanFilter>;
  messageId?: InputMaybe<StringFilter>;
  messageImage?: InputMaybe<StringFilter>;
  messageText?: InputMaybe<StringFilter>;
  productId?: InputMaybe<MarketPlaceWhereInput>;
  received?: InputMaybe<BooleanFilter>;
  recipient?: InputMaybe<UserWhereInput>;
  sender?: InputMaybe<UserWhereInput>;
};

export type MessageWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  authenticateUserWithPassword?: Maybe<UserAuthenticationWithPasswordResult>;
  createAddress?: Maybe<Address>;
  createAddresses?: Maybe<Array<Maybe<Address>>>;
  createArena?: Maybe<Arena>;
  createArenas?: Maybe<Array<Maybe<Arena>>>;
  createCommunities?: Maybe<Array<Maybe<Community>>>;
  createCommunity?: Maybe<Community>;
  createEvent?: Maybe<Event>;
  createEventPayment?: Maybe<EventPayment>;
  createEventPaymentMethod?: Maybe<EventPaymentMethod>;
  createEventPaymentMethods?: Maybe<Array<Maybe<EventPaymentMethod>>>;
  createEventPayments?: Maybe<Array<Maybe<EventPayment>>>;
  createEvents?: Maybe<Array<Maybe<Event>>>;
  createGroupChatParticipant?: Maybe<GroupChatParticipant>;
  createGroupChatParticipants?: Maybe<Array<Maybe<GroupChatParticipant>>>;
  createInitialUser: UserAuthenticationWithPasswordSuccess;
  createMarketPlace?: Maybe<MarketPlace>;
  createMarketPlaceImage?: Maybe<MarketPlaceImage>;
  createMarketPlaceImages?: Maybe<Array<Maybe<MarketPlaceImage>>>;
  createMarketPlaceItemView?: Maybe<MarketPlaceItemView>;
  createMarketPlaceItemViews?: Maybe<Array<Maybe<MarketPlaceItemView>>>;
  createMarketPlaces?: Maybe<Array<Maybe<MarketPlace>>>;
  createMartketPlaceTag?: Maybe<MartketPlaceTag>;
  createMartketPlaceTags?: Maybe<Array<Maybe<MartketPlaceTag>>>;
  createMessage?: Maybe<Message>;
  createMessages?: Maybe<Array<Maybe<Message>>>;
  createRefundEventPayment?: Maybe<RefundEventPayment>;
  createRefundEventPayments?: Maybe<Array<Maybe<RefundEventPayment>>>;
  createReport?: Maybe<Report>;
  createReports?: Maybe<Array<Maybe<Report>>>;
  createSearchedWord?: Maybe<SearchedWord>;
  createSearchedWords?: Maybe<Array<Maybe<SearchedWord>>>;
  createShop?: Maybe<Shop>;
  createShops?: Maybe<Array<Maybe<Shop>>>;
  createSingleton?: Maybe<Singleton>;
  createSingletons?: Maybe<Array<Maybe<Singleton>>>;
  createTempUser?: Maybe<TempUser>;
  createTempUsers?: Maybe<Array<Maybe<TempUser>>>;
  createTicketType?: Maybe<TicketType>;
  createTicketTypes?: Maybe<Array<Maybe<TicketType>>>;
  createUser?: Maybe<User>;
  createUsers?: Maybe<Array<Maybe<User>>>;
  deleteAddress?: Maybe<Address>;
  deleteAddresses?: Maybe<Array<Maybe<Address>>>;
  deleteArena?: Maybe<Arena>;
  deleteArenas?: Maybe<Array<Maybe<Arena>>>;
  deleteCommunities?: Maybe<Array<Maybe<Community>>>;
  deleteCommunity?: Maybe<Community>;
  deleteEvent?: Maybe<Event>;
  deleteEventPayment?: Maybe<EventPayment>;
  deleteEventPaymentMethod?: Maybe<EventPaymentMethod>;
  deleteEventPaymentMethods?: Maybe<Array<Maybe<EventPaymentMethod>>>;
  deleteEventPayments?: Maybe<Array<Maybe<EventPayment>>>;
  deleteEvents?: Maybe<Array<Maybe<Event>>>;
  deleteGroupChatParticipant?: Maybe<GroupChatParticipant>;
  deleteGroupChatParticipants?: Maybe<Array<Maybe<GroupChatParticipant>>>;
  deleteMarketPlace?: Maybe<MarketPlace>;
  deleteMarketPlaceImage?: Maybe<MarketPlaceImage>;
  deleteMarketPlaceImages?: Maybe<Array<Maybe<MarketPlaceImage>>>;
  deleteMarketPlaceItemView?: Maybe<MarketPlaceItemView>;
  deleteMarketPlaceItemViews?: Maybe<Array<Maybe<MarketPlaceItemView>>>;
  deleteMarketPlaces?: Maybe<Array<Maybe<MarketPlace>>>;
  deleteMartketPlaceTag?: Maybe<MartketPlaceTag>;
  deleteMartketPlaceTags?: Maybe<Array<Maybe<MartketPlaceTag>>>;
  deleteMessage?: Maybe<Message>;
  deleteMessages?: Maybe<Array<Maybe<Message>>>;
  deleteRefundEventPayment?: Maybe<RefundEventPayment>;
  deleteRefundEventPayments?: Maybe<Array<Maybe<RefundEventPayment>>>;
  deleteReport?: Maybe<Report>;
  deleteReports?: Maybe<Array<Maybe<Report>>>;
  deleteSearchedWord?: Maybe<SearchedWord>;
  deleteSearchedWords?: Maybe<Array<Maybe<SearchedWord>>>;
  deleteShop?: Maybe<Shop>;
  deleteShops?: Maybe<Array<Maybe<Shop>>>;
  deleteSingleton?: Maybe<Singleton>;
  deleteSingletons?: Maybe<Array<Maybe<Singleton>>>;
  deleteTempUser?: Maybe<TempUser>;
  deleteTempUsers?: Maybe<Array<Maybe<TempUser>>>;
  deleteTicketType?: Maybe<TicketType>;
  deleteTicketTypes?: Maybe<Array<Maybe<TicketType>>>;
  deleteUser?: Maybe<User>;
  deleteUsers?: Maybe<Array<Maybe<User>>>;
  endSession: Scalars['Boolean']['output'];
  redeemUserPasswordResetToken?: Maybe<RedeemUserPasswordResetTokenResult>;
  sendUserPasswordResetLink: Scalars['Boolean']['output'];
  updateAddress?: Maybe<Address>;
  updateAddresses?: Maybe<Array<Maybe<Address>>>;
  updateArena?: Maybe<Arena>;
  updateArenas?: Maybe<Array<Maybe<Arena>>>;
  updateCommunities?: Maybe<Array<Maybe<Community>>>;
  updateCommunity?: Maybe<Community>;
  updateEvent?: Maybe<Event>;
  updateEventPayment?: Maybe<EventPayment>;
  updateEventPaymentMethod?: Maybe<EventPaymentMethod>;
  updateEventPaymentMethods?: Maybe<Array<Maybe<EventPaymentMethod>>>;
  updateEventPayments?: Maybe<Array<Maybe<EventPayment>>>;
  updateEvents?: Maybe<Array<Maybe<Event>>>;
  updateGroupChatParticipant?: Maybe<GroupChatParticipant>;
  updateGroupChatParticipants?: Maybe<Array<Maybe<GroupChatParticipant>>>;
  updateMarketPlace?: Maybe<MarketPlace>;
  updateMarketPlaceImage?: Maybe<MarketPlaceImage>;
  updateMarketPlaceImages?: Maybe<Array<Maybe<MarketPlaceImage>>>;
  updateMarketPlaceItemView?: Maybe<MarketPlaceItemView>;
  updateMarketPlaceItemViews?: Maybe<Array<Maybe<MarketPlaceItemView>>>;
  updateMarketPlaces?: Maybe<Array<Maybe<MarketPlace>>>;
  updateMartketPlaceTag?: Maybe<MartketPlaceTag>;
  updateMartketPlaceTags?: Maybe<Array<Maybe<MartketPlaceTag>>>;
  updateMessage?: Maybe<Message>;
  updateMessages?: Maybe<Array<Maybe<Message>>>;
  updateRefundEventPayment?: Maybe<RefundEventPayment>;
  updateRefundEventPayments?: Maybe<Array<Maybe<RefundEventPayment>>>;
  updateReport?: Maybe<Report>;
  updateReports?: Maybe<Array<Maybe<Report>>>;
  updateSearchedWord?: Maybe<SearchedWord>;
  updateSearchedWords?: Maybe<Array<Maybe<SearchedWord>>>;
  updateShop?: Maybe<Shop>;
  updateShops?: Maybe<Array<Maybe<Shop>>>;
  updateSingleton?: Maybe<Singleton>;
  updateSingletons?: Maybe<Array<Maybe<Singleton>>>;
  updateTempUser?: Maybe<TempUser>;
  updateTempUsers?: Maybe<Array<Maybe<TempUser>>>;
  updateTicketType?: Maybe<TicketType>;
  updateTicketTypes?: Maybe<Array<Maybe<TicketType>>>;
  updateUser?: Maybe<User>;
  updateUsers?: Maybe<Array<Maybe<User>>>;
};


export type MutationAuthenticateUserWithPasswordArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationCreateAddressArgs = {
  data: AddressCreateInput;
};


export type MutationCreateAddressesArgs = {
  data: Array<AddressCreateInput>;
};


export type MutationCreateArenaArgs = {
  data: ArenaCreateInput;
};


export type MutationCreateArenasArgs = {
  data: Array<ArenaCreateInput>;
};


export type MutationCreateCommunitiesArgs = {
  data: Array<CommunityCreateInput>;
};


export type MutationCreateCommunityArgs = {
  data: CommunityCreateInput;
};


export type MutationCreateEventArgs = {
  data: EventCreateInput;
};


export type MutationCreateEventPaymentArgs = {
  data: EventPaymentCreateInput;
};


export type MutationCreateEventPaymentMethodArgs = {
  data: EventPaymentMethodCreateInput;
};


export type MutationCreateEventPaymentMethodsArgs = {
  data: Array<EventPaymentMethodCreateInput>;
};


export type MutationCreateEventPaymentsArgs = {
  data: Array<EventPaymentCreateInput>;
};


export type MutationCreateEventsArgs = {
  data: Array<EventCreateInput>;
};


export type MutationCreateGroupChatParticipantArgs = {
  data: GroupChatParticipantCreateInput;
};


export type MutationCreateGroupChatParticipantsArgs = {
  data: Array<GroupChatParticipantCreateInput>;
};


export type MutationCreateInitialUserArgs = {
  data: CreateInitialUserInput;
};


export type MutationCreateMarketPlaceArgs = {
  data: MarketPlaceCreateInput;
};


export type MutationCreateMarketPlaceImageArgs = {
  data: MarketPlaceImageCreateInput;
};


export type MutationCreateMarketPlaceImagesArgs = {
  data: Array<MarketPlaceImageCreateInput>;
};


export type MutationCreateMarketPlaceItemViewArgs = {
  data: MarketPlaceItemViewCreateInput;
};


export type MutationCreateMarketPlaceItemViewsArgs = {
  data: Array<MarketPlaceItemViewCreateInput>;
};


export type MutationCreateMarketPlacesArgs = {
  data: Array<MarketPlaceCreateInput>;
};


export type MutationCreateMartketPlaceTagArgs = {
  data: MartketPlaceTagCreateInput;
};


export type MutationCreateMartketPlaceTagsArgs = {
  data: Array<MartketPlaceTagCreateInput>;
};


export type MutationCreateMessageArgs = {
  data: MessageCreateInput;
};


export type MutationCreateMessagesArgs = {
  data: Array<MessageCreateInput>;
};


export type MutationCreateRefundEventPaymentArgs = {
  data: RefundEventPaymentCreateInput;
};


export type MutationCreateRefundEventPaymentsArgs = {
  data: Array<RefundEventPaymentCreateInput>;
};


export type MutationCreateReportArgs = {
  data: ReportCreateInput;
};


export type MutationCreateReportsArgs = {
  data: Array<ReportCreateInput>;
};


export type MutationCreateSearchedWordArgs = {
  data: SearchedWordCreateInput;
};


export type MutationCreateSearchedWordsArgs = {
  data: Array<SearchedWordCreateInput>;
};


export type MutationCreateShopArgs = {
  data: ShopCreateInput;
};


export type MutationCreateShopsArgs = {
  data: Array<ShopCreateInput>;
};


export type MutationCreateSingletonArgs = {
  data: SingletonCreateInput;
};


export type MutationCreateSingletonsArgs = {
  data: Array<SingletonCreateInput>;
};


export type MutationCreateTempUserArgs = {
  data: TempUserCreateInput;
};


export type MutationCreateTempUsersArgs = {
  data: Array<TempUserCreateInput>;
};


export type MutationCreateTicketTypeArgs = {
  data: TicketTypeCreateInput;
};


export type MutationCreateTicketTypesArgs = {
  data: Array<TicketTypeCreateInput>;
};


export type MutationCreateUserArgs = {
  data: UserCreateInput;
};


export type MutationCreateUsersArgs = {
  data: Array<UserCreateInput>;
};


export type MutationDeleteAddressArgs = {
  where: AddressWhereUniqueInput;
};


export type MutationDeleteAddressesArgs = {
  where: Array<AddressWhereUniqueInput>;
};


export type MutationDeleteArenaArgs = {
  where: ArenaWhereUniqueInput;
};


export type MutationDeleteArenasArgs = {
  where: Array<ArenaWhereUniqueInput>;
};


export type MutationDeleteCommunitiesArgs = {
  where: Array<CommunityWhereUniqueInput>;
};


export type MutationDeleteCommunityArgs = {
  where: CommunityWhereUniqueInput;
};


export type MutationDeleteEventArgs = {
  where: EventWhereUniqueInput;
};


export type MutationDeleteEventPaymentArgs = {
  where: EventPaymentWhereUniqueInput;
};


export type MutationDeleteEventPaymentMethodArgs = {
  where: EventPaymentMethodWhereUniqueInput;
};


export type MutationDeleteEventPaymentMethodsArgs = {
  where: Array<EventPaymentMethodWhereUniqueInput>;
};


export type MutationDeleteEventPaymentsArgs = {
  where: Array<EventPaymentWhereUniqueInput>;
};


export type MutationDeleteEventsArgs = {
  where: Array<EventWhereUniqueInput>;
};


export type MutationDeleteGroupChatParticipantArgs = {
  where: GroupChatParticipantWhereUniqueInput;
};


export type MutationDeleteGroupChatParticipantsArgs = {
  where: Array<GroupChatParticipantWhereUniqueInput>;
};


export type MutationDeleteMarketPlaceArgs = {
  where: MarketPlaceWhereUniqueInput;
};


export type MutationDeleteMarketPlaceImageArgs = {
  where: MarketPlaceImageWhereUniqueInput;
};


export type MutationDeleteMarketPlaceImagesArgs = {
  where: Array<MarketPlaceImageWhereUniqueInput>;
};


export type MutationDeleteMarketPlaceItemViewArgs = {
  where: MarketPlaceItemViewWhereUniqueInput;
};


export type MutationDeleteMarketPlaceItemViewsArgs = {
  where: Array<MarketPlaceItemViewWhereUniqueInput>;
};


export type MutationDeleteMarketPlacesArgs = {
  where: Array<MarketPlaceWhereUniqueInput>;
};


export type MutationDeleteMartketPlaceTagArgs = {
  where: MartketPlaceTagWhereUniqueInput;
};


export type MutationDeleteMartketPlaceTagsArgs = {
  where: Array<MartketPlaceTagWhereUniqueInput>;
};


export type MutationDeleteMessageArgs = {
  where: MessageWhereUniqueInput;
};


export type MutationDeleteMessagesArgs = {
  where: Array<MessageWhereUniqueInput>;
};


export type MutationDeleteRefundEventPaymentArgs = {
  where: RefundEventPaymentWhereUniqueInput;
};


export type MutationDeleteRefundEventPaymentsArgs = {
  where: Array<RefundEventPaymentWhereUniqueInput>;
};


export type MutationDeleteReportArgs = {
  where: ReportWhereUniqueInput;
};


export type MutationDeleteReportsArgs = {
  where: Array<ReportWhereUniqueInput>;
};


export type MutationDeleteSearchedWordArgs = {
  where: SearchedWordWhereUniqueInput;
};


export type MutationDeleteSearchedWordsArgs = {
  where: Array<SearchedWordWhereUniqueInput>;
};


export type MutationDeleteShopArgs = {
  where: ShopWhereUniqueInput;
};


export type MutationDeleteShopsArgs = {
  where: Array<ShopWhereUniqueInput>;
};


export type MutationDeleteSingletonArgs = {
  where?: SingletonWhereUniqueInput;
};


export type MutationDeleteSingletonsArgs = {
  where: Array<SingletonWhereUniqueInput>;
};


export type MutationDeleteTempUserArgs = {
  where: TempUserWhereUniqueInput;
};


export type MutationDeleteTempUsersArgs = {
  where: Array<TempUserWhereUniqueInput>;
};


export type MutationDeleteTicketTypeArgs = {
  where: TicketTypeWhereUniqueInput;
};


export type MutationDeleteTicketTypesArgs = {
  where: Array<TicketTypeWhereUniqueInput>;
};


export type MutationDeleteUserArgs = {
  where: UserWhereUniqueInput;
};


export type MutationDeleteUsersArgs = {
  where: Array<UserWhereUniqueInput>;
};


export type MutationRedeemUserPasswordResetTokenArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  token: Scalars['String']['input'];
};


export type MutationSendUserPasswordResetLinkArgs = {
  email: Scalars['String']['input'];
};


export type MutationUpdateAddressArgs = {
  data: AddressUpdateInput;
  where: AddressWhereUniqueInput;
};


export type MutationUpdateAddressesArgs = {
  data: Array<AddressUpdateArgs>;
};


export type MutationUpdateArenaArgs = {
  data: ArenaUpdateInput;
  where: ArenaWhereUniqueInput;
};


export type MutationUpdateArenasArgs = {
  data: Array<ArenaUpdateArgs>;
};


export type MutationUpdateCommunitiesArgs = {
  data: Array<CommunityUpdateArgs>;
};


export type MutationUpdateCommunityArgs = {
  data: CommunityUpdateInput;
  where: CommunityWhereUniqueInput;
};


export type MutationUpdateEventArgs = {
  data: EventUpdateInput;
  where: EventWhereUniqueInput;
};


export type MutationUpdateEventPaymentArgs = {
  data: EventPaymentUpdateInput;
  where: EventPaymentWhereUniqueInput;
};


export type MutationUpdateEventPaymentMethodArgs = {
  data: EventPaymentMethodUpdateInput;
  where: EventPaymentMethodWhereUniqueInput;
};


export type MutationUpdateEventPaymentMethodsArgs = {
  data: Array<EventPaymentMethodUpdateArgs>;
};


export type MutationUpdateEventPaymentsArgs = {
  data: Array<EventPaymentUpdateArgs>;
};


export type MutationUpdateEventsArgs = {
  data: Array<EventUpdateArgs>;
};


export type MutationUpdateGroupChatParticipantArgs = {
  data: GroupChatParticipantUpdateInput;
  where: GroupChatParticipantWhereUniqueInput;
};


export type MutationUpdateGroupChatParticipantsArgs = {
  data: Array<GroupChatParticipantUpdateArgs>;
};


export type MutationUpdateMarketPlaceArgs = {
  data: MarketPlaceUpdateInput;
  where: MarketPlaceWhereUniqueInput;
};


export type MutationUpdateMarketPlaceImageArgs = {
  data: MarketPlaceImageUpdateInput;
  where: MarketPlaceImageWhereUniqueInput;
};


export type MutationUpdateMarketPlaceImagesArgs = {
  data: Array<MarketPlaceImageUpdateArgs>;
};


export type MutationUpdateMarketPlaceItemViewArgs = {
  data: MarketPlaceItemViewUpdateInput;
  where: MarketPlaceItemViewWhereUniqueInput;
};


export type MutationUpdateMarketPlaceItemViewsArgs = {
  data: Array<MarketPlaceItemViewUpdateArgs>;
};


export type MutationUpdateMarketPlacesArgs = {
  data: Array<MarketPlaceUpdateArgs>;
};


export type MutationUpdateMartketPlaceTagArgs = {
  data: MartketPlaceTagUpdateInput;
  where: MartketPlaceTagWhereUniqueInput;
};


export type MutationUpdateMartketPlaceTagsArgs = {
  data: Array<MartketPlaceTagUpdateArgs>;
};


export type MutationUpdateMessageArgs = {
  data: MessageUpdateInput;
  where: MessageWhereUniqueInput;
};


export type MutationUpdateMessagesArgs = {
  data: Array<MessageUpdateArgs>;
};


export type MutationUpdateRefundEventPaymentArgs = {
  data: RefundEventPaymentUpdateInput;
  where: RefundEventPaymentWhereUniqueInput;
};


export type MutationUpdateRefundEventPaymentsArgs = {
  data: Array<RefundEventPaymentUpdateArgs>;
};


export type MutationUpdateReportArgs = {
  data: ReportUpdateInput;
  where: ReportWhereUniqueInput;
};


export type MutationUpdateReportsArgs = {
  data: Array<ReportUpdateArgs>;
};


export type MutationUpdateSearchedWordArgs = {
  data: SearchedWordUpdateInput;
  where: SearchedWordWhereUniqueInput;
};


export type MutationUpdateSearchedWordsArgs = {
  data: Array<SearchedWordUpdateArgs>;
};


export type MutationUpdateShopArgs = {
  data: ShopUpdateInput;
  where: ShopWhereUniqueInput;
};


export type MutationUpdateShopsArgs = {
  data: Array<ShopUpdateArgs>;
};


export type MutationUpdateSingletonArgs = {
  data: SingletonUpdateInput;
  where?: SingletonWhereUniqueInput;
};


export type MutationUpdateSingletonsArgs = {
  data: Array<SingletonUpdateArgs>;
};


export type MutationUpdateTempUserArgs = {
  data: TempUserUpdateInput;
  where: TempUserWhereUniqueInput;
};


export type MutationUpdateTempUsersArgs = {
  data: Array<TempUserUpdateArgs>;
};


export type MutationUpdateTicketTypeArgs = {
  data: TicketTypeUpdateInput;
  where: TicketTypeWhereUniqueInput;
};


export type MutationUpdateTicketTypesArgs = {
  data: Array<TicketTypeUpdateArgs>;
};


export type MutationUpdateUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationUpdateUsersArgs = {
  data: Array<UserUpdateArgs>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export type PasswordFilter = {
  isSet: Scalars['Boolean']['input'];
};

export enum PasswordResetRedemptionErrorCode {
  Failure = 'FAILURE',
  TokenExpired = 'TOKEN_EXPIRED',
  TokenRedeemed = 'TOKEN_REDEEMED'
}

export type PasswordState = {
  __typename?: 'PasswordState';
  isSet: Scalars['Boolean']['output'];
};

export type Query = {
  __typename?: 'Query';
  address?: Maybe<Address>;
  addresses?: Maybe<Array<Address>>;
  addressesCount?: Maybe<Scalars['Int']['output']>;
  arena?: Maybe<Arena>;
  arenas?: Maybe<Array<Arena>>;
  arenasCount?: Maybe<Scalars['Int']['output']>;
  authenticatedItem?: Maybe<AuthenticatedItem>;
  communities?: Maybe<Array<Community>>;
  communitiesCount?: Maybe<Scalars['Int']['output']>;
  community?: Maybe<Community>;
  event?: Maybe<Event>;
  eventPayment?: Maybe<EventPayment>;
  eventPaymentMethod?: Maybe<EventPaymentMethod>;
  eventPaymentMethods?: Maybe<Array<EventPaymentMethod>>;
  eventPaymentMethodsCount?: Maybe<Scalars['Int']['output']>;
  eventPayments?: Maybe<Array<EventPayment>>;
  eventPaymentsCount?: Maybe<Scalars['Int']['output']>;
  events?: Maybe<Array<Event>>;
  eventsCount?: Maybe<Scalars['Int']['output']>;
  groupChatParticipant?: Maybe<GroupChatParticipant>;
  groupChatParticipants?: Maybe<Array<GroupChatParticipant>>;
  groupChatParticipantsCount?: Maybe<Scalars['Int']['output']>;
  keystone: KeystoneMeta;
  marketPlace?: Maybe<MarketPlace>;
  marketPlaceImage?: Maybe<MarketPlaceImage>;
  marketPlaceImages?: Maybe<Array<MarketPlaceImage>>;
  marketPlaceImagesCount?: Maybe<Scalars['Int']['output']>;
  marketPlaceItemView?: Maybe<MarketPlaceItemView>;
  marketPlaceItemViews?: Maybe<Array<MarketPlaceItemView>>;
  marketPlaceItemViewsCount?: Maybe<Scalars['Int']['output']>;
  marketPlaces?: Maybe<Array<MarketPlace>>;
  marketPlacesCount?: Maybe<Scalars['Int']['output']>;
  martketPlaceTag?: Maybe<MartketPlaceTag>;
  martketPlaceTags?: Maybe<Array<MartketPlaceTag>>;
  martketPlaceTagsCount?: Maybe<Scalars['Int']['output']>;
  message?: Maybe<Message>;
  messages?: Maybe<Array<Message>>;
  messagesCount?: Maybe<Scalars['Int']['output']>;
  refundEventPayment?: Maybe<RefundEventPayment>;
  refundEventPayments?: Maybe<Array<RefundEventPayment>>;
  refundEventPaymentsCount?: Maybe<Scalars['Int']['output']>;
  report?: Maybe<Report>;
  reports?: Maybe<Array<Report>>;
  reportsCount?: Maybe<Scalars['Int']['output']>;
  searchedWord?: Maybe<SearchedWord>;
  searchedWords?: Maybe<Array<SearchedWord>>;
  searchedWordsCount?: Maybe<Scalars['Int']['output']>;
  shop?: Maybe<Shop>;
  shops?: Maybe<Array<Shop>>;
  shopsCount?: Maybe<Scalars['Int']['output']>;
  singleton?: Maybe<Singleton>;
  singletons?: Maybe<Array<Singleton>>;
  singletonsCount?: Maybe<Scalars['Int']['output']>;
  tempUser?: Maybe<TempUser>;
  tempUsers?: Maybe<Array<TempUser>>;
  tempUsersCount?: Maybe<Scalars['Int']['output']>;
  ticketType?: Maybe<TicketType>;
  ticketTypes?: Maybe<Array<TicketType>>;
  ticketTypesCount?: Maybe<Scalars['Int']['output']>;
  user?: Maybe<User>;
  users?: Maybe<Array<User>>;
  usersCount?: Maybe<Scalars['Int']['output']>;
  validateUserPasswordResetToken?: Maybe<ValidateUserPasswordResetTokenResult>;
};


export type QueryAddressArgs = {
  where: AddressWhereUniqueInput;
};


export type QueryAddressesArgs = {
  cursor?: InputMaybe<AddressWhereUniqueInput>;
  orderBy?: Array<AddressOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: AddressWhereInput;
};


export type QueryAddressesCountArgs = {
  where?: AddressWhereInput;
};


export type QueryArenaArgs = {
  where: ArenaWhereUniqueInput;
};


export type QueryArenasArgs = {
  cursor?: InputMaybe<ArenaWhereUniqueInput>;
  orderBy?: Array<ArenaOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: ArenaWhereInput;
};


export type QueryArenasCountArgs = {
  where?: ArenaWhereInput;
};


export type QueryCommunitiesArgs = {
  cursor?: InputMaybe<CommunityWhereUniqueInput>;
  orderBy?: Array<CommunityOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: CommunityWhereInput;
};


export type QueryCommunitiesCountArgs = {
  where?: CommunityWhereInput;
};


export type QueryCommunityArgs = {
  where: CommunityWhereUniqueInput;
};


export type QueryEventArgs = {
  where: EventWhereUniqueInput;
};


export type QueryEventPaymentArgs = {
  where: EventPaymentWhereUniqueInput;
};


export type QueryEventPaymentMethodArgs = {
  where: EventPaymentMethodWhereUniqueInput;
};


export type QueryEventPaymentMethodsArgs = {
  cursor?: InputMaybe<EventPaymentMethodWhereUniqueInput>;
  orderBy?: Array<EventPaymentMethodOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: EventPaymentMethodWhereInput;
};


export type QueryEventPaymentMethodsCountArgs = {
  where?: EventPaymentMethodWhereInput;
};


export type QueryEventPaymentsArgs = {
  cursor?: InputMaybe<EventPaymentWhereUniqueInput>;
  orderBy?: Array<EventPaymentOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: EventPaymentWhereInput;
};


export type QueryEventPaymentsCountArgs = {
  where?: EventPaymentWhereInput;
};


export type QueryEventsArgs = {
  cursor?: InputMaybe<EventWhereUniqueInput>;
  orderBy?: Array<EventOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: EventWhereInput;
};


export type QueryEventsCountArgs = {
  where?: EventWhereInput;
};


export type QueryGroupChatParticipantArgs = {
  where: GroupChatParticipantWhereUniqueInput;
};


export type QueryGroupChatParticipantsArgs = {
  cursor?: InputMaybe<GroupChatParticipantWhereUniqueInput>;
  orderBy?: Array<GroupChatParticipantOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: GroupChatParticipantWhereInput;
};


export type QueryGroupChatParticipantsCountArgs = {
  where?: GroupChatParticipantWhereInput;
};


export type QueryMarketPlaceArgs = {
  where: MarketPlaceWhereUniqueInput;
};


export type QueryMarketPlaceImageArgs = {
  where: MarketPlaceImageWhereUniqueInput;
};


export type QueryMarketPlaceImagesArgs = {
  cursor?: InputMaybe<MarketPlaceImageWhereUniqueInput>;
  orderBy?: Array<MarketPlaceImageOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: MarketPlaceImageWhereInput;
};


export type QueryMarketPlaceImagesCountArgs = {
  where?: MarketPlaceImageWhereInput;
};


export type QueryMarketPlaceItemViewArgs = {
  where: MarketPlaceItemViewWhereUniqueInput;
};


export type QueryMarketPlaceItemViewsArgs = {
  cursor?: InputMaybe<MarketPlaceItemViewWhereUniqueInput>;
  orderBy?: Array<MarketPlaceItemViewOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: MarketPlaceItemViewWhereInput;
};


export type QueryMarketPlaceItemViewsCountArgs = {
  where?: MarketPlaceItemViewWhereInput;
};


export type QueryMarketPlacesArgs = {
  cursor?: InputMaybe<MarketPlaceWhereUniqueInput>;
  orderBy?: Array<MarketPlaceOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: MarketPlaceWhereInput;
};


export type QueryMarketPlacesCountArgs = {
  where?: MarketPlaceWhereInput;
};


export type QueryMartketPlaceTagArgs = {
  where: MartketPlaceTagWhereUniqueInput;
};


export type QueryMartketPlaceTagsArgs = {
  cursor?: InputMaybe<MartketPlaceTagWhereUniqueInput>;
  orderBy?: Array<MartketPlaceTagOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: MartketPlaceTagWhereInput;
};


export type QueryMartketPlaceTagsCountArgs = {
  where?: MartketPlaceTagWhereInput;
};


export type QueryMessageArgs = {
  where: MessageWhereUniqueInput;
};


export type QueryMessagesArgs = {
  cursor?: InputMaybe<MessageWhereUniqueInput>;
  orderBy?: Array<MessageOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: MessageWhereInput;
};


export type QueryMessagesCountArgs = {
  where?: MessageWhereInput;
};


export type QueryRefundEventPaymentArgs = {
  where: RefundEventPaymentWhereUniqueInput;
};


export type QueryRefundEventPaymentsArgs = {
  cursor?: InputMaybe<RefundEventPaymentWhereUniqueInput>;
  orderBy?: Array<RefundEventPaymentOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: RefundEventPaymentWhereInput;
};


export type QueryRefundEventPaymentsCountArgs = {
  where?: RefundEventPaymentWhereInput;
};


export type QueryReportArgs = {
  where: ReportWhereUniqueInput;
};


export type QueryReportsArgs = {
  cursor?: InputMaybe<ReportWhereUniqueInput>;
  orderBy?: Array<ReportOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: ReportWhereInput;
};


export type QueryReportsCountArgs = {
  where?: ReportWhereInput;
};


export type QuerySearchedWordArgs = {
  where: SearchedWordWhereUniqueInput;
};


export type QuerySearchedWordsArgs = {
  cursor?: InputMaybe<SearchedWordWhereUniqueInput>;
  orderBy?: Array<SearchedWordOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: SearchedWordWhereInput;
};


export type QuerySearchedWordsCountArgs = {
  where?: SearchedWordWhereInput;
};


export type QueryShopArgs = {
  where: ShopWhereUniqueInput;
};


export type QueryShopsArgs = {
  cursor?: InputMaybe<ShopWhereUniqueInput>;
  orderBy?: Array<ShopOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: ShopWhereInput;
};


export type QueryShopsCountArgs = {
  where?: ShopWhereInput;
};


export type QuerySingletonArgs = {
  where?: SingletonWhereUniqueInput;
};


export type QuerySingletonsArgs = {
  cursor?: InputMaybe<SingletonWhereUniqueInput>;
  orderBy?: Array<SingletonOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: SingletonWhereInput;
};


export type QuerySingletonsCountArgs = {
  where?: SingletonWhereInput;
};


export type QueryTempUserArgs = {
  where: TempUserWhereUniqueInput;
};


export type QueryTempUsersArgs = {
  cursor?: InputMaybe<TempUserWhereUniqueInput>;
  orderBy?: Array<TempUserOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: TempUserWhereInput;
};


export type QueryTempUsersCountArgs = {
  where?: TempUserWhereInput;
};


export type QueryTicketTypeArgs = {
  where: TicketTypeWhereUniqueInput;
};


export type QueryTicketTypesArgs = {
  cursor?: InputMaybe<TicketTypeWhereUniqueInput>;
  orderBy?: Array<TicketTypeOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: TicketTypeWhereInput;
};


export type QueryTicketTypesCountArgs = {
  where?: TicketTypeWhereInput;
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryUsersArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  orderBy?: Array<UserOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: UserWhereInput;
};


export type QueryUsersCountArgs = {
  where?: UserWhereInput;
};


export type QueryValidateUserPasswordResetTokenArgs = {
  email: Scalars['String']['input'];
  token: Scalars['String']['input'];
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export type RedeemUserPasswordResetTokenResult = {
  __typename?: 'RedeemUserPasswordResetTokenResult';
  code: PasswordResetRedemptionErrorCode;
  message: Scalars['String']['output'];
};

export type RefundEventPayment = {
  __typename?: 'RefundEventPayment';
  dateTime?: Maybe<Scalars['DateTime']['output']>;
  enrolledUser?: Maybe<User>;
  eventName?: Maybe<Event>;
  eventRefundImage?: Maybe<ImageFieldOutput>;
  id: Scalars['ID']['output'];
  reason?: Maybe<Scalars['String']['output']>;
};

export type RefundEventPaymentCreateInput = {
  dateTime?: InputMaybe<Scalars['DateTime']['input']>;
  enrolledUser?: InputMaybe<UserRelateToOneForCreateInput>;
  eventName?: InputMaybe<EventRelateToOneForCreateInput>;
  eventRefundImage?: InputMaybe<ImageFieldInput>;
  reason?: InputMaybe<Scalars['String']['input']>;
};

export type RefundEventPaymentManyRelationFilter = {
  every?: InputMaybe<RefundEventPaymentWhereInput>;
  none?: InputMaybe<RefundEventPaymentWhereInput>;
  some?: InputMaybe<RefundEventPaymentWhereInput>;
};

export type RefundEventPaymentOrderByInput = {
  dateTime?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  reason?: InputMaybe<OrderDirection>;
};

export type RefundEventPaymentRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<RefundEventPaymentWhereUniqueInput>>;
  create?: InputMaybe<Array<RefundEventPaymentCreateInput>>;
};

export type RefundEventPaymentRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<RefundEventPaymentWhereUniqueInput>>;
  create?: InputMaybe<Array<RefundEventPaymentCreateInput>>;
  disconnect?: InputMaybe<Array<RefundEventPaymentWhereUniqueInput>>;
  set?: InputMaybe<Array<RefundEventPaymentWhereUniqueInput>>;
};

export type RefundEventPaymentUpdateArgs = {
  data: RefundEventPaymentUpdateInput;
  where: RefundEventPaymentWhereUniqueInput;
};

export type RefundEventPaymentUpdateInput = {
  dateTime?: InputMaybe<Scalars['DateTime']['input']>;
  enrolledUser?: InputMaybe<UserRelateToOneForUpdateInput>;
  eventName?: InputMaybe<EventRelateToOneForUpdateInput>;
  eventRefundImage?: InputMaybe<ImageFieldInput>;
  reason?: InputMaybe<Scalars['String']['input']>;
};

export type RefundEventPaymentWhereInput = {
  AND?: InputMaybe<Array<RefundEventPaymentWhereInput>>;
  NOT?: InputMaybe<Array<RefundEventPaymentWhereInput>>;
  OR?: InputMaybe<Array<RefundEventPaymentWhereInput>>;
  dateTime?: InputMaybe<DateTimeNullableFilter>;
  enrolledUser?: InputMaybe<UserWhereInput>;
  eventName?: InputMaybe<EventWhereInput>;
  id?: InputMaybe<IdFilter>;
  reason?: InputMaybe<StringFilter>;
};

export type RefundEventPaymentWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type Report = {
  __typename?: 'Report';
  event?: Maybe<Event>;
  id: Scalars['ID']['output'];
  marketPlaceItem?: Maybe<MarketPlace>;
  reportText?: Maybe<Scalars['String']['output']>;
  reportType?: Maybe<Scalars['String']['output']>;
  reportedUser?: Maybe<User>;
  user?: Maybe<User>;
};

export type ReportCreateInput = {
  event?: InputMaybe<EventRelateToOneForCreateInput>;
  marketPlaceItem?: InputMaybe<MarketPlaceRelateToOneForCreateInput>;
  reportText?: InputMaybe<Scalars['String']['input']>;
  reportType?: InputMaybe<Scalars['String']['input']>;
  reportedUser?: InputMaybe<UserRelateToOneForCreateInput>;
  user?: InputMaybe<UserRelateToOneForCreateInput>;
};

export type ReportManyRelationFilter = {
  every?: InputMaybe<ReportWhereInput>;
  none?: InputMaybe<ReportWhereInput>;
  some?: InputMaybe<ReportWhereInput>;
};

export type ReportOrderByInput = {
  id?: InputMaybe<OrderDirection>;
  reportText?: InputMaybe<OrderDirection>;
  reportType?: InputMaybe<OrderDirection>;
};

export type ReportRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<ReportWhereUniqueInput>>;
  create?: InputMaybe<Array<ReportCreateInput>>;
};

export type ReportRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<ReportWhereUniqueInput>>;
  create?: InputMaybe<Array<ReportCreateInput>>;
  disconnect?: InputMaybe<Array<ReportWhereUniqueInput>>;
  set?: InputMaybe<Array<ReportWhereUniqueInput>>;
};

export type ReportUpdateArgs = {
  data: ReportUpdateInput;
  where: ReportWhereUniqueInput;
};

export type ReportUpdateInput = {
  event?: InputMaybe<EventRelateToOneForUpdateInput>;
  marketPlaceItem?: InputMaybe<MarketPlaceRelateToOneForUpdateInput>;
  reportText?: InputMaybe<Scalars['String']['input']>;
  reportType?: InputMaybe<Scalars['String']['input']>;
  reportedUser?: InputMaybe<UserRelateToOneForUpdateInput>;
  user?: InputMaybe<UserRelateToOneForUpdateInput>;
};

export type ReportWhereInput = {
  AND?: InputMaybe<Array<ReportWhereInput>>;
  NOT?: InputMaybe<Array<ReportWhereInput>>;
  OR?: InputMaybe<Array<ReportWhereInput>>;
  event?: InputMaybe<EventWhereInput>;
  id?: InputMaybe<IdFilter>;
  marketPlaceItem?: InputMaybe<MarketPlaceWhereInput>;
  reportText?: InputMaybe<StringFilter>;
  reportType?: InputMaybe<StringFilter>;
  reportedUser?: InputMaybe<UserWhereInput>;
  user?: InputMaybe<UserWhereInput>;
};

export type ReportWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type SearchedWord = {
  __typename?: 'SearchedWord';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  isDeleted?: Maybe<Scalars['Boolean']['output']>;
  text?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
};

export type SearchedWordCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  isDeleted?: InputMaybe<Scalars['Boolean']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<UserRelateToOneForCreateInput>;
};

export type SearchedWordManyRelationFilter = {
  every?: InputMaybe<SearchedWordWhereInput>;
  none?: InputMaybe<SearchedWordWhereInput>;
  some?: InputMaybe<SearchedWordWhereInput>;
};

export type SearchedWordOrderByInput = {
  createdAt?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  isDeleted?: InputMaybe<OrderDirection>;
  text?: InputMaybe<OrderDirection>;
};

export type SearchedWordRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<SearchedWordWhereUniqueInput>>;
  create?: InputMaybe<Array<SearchedWordCreateInput>>;
};

export type SearchedWordRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<SearchedWordWhereUniqueInput>>;
  create?: InputMaybe<Array<SearchedWordCreateInput>>;
  disconnect?: InputMaybe<Array<SearchedWordWhereUniqueInput>>;
  set?: InputMaybe<Array<SearchedWordWhereUniqueInput>>;
};

export type SearchedWordUpdateArgs = {
  data: SearchedWordUpdateInput;
  where: SearchedWordWhereUniqueInput;
};

export type SearchedWordUpdateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  isDeleted?: InputMaybe<Scalars['Boolean']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<UserRelateToOneForUpdateInput>;
};

export type SearchedWordWhereInput = {
  AND?: InputMaybe<Array<SearchedWordWhereInput>>;
  NOT?: InputMaybe<Array<SearchedWordWhereInput>>;
  OR?: InputMaybe<Array<SearchedWordWhereInput>>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<IdFilter>;
  isDeleted?: InputMaybe<BooleanFilter>;
  text?: InputMaybe<StringFilter>;
  user?: InputMaybe<UserWhereInput>;
};

export type SearchedWordWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type Shop = {
  __typename?: 'Shop';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  links?: Maybe<Scalars['JSON']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  operatingHours?: Maybe<Scalars['JSON']['output']>;
  shopBanner?: Maybe<ImageFieldOutput>;
  shopDescription?: Maybe<Shop_ShopDescription_Document>;
  shopImage?: Maybe<ImageFieldOutput>;
  shopName?: Maybe<Scalars['String']['output']>;
  showShop?: Maybe<Scalars['Boolean']['output']>;
};

export type ShopCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  links?: InputMaybe<Scalars['JSON']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  operatingHours?: InputMaybe<Scalars['JSON']['input']>;
  shopBanner?: InputMaybe<ImageFieldInput>;
  shopDescription?: InputMaybe<Scalars['JSON']['input']>;
  shopImage?: InputMaybe<ImageFieldInput>;
  shopName?: InputMaybe<Scalars['String']['input']>;
  showShop?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ShopOrderByInput = {
  createdAt?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  location?: InputMaybe<OrderDirection>;
  shopName?: InputMaybe<OrderDirection>;
  showShop?: InputMaybe<OrderDirection>;
};

export type ShopUpdateArgs = {
  data: ShopUpdateInput;
  where: ShopWhereUniqueInput;
};

export type ShopUpdateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  links?: InputMaybe<Scalars['JSON']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  operatingHours?: InputMaybe<Scalars['JSON']['input']>;
  shopBanner?: InputMaybe<ImageFieldInput>;
  shopDescription?: InputMaybe<Scalars['JSON']['input']>;
  shopImage?: InputMaybe<ImageFieldInput>;
  shopName?: InputMaybe<Scalars['String']['input']>;
  showShop?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ShopWhereInput = {
  AND?: InputMaybe<Array<ShopWhereInput>>;
  NOT?: InputMaybe<Array<ShopWhereInput>>;
  OR?: InputMaybe<Array<ShopWhereInput>>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<IdFilter>;
  location?: InputMaybe<StringFilter>;
  shopName?: InputMaybe<StringFilter>;
  showShop?: InputMaybe<BooleanFilter>;
};

export type ShopWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type Shop_ShopDescription_Document = {
  __typename?: 'Shop_shopDescription_Document';
  document: Scalars['JSON']['output'];
};


export type Shop_ShopDescription_DocumentDocumentArgs = {
  hydrateRelationships?: Scalars['Boolean']['input'];
};

export type Singleton = {
  __typename?: 'Singleton';
  AndroidproductionAppVersion?: Maybe<Scalars['String']['output']>;
  announcement?: Maybe<Scalars['Boolean']['output']>;
  announcementDetails?: Maybe<Scalars['JSON']['output']>;
  iOSproductionAppVersion?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  privacyPolicy?: Maybe<Scalars['String']['output']>;
  termsOfService?: Maybe<Scalars['String']['output']>;
};

export type SingletonCreateInput = {
  AndroidproductionAppVersion?: InputMaybe<Scalars['String']['input']>;
  announcement?: InputMaybe<Scalars['Boolean']['input']>;
  announcementDetails?: InputMaybe<Scalars['JSON']['input']>;
  iOSproductionAppVersion?: InputMaybe<Scalars['String']['input']>;
  privacyPolicy?: InputMaybe<Scalars['String']['input']>;
  termsOfService?: InputMaybe<Scalars['String']['input']>;
};

export type SingletonOrderByInput = {
  AndroidproductionAppVersion?: InputMaybe<OrderDirection>;
  announcement?: InputMaybe<OrderDirection>;
  iOSproductionAppVersion?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  privacyPolicy?: InputMaybe<OrderDirection>;
  termsOfService?: InputMaybe<OrderDirection>;
};

export type SingletonUpdateArgs = {
  data: SingletonUpdateInput;
  where?: SingletonWhereUniqueInput;
};

export type SingletonUpdateInput = {
  AndroidproductionAppVersion?: InputMaybe<Scalars['String']['input']>;
  announcement?: InputMaybe<Scalars['Boolean']['input']>;
  announcementDetails?: InputMaybe<Scalars['JSON']['input']>;
  iOSproductionAppVersion?: InputMaybe<Scalars['String']['input']>;
  privacyPolicy?: InputMaybe<Scalars['String']['input']>;
  termsOfService?: InputMaybe<Scalars['String']['input']>;
};

export type SingletonWhereInput = {
  AND?: InputMaybe<Array<SingletonWhereInput>>;
  AndroidproductionAppVersion?: InputMaybe<StringFilter>;
  NOT?: InputMaybe<Array<SingletonWhereInput>>;
  OR?: InputMaybe<Array<SingletonWhereInput>>;
  announcement?: InputMaybe<BooleanFilter>;
  iOSproductionAppVersion?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  privacyPolicy?: InputMaybe<StringFilter>;
  termsOfService?: InputMaybe<StringFilter>;
};

export type SingletonWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type StringNullableFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<StringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type TempUser = {
  __typename?: 'TempUser';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  otp?: Maybe<Scalars['String']['output']>;
  password?: Maybe<PasswordState>;
};

export type TempUserCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  otp?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
};

export type TempUserOrderByInput = {
  createdAt?: InputMaybe<OrderDirection>;
  email?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  otp?: InputMaybe<OrderDirection>;
};

export type TempUserUpdateArgs = {
  data: TempUserUpdateInput;
  where: TempUserWhereUniqueInput;
};

export type TempUserUpdateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  otp?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
};

export type TempUserWhereInput = {
  AND?: InputMaybe<Array<TempUserWhereInput>>;
  NOT?: InputMaybe<Array<TempUserWhereInput>>;
  OR?: InputMaybe<Array<TempUserWhereInput>>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  email?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  otp?: InputMaybe<StringFilter>;
  password?: InputMaybe<PasswordFilter>;
};

export type TempUserWhereUniqueInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type TicketType = {
  __typename?: 'TicketType';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  eventName?: Maybe<Array<Event>>;
  eventNameCount?: Maybe<Scalars['Int']['output']>;
  eventPayments?: Maybe<Array<EventPayment>>;
  eventPaymentsCount?: Maybe<Scalars['Int']['output']>;
  fee?: Maybe<Scalars['Float']['output']>;
  id: Scalars['ID']['output'];
  isDeleted?: Maybe<Scalars['Boolean']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
};


export type TicketTypeEventNameArgs = {
  cursor?: InputMaybe<EventWhereUniqueInput>;
  orderBy?: Array<EventOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: EventWhereInput;
};


export type TicketTypeEventNameCountArgs = {
  where?: EventWhereInput;
};


export type TicketTypeEventPaymentsArgs = {
  cursor?: InputMaybe<EventPaymentWhereUniqueInput>;
  orderBy?: Array<EventPaymentOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: EventPaymentWhereInput;
};


export type TicketTypeEventPaymentsCountArgs = {
  where?: EventPaymentWhereInput;
};

export type TicketTypeCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  eventName?: InputMaybe<EventRelateToManyForCreateInput>;
  eventPayments?: InputMaybe<EventPaymentRelateToManyForCreateInput>;
  fee?: InputMaybe<Scalars['Float']['input']>;
  isDeleted?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<UserRelateToOneForCreateInput>;
};

export type TicketTypeManyRelationFilter = {
  every?: InputMaybe<TicketTypeWhereInput>;
  none?: InputMaybe<TicketTypeWhereInput>;
  some?: InputMaybe<TicketTypeWhereInput>;
};

export type TicketTypeOrderByInput = {
  createdAt?: InputMaybe<OrderDirection>;
  description?: InputMaybe<OrderDirection>;
  fee?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  isDeleted?: InputMaybe<OrderDirection>;
  title?: InputMaybe<OrderDirection>;
};

export type TicketTypeRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<TicketTypeWhereUniqueInput>>;
  create?: InputMaybe<Array<TicketTypeCreateInput>>;
};

export type TicketTypeRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<TicketTypeWhereUniqueInput>>;
  create?: InputMaybe<Array<TicketTypeCreateInput>>;
  disconnect?: InputMaybe<Array<TicketTypeWhereUniqueInput>>;
  set?: InputMaybe<Array<TicketTypeWhereUniqueInput>>;
};

export type TicketTypeRelateToOneForCreateInput = {
  connect?: InputMaybe<TicketTypeWhereUniqueInput>;
  create?: InputMaybe<TicketTypeCreateInput>;
};

export type TicketTypeRelateToOneForUpdateInput = {
  connect?: InputMaybe<TicketTypeWhereUniqueInput>;
  create?: InputMaybe<TicketTypeCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TicketTypeUpdateArgs = {
  data: TicketTypeUpdateInput;
  where: TicketTypeWhereUniqueInput;
};

export type TicketTypeUpdateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  eventName?: InputMaybe<EventRelateToManyForUpdateInput>;
  eventPayments?: InputMaybe<EventPaymentRelateToManyForUpdateInput>;
  fee?: InputMaybe<Scalars['Float']['input']>;
  isDeleted?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<UserRelateToOneForUpdateInput>;
};

export type TicketTypeWhereInput = {
  AND?: InputMaybe<Array<TicketTypeWhereInput>>;
  NOT?: InputMaybe<Array<TicketTypeWhereInput>>;
  OR?: InputMaybe<Array<TicketTypeWhereInput>>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  description?: InputMaybe<StringFilter>;
  eventName?: InputMaybe<EventManyRelationFilter>;
  eventPayments?: InputMaybe<EventPaymentManyRelationFilter>;
  fee?: InputMaybe<FloatNullableFilter>;
  id?: InputMaybe<IdFilter>;
  isDeleted?: InputMaybe<BooleanFilter>;
  title?: InputMaybe<StringFilter>;
  user?: InputMaybe<UserWhereInput>;
};

export type TicketTypeWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type User = {
  __typename?: 'User';
  address?: Maybe<Array<Address>>;
  addressCount?: Maybe<Scalars['Int']['output']>;
  blockedForMessage?: Maybe<Array<User>>;
  blockedForMessageCount?: Maybe<Scalars['Int']['output']>;
  blockedUsers?: Maybe<Array<User>>;
  blockedUsersCount?: Maybe<Scalars['Int']['output']>;
  blockedUsersForMsg?: Maybe<Array<User>>;
  blockedUsersForMsgCount?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  eventPaymentMethod?: Maybe<Array<EventPaymentMethod>>;
  eventPaymentMethodCount?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  isUserDeleted?: Maybe<Scalars['Boolean']['output']>;
  marketPlaceItems?: Maybe<Array<MarketPlace>>;
  marketPlaceItemsCount?: Maybe<Scalars['Int']['output']>;
  marketPlaceTagSubScribe?: Maybe<Array<MartketPlaceTag>>;
  marketPlaceTagSubScribeCount?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  password?: Maybe<PasswordState>;
  passwordResetIssuedAt?: Maybe<Scalars['DateTime']['output']>;
  passwordResetRedeemedAt?: Maybe<Scalars['DateTime']['output']>;
  passwordResetToken?: Maybe<PasswordState>;
  report?: Maybe<Array<Report>>;
  reportCount?: Maybe<Scalars['Int']['output']>;
  role?: Maybe<Scalars['String']['output']>;
  savedMarketPlaceItem?: Maybe<Array<MarketPlace>>;
  savedMarketPlaceItemCount?: Maybe<Scalars['Int']['output']>;
  searchedWord?: Maybe<Array<SearchedWord>>;
  searchedWordCount?: Maybe<Scalars['Int']['output']>;
  ticketType?: Maybe<Array<TicketType>>;
  ticketTypeCount?: Maybe<Scalars['Int']['output']>;
  token?: Maybe<Scalars['String']['output']>;
  userImage?: Maybe<ImageFieldOutput>;
};


export type UserAddressArgs = {
  cursor?: InputMaybe<AddressWhereUniqueInput>;
  orderBy?: Array<AddressOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: AddressWhereInput;
};


export type UserAddressCountArgs = {
  where?: AddressWhereInput;
};


export type UserBlockedForMessageArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  orderBy?: Array<UserOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: UserWhereInput;
};


export type UserBlockedForMessageCountArgs = {
  where?: UserWhereInput;
};


export type UserBlockedUsersArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  orderBy?: Array<UserOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: UserWhereInput;
};


export type UserBlockedUsersCountArgs = {
  where?: UserWhereInput;
};


export type UserBlockedUsersForMsgArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  orderBy?: Array<UserOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: UserWhereInput;
};


export type UserBlockedUsersForMsgCountArgs = {
  where?: UserWhereInput;
};


export type UserEventPaymentMethodArgs = {
  cursor?: InputMaybe<EventPaymentMethodWhereUniqueInput>;
  orderBy?: Array<EventPaymentMethodOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: EventPaymentMethodWhereInput;
};


export type UserEventPaymentMethodCountArgs = {
  where?: EventPaymentMethodWhereInput;
};


export type UserMarketPlaceItemsArgs = {
  cursor?: InputMaybe<MarketPlaceWhereUniqueInput>;
  orderBy?: Array<MarketPlaceOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: MarketPlaceWhereInput;
};


export type UserMarketPlaceItemsCountArgs = {
  where?: MarketPlaceWhereInput;
};


export type UserMarketPlaceTagSubScribeArgs = {
  cursor?: InputMaybe<MartketPlaceTagWhereUniqueInput>;
  orderBy?: Array<MartketPlaceTagOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: MartketPlaceTagWhereInput;
};


export type UserMarketPlaceTagSubScribeCountArgs = {
  where?: MartketPlaceTagWhereInput;
};


export type UserReportArgs = {
  cursor?: InputMaybe<ReportWhereUniqueInput>;
  orderBy?: Array<ReportOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: ReportWhereInput;
};


export type UserReportCountArgs = {
  where?: ReportWhereInput;
};


export type UserSavedMarketPlaceItemArgs = {
  cursor?: InputMaybe<MarketPlaceWhereUniqueInput>;
  orderBy?: Array<MarketPlaceOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: MarketPlaceWhereInput;
};


export type UserSavedMarketPlaceItemCountArgs = {
  where?: MarketPlaceWhereInput;
};


export type UserSearchedWordArgs = {
  cursor?: InputMaybe<SearchedWordWhereUniqueInput>;
  orderBy?: Array<SearchedWordOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: SearchedWordWhereInput;
};


export type UserSearchedWordCountArgs = {
  where?: SearchedWordWhereInput;
};


export type UserTicketTypeArgs = {
  cursor?: InputMaybe<TicketTypeWhereUniqueInput>;
  orderBy?: Array<TicketTypeOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: TicketTypeWhereInput;
};


export type UserTicketTypeCountArgs = {
  where?: TicketTypeWhereInput;
};

export type UserAuthenticationWithPasswordFailure = {
  __typename?: 'UserAuthenticationWithPasswordFailure';
  message: Scalars['String']['output'];
};

export type UserAuthenticationWithPasswordResult = UserAuthenticationWithPasswordFailure | UserAuthenticationWithPasswordSuccess;

export type UserAuthenticationWithPasswordSuccess = {
  __typename?: 'UserAuthenticationWithPasswordSuccess';
  item: User;
  sessionToken: Scalars['String']['output'];
};

export type UserCreateInput = {
  address?: InputMaybe<AddressRelateToManyForCreateInput>;
  blockedForMessage?: InputMaybe<UserRelateToManyForCreateInput>;
  blockedUsers?: InputMaybe<UserRelateToManyForCreateInput>;
  blockedUsersForMsg?: InputMaybe<UserRelateToManyForCreateInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  eventPaymentMethod?: InputMaybe<EventPaymentMethodRelateToManyForCreateInput>;
  isUserDeleted?: InputMaybe<Scalars['Boolean']['input']>;
  marketPlaceItems?: InputMaybe<MarketPlaceRelateToManyForCreateInput>;
  marketPlaceTagSubScribe?: InputMaybe<MartketPlaceTagRelateToManyForCreateInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  passwordResetIssuedAt?: InputMaybe<Scalars['DateTime']['input']>;
  passwordResetRedeemedAt?: InputMaybe<Scalars['DateTime']['input']>;
  passwordResetToken?: InputMaybe<Scalars['String']['input']>;
  report?: InputMaybe<ReportRelateToManyForCreateInput>;
  role?: InputMaybe<Scalars['String']['input']>;
  savedMarketPlaceItem?: InputMaybe<MarketPlaceRelateToManyForCreateInput>;
  searchedWord?: InputMaybe<SearchedWordRelateToManyForCreateInput>;
  ticketType?: InputMaybe<TicketTypeRelateToManyForCreateInput>;
  token?: InputMaybe<Scalars['String']['input']>;
  userImage?: InputMaybe<ImageFieldInput>;
};

export type UserManyRelationFilter = {
  every?: InputMaybe<UserWhereInput>;
  none?: InputMaybe<UserWhereInput>;
  some?: InputMaybe<UserWhereInput>;
};

export type UserOrderByInput = {
  createdAt?: InputMaybe<OrderDirection>;
  email?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  isUserDeleted?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
  passwordResetIssuedAt?: InputMaybe<OrderDirection>;
  passwordResetRedeemedAt?: InputMaybe<OrderDirection>;
  role?: InputMaybe<OrderDirection>;
  token?: InputMaybe<OrderDirection>;
};

export type UserRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
  create?: InputMaybe<Array<UserCreateInput>>;
};

export type UserRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
  create?: InputMaybe<Array<UserCreateInput>>;
  disconnect?: InputMaybe<Array<UserWhereUniqueInput>>;
  set?: InputMaybe<Array<UserWhereUniqueInput>>;
};

export type UserRelateToOneForCreateInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  create?: InputMaybe<UserCreateInput>;
};

export type UserRelateToOneForUpdateInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  create?: InputMaybe<UserCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UserUpdateArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};

export type UserUpdateInput = {
  address?: InputMaybe<AddressRelateToManyForUpdateInput>;
  blockedForMessage?: InputMaybe<UserRelateToManyForUpdateInput>;
  blockedUsers?: InputMaybe<UserRelateToManyForUpdateInput>;
  blockedUsersForMsg?: InputMaybe<UserRelateToManyForUpdateInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  eventPaymentMethod?: InputMaybe<EventPaymentMethodRelateToManyForUpdateInput>;
  isUserDeleted?: InputMaybe<Scalars['Boolean']['input']>;
  marketPlaceItems?: InputMaybe<MarketPlaceRelateToManyForUpdateInput>;
  marketPlaceTagSubScribe?: InputMaybe<MartketPlaceTagRelateToManyForUpdateInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  passwordResetIssuedAt?: InputMaybe<Scalars['DateTime']['input']>;
  passwordResetRedeemedAt?: InputMaybe<Scalars['DateTime']['input']>;
  passwordResetToken?: InputMaybe<Scalars['String']['input']>;
  report?: InputMaybe<ReportRelateToManyForUpdateInput>;
  role?: InputMaybe<Scalars['String']['input']>;
  savedMarketPlaceItem?: InputMaybe<MarketPlaceRelateToManyForUpdateInput>;
  searchedWord?: InputMaybe<SearchedWordRelateToManyForUpdateInput>;
  ticketType?: InputMaybe<TicketTypeRelateToManyForUpdateInput>;
  token?: InputMaybe<Scalars['String']['input']>;
  userImage?: InputMaybe<ImageFieldInput>;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  address?: InputMaybe<AddressManyRelationFilter>;
  blockedForMessage?: InputMaybe<UserManyRelationFilter>;
  blockedUsers?: InputMaybe<UserManyRelationFilter>;
  blockedUsersForMsg?: InputMaybe<UserManyRelationFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  email?: InputMaybe<StringFilter>;
  eventPaymentMethod?: InputMaybe<EventPaymentMethodManyRelationFilter>;
  id?: InputMaybe<IdFilter>;
  isUserDeleted?: InputMaybe<BooleanFilter>;
  marketPlaceItems?: InputMaybe<MarketPlaceManyRelationFilter>;
  marketPlaceTagSubScribe?: InputMaybe<MartketPlaceTagManyRelationFilter>;
  name?: InputMaybe<StringFilter>;
  passwordResetIssuedAt?: InputMaybe<DateTimeNullableFilter>;
  passwordResetRedeemedAt?: InputMaybe<DateTimeNullableFilter>;
  passwordResetToken?: InputMaybe<PasswordFilter>;
  report?: InputMaybe<ReportManyRelationFilter>;
  role?: InputMaybe<StringNullableFilter>;
  savedMarketPlaceItem?: InputMaybe<MarketPlaceManyRelationFilter>;
  searchedWord?: InputMaybe<SearchedWordManyRelationFilter>;
  ticketType?: InputMaybe<TicketTypeManyRelationFilter>;
  token?: InputMaybe<StringFilter>;
};

export type UserWhereUniqueInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type ValidateUserPasswordResetTokenResult = {
  __typename?: 'ValidateUserPasswordResetTokenResult';
  code: PasswordResetRedemptionErrorCode;
  message: Scalars['String']['output'];
};

export type MarketPlace_Item_DetailsQueryVariables = Exact<{
  where: MarketPlaceWhereUniqueInput;
}>;


export type MarketPlace_Item_DetailsQuery = { __typename?: 'Query', marketPlace?: { __typename?: 'MarketPlace', createdAt?: any | null, id: string, itemName?: string | null, itemPrice?: number | null, lastBumped?: any | null, itemDescription?: { __typename?: 'MarketPlace_itemDescription_Document', document: any } | null, itemImage?: Array<{ __typename?: 'MarketPlaceImage', id: string, itemImage?: { __typename?: 'ImageFieldOutput', id: string, url: string } | null }> | null, itemTag?: Array<{ __typename?: 'MartketPlaceTag', id: string, tag?: string | null }> | null, user?: { __typename?: 'User', id: string, email?: string | null, name?: string | null, userImage?: { __typename?: 'ImageFieldOutput', url: string } | null } | null } | null };

export type Seller_ItemsQueryVariables = Exact<{
  where: MarketPlaceWhereInput;
  orderBy: Array<MarketPlaceOrderByInput> | MarketPlaceOrderByInput;
  marketPlaceItemsCountWhere2: MarketPlaceWhereInput;
  take?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
}>;


export type Seller_ItemsQuery = { __typename?: 'Query', marketPlaces?: Array<{ __typename?: 'MarketPlace', id: string, itemName?: string | null, itemPrice?: number | null, keyword?: string | null, lastBumped?: any | null, viewsCount?: number | null, itemDescription?: { __typename?: 'MarketPlace_itemDescription_Document', document: any } | null, itemImage?: Array<{ __typename?: 'MarketPlaceImage', id: string, itemImage?: { __typename?: 'ImageFieldOutput', id: string, url: string } | null }> | null, itemTag?: Array<{ __typename?: 'MartketPlaceTag', id: string, tag?: string | null }> | null, user?: { __typename?: 'User', marketPlaceItemsCount?: number | null, id: string, name?: string | null, email?: string | null, createdAt?: any | null, userImage?: { __typename?: 'ImageFieldOutput', url: string, id: string } | null } | null }> | null };


export const MarketPlace_Item_DetailsDocument = gql`
    query MarketPlace_Item_details($where: MarketPlaceWhereUniqueInput!) {
  marketPlace(where: $where) {
    createdAt
    id
    itemDescription {
      document
    }
    itemImage {
      id
      itemImage {
        id
        url
      }
    }
    itemName
    itemPrice
    itemTag {
      id
      tag
    }
    lastBumped
    user {
      id
      email
      name
      userImage {
        url
      }
    }
  }
}
    `;

/**
 * __useMarketPlace_Item_DetailsQuery__
 *
 * To run a query within a React component, call `useMarketPlace_Item_DetailsQuery` and pass it any options that fit your needs.
 * When your component renders, `useMarketPlace_Item_DetailsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMarketPlace_Item_DetailsQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useMarketPlace_Item_DetailsQuery(baseOptions: Apollo.QueryHookOptions<MarketPlace_Item_DetailsQuery, MarketPlace_Item_DetailsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MarketPlace_Item_DetailsQuery, MarketPlace_Item_DetailsQueryVariables>(MarketPlace_Item_DetailsDocument, options);
      }
export function useMarketPlace_Item_DetailsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MarketPlace_Item_DetailsQuery, MarketPlace_Item_DetailsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MarketPlace_Item_DetailsQuery, MarketPlace_Item_DetailsQueryVariables>(MarketPlace_Item_DetailsDocument, options);
        }
export type MarketPlace_Item_DetailsQueryHookResult = ReturnType<typeof useMarketPlace_Item_DetailsQuery>;
export type MarketPlace_Item_DetailsLazyQueryHookResult = ReturnType<typeof useMarketPlace_Item_DetailsLazyQuery>;
export type MarketPlace_Item_DetailsQueryResult = Apollo.QueryResult<MarketPlace_Item_DetailsQuery, MarketPlace_Item_DetailsQueryVariables>;
export const Seller_ItemsDocument = gql`
    query SELLER_ITEMS($where: MarketPlaceWhereInput!, $orderBy: [MarketPlaceOrderByInput!]!, $marketPlaceItemsCountWhere2: MarketPlaceWhereInput!, $take: Int, $skip: Int) {
  marketPlaces(where: $where, orderBy: $orderBy, take: $take, skip: $skip) {
    id
    itemDescription {
      document
    }
    itemImage {
      id
      itemImage {
        id
        url
      }
    }
    itemName
    itemPrice
    itemTag {
      id
      tag
    }
    keyword
    lastBumped
    user {
      marketPlaceItemsCount(where: $marketPlaceItemsCountWhere2)
      id
      name
      email
      createdAt
      userImage {
        url
        id
      }
    }
    viewsCount
  }
}
    `;

/**
 * __useSeller_ItemsQuery__
 *
 * To run a query within a React component, call `useSeller_ItemsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSeller_ItemsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSeller_ItemsQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *      marketPlaceItemsCountWhere2: // value for 'marketPlaceItemsCountWhere2'
 *      take: // value for 'take'
 *      skip: // value for 'skip'
 *   },
 * });
 */
export function useSeller_ItemsQuery(baseOptions: Apollo.QueryHookOptions<Seller_ItemsQuery, Seller_ItemsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Seller_ItemsQuery, Seller_ItemsQueryVariables>(Seller_ItemsDocument, options);
      }
export function useSeller_ItemsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Seller_ItemsQuery, Seller_ItemsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Seller_ItemsQuery, Seller_ItemsQueryVariables>(Seller_ItemsDocument, options);
        }
export type Seller_ItemsQueryHookResult = ReturnType<typeof useSeller_ItemsQuery>;
export type Seller_ItemsLazyQueryHookResult = ReturnType<typeof useSeller_ItemsLazyQuery>;
export type Seller_ItemsQueryResult = Apollo.QueryResult<Seller_ItemsQuery, Seller_ItemsQueryVariables>;