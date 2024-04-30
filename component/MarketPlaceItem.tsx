import {
  AppBar,
  Box,
  Button,
  Container,
  Grid,
  Modal,
  Skeleton,
  Typography,
} from "@mui/material";
import Image from "next/image";
import PriceAndSeller from "./PriceAndSeller";
import { getImgURL } from "./getImgURL";
import { Suspense, useEffect, useState } from "react";
import { GlobalColorStyle, splitParagraphs, useMobileSize } from "./utils";
import ItemFooter from "./ItemFooter";
import BottomBar from "./BottomBar";
import StoreModal from "./StoreModal";
import ShareModal from "./ShareModal";
import { styled } from "@mui/system";
import { DocumentRenderer } from "./DocumentRenderer";
import Loading from "@/pages/item-share/loading";
import { ItemShareAppBar } from "./ItemShare/ItemShareAppBar";
import { ItemShareDescription } from "./ItemShare/ItemShareDescription";
import { ItemShareImages } from "./ItemShare/ItemShareImages";
import { MarketPlaceData } from "@/type";

export const MarketPlaceItem = ({ data }: MarketPlaceData) => {
  const marketPlaceItem = data?.marketPlace;
  const mobileSize = useMobileSize();
  const [open, setOpen] = useState<boolean>(false);
  const [shareModal, setShareModal] = useState<boolean>(false);

  const handleClose = () => {
    setOpen(false);
    setShareModal(false);
  };

  const Offset = styled("div")(({ theme }) => (theme.mixins as any).toolbar);
  return (
    <>
      <ItemShareAppBar />
      <Offset />
      <Grid style={{ backgroundColor: GlobalColorStyle.Background }}>
        <Container>
          <Typography
            component={"h1"}
            sx={{
              color: GlobalColorStyle.White,
              fontSize: { xs: 24, lg: 40 },
              fontWeight: 600,
              marginBottom: "20px",
            }}
          >
            {marketPlaceItem?.itemName}
          </Typography>
          <Grid
            sx={{
              display: "flex",
              flexDirection: { xs: "column", lg: "row" },
              gap: 2,
              paddingBottom: { xs: "50px", lg: "60px" },
            }}
          >
            <ItemShareDescription marketPlaceItem={marketPlaceItem} />
            <Grid
              item
              lg={4}
              xs={8}
              sx={{
                order: { xs: 1, lg: 2 },
                minWidth: { lg: "406px" },
              }}
            >
              <ItemShareImages
                marketPlaceItem={marketPlaceItem}
                setOpen={setOpen}
                setShareModal={setShareModal}
              />

              <Box sx={{ display: { xs: "flex", md: "none", lg: "flex" } }}>
                <PriceAndSeller
                  marketPlaceItem={marketPlaceItem}
                  setOpen={setOpen}
                  setShareModal={setShareModal}
                />
              </Box>
            </Grid>
          </Grid>
          <ItemFooter />
        </Container>
      </Grid>
      <BottomBar />

      <StoreModal open={open} handleClose={handleClose} setOpen={setOpen} />
      <ShareModal
        shareModal={shareModal}
        handleClose={handleClose}
        setShareModal={setShareModal}
        marketPlaceItem={marketPlaceItem}
      />
    </>
  );
};
