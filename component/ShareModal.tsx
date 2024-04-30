import { Modal, Box, Typography, Button } from "@mui/material";
import React, { Dispatch, SetStateAction } from "react";
import { getImgURL } from "./getImgURL";
import { useScreenSize } from "./utils";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { MarketPlaceItem } from "@/type";

export default function ShareModal({
  shareModal,
  handleClose,
  setShareModal,
  marketPlaceItem,
}: {
  shareModal: boolean;
  handleClose: () => void;
  setShareModal: Dispatch<SetStateAction<boolean>>;
  marketPlaceItem: MarketPlaceItem;
}) {
  const screenSize = useScreenSize();
  const location = usePathname();
  const handleCopy = () => {
    const currentUrl = location;
    if (currentUrl) {
      navigator.clipboard
        .writeText(currentUrl)
        .then(() => {
          console.log("Link copied to clipboard");
        })
        .catch((err) => {
          console.error("Unable to copy link to clipboard", err);
        });
    }
  };
  return (
    <Modal
      open={shareModal}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          position: "absolute" as "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          padding: { lg: "40px", xs: "24px" },
          borderRadius: "40px",
          backgroundColor: "#060E18",
          maxWidth: "520px",
          width: screenSize - 80,
        }}
      >
        <Box sx={{ flex: 1, display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ width: 80 }}></Box>
          <Typography
            sx={{
              color: "#ffffff",
              fontSize: { lg: 26, xs: 18 },
              fontFamily: "Segoe UI",
              fontWeight: 700,
              letterSpacing: "0.44px",
              lineHeight: "32px",
              textAlign: "center",
              whiteSpace: "nowrap",
            }}
          >
            Share this item
          </Typography>
          <Button sx={{}} onClick={() => setShareModal(false)}>
            <Image
              src={require("../public/close.png")}
              alt="Close"
              width={24}
              height={24}
            />
          </Button>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            flex: 1,
            borderBottomColor: "#212331",
            borderBottomStyle: "solid",
            borderBottomWidth: "1px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: { lg: "16px", xs: "12px" },
              marginBottom: { lg: "24px", xs: "16px" },
              marginTop: { lg: "24px", xs: "16px" },
              flex: 1,
            }}
          >
            <Image
              src={getImgURL(marketPlaceItem?.itemImage[0]?.itemImage?.url)}
              alt={marketPlaceItem?.itemName + " alt"}
              style={{
                borderRadius: 12,
              }}
              width={64}
              height={64}
            />
            <Typography
              sx={{
                color: "#ffffff",
                fontSize: { lg: 16, xs: 12 },

                fontWeight: 400,
                letterSpacing: "0.33px",
                lineHeight: { lg: "24px", xs: "16px" },
                flex: 1,
              }}
            >
              {marketPlaceItem?.itemName}
            </Typography>
          </Box>
        </Box>
        <Button
          onClick={handleCopy}
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "22px",
            paddingTop: "24px",
            paddingBottom: "24px",
          }}
        >
          <Image
            src={require("../public/content_copy.png")}
            alt="copy"
            width={18.13}
            height={21.33}
          />
          <Typography
            sx={{
              color: "#DFBC3B",
              fontSize: { lg: 16, xs: 12 },
              fontWeight: 400,
              letterSpacing: "0.33px",
              lineHeight: "19.2px",
              flex: 1,
            }}
          >
            Copy Link
          </Typography>
        </Button>
      </Box>
    </Modal>
  );
}
