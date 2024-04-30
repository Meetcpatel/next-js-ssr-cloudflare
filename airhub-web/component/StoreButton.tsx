import React from "react";
import { Box, Button, Typography, Link, Grid } from "@mui/material";
import Image from "next/image";

export default function StoreButton({ downloadAppText, style }: any) {
  return (
    <Grid style={{}} className="button-component-container">
      <Box style={{ width: "100%" }}>
        <Typography
          sx={{
            color: "var(--title-header-text, #FFF)",
            fontSize: "15px",
            fontStyle: "normal",
            fontWeight: 600,
            lineHeight: "24px",
            letterSpacing: "0.3px",
          }}
          style={{ marginBottom: 8, textAlign: downloadAppText }}
        >
          Download App From
        </Typography>
        <Box
          className="button-container"
          style={{}}
          sx={{
            display: "flex",
            flexDirection: "row",
            // columnGap: "16px",
          }}
        >
          <Box
            style={{ backgroundColor: "#020204", borderRadius: 6, zIndex: 0 }}
            // sx={{
            //   paddingTop: "14px",
            //   paddingBottom: "14px",
            //   paddingLeft: "28px",
            //   paddingRight: "28px",
            // }}
          >
            <Link
              className="store-button"
              underline="none"
              target="_blank"
              href="https://play.google.com/store/apps/details?id=com.airhub.app"
              style={{ display: "flex", flexDirection: "row" }}
            >
              <Image
                src={require("../public/playicon.png")}
                alt="play"
                width={21.69}
                height={24}
              />
              <Box
                sx={{
                  color: "var(--title-header-text, #FFF)",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "normal",
                  textTransform: "capitalize",
                  textAlign: "left",
                  marginLeft: "11px",
                }}
              >
                <Typography style={{ fontSize: 8 }}>Get it on</Typography>
                <Typography style={{ fontSize: 14 }}>Google Play</Typography>
              </Box>
            </Link>
          </Box>

          <Box
            style={{ backgroundColor: "#020204", borderRadius: 6, zIndex: 0 }}
            // sx={{
            //   paddingTop: "14px",
            //   paddingBottom: "14px",
            //   paddingLeft: "28px",
            //   paddingRight: "28px",
            // }}
          >
            <Link
              className="store-button"
              underline="none"
              target="_blank"
              href="https://apps.apple.com/hk/app/airhub/id1661240899?l=en-GB"
              style={{ display: "flex", flexDirection: "row" }}
            >
              <Image
                src={require("../public/appleicon.png")}
                alt="ios"
                style={{ width: 21.4, height: 25 }}
                width={21.4}
                height={25}
              />
              <Box
                sx={{
                  color: "var(--title-header-text, #FFF)",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "normal",
                  textTransform: "capitalize",
                  textAlign: "left",
                  marginLeft: "11px",
                }}
              >
                <Typography style={{ fontSize: 8 }}>Download on the</Typography>
                <Typography style={{ fontSize: 14 }}>Apple Store</Typography>
              </Box>
            </Link>
          </Box>
        </Box>
      </Box>
    </Grid>
  );
}
