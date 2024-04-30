"use client";

import getApolloClient from "@/lib/apolloClient";
import { gql } from "@apollo/client";
import { MarketPlaceItem } from "@/component/MarketPlaceItem";
import { extractTextFromDocument } from "@/component/utils";
import useAppLaunch from "@/hooks/useAppLaunch";
import { generateMetaTags } from "@/component/generateMetaTags";
import { MarketPlaceData } from "@/type";
import { useRouter } from "next/router";

export const runtime = "experimental-edge";

export default function Page({ data }: MarketPlaceData) {
  useAppLaunch();
  const { asPath } = useRouter();
  const image = data?.marketPlace?.itemImage?.[0]?.itemImage?.url;

  const origin =
    typeof window !== "undefined" && window.location.origin
      ? window.location.origin
      : "";
  const imageUrl = origin + "/api/og?" + "image=" + image;

  const siteURL = origin + asPath;

  if (!data.marketPlace) return undefined;

  const descriptionText = extractTextFromDocument(
    data?.marketPlace?.itemDescription?.document ?? []
  );
  const truncatedDescription =
    descriptionText.length > 90
      ? `${descriptionText.slice(0, 90).replace(/\n/g, "")}`
      : descriptionText.replace(/\n/g, "");

  const totalViewCount = data?.marketPlace?.viewsCount;
  const totalSavedCount = data?.marketPlace?.savedByCount;

  const viewText =
    totalViewCount !== null && totalViewCount === 1 ? "view" : "views";
  const likeText =
    totalSavedCount !== null && totalSavedCount === 1 ? "like" : "likes";

  const countPart =
    totalViewCount !== null && totalViewCount > 0
      ? `${totalViewCount} ${viewText}`
      : "";
  const likePart =
    totalSavedCount !== null && totalSavedCount > 0
      ? ` | ${totalSavedCount} ${likeText}`
      : "";

  const description = `HK$${data?.marketPlace?.itemPrice?.toLocaleString()} | ${countPart}${likePart}\n ${truncatedDescription}`;

  const title = data?.marketPlace?.itemName;

  return (
    <div>
      {generateMetaTags(title, description, imageUrl, siteURL)}
      <MarketPlaceItem data={data} />
    </div>
  );
}

export async function getServerSideProps(context: any) {
  const itemId = context?.query?.marketplaceitem;
  const client = getApolloClient();
  try {
    const { data } = await client.query({
      query: gql`
        query MarketPlace($where: MarketPlaceWhereUniqueInput!) {
          marketPlace(where: $where) {
            viewsCount
            savedByCount
            isSold
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
              marketPlaceItemsCount
              id
              email
              name
              createdAt
              userImage {
                url
              }
            }
          }
        }
      `,
      variables: {
        where: {
          id: itemId,
        },
      },
    });
    return {
      props: {
        data,
      },
    };
  } catch (error) {
    console.log("Error", error);
    return {
      props: {
        data: undefined,
      },
    };
  }
}
