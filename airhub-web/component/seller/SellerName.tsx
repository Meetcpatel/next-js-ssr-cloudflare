import { useDeviceInfo } from "@/hooks/useDeviceInfo";
import { Typography } from "@mui/material";

export const SellerName = ({
  sellerName,
  show = true,
}: {
  sellerName: string;
  show: boolean;
}) => {
  return (
    <Typography
      sx={{
        display: show ? "block" : "none",
        color: "#FFFFFF",
        fontWeight: "600",
        fontSize: "30px",
        lineHeight: "40px",
        letterSpacing: "0.44px",
      }}
    >
      {sellerName}
    </Typography>
  );
};
