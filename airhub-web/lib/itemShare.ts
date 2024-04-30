import { Seller_ItemsQuery } from "@/type";
import moment from "moment";

const origin =
  typeof window !== "undefined" && window.location.origin
    ? window.location.origin
    : "";

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
  return origin + asPath;
}

export const defaultImage = origin + "user-avatar.png";

export function getTotalItems(data: Seller_ItemsQuery) {
  return data?.marketPlaces?.[0]?.user?.marketPlaceItemsCount ?? 0;
}

export function getDescription(totalItems: number) {
  const region = "Hong Kong";
  return `${totalItems} ${totalItems === 1 ? "item" : "items"} | ${region}`;
}
