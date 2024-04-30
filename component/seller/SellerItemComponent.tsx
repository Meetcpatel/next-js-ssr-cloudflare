import React from "react";
import { Box, Typography } from "@mui/material";
import { getImgURL } from "../getImgURL";
import { useRouter } from "next/router";
import Image from "next/image";
import { useDeviceInfo } from "@/hooks/useDeviceInfo";
import { Seller_ItemsQueryType } from "@/type";

const ImageComponent = ({ src }: any) => (
  <Image
    src={src}
    alt=""
    style={{
      borderTopLeftRadius: "16px",
      borderTopRightRadius: "16px",
      width: "100%",
      height: "100%",
      objectFit: "cover",
    }}
    priority
    sizes="100vw"
    fill={true}
  />
);

const TitleComponent = ({ title }: any) => (
  <Typography
    sx={{
      fontWeight: 600,
      fontSize: "14px",
      lineHeight: "20px",
      letterSpacing: "0.5px",
      color: "white",
    }}
  >
    {title}
  </Typography>
);

const PriceComponent = ({ price }: any) => (
  <Typography
    sx={{
      fontSize: { xs: 20, lg: 24 },
      fontWeight: 700,
      letterSpacing: 0.44,
      color: "#DFBC3B",
      display: "flex",
      alignItems: "baseline",
    }}
  >
    HKD $
    <Typography
      component="span"
      sx={{
        fontSize: "22px",
        fontWeight: 700,
        lineHeight: "32px",
        letterSpacing: 0.52,
        marginLeft: 0.2,
      }}
    >
      {price?.toFixed(0)}
    </Typography>
    <Typography component="span" sx={{ fontSize: "14px", fontWeight: 600 }}>
      .{price?.toFixed(2).split(".")[1]}
    </Typography>
  </Typography>
);

const SellerItemComponent = ({ item }: { item: Seller_ItemsQueryType }) => {
  const router = useRouter();
  const { isSmallWidth, isSmallWidthDown, isExtraSmallWidth, windowWidth } =
    useDeviceInfo();
  const isMobile = isSmallWidth || isSmallWidthDown || isExtraSmallWidth;
  return (
    <Box
      onClick={() => {
        if (item?.id) {
          router.push(`item-share/?marketplaceitem=${item.id}`);
        }
      }}
      sx={{
        height: "392px",
        width: isMobile ? "100%" : "232px",
        borderRadius: "16px",
        backgroundColor: "#121F2B",
        display: "flex",
        flexDirection: "column",
        cursor: item.id ? "pointer" : "default",
        // alignContent: "center",
      }}
    >
      <Box
        sx={{
          width: isMobile ? "100%" : "232px",
          height: "262px",
          position: "relative",
        }}
      >
        <ImageComponent
          src={getImgURL(item?.itemImage?.[0]?.itemImage?.url ?? "")}
        />
      </Box>
      <Box
        sx={{
          paddingTop: "20px",
          paddingLeft: "16px",
          paddingRight: "16px",
          paddingBottom: "20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          flex: 1,
        }}
      >
        <TitleComponent title={item?.itemName} />
        <PriceComponent price={item.itemPrice} />
      </Box>
    </Box>
  );
};

export default SellerItemComponent;
