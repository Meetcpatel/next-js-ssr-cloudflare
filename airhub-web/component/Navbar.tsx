import React, { useState } from "react";
import { AppBar, Box, Button } from "@mui/material";
import { GlobalColorStyle } from "./utils";

export default function Navbar() {
  const [activeLanguage, setActiveLanguage] = useState("en");

  const handleLanguageChange = (language: any) => {
    setActiveLanguage("en");
  };

  return (
    <AppBar
      position="static"
      style={{
        backgroundColor: GlobalColorStyle.Background,
        boxShadow: "none",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "flex-end",
      }}
    >
      <Box
        style={{ zIndex: 1, backgroundColor: "transparent", borderRadius: 100 }}
      >
        <Box
          style={{
            display: "flex",
            padding: 20,
            flexDirection: "row",
            alignItems: "center",
            borderRadius: 100,
          }}
        ></Box>
      </Box>
    </AppBar>
  );
}
