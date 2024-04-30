import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import { getImgURL } from "../getImgURL";
import { MessageSellerButton } from "./MessageSellerButton";
import { SellerName } from "./SellerName";
import { Dispatch, SetStateAction } from "react";
import { useDeviceInfo } from "@/hooks/useDeviceInfo";

export const UserImage = ({
  sellerName,
  sellerImage,
  setOpen,
}: {
  sellerName: string | null | undefined;
  sellerImage: string | undefined | null;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const { isSmallWidth, isSmallWidthDown, isExtraSmallWidth } = useDeviceInfo();
  const isMobile = isSmallWidth || isSmallWidthDown || isExtraSmallWidth;
  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 16,
      }}
    >
      <Image
        alt=""
        src={
          sellerImage
            ? getImgURL(sellerImage)
            : require("../../public/user-avatar.png")
        }
        width={140}
        height={140}
        style={{
          borderRadius: 63,
        }}
      />

      <MessageSellerButton setOpen={setOpen} show={isMobile ? false : true} />
      <SellerName
        sellerName={sellerName ?? ""}
        show={isMobile ? true : false}
      />
    </Box>
  );
};

const buttonStyle = {
  width: "100%",
  paddingTop: "14px",
  paddingBottom: "14px",
  paddingLeft: "12px",
  paddingRight: "16px",
  textTransform: "capitalize",
  gap: 1,
};
const activeButtonStyle = {
  ...buttonStyle,
  backgroundColor: "#DFBC3B",
  "&:hover": {
    backgroundColor: "#C7A52A",
  },
};
