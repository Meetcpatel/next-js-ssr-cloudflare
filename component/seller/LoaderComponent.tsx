import { Box, Skeleton } from "@mui/material";

export const LoaderComponent = () => {
  return (
    <Box
      sx={{
        height: "392px",
        width: "232px",
        borderRadius: "16px",
        backgroundColor: "#121F2B",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Skeleton
        sx={{ bgcolor: "#121F2B" }}
        variant="rectangular"
        style={{
          borderTopLeftRadius: "16px",
          borderTopRightRadius: "16px",
          height: "100%",
          width: "100%",
        }}
      />
    </Box>
  );
};
