import { OrderDirection } from "@/graphql/graphql-types";
import { Seller_ItemsQuery } from "@/type";
import moment from "moment";
import { GetServerSidePropsContext } from "next";
import gql from "graphql-tag";

export function extractUserData(data: Seller_ItemsQuery) {
  const user = data?.marketPlaces?.[0]?.user;
  const sellerImage = user?.userImage?.url;
  const sellerName = user?.name;
  const userCreationDate = user?.createdAt;
  const totalItemListedByUser = user?.marketPlaceItemsCount;
  return { sellerImage, sellerName, userCreationDate, totalItemListedByUser };
}

export function formatDate(date: string) {
  return moment(date).format("MMM YYYY");
}

export function getSiteURL(asPath: string) {
  const origin =
    typeof window !== "undefined" && window.location.origin
      ? window.location.origin
      : "";
  return origin + asPath;
}

export function getDefaultImage() {
  return typeof window !== "undefined"
    ? window.location.origin + "user-avatar.png"
    : "";
}

export function getTotalItems(data: Seller_ItemsQuery) {
  return data?.marketPlaces?.[0]?.user?.marketPlaceItemsCount ?? 0;
}

export function getDescription(totalItems: number) {
  const region = "Hong Kong";
  return `${totalItems} ${totalItems === 1 ? "item" : "items"} | ${region}`;
}

// Extract query parameters from context
export function extractQueryParams(context: GetServerSidePropsContext): {
  sellerId: string;
  sold: string;
  page: string;
} {
  const sellerId = context?.query?.sellerid?.toString() ?? "";
  const sold = context?.query?.sold?.toString() ?? "";
  const page = context?.query?.page?.toString() ?? "1";
  return { sellerId, sold, page };
}

// Calculate the 'take' parameter based on the page number
export function calculateTake(page: string): number {
  return parseInt(page) * 5;
}

// Fetch data from the GraphQL API
export async function fetchData(
  client: any,
  sellerId: string,
  sold: string,
  take: number
): Promise<any> {
  const { data } = await client.query({
    query: gql`
      query SELLER_ITEMS(
        $where: MarketPlaceWhereInput!
        $orderBy: [MarketPlaceOrderByInput!]!
        $marketPlaceItemsCountWhere2: MarketPlaceWhereInput!
        $take: Int
        $skip: Int
      ) {
        marketPlaces(
          where: $where
          orderBy: $orderBy
          take: $take
          skip: $skip
        ) {
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
    `,
    variables: {
      where: {
        user: {
          id: {
            equals: sellerId,
          },
        },
        isSold: {
          equals: sold == "true" ? true : false,
        },
        isDeleted: {
          equals: false,
        },
      },
      marketPlaceItemsCountWhere2: {
        isSold: {
          equals: sold == "true" ? true : false,
        },
      },
      orderBy: [
        {
          createdAt: OrderDirection?.Desc,
        },
      ],
      take: take,
      skip: 0,
    },
  });
  return data;
}

export async function fetchSellerData(
  client: any,
  sellerId: string
): Promise<any> {
  const { data } = await client.query({
    query: gql`
      query SELLER_ITEMS($where: MarketPlaceWhereInput!) {
        marketPlaces(where: $where) {
          user {
            marketPlaceItemsCount
            id
            name
            email
            createdAt
            userImage {
              url
              id
            }
          }
        }
      }
    `,
    variables: {
      where: {
        user: {
          id: {
            equals: sellerId,
          },
        },
      },
    },
  });
  return data;
}
