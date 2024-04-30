import { UserImage } from "@/component/seller/UserImage";
import getApolloClient from "@/lib/apolloClient";
import { Seller_ItemsQuery, ServerSideProps } from "@/type";
import { Box, Container, styled } from "@mui/material";
import { UserDetails } from "@/component/seller/UserDetails";
import { SellerShare } from "@/component/seller/SellerShare";
import { ItemShareAppBar } from "@/component/ItemShare/ItemShareAppBar";
import { useRouter } from "next/router";
import { SellerItems } from "@/component/seller/SellerItems";
import { GetServerSidePropsContext } from "next";
import { generateMetaTags } from "@/component/generateMetaTags";
import {
  defaultImage,
  extractUserData,
  formatDate,
  getDescription,
  getSiteURL,
  getTotalItems,
} from "@/lib/itemShare";
import {
  calculateTake,
  extractQueryParams,
  fetchData,
  fetchSellerData,
} from "@/lib/seller";
import { useDeviceInfo } from "@/hooks/useDeviceInfo";
import { MessageSellerButton } from "@/component/seller/MessageSellerButton";
import StoreModal from "@/component/StoreModal";
import { useState } from "react";

export const runtime = "experimental-edge";

export default function Page({
  data,
  page,
  sold,
}: {
  data: Seller_ItemsQuery;
  page: number;
  sold: string;
}) {
  const { asPath, query } = useRouter();
  const router = useRouter();
  const { isSmallWidth, isSmallWidthDown, isExtraSmallWidth } = useDeviceInfo();
  const isMobile = isSmallWidth || isSmallWidthDown || isExtraSmallWidth;
  const [open, setOpen] = useState<boolean>(false);
  if (!data) return <></>;

  const { sellerImage, sellerName, userCreationDate, totalItemListedByUser } =
    extractUserData(data);

  const formattedOutput = formatDate(userCreationDate);

  const siteURL = getSiteURL(asPath);

  const totalItems = getTotalItems(data);

  const description = getDescription(totalItems);

  const title = sellerName ?? "";

  const toggleItems = (value: "Active" | "Sold") => {
    router.push(
      {
        query: { ...query, sold: value == "Active" ? false : true },
      },
      undefined,
      { scroll: false }
    );
  };

  const fetchMore = () => {
    router.push(
      {
        query: { ...query, page: parseInt(page.toString()) + 1 },
      },
      undefined,
      { scroll: false }
    );
  };
  const handleClose = () => {
    setOpen(false);
  };
  const Offset = styled("div")(({ theme }) => (theme.mixins as any).toolbar);
  return (
    <>
      {generateMetaTags(
        title,
        description,
        sellerImage ?? defaultImage,
        siteURL
      )}
      <Box>
        <ItemShareAppBar />
        <Offset />
        <Container
          maxWidth="md"
          sx={{
            marginTop: "52px",
            display: "flex",
            flexDirection: "column",
            alignContent: "center",
            justifyContent: "space-between",
            columnGap: "32px",
            rowGap: "20px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              flex: 1,
              columnGap: "32px",
              alignItems: isMobile ? "flex-end" : "",
              justifyContent: "space-between",
            }}
          >
            <UserImage
              setOpen={setOpen}
              sellerImage={sellerImage}
              sellerName={sellerName}
            />
            <UserDetails
              formattedOutput={formattedOutput}
              sellerName={sellerName}
              totalItemListedByUser={totalItemListedByUser}
              show={isMobile ? false : true}
            />
            <SellerShare siteURL={siteURL} />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              flex: 1,
              columnGap: "32px",
            }}
          >
            <UserDetails
              formattedOutput={formattedOutput}
              sellerName={sellerName}
              totalItemListedByUser={totalItemListedByUser}
              show={isMobile ? true : false}
            />
          </Box>
          <Box>
            <MessageSellerButton
              setOpen={setOpen}
              show={isMobile ? true : false}
            />
          </Box>
        </Container>

        <Container
          sx={{
            display: "flex",
            flex: 1,
            justifyContent: "flex-start",
            alignContent: "flex-start",
            alignItems: "flex-start",
          }}
        >
          <SellerItems
            data={data}
            fetchMore={fetchMore}
            toggleItems={toggleItems}
            sold={sold}
          />
        </Container>
      </Box>
      <StoreModal open={open} handleClose={handleClose} setOpen={setOpen} />
    </>
  );
}

export async function getServerSideProps(
  context: GetServerSidePropsContext
): Promise<{ props: ServerSideProps }> {
  try {
    const { sellerId, sold, page } = extractQueryParams(context);

    const take = calculateTake(page);

    const client = getApolloClient();

    if (!sellerId)
      return { props: { data: undefined, page: "1", sellerId: "", sold: "" } };

    const data = await fetchData(client, sellerId, sold, take);
    const sellerData = await fetchSellerData(client, sellerId);
    const pageData = data?.marketPlaces?.length <= 0 ? sellerData : data;

    return { props: { data: pageData, page, sellerId, sold: sold } };
  } catch (error) {
    return {
      props: { data: undefined, page: "1", sellerId: "", sold: "" },
    };
  }
}
