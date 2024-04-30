import { AppBar, Box, Typography } from "@mui/material";
import { GlobalColorStyle } from "../utils";
import Image from "next/image";

export const ItemShareAppBar = () => {
  return (
    <>
      <AppBar
        sx={{
          backgroundColor: GlobalColorStyle.Background,
        }}
        position="fixed"
        elevation={0}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            height: 64,
            gap: 1,
          }}
        >
          <Image
            src={require("../../public/airhub-logo.png")}
            alt="Airhub"
            width={30}
            height={27.9}
            style={{ width: "auto", height: "auto" }}
          />
          <Typography
            sx={{
              color: "#ffffff",
              fontSize: { xs: 20, lg: 24 },
              fontWeight: 600,
              letterSpacing: "1.3px",
            }}
          >
            Airhub
          </Typography>
        </Box>
      </AppBar>
    </>
  );
};
