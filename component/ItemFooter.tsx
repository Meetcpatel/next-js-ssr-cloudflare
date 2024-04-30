import { Box, Button, Link, Typography } from "@mui/material";
import React from "react";
import { Figtree, useMobileSize } from "./utils";
import Image from "next/image";

export default function ItemFooter() {
  const mobileSize = useMobileSize();
  return (
    <Box
      sx={{
        flex: 1,
        paddingTop: { xs: "40px", lg: "60px" },
      }}
      style={{
        borderStyle: "solid",
        borderWidth: 0,
        borderTopWidth: 1,
        borderTopColor: "#161E27",
      }}
    >
      <Box>
        <Typography
          sx={{
            fontSize: { xs: 14, lg: 16 },
            fontWeight: 600,
            color: "#A7B0B4",
            letterSpacing: "0.3px",
            textAlign: { xs: "left", sm: "center" },
          }}
        >
          Download App From
        </Typography>
        <Box
          style={{
            width: "100%",
            gap: 16,
            display: "flex",
            justifyContent: "center",
            marginTop: 8,
          }}
        >
          <Button
            sx={{
              backgroundColor: "#FFFFFF",
              borderRadius: "12px",
              width: mobileSize ? "50%" : "auto",
              "&:hover": {
                backgroundColor: "#C7A52A",
              },
            }}
            style={{
              paddingTop: 16,
              paddingBottom: 16,
              paddingLeft: 24,
              paddingRight: 24,
            }}
          >
            <Link
              underline="none"
              target="_blank"
              href="https://play.google.com/store/apps/details?id=com.airhub.app"
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Image
                src={require("../public/PlayiconNew.png")}
                alt="Play Store"
                style={{ width: 21.69, height: 24, marginRight: 10.95 }}
                width={21.69}
                height={24}
              />
              <Box>
                <Typography
                  style={{
                    fontSize: 11,
                    fontWeight: 400,
                    color: "#000000",
                    letterSpacing: -0.15,
                    lineHeight: "13.2px",
                    textAlign: "left",
                    textTransform: "none",
                  }}
                >
                  Get it on
                </Typography>
                <Typography
                  style={{
                    fontSize: 16,
                    fontWeight: 600,
                    color: "#000000",
                    lineHeight: "19.2px",
                    textAlign: "left",
                    textTransform: "capitalize",
                  }}
                >
                  Google Play
                </Typography>
              </Box>
            </Link>
          </Button>

          <Button
            sx={{
              backgroundColor: "#FFFFFF",
              borderRadius: "12px",
              width: mobileSize ? "50%" : "auto",
              "&:hover": {
                backgroundColor: "#C7A52A",
              },
            }}
            style={{
              paddingTop: 16,
              paddingBottom: 16,
              paddingLeft: 24,
              paddingRight: 24,
            }}
          >
            <Link
              underline="none"
              target="_blank"
              href="https://apps.apple.com/hk/app/airhub/id1661240899?l=en-GB"
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Image
                src={require("../public/AppleiconNew.png")}
                alt="IOS Store"
                style={{ marginRight: 10.95 }}
                width={20.09}
                height={24}
              />
              <Box>
                <Typography
                  style={{
                    fontSize: 11,
                    fontWeight: 400,
                    color: "#000000",
                    letterSpacing: -0.15,
                    lineHeight: "13.2px",
                    textAlign: "left",
                    textTransform: "none",
                  }}
                >
                  Download on the
                </Typography>
                <Typography
                  style={{
                    fontSize: 16,
                    fontWeight: 600,
                    color: "#000000",
                    lineHeight: "19.2px",
                    textAlign: "left",
                    textTransform: "capitalize",
                  }}
                >
                  App Store
                </Typography>
              </Box>
            </Link>
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          marginTop: 7.5,
        }}
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          paddingTop: 16,
          paddingBottom: 16,
        }}
      >
        <Image
          src={require("../public/Left.png")}
          alt="Play Store"
          style={{ marginRight: 10.95 }}
          width={21.44}
          height={20}
        />
        <Typography
          sx={{
            fontSize: { xs: 12, lg: 14 },
            fontWeight: 400,
            color: "#A7B0B4",
            letterSpacing: "0.33px",
            textAlign: "left",
          }}
        >
          Copyright © 2023 AirHub
        </Typography>
      </Box>
    </Box>
  );
}
