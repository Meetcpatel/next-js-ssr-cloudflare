import Faq from "@/component/Faq";
import FeatureSection from "@/component/FeatureSection";
import Footer from "@/component/Footer";
import Hero from "@/component/Hero";
import Navbar from "@/component/Navbar";
import RoadMap from "@/component/RoadMap";
import { generateMetaTags } from "@/component/generateMetaTags";
import { Box, Container } from "@mui/material";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Page() {
  const { asPath } = useRouter();
  const origin =
    typeof window !== "undefined" && window.location.origin
      ? window.location.origin
      : "";

  const siteURL = origin + asPath;
  const description = `New to the game but can't find the right game? There are open battles and communities of all sizes.`;
  const image = `https://airhub-app.com/AirHub-Landing-Banner.png`;
  const title = `AirHub - Buy Sell AirSoft`;
  return (
    <Box>
      {generateMetaTags(title, description, image, siteURL)}
      <Box>
        <Image
          src={require("../public/backgroundLogo.webp")}
          alt="Airhub-Vector"
          priority
          style={{
            position: "absolute",
            right: 10,
            top: -170,
          }}
          width={790}
        />
      </Box>
      <Navbar />
      <Box>
        <Container>
          <Hero />
          <RoadMap />
        </Container>
      </Box>
      <Container>
        <FeatureSection />
        <Faq />
      </Container>
      <Footer />
    </Box>
  );
}
