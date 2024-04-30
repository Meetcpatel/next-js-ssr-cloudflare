"use client";
import { Figtree } from "next/font/google";
import { createTheme } from "@mui/material/styles";

const figtree = Figtree({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const theme = createTheme({
  typography: {
    fontFamily: figtree.style.fontFamily,
  },
});

export default theme;
