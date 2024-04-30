import React from "react";
import { Box, Button, Typography, Link, Grid } from "@mui/material";
import * as styles from "../styles/global.module.css";
import Image from "next/image";

export default function NewStoreButtons({ style }: any) {
  return (
    <Box
      style={{ ...style }}
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: { lg: "24px", xs: "8px" },
        width: "100%",
      }}
    >
      <Link
        underline="none"
        target="_blank"
        href="https://play.google.com/store/apps/details?id=com.airhub.app"
        sx={{
          width: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            borderRadius: "15px",
            display: "flex",
            flexDirection: "row",
            backgroundColor: "#000000",
            borderWidth: "0.7px",
            borderStyle: "solid",
            borderColor: "#ABB2BA",
            paddingTop: "8px",
            paddingBottom: "8px",
            paddingLeft: "15px",
            paddingRight: "15px",
            alignItems: "center",
            width: "75%",
            height: { lg: "56px", xs: "40px" },
            justifyContent: "center",
          }}
        >
          <Image
            src={require("../public/playicon.png")}
            alt="play"
            placeholder="blur"
            width={21.69}
            height={22.47}
          />
          <Box
            sx={{
              fontFamily: "Segoe UI",
              color: "var(--title-header-text, #FFF)",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "normal",
              textTransform: "capitalize",
              textAlign: "left",
              marginLeft: "11px",
            }}
          >
            <Typography style={{ fontSize: 8 }}>GET IT ON</Typography>
            <Typography style={{ fontSize: 14 }}>Google Play</Typography>
          </Box>
        </Box>
      </Link>

      <Link
        underline="none"
        target="_blank"
        href="https://apps.apple.com/hk/app/airhub/id1661240899?l=en-GB"
        sx={{
          width: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            borderRadius: "15px",
            display: "flex",
            flexDirection: "row",
            backgroundColor: "#000000",
            borderWidth: "0.7px",
            borderStyle: "solid",
            borderColor: "#ABB2BA",
            paddingTop: "8px",
            paddingBottom: "8px",
            paddingLeft: "15px",
            paddingRight: "15px",
            alignItems: "center",
            width: "75%",
            height: { lg: "56px", xs: "40px" },
            justifyContent: "center",
          }}
        >
          <Image
            src={require("../public/appleicon.png")}
            alt="ios"
            placeholder="blur"
            width={20.69}
            height={22}
          />
          <Box
            sx={{
              fontFamily: "Segoe UI",
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
        </Box>
      </Link>
    </Box>
  );
}
