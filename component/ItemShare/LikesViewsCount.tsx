import { Box, Typography } from "@mui/material";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

const CountItem = ({
  iconSrc,
  count,
  text,
}: {
  iconSrc: string | StaticImport;
  count: number | null;
  text: string;
}) => (
  <Box
    sx={{
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      columnGap: "4px",
    }}
  >
    <Image src={iconSrc} width={16} height={16} alt="icon" />
    <Typography
      sx={{
        color: "#ABB2BA",
        display: "flex",
        flexDirection: "row",
        columnGap: "3px",
      }}
    >
      <span style={{ fontWeight: "700", fontSize: "12px", lineHeight: "16px" }}>
        {count}
      </span>
      <span style={{ fontWeight: "400", fontSize: "12px", lineHeight: "16px" }}>
        {" "}
        {text}
      </span>
    </Typography>
  </Box>
);

export const LikesViewsCount = ({
  totalViews,
  savedByCount,
}: {
  totalViews: number | null;
  savedByCount: number | null;
}) => (
  <Box sx={{ display: "flex", flexDirection: "row", columnGap: "16px" }}>
    <CountItem
      iconSrc={require("../../public/visibility.png")}
      count={totalViews}
      text={totalViews === 1 ? "view" : "views"}
    />
    <CountItem
      iconSrc={require("../../public/Like.png")}
      count={savedByCount}
      text={savedByCount === 1 ? "like" : "likes"}
    />
  </Box>
);
