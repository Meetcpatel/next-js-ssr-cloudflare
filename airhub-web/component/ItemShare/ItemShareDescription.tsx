import { Box, Grid, Typography } from "@mui/material";
import { GlobalColorStyle, splitParagraphs } from "../utils";
import { DocumentRenderer } from "../DocumentRenderer";
import { MarketPlaceItem } from "@/type";

export const ItemShareDescription = ({
  marketPlaceItem,
}: {
  marketPlaceItem: MarketPlaceItem;
}) => {
  const descriptionDocument = marketPlaceItem?.itemDescription?.document;
  const tags = marketPlaceItem?.itemTag;

  return (
    <Grid
      item
      lg={8}
      xs={4}
      sx={{
        order: { xs: 2, lg: 1 },
        minWidth: { lg: "730px" },
      }}
    >
      <Box
        sx={{
          backgroundColor: GlobalColorStyle.Card,
          padding: "24px",
          borderRadius: "16px",
        }}
      >
        <Typography
          sx={{
            color: GlobalColorStyle.Subtitle,
            fontSize: { xs: 14, lg: 18 },
            fontWeight: 600,
            marginBottom: "8px",
          }}
        >
          Item description
        </Typography>
        <DocumentRenderer
          document={splitParagraphs(descriptionDocument) ?? []}
        />
        <Box
          style={{
            width: "100%",
            flexWrap: "wrap",
            display: "flex",
            flexDirection: "row",
            gap: 8,
            marginTop: 12,
            paddingTop: 12,
            paddingBottom: 12,
          }}
        >
          {tags?.map((tag: any, index: number) => {
            return (
              <Typography
                key={index}
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  height: 28,
                  backgroundColor: GlobalColorStyle.TagBackground,
                  borderRadius: "8px",
                  borderColor: "#1F2637",
                  borderStyle: "solid",
                  borderWidth: "0.5px",
                  alignSelf: "flex-start",
                  paddingLeft: "8px",
                  paddingRight: "8px",
                  letterSpacing: "0.5px",
                  fontSize: { xs: 12, lg: 13 },
                  color: GlobalColorStyle.White,
                }}
              >
                {tag?.tag}
              </Typography>
            );
          })}
        </Box>
      </Box>
    </Grid>
  );
};
