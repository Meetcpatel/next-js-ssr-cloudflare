import { Typography } from "@mui/material";
import React from "react";

export default function Description({ children, style, sx }: any) {
  return (
    <Typography
      sx={{
        color: "var(--title-header-text, #FFF)",
        fontSize: "19px",
        fontStyle: "normal",
        fontWeight: 400,
        lineHeight: "28px",
        letterSpacing: "0.3px",
        textAlign: "left",
        opacity: 0.8,
        "@media (max-width: 600px)": {
          fontSize: "15px",
          lineHeight: "20px",
        },
      }}
      style={style}
    >
      {children}
    </Typography>
  );
}
