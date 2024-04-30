import React, { useState } from "react";
import { Box, Typography, Grid, Button } from "@mui/material";
import Image from "next/image";
import StoreButton from "./StoreButton";

export default function Faq() {
  const data = [
    {
      ques: "What is AirHub and how does it work?",
      ans: "AirHub is a social media app designed for airsoft enthusiasts, providing a platform to connect, create, and join exciting airsoft events. You can create your events, join others events, and engage in immersive gaming experiences with like-minded players.",
    },
    {
      ques: "How can I create an event?",
      ans: "AirHub is a social media app designed for airsoft enthusiasts, providing a platform to connect, create, and join exciting airsoft events. You can create your events, join others events, and engage in immersive gaming experiences with like-minded players.",
    },
    {
      ques: "Can I invite friends to join my events?",
      ans: "AirHub is a social media app designed for airsoft enthusiasts, providing a platform to connect, create, and join exciting airsoft events. You can create your events, join others events, and engage in immersive gaming experiences with like-minded players.",
    },
    {
      ques: "How do I purchase tickets for an event?",
      ans: "AirHub is a social media app designed for airsoft enthusiasts, providing a platform to connect, create, and join exciting airsoft events. You can create your events, join others events, and engage in immersive gaming experiences with like-minded players.",
    },
    {
      ques: "Can I customize the settings and privacy of my events?",
      ans: "AirHub is a social media app designed for airsoft enthusiasts, providing a platform to connect, create, and join exciting airsoft events. You can create your events, join others events, and engage in immersive gaming experiences with like-minded players.",
    },
    {
      ques: "Is AirHub available for both Android and iOS devices?",
      ans: "AirHub is a social media app designed for airsoft enthusiasts, providing a platform to connect, create, and join exciting airsoft events. You can create your events, join others events, and engage in immersive gaming experiences with like-minded players.",
    },
    {
      ques: "How do I connect with other gamers in the AirHub community?",
      ans: "AirHub is a social media app designed for airsoft enthusiasts, providing a platform to connect, create, and join exciting airsoft events. You can create your events, join others events, and engage in immersive gaming experiences with like-minded players.",
    },
  ];

  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index: any) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  return (
    <Grid
      container
      spacing={2}
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        alignContent: "center",
        "@media (max-width:600px)": {
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        },
      }}
      style={{ marginTop: 100, marginBottom: 100 }}
    >
      <Grid item xs={12} sm={12}>
        <Box
          sx={{
            width: "100%",
            borderBottom: "1px solid #555167",
            paddingBottom: "60px",
          }}
          style={{}}
        >
          <Typography
            sx={{
              color: "var(--primary, #DFBC3B)",
              textAlign: "center",
              fontSize: "19px",
              fontStyle: "normal",
              fontWeight: 700,
              lineHeight: "28px",
              fontVariant: "all-small-caps",
              letterSpacing: "0.3px",
              "@media (max-width: 600px)": {
                fontSize: "16px",
                lineHeight: "24px",
              },
            }}
          >
            Explore Common Queries
          </Typography>
          <Typography
            sx={{
              color: "var(--title-header-text, #FFF)",
              textAlign: "center",
              fontSize: "36px",
              fontStyle: "normal",
              fontWeight: 700,
              lineHeight: "44px",
              textTransform: "capitalize",
              marginBottom: "60px",
              "@media (max-width: 600px)": {
                fontSize: "24px",
                lineHeight: "32px",
              },
            }}
          >
            Frequently asked questions
          </Typography>
          {data &&
            data.length > 0 &&
            data?.map((faq: any, index: number) => (
              <Box
                onClick={() => toggleExpand(index)}
                key={index}
                style={{ backgroundColor: "#1A1E38" }}
                className="faq-question-container"
              >
                <Box
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Box style={{ width: "80%" }}>
                    <Typography
                      sx={{
                        color: "#EDF5FF",
                        fontSize: "20px",
                        fontStyle: "normal",
                        fontWeight: 700,
                        lineHeight: "32px",
                        width: "70%",
                        "@media (max-width: 600px)": {
                          fontSize: "16px",
                          fontWeight: 600,
                          lineHeight: "24px",
                        },
                      }}
                    >
                      {faq.ques}
                    </Typography>
                  </Box>
                  <Box className="faq-button">
                    {expandedIndex === index ? (
                      <Image
                        src={require("../public/add.png")}
                        alt="minus"
                        style={{ width: 17.2, height: 16 }}
                        width={17.2}
                        height={16}
                      />
                    ) : (
                      <Image
                        src={require("../public/plus.png")}
                        alt="plus"
                        style={{ width: 17.2, height: 16 }}
                        width={17.2}
                        height={16}
                      />
                    )}
                  </Box>
                </Box>
                {expandedIndex === index && (
                  <Typography
                    sx={{
                      color: "rgba(237, 245, 255, 0.72)",
                      fontSize: "20px",
                      fontStyle: "normal",
                      fontWeight: 400,
                      lineHeight: "32px",
                      marginTop: "40px",
                      "@media (max-width: 600px)": {
                        fontSize: "16px",
                        lineHeight: "24px",
                      },
                    }}
                  >
                    {faq.ans}
                  </Typography>
                )}
              </Box>
            ))}
        </Box>
        <Box className="faq-button-container">
          <StoreButton className="button-Component" downloadAppText="center" />
        </Box>
      </Grid>
    </Grid>
  );
}
