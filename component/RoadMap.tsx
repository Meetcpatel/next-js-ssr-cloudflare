/* eslint-disable react/no-unescaped-entities */
import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Description from "./Description";
import HighlightedTextTitle from "./HighlightedText";
import Image from "next/image";
import StoreButton from "./StoreButton";

export default function RoadMap() {
  return (
    <Grid
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box sx={{ textAlign: "center" }}>
        <HighlightedTextTitle
          text="Exciting Updates and Future Features"
          keyword="UPDATES"
          highlightColor="#FFA500"
          sx={{
            color: "#EDF5FF",
            textAlign: "center",
            fontSize: "36px",
            fontStyle: "normal",
            fontWeight: 600,
            lineHeight: "44px",
            fontVariant: "all-small-caps",
            "@media (max-width: 600px)": {
              fontSize: "29px",
              lineHeight: "32px",
              paddingBottom: "4px",
            },
          }}
        />
        <Description
          style={{ marginBottom: 20, textAlign: "center", color: "#EDF5FF" }}
        >
          Discover the thrilling future of airsoft with AirHub's roadmap, packed
          with exciting updates and upcoming features.
        </Description>
      </Box>
      <Box style={{ width: "100%", overflow: "hidden", overflowX: "auto" }}>
        <Image
          src={require("../public/Scroll(4).webp")}
          style={{ width: 1150 }}
          width={1150}
          alt="roadmap"
          priority
        />
      </Box>

      <Typography
        style={{ marginBottom: 28, marginTop: 20 }}
        sx={{
          color: "rgba(237, 245, 255, 0.72)",
          textAlign: "center",
          fontSize: "12.5px",
          fontStyle: "italic",
          fontWeight: 400,
          lineHeight: "16px",
          letterSpacing: "0.3px",
          "@media (max-width: 600px)": {
            fontSize: "14px",
          },
        }}
      >
        **This is not an exhaustive nor detailed list of all we plan for AirHub.
        It’s a short list of what you can expect us to focus on in the near
        future.
      </Typography>

      <Box className="roadmap-button-container">
        <StoreButton downloadAppText="center" />
      </Box>
    </Grid>
  );
}
