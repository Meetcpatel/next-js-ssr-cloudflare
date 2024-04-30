import { Modal, Box, Button, Typography } from "@mui/material";
import React from "react";
import { Figtree, useScreenSize } from "./utils";
import Image from "next/image";
import NewStoreButtons from "./NewStoreButtons";

export default function StoreModal({
  open,
  handleClose,
  setOpen,
}: {
  open: boolean;
  handleClose: any;
  setOpen: any;
}) {
  const screenSize = useScreenSize();

  return (
    <Modal
      open={open}
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
        <Box sx={{ flex: 1, display: "flex", justifyContent: "flex-end" }}>
          <Button sx={{}} onClick={() => setOpen(false)}>
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
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            flex: 1,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 1,
              marginBottom: { lg: "24px", xs: "14px" },
            }}
          >
            <Image
              src={require("../public/airhub-logo.png")}
              alt="Airhub"
              width={42.49}
              height={39.65}
            />
            <Typography
              sx={{
                color: "#ffffff",
                fontSize: { lg: 37.78, xs: 24 },
                fontFamily: "Segoe UI",
                fontWeight: 600,
                letterSpacing: "0.62px",
                lineHeight: "43.27px",
                textTransform: "capitalize",
              }}
            >
              Airhub
            </Typography>
          </Box>
          <Typography
            sx={{
              color: "#ffffff",
              fontSize: { lg: 18, xs: 15 },

              fontWeight: 400,
              letterSpacing: "0.44px",
              lineHeight: { lg: "28px", xs: "18px" },
              textAlign: "center",
              marginBottom: { lg: "24px", xs: "14px" },
            }}
          >
            Discover events, buy/sell gear, and connect with airsoft enthusiasts
            worldwide. Download now and let the adrenaline rush take over
            anywhere, anytime!
          </Typography>
          <NewStoreButtons />
        </Box>
      </Box>
    </Modal>
  );
}
