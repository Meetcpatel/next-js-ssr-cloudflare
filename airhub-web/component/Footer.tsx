import React from "react";
import { Box, Link, Typography } from "@mui/material";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <Box className="footer-container">
      <Box className="footer-logo-container">
        <Box
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
          className="footer-title-container"
        >
          <Image
            src={require("../public/LogoWhite.png")}
            alt="logo"
            width={21}
            height={20}
          />
          <Typography
            sx={{
              color: "#A6A4B0",
              fontSize: "13px",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "20px",
              letterSpacing: "0.33px",
              textAlign: "center",
            }}
          >
            Copyright © {currentYear} AirHub
          </Typography>
        </Box>
      </Box>
      <Link href="https://lablambworks.com/" target="_blank" underline="none">
        <Typography
          sx={{
            color: "var(--subtitle, #A6A4B0)",
            textAlign: "center",
            fontSize: "13px",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "20px",
            letterSpacing: "0.33px",
            padding: "16px 88px",
            background: "#101525",
          }}
        >
          Powered by LabLamb Works Limited
        </Typography>
      </Link>
    </Box>
  );
}
