import { Box, Button, Skeleton } from "@mui/material";
import Image from "next/image";
import { Dispatch, SetStateAction, Suspense, useEffect, useState } from "react";
import PriceAndSeller from "../PriceAndSeller";
import { getImgURL } from "../getImgURL";
import { useMobileSize } from "../utils";
import { MarketPlaceItem } from "@/type";
// import { MarketPlaceItem } from "@/type";

export const ItemShareImages = ({
  marketPlaceItem,
  setShareModal,
  setOpen,
}: {
  marketPlaceItem: MarketPlaceItem;
  setShareModal: Dispatch<SetStateAction<boolean>>;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const mobileSize = useMobileSize();
  const [selectedImage, setSelectedImage] = useState<string>("");
  const handleImageClick = (imageUrl: string) => {
    setSelectedImage(imageUrl);
  };
  const [imageLoading, setImageLoading] = useState(true);

  useEffect(() => {
    if (marketPlaceItem?.itemImage?.length > 0) {
      const initialImageUrl = getImgURL(
        marketPlaceItem?.itemImage[0]?.itemImage?.url
      );
      setSelectedImage(initialImageUrl);
    }
  }, [marketPlaceItem]);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "row", lg: "column" },
        gap: 2,
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: { xs: "280px", lg: "406px", sm: "571px" },
          position: "relative",
        }}
      >
        {imageLoading && (
          <Skeleton
            sx={{ bgcolor: "#121F2B" }}
            variant="rectangular"
            style={{
              borderRadius: 16,
              height: "100%",
              width: "100%",
              objectFit: "contain",
            }}
          />
        )}
        <Image
          src={selectedImage}
          onLoad={() => {
            setImageLoading(false);
          }}
          alt={marketPlaceItem?.itemName + " alt"}
          style={{
            borderRadius: 16,
            height: "100%",
            width: "100%",
            objectFit: "contain",
            display: imageLoading ? "none" : "block",
          }}
          priority
          sizes="100vw"
          fill={true}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "row", md: "column", lg: "row" },
        }}
      >
        <Box
          sx={{
            display: { xs: "none", md: "flex", lg: "none" },
            marginBottom: { md: "16px" },
          }}
        >
          <PriceAndSeller
            marketPlaceItem={marketPlaceItem}
            setOpen={setOpen}
            setShareModal={setShareModal}
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row", lg: "row" },
          }}
        >
          {marketPlaceItem?.itemImage?.map((image: any, index: number) => {
            const imageUrl = getImgURL(image?.itemImage?.url);
            return (
              <Button
                key={image?.itemImage?.id}
                onClick={() => handleImageClick(imageUrl)}
                sx={{ padding: 0, margin: 0 }}
              >
                <Image
                  height={mobileSize ? 64 : 91.75}
                  width={mobileSize ? 64 : 91.75}
                  src={imageUrl}
                  priority
                  alt={marketPlaceItem?.itemName + index}
                  style={{
                    width: mobileSize ? 64 : 91.75,
                    height: mobileSize ? 64 : 91.75,
                    borderColor: "#DFBC3B",
                    borderRadius: 12,
                    borderStyle: selectedImage === imageUrl ? "solid" : "none",
                    padding: 3,
                    borderWidth: 2,
                    objectFit: "contain",
                  }}
                />
              </Button>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};
