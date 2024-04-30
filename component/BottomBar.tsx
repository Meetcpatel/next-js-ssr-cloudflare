import { Box, Typography } from "@mui/material";
import React from "react";
import { Figtree } from "./utils";

export default function BottomBar() {
  return (
    <Box
      sx={{
        flex: 1,
        backgroundColor: "#33062E",
        paddingTop: 2,
        paddingBottom: 2,
      }}
    >
      <Typography
        style={{
          fontSize: 12,
          fontWeight: 400,
          color: "#ffffff",
          letterSpacing: 0.33,
          textAlign: "center",
        }}
      >
        Powered by LabLamb Works Limited
      </Typography>
    </Box>
  );
}
