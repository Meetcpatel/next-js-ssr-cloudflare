import { Box, Button, Typography } from "@mui/material";
import InventoryIcon from "@mui/icons-material/Inventory";
import PublicIcon from "@mui/icons-material/Public";
import TimelineIcon from "@mui/icons-material/Timeline";
import Image from "next/image";
import { SellerName } from "./SellerName";
import { useDeviceInfo } from "@/hooks/useDeviceInfo";

export const UserDetails = ({
  sellerName,
  formattedOutput,
  totalItemListedByUser,
  show = true,
}: {
  sellerName: string | null | undefined;
  formattedOutput: string;
  totalItemListedByUser: number | null | undefined;
  show: boolean;
}) => {
  const { isSmallWidth, isSmallWidthDown, isExtraSmallWidth } = useDeviceInfo();
  const isMobile = isSmallWidth || isSmallWidthDown || isExtraSmallWidth;
  return (
    <Box
      sx={{
        display: show ? "flex" : "none",
        flexDirection: "column",
        flex: 1,
        justifyContent: "space-between",
      }}
    >
      <SellerName
        sellerName={sellerName ?? ""}
        show={isMobile ? false : true}
      />
      <Box
        sx={{
          backgroundColor: "#121F2B",
          padding: "20px",
          borderRadius: "16px",
          display: "flex",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignContent: "center",
            alignItems: "center",
            flex: 1,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              rowGap: "12px",
              flex: 1,
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                columnGap: "7.33px",
                justifyContent: "space-between",
                flex: 1,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  columnGap: "12px",
                }}
              >
                <PublicIcon style={{ color: "#ABB2BA" }} fontSize="small" />
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: "400",
                    color: "#ABB2BA",
                    letterSpacing: 0.5,
                    lineHeight: "20px",
                  }}
                >
                  Location
                </Typography>
              </Box>
              <Typography
                style={{
                  fontSize: 14,
                  fontWeight: "400",
                  color: "#FFFFFF",
                  letterSpacing: 0.5,
                  lineHeight: "20px",
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
                justifyContent: "space-between",
                flex: 1,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  columnGap: "12px",
                }}
              >
                <TimelineIcon style={{ color: "#ABB2BA" }} fontSize="small" />
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: "400",
                    color: "#ABB2BA",
                    letterSpacing: 0.5,
                    lineHeight: "20px",
                  }}
                >
                  On Airhub since
                </Typography>
              </Box>
              <Typography
                style={{
                  fontSize: 14,
                  fontWeight: "400",
                  color: "#FFFFFF",
                  letterSpacing: 0.5,
                  lineHeight: "20px",
                }}
              >
                {formattedOutput}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                columnGap: "7.33px",
                justifyContent: "space-between",
                flex: 1,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  columnGap: "12px",
                }}
              >
                <InventoryIcon style={{ color: "#ABB2BA" }} fontSize="small" />
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: "400",
                    color: "#ABB2BA",
                    letterSpacing: 0.5,
                    lineHeight: "20px",
                  }}
                >
                  All-time total listings
                </Typography>
              </Box>
              <Typography
                style={{
                  fontSize: 14,
                  fontWeight: "400",
                  color: "#FFFFFF",
                  letterSpacing: 0.5,
                  lineHeight: "20px",
                }}
              >
                {totalItemListedByUser}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
