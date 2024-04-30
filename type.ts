export interface MarketPlaceItem {
  savedByCount: number | null;
  viewsCount: number | null;
  isSold: boolean;
  createdAt: string;
  id: string;
  itemDescription: {
    document: {
      type: string;
      children: {
        text: string;
      }[];
    }[];
  };
  itemImage: {
    id: string;
    itemImage: {
      id: string;
      url: string;
    };
  }[];
  itemName: string;
  itemPrice: number;
  itemTag: {
    id: string;
    tag: string;
  }[];
  lastBumped: string;
  user: {
    marketPlaceItemsCount: number;
    id: string;
    email: string;
    name: string;
    createdAt: string;
    userImage: { url: string | null };
  };
}

export interface MarketPlaceData {
  data: {
    marketPlace: MarketPlaceItem;
  };
}

export type Seller_ItemsQuery = {
  __typename?: "Query";
  marketPlaces?: Array<{
    __typename?: "MarketPlace";
    id: string;
    itemName?: string | null;
    itemPrice?: number | null;
    keyword?: string | null;
    lastBumped?: any | null;
    viewsCount?: number | null;
    itemDescription?: {
      __typename?: "MarketPlace_itemDescription_Document";
      document: any;
    } | null;
    itemImage?: Array<{
      __typename?: "MarketPlaceImage";
      id: string;
      itemImage?: {
        __typename?: "ImageFieldOutput";
        id: string;
        url: string;
      } | null;
    }> | null;
    itemTag?: Array<{
      __typename?: "MartketPlaceTag";
      id: string;
      tag?: string | null;
    }> | null;
    user?: {
      __typename?: "User";
      id: string;
      marketPlaceItemsCount: number | null;
      name?: string | null;
      email?: string | null;
      createdAt?: any | null;
      userImage?: {
        __typename?: "ImageFieldOutput";
        url: string;
        id: string;
      } | null;
    } | null;
  }> | null;
};

export type Seller_ItemsQueryType = NonNullable<
  NonNullable<Seller_ItemsQuery["marketPlaces"]>
>[0];

export interface ServerSideProps {
  data: any | undefined;
  page: string;
  sellerId: string;
  sold: string;
}
