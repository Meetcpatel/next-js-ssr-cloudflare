import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import { RWebShare } from "react-web-share";

export const SellerShare = ({ siteURL }: { siteURL: string }) => {
  return (
    <Box>
      <RWebShare
        data={{
          text: "",
          url: siteURL,
          title: "",
        }}
      >
        <Button
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            gap: 1.2,
            textTransform: "capitalize",
          }}
        >
          <Box
            sx={{
              borderRadius: "100px",
              borderColor: "#234658",
              borderWidth: 1,
              borderStyle: "solid",
              width: "46px",
              height: "45px",
              alignContent: "center",
              alignItems: "center",
              alignSelf: "center",
              justifyContent: "center",
              justifyItems: "center",
              display: "flex",
            }}
          >
            <Image
              alt=""
              src={require("../../public/Share-IOS.png")}
              height={24}
              width={24}
            />
          </Box>

          <Typography
            style={{
              fontSize: 12,
              fontWeight: "400",
              color: "#ffffff",
              letterSpacing: 0.7,
            }}
          >
            Share
          </Typography>
        </Button>
      </RWebShare>
    </Box>
  );
};
