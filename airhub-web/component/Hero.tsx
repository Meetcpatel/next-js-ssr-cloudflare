import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import { useMobileSize } from "./utils";
import Image from "next/image";
import HighlightedTextTitle from "./HighlightedText";
import Description from "./Description";
import StoreButton from "./StoreButton";

export default function Hero() {
  const mobileSize = useMobileSize();

  return (
    <Grid container spacing={2} style={{ marginBottom: 80 }}>
      <Grid item xs={12}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Image
            src={require("../public/logo.png")}
            alt="Airhub"
            width={42.8}
            height={40}
            priority
          />
          <Typography
            sx={{
              color: "var(--title-header-text, #FFF)",
              fontSize: "36px",
              fontStyle: "normal",
              fontWeight: 600,
              lineHeight: "60px",
              letterSpacing: "-1px",
              "@media (max-width: 600px)": {
                fontSize: "24px",
              },
            }}
            style={{ marginLeft: 12 }}
          >
            AirHub
          </Typography>
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid
          container
          spacing={2}
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Grid
            sx={{
              "@media (max-width: 600px)": {
                marginBottom: "100px",
              },
            }}
            item
            xs={12}
            sm={6}
          >
            <Box>
              <Box style={{ marginBottom: 16 }}>
                <HighlightedTextTitle
                  text="Connect. Shop. Experience."
                  keyword="Experience."
                  highlightColor="#FFA726"
                  sx={{
                    color: "#FFF",
                    fontSize: "64px",
                    fontStyle: "normal",
                    fontWeight: 600,
                    lineHeight: "72px",
                    letterSpacing: "-1px",
                    "@media (max-width: 600px)": {
                      fontSize: "40px",
                      lineHeight: "44px",
                    },
                  }}
                />
              </Box>
              <Box style={{ marginBottom: 40 }}>
                <Description>
                  The ultimate social platform designed for airsoft enthusiasts.
                </Description>
              </Box>
              <StoreButton />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} style={{ position: "relative" }}>
            <Box
              style={{ position: "relative" }}
              className="hero-right-container"
            >
              <Image
                src={require("../public/1=Variant7.webp")}
                alt="hero-cell2"
                priority
                style={{
                  position: "absolute",
                  zIndex: 3,
                  left: mobileSize ? 140 : 210,
                  top: mobileSize ? -50 : -70,
                }}
                width={mobileSize ? 41 : 50}
              />
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                }}
              >
                <Image
                  src={require("../public/heroImage.webp")}
                  alt="hero-banner"
                  priority
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                />
              </Box>
              <Image
                src={require("../public/1=Buy2.png")}
                alt="hero-cell"
                priority
                style={{
                  position: "absolute",
                  zIndex: 3,
                  right: mobileSize ? 40 : 60,
                  bottom: mobileSize ? 20 : 40,
                }}
                width={mobileSize ? 40 : 50}
              />
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
