import { Box, Button, Typography } from "@mui/material";
import React, { Dispatch, SetStateAction } from "react";
import { ItemDetailsQuery, formatTimeAgo } from "./utils";
import { getImgURL } from "./getImgURL";
import Image from "next/image";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import PublicIcon from "@mui/icons-material/Public";
import TimelineIcon from "@mui/icons-material/Timeline";
import moment from "moment";
import InventoryIcon from "@mui/icons-material/Inventory";
import { MarketPlaceItem } from "../type";
import { LikesViewsCount } from "./ItemShare/LikesViewsCount";
import { redirect } from "next/navigation";
import { useRouter } from "next/router";

export default function PriceAndSeller({
  marketPlaceItem,
  setOpen,
  setShareModal,
}: {
  marketPlaceItem: MarketPlaceItem;
  setOpen: Dispatch<SetStateAction<boolean>>;
  setShareModal: Dispatch<SetStateAction<boolean>>;
}) {
  const router = useRouter();
  const userCreationDate = marketPlaceItem?.user?.createdAt;
  const creationMoment = moment(userCreationDate);
  const formattedOutput = creationMoment.format("MMM YYYY");
  const totalItemListedByUser = marketPlaceItem?.user?.marketPlaceItemsCount;
  const totalViews = marketPlaceItem.viewsCount;
  const savedByCount = marketPlaceItem.savedByCount;
  const isOpen = marketPlaceItem?.isSold;
  return (
    <Box sx={{ marginTop: { xs: "16px", md: "0px", lg: "16px" }, flex: 1 }}>
      <Box
        style={{
          backgroundColor: "#101C28",
          borderRadius: 16,
          padding: 24,
          marginBottom: 16,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <Box>
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
                  fontSize: { xs: 36, lg: 40 },
                  fontWeight: 700,
                  marginLeft: 0.2,
                }}
              >
                {marketPlaceItem?.itemPrice?.toFixed(0)}
              </Typography>
              <Typography
                component="span"
                sx={{ fontSize: { xs: 24, lg: 28 }, fontWeight: 700 }}
              >
                .{marketPlaceItem?.itemPrice?.toFixed(2).split(".")[1]}
              </Typography>
            </Typography>

            <Typography
              sx={{
                fontSize: 14,
                letterSpacing: 0.33,
                color: "#A7B0B4",
              }}
            >
              Listed {formatTimeAgo(marketPlaceItem?.createdAt)}
            </Typography>
            <Box sx={{ marginTop: "8px" }} />
            <LikesViewsCount
              savedByCount={savedByCount}
              totalViews={totalViews}
            />
          </Box>

          <Button
            onClick={() => setShareModal(true)}
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              gap: 1.2,
              textTransform: "capitalize",
            }}
          >
            <Box
              sx={{
                borderRadius: "100px",
                borderColor: "#234658",
                borderWidth: 1,
                borderStyle: "solid",
                width: "46px",
                height: "45px",
                alignContent: "center",
                alignItems: "center",
                alignSelf: "center",
                justifyContent: "center",
                justifyItems: "center",
                display: "flex",
              }}
            >
              <Image
                src={require("../public/Share-IOS.png")}
                alt={marketPlaceItem?.itemName}
                height={24}
                width={24}
              />
            </Box>

            <Typography
              style={{
                fontSize: 12,
                fontWeight: "400",
                color: "#ffffff",
                letterSpacing: 0.7,
              }}
            >
              Share
            </Typography>
          </Button>
        </Box>

        <Button
          onClick={() => setOpen(true)}
          disabled={isOpen}
          style={{ marginTop: 16, borderRadius: 16 }}
          sx={isOpen ? soldButtonStyle : activeButtonStyle}
        >
          {!isOpen && (
            <Image
              src={require("../public/sellerChat.png")}
              alt={marketPlaceItem?.itemName}
              height={20}
              width={20}
            />
          )}
          <Typography
            style={{
              fontSize: 16,
              fontWeight: "600",
              color: isOpen ? "#7C858D" : "#080808",
            }}
          >
            {isOpen ? "Item has been sold" : "Message seller"}
          </Typography>
        </Button>
      </Box>
      <Box
        style={{
          backgroundColor: "#101C28",
          borderRadius: 16,
          padding: 24,
          cursor: marketPlaceItem?.user?.id ? "pointer" : "default",
        }}
        onClick={() => {
          if (marketPlaceItem?.user?.id) {
            router.push(`/seller?sellerid=${marketPlaceItem?.user?.id}`);
          }
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", rowGap: "16px" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: 14, lg: 18 },
                fontWeight: 600,
                color: "#FFFFFF",
                lineHeight: "26px",
              }}
            >
              {marketPlaceItem?.user?.name}
            </Typography>
            <ChevronRightIcon fontSize="small" style={{ color: "#ABB2BA" }} />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              src={
                marketPlaceItem?.user?.userImage?.url
                  ? getImgURL(marketPlaceItem?.user?.userImage?.url)
                  : require("../public/user-avatar.png")
              }
              defaultValue={require("../public/user-avatar.png")}
              alt={marketPlaceItem?.user?.name}
              width={60}
              height={60}
              style={{
                width: 60,
                height: 60,
                borderRadius: 24,
              }}
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  columnGap: "7.33px",
                  alignItems: "center",
                }}
              >
                <PublicIcon style={{ color: "#7C858D" }} fontSize="small" />
                <Typography
                  style={{
                    fontSize: 12,
                    fontWeight: "600",
                    color: "#7E8FA0",
                    letterSpacing: 0.33,
                  }}
                >
                  Hong Kong
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  columnGap: "7.33px",
                  alignItems: "center",
                }}
              >
                <TimelineIcon style={{ color: "#7C858D" }} fontSize="small" />
                <Typography
                  style={{
                    fontSize: 12,
                    fontWeight: "600",
                    color: "#7E8FA0",
                    letterSpacing: 0.33,
                  }}
                >
                  Since {formattedOutput}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  columnGap: "7.33px",
                  alignItems: "center",
                }}
              >
                <InventoryIcon style={{ color: "#7C858D" }} fontSize="small" />
                <Typography
                  style={{
                    fontSize: 12,
                    fontWeight: "600",
                    color: "#7E8FA0",
                    letterSpacing: 0.33,
                  }}
                >
                  {totalItemListedByUser} Items
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

const buttonStyle = {
  width: "100%",
  paddingTop: "14px",
  paddingBottom: "14px",
  paddingLeft: "12px",
  paddingRight: "16px",
  textTransform: "capitalize",
  gap: 1,
};

const soldButtonStyle = {
  ...buttonStyle,
  backgroundColor: "#212D31",
};

const activeButtonStyle = {
  ...buttonStyle,
  backgroundColor: "#DFBC3B",
  "&:hover": {
    backgroundColor: "#C7A52A",
  },
};
