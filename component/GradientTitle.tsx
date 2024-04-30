import React from "react";
import { Box, Typography, createTheme, ThemeProvider } from "@mui/material";

export default function GradientTitle({ colors, text, style }: any) {
  const customTheme = createTheme({
    typography: {
      h5: {
        background: `linear-gradient(to right, ${colors.join(", ")})`,
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        fontWeight: 600,
      },
    },
  });
  return (
    <ThemeProvider theme={customTheme}>
      <Typography
        variant="h5"
        sx={{
          fontSize: "36px",
          fontStyle: "normal",
          textAlign: "left",
          fontWeight: 600,
          "@media (max-width: 600px)": {
            fontSize: "30px",
            lineHeight: "36px",
          },
        }}
        style={style}
      >
        {text}
      </Typography>
    </ThemeProvider>
  );
}
