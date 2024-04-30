import { useDeviceInfo } from "@/hooks/useDeviceInfo";
import { Button, Typography } from "@mui/material";
import { Dispatch, SetStateAction, useState } from "react";

export const MessageSellerButton = ({
  show,
  setOpen,
}: {
  show: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <Button
      onClick={() => setOpen(true)}
      style={{
        marginTop: 16,
        borderRadius: 16,
        display: show ? "block" : "none",
      }}
      sx={activeButtonStyle}
    >
      <Typography
        style={{
          fontSize: 14,
          fontWeight: "600",
          color: "#060E18",
          lineHeight: "20px",
          letterSpacing: 0.33,
        }}
      >
        Message seller
      </Typography>
    </Button>
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
