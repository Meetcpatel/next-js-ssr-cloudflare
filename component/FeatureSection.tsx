import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import Description from "./Description";
import { useMobileSize } from "./utils";
import StoreButton from "./StoreButton";
import Image from "next/image";
import GradientTitle from "./GradientTitle";

export default function FeatureSection() {
  const mobileSize = useMobileSize();
  const unforgottable = (
    <Image
      src={require("../public/Eventimage.webp")}
      alt="unforgottable"
      width={mobileSize ? 358 : 480}
      priority
    />
  );

  const discover = (
    <video
      autoPlay
      loop
      muted
      playsInline
      style={{ width: mobileSize ? 358 : 480 }}
    >
      <source
        src={`https://airhub-bucket.sgp1.cdn.digitaloceanspaces.com/landing-page/discoverWebVideo.webm`}
        type="video/webm"
      />
      <source
        src={`https://airhub-bucket.sgp1.cdn.digitaloceanspaces.com/landing-page/discoverMp4Video.mp4`}
        type="video/mp4"
      />
      Your browser does not support the video tag.
    </video>
  );

  const buySell = (
    <video
      autoPlay
      loop
      muted
      playsInline
      style={{ width: mobileSize ? 358 : 480 }}
    >
      <source
        src={`https://airhub-bucket.sgp1.cdn.digitaloceanspaces.com/landing-page/buySellW.webm`}
        type="video/webm"
      />
      <source
        src={`https://airhub-bucket.sgp1.cdn.digitaloceanspaces.com/landing-page/buySellM.mp4`}
        type="video/mp4"
      />
      Your browser does not support the video tag.
    </video>
  );

  const data = [
    {
      sectionImage: unforgottable,
      sectionTitle: "",
      sectionSubTitle: "",
      sectionGradientTitle: "💥 Unforgettable Events",
      sectionDescription:
        "AirHub gives you complete control over your events and participant entry. Customize entry with advanced controls like pausing enrollments and user approval for seamless access management. Discover tailored gaming events curated by the community, or create your own to share and engage with like-minded gamers. ",
      sectionGradiantColor1: "#FFA726",
      sectionGradientColor2: "#FF2626",
    },
    {
      sectionImage: discover,
      sectionTitle: "🌐 Discovering the",
      sectionSubTitle: "Power of Community",
      sectionGradientTitle: "",
      sectionDescription:
        "With AirHub, you can share your gaming experiences, engage with others by liking and commenting on their posts, and connect with fellow gamers through chat features. The hub is the perfect place to discover new friends, stay updated on the latest games, and immerse yourself in the vibrant gaming community.",
      sectionGradiantColor1: "",
      sectionGradientColor2: "",
    },
    {
      sectionImage: buySell,
      sectionTitle: "",
      sectionSubTitle: "",
      sectionGradientTitle: "Buy, Sell, & Gear Up",
      sectionDescription:
        "AirHub is the ultimate marketplace for airsoft gear. With AirHub, you can buy and sell airsoft guns, accessories, and apparel at a great price. Easily list your gear for sale and reach a large audience of potential buyers. Find local sellers and buyers to avoid shipping costs. Join today and start buying and selling airsoft gear!",
      sectionGradiantColor1: "#C0C0C0 ",
      sectionGradientColor2: "#4169E1 ",
    },
  ];
  const getImageOrder = (index: number) => {
    return index % 2 === 0 ? `order1` : `order2`;
  };

  const getTitleOrder = (index: number) => {
    return index % 2 === 0 ? `order2` : `order1`;
  };

  const altFun = (section: any) => {
    if (section.sectionTitle) {
      return section.sectionTitle;
    } else if (section.hightlightedTitle) {
      return section.hightlightedTitle;
    } else if (section.gradientTitle) {
      return section.gradientTitle;
    }
  };
  const TitleImage = ({ section }: any) => {
    if (
      section?.sectionTitleImage &&
      section?.sectionTitleImage?.url !== null
    ) {
      return (
        <Image
          src={section?.sectionTitleImage?.url}
          alt={altFun(section)}
          style={{ marginRight: 15 }}
        />
      );
    } else {
      return null;
    }
  };

  return (
    <>
      {data.map((section: any, index: number) => (
        <Grid
          container
          spacing={2}
          key={index}
          style={{ marginTop: 100, marginBottom: 100 }}
        >
          <Grid
            item
            xs={12}
            sm={6}
            style={{ width: "100%" }}
            className={` ${getImageOrder(index)}`}
          >
            {section?.sectionImage}
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            className={`${getTitleOrder(index)}`}
            style={{ width: "100%" }}
          >
            <Box>
              <Box
                style={{
                  paddingBottom: 32,
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Box>
                  <Typography
                    sx={{
                      fontSize: "36px",
                      fontWeight: 400,
                      lineHeight: "44px",
                      letterSpacing: "0px",
                      textAlign: "left",
                      color: "#F2FFF7",
                      "@media (max-width: 600px)": {
                        fontSize: "24px",
                        fontStyle: "normal",
                        lineHeight: "32px",
                      },
                    }}
                  >
                    {section.sectionTitle}
                  </Typography>
                  <GradientTitle
                    colors={[
                      section?.sectionGradiantColor1,
                      section?.sectionGradientColor2,
                    ]}
                    text={section?.sectionGradientTitle}
                    style={{ paddingBottom: 5 }}
                  />
                  <Typography
                    sx={{
                      fontSize: "36px",
                      fontWeight: 400,
                      lineHeight: "44px",
                      letterSpacing: "0px",
                      textAlign: "left",
                      color: "#F2FFF7",
                      "@media (max-width: 600px)": {
                        fontSize: "24px",
                        fontStyle: "normal",
                        lineHeight: "32px",
                      },
                    }}
                    style={{ fontWeight: 700 }}
                  >
                    {section.sectionSubTitle}
                  </Typography>
                </Box>
              </Box>
              <Description style={{ marginBottom: 32 }}>
                {section.sectionDescription}
              </Description>
              <StoreButton downloadAppText="left" />
            </Box>
          </Grid>
        </Grid>
      ))}
    </>
  );
}
