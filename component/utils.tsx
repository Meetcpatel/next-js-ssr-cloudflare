import { t } from "i18next";
import moment from "moment";
import React from "react";
import { useState, useEffect } from "react";

export const useMobileSize = () => {
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    const updateScreenWidth = () => {
      setScreenWidth(window.innerWidth);
    };
    setScreenWidth(window.innerWidth);
    window.addEventListener("resize", updateScreenWidth);
    return () => {
      window.removeEventListener("resize", updateScreenWidth);
    };
  }, []);
  return screenWidth <= 600;
};

export const Figtree = "Figtree";

export const formatTimeAgo = (timestamp: string) => {
  const momentObj = moment(timestamp, "YYYY-MM-DDTHH:mm:ss.SSSZ");
  const now = moment();

  const diffInMinutes = now.diff(momentObj, "minutes");
  const diffInHours = now.diff(momentObj, "hours");
  const diffInDays = now.diff(momentObj, "days");

  if (diffInMinutes < 60) {
    return `${diffInMinutes} minute${diffInMinutes > 1 ? "s" : ""} ago`;
  } else if (diffInHours < 24) {
    return `${diffInHours} hour${diffInHours > 1 ? "s" : ""} ago`;
  } else {
    return `${diffInDays} day${diffInDays > 1 ? "s" : ""} ago`;
  }
};

export const extractTextFromDocument: any = (document: any) => {
  // Implement your logic to extract text from the document structure
  // This can involve recursively traversing the document and extracting relevant text
  // Below is a generic example, modify it based on your actual data structure.
  if (!document) {
    return "";
  }

  if (Array.isArray(document)) {
    return document.map((item) => extractTextFromDocument(item)).join(" ");
  }

  if (typeof document === "object") {
    // Handle different types of rich text elements, blocks, inline nodes, etc.
    // Adjust this part based on your actual data structure.
    if (document.text) {
      return document.text + " ";
    }

    // Handle other rich text elements...

    // Recursively handle child nodes
    if (document.children) {
      return extractTextFromDocument(document.children);
    }
  }

  return "";
};

export interface ItemDetailsQuery {
  createdAt: string;
  id: string;
  itemDescription: {
    document: any;
  };
  itemImage: Array<{
    id: string;
    itemImage: {
      url: string;
      id: string;
    };
  }>;
  itemName: string;
  itemPrice: number;
  itemTag: Array<{
    id: string;
    tag: string;
  }>;
  user: {
    createdAt?: any | null;
    marketPlaceItemsCount?: number;
    email: string;
    name: string;
    userImage: {
      id: string;
      url: string;
    };
  };
}

export const useScreenSize = () => {
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    const updateScreenWidth = () => {
      setScreenWidth(window.innerWidth);
    };
    setScreenWidth(window.innerWidth);
    window.addEventListener("resize", updateScreenWidth);
    return () => {
      window.removeEventListener("resize", updateScreenWidth);
    };
  }, []);
  return screenWidth;
};

export const GlobalColorStyle = {
  Background: "#060E18",
  White: "#FFFFFF",
  Card: "#121F2B",
  Subtitle: "#ABB2BA",
  TagBackground: "#353103",
};

export const splitParagraphs = (data: any) => {
  const result: any = [];

  data?.forEach((item: any) => {
    const text = item?.children?.[0]?.text;
    const paragraphs = text?.split("\n")?.filter((para: any) => para !== "");
    paragraphs?.forEach((para: any) => {
      result?.push({
        type: "paragraph",
        children: [{ text: para }],
      });
    });
  });

  return result;
};
