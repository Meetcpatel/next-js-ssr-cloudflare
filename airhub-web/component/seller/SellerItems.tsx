import { Seller_ItemsQuery } from "@/type";
import { Box, ImageList, Skeleton, Typography } from "@mui/material";
import Image from "next/image";
import { getImgURL } from "../getImgURL";
import SellerItemComponent from "./SellerItemComponent";
import InfiniteScroll from "react-infinite-scroll-component";
import Grid from "@mui/material/Unstable_Grid2";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { useState } from "react";
import { Figtree } from "../utils";
import { LoaderComponent } from "./LoaderComponent";
import { useDeviceInfo } from "@/hooks/useDeviceInfo";

export const SellerItems = ({
  data,
  fetchMore,
  toggleItems,
  sold,
}: {
  data: Seller_ItemsQuery;
  fetchMore: any;
  toggleItems: (value: "Active" | "Sold") => void;
  sold: string;
}) => {
  const [value, setValue] = useState(sold == "true" ? "Sold" : "Active");
  const handleChange = (
    event: React.SyntheticEvent,
    value: "Active" | "Sold"
  ) => {
    setValue(value);
    toggleItems(value);
  };

  const itemsDisplayed = data?.marketPlaces?.length ?? 0;
  const totalItems = data?.marketPlaces?.[0]?.user?.marketPlaceItemsCount ?? 0;
  const { isSmallWidth, isSmallWidthDown, isExtraSmallWidth } = useDeviceInfo();
  const isMobile = isSmallWidth || isSmallWidthDown || isExtraSmallWidth;
  return (
    <Box sx={{ marginTop: "30px" }}>
      <TabContext value={value}>
        <Box
          sx={{ borderBottom: 1, borderColor: "divider", marginBottom: "16px" }}
        >
          <TabList
            TabIndicatorProps={{
              style: {
                backgroundColor: "#DFBC3B",
              },
            }}
            onChange={handleChange}
          >
            <Tab
              classes={{
                selected: "selected",
              }}
              sx={{
                fontWeight: "600",
                fontSize: "18px",
                lineHeight: "24px",
                color: "#7C858D",
                fontFamily: Figtree,
                "&.selected": {
                  fontFamily: Figtree,
                  color: "white",
                  fontWeight: "600",
                  fontSize: "18px",
                  lineHeight: "24px",
                },
              }}
              color="white"
              label="Active"
              value="Active"
            />
            <Tab
              classes={{
                selected: "selected",
              }}
              sx={{
                fontWeight: "600",
                fontSize: "18px",
                lineHeight: "24px",
                color: "#7C858D",
                fontFamily: Figtree,
                "&.selected": {
                  fontFamily: Figtree,
                  color: "white",
                  fontWeight: "600",
                  fontSize: "18px",
                  lineHeight: "24px",
                },
              }}
              color="white"
              label="Sold"
              value="Sold"
            />
          </TabList>
        </Box>
      </TabContext>
      {!data.marketPlaces?.[0]?.id && (
        <Box>
          <Typography sx={{ color: "white" }}>
            No {value} items found!
          </Typography>
        </Box>
      )}
      <InfiniteScroll
        dataLength={Number(
          (data.marketPlaces?.[0]?.id && data?.marketPlaces?.length) ?? 0
        )}
        next={() => fetchMore()}
        hasMore={totalItems > itemsDisplayed}
        loader={<LoaderComponent />}
        style={{
          display: "flex",
          flexDirection: "row",
          columnGap: "16px",
          flexWrap: "wrap",
          rowGap: "16px",
          justifyContent: isMobile ? "center" : "",
        }}
      >
        {data.marketPlaces?.[0]?.id &&
          data?.marketPlaces?.map((item, index) => (
            <SellerItemComponent key={index} item={item} />
          ))}
      </InfiniteScroll>
    </Box>
  );
};
