import { Box, Skeleton } from "@mui/material";

export default function Loading() {
  return (
    <Box
      sx={{
        bgcolor: "#1A2C42",
        width: "100%",
        height: { xs: "280px", lg: "406px", sm: "571px" },
        position: "relative",
      }}
    >
      <Skeleton variant="rectangular" width="100%" height="100%" />
    </Box>
  );
}
