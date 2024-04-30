import { OrderDirection } from "@/graphql/graphql-types";
import gql from "graphql-tag";
import { GetServerSidePropsContext } from "next";

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

export function calculateTake(page: string): number {
  return parseInt(page) * 5;
}

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
