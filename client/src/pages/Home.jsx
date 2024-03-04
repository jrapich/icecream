import { useState, useEffect } from "react";
import { Container } from "@mui/material";
import {
  TopLogo,
  TopContent,
  MiddleContent,
  BottomContent,
  Locations,
  Divider1,
  WaveDivider,
} from "../components/home";
import imageList from "../utils/imageList";

//import theme from "../theme";

const bridge = (
  <img
    style={{
      objectFit: "contain",
      maxWidth: "100%",
    }}
    srcSet={`${imageList[7].img}`}
    src={`${imageList[7].img}`}
    alt={`${imageList[7].title}`}
    loading="lazy"
  />
);

export default function Home() {
  const [scrollTop, setScrollTop] = useState(0);
  const [showTopContent, setShowTopContent] = useState(false);
  const [showMidHeader, setShowMidHeader] = useState(false);
  const [showMidContent, setShowMidContent] = useState(false);

  //set scrollTop state to the number of pixels the user has scrolled from the top
  const handleScroll = () => setScrollTop(window.scrollY);

  useEffect(() => {
    const windowHeight = window.innerHeight;
    const pageHeight = document.documentElement.scrollHeight;
    const actualHeight = pageHeight - windowHeight;
    //percent of the page the user has currently scrolled based on above pixels
    const scrollProgress = 100 * (scrollTop / 5000);
    console.log("scrolled from the top:", scrollTop);
    console.log("window height:", windowHeight, "page height:", pageHeight);
    console.log("actual page height:", actualHeight);
    console.log("percent scrolled:", scrollProgress);
    //listener to store the amount scrolled
    window.addEventListener("scroll", handleScroll);
    //TODO: add variable for window width above, to help us detect if user is
    //mobile or not, and adjust the scroll percentage breakpoint as necessary
    //scroll percentage breakpoint
    if (scrollProgress > 10) {
      setShowTopContent(true);
    } else {
      setShowTopContent(false);
    }
    if (scrollProgress > 40) {
      setShowMidHeader(true);
    } else {
      setShowMidHeader(false);
    }
    if (scrollProgress > 52) {
      setShowMidContent(true);
    } else {
      setShowMidContent(false);
    }

    return () => window.removeEventListener("scroll", handleScroll);
    //useEffect executes every time scrollTop changes, i.e whenever the user scrolls
  }, [scrollTop]);

  return (
    <Container
      component={"section"}
      maxWidth={false}
      disableGutters
      sx={{
        //arbitrary page height
        //will need to update for optimal mobile/desktop middleground breakpoints
        height: 6600,
        padding: 0,
      }}
    >
      <TopLogo />

      <TopContent showContent={showTopContent} />

      <WaveDivider />
      <Divider1 content={"New Products!"} />

      {/* content here will show in middle of the page, 
        will slide from right to left as the user scrolls*/}
      <MiddleContent showContent={{ showMidHeader, showMidContent }} />

      <WaveDivider />
      <Divider1 content={"CONTACT US"} />

      <BottomContent />

      <Container
        sx={{
          height: 200,
        }}
      />

      <Container
        maxWidth={false}
        disableGutters
        sx={{
          mb: 40,
        }}
      >
        {bridge}
      </Container>

      <Divider1 content={"Locations"} />

      <Container component={"section"} maxWidth="lg" id={"locations"} sx={{
        mt: 4,
      }} >
        <Locations />
      </Container>
    </Container>
  );
}
