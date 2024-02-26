import { useState, useEffect } from "react";
import { Container, Typography, Divider } from "@mui/material";
import {
  HomeTopLogo,
  HomeTopContent,
  HomeMiddleContent,
  HomeBottomContent,
} from "../components/home";

export default function Home() {
  const [scrollTop, setScrollTop] = useState(0);
  const [showContent, setShowContent] = useState(true);

  //set scrollTop state to the number of pixels the user has scrolled from the top
  const handleScroll = () => setScrollTop(window.scrollY);

  useEffect(() => {
    const windowHeight = window.innerHeight;
    const pageHeight = document.documentElement.scrollHeight;
    const actualHeight = pageHeight - windowHeight;
    //percent of the page the user has currently scrolled based on above pixels
    const scrollProgress = 100 * (scrollTop / actualHeight);
    console.log("scrolled from the top:", scrollTop);
    console.log("window height:", windowHeight, "page height:", pageHeight);
    console.log("actual page height:", actualHeight);
    console.log("percent scrolled:", scrollProgress);
    //listener to store the amount scrolled
    window.addEventListener("scroll", handleScroll);
    //TODO: add variable for window width above, to help us detect if user is
    //mobile or not, and adjust the scroll percentage breakpoint as necessary
    //scroll percentage breakpoint
    if (scrollProgress > 30) {
      setShowContent(true);
    } else {
      setShowContent(false);
    }

    return () => window.removeEventListener("scroll", handleScroll);
    //useEffect executes every time scrollTop changes, i.e whenever the user scrolls
  }, [scrollTop]);

  return (
    <>
      <Container
        maxWidth={false}
        sx={{
          //arbitrary page height
          //will need to update for optimal mobile/desktop middleground breakpoints
          height: 4000,
        }}
      >
        <HomeTopLogo />
        <HomeTopContent />
        <Divider component="div" role="presentation">
          <Typography>fancy divider</Typography>
        </Divider>
        {/* content here will show in middle of the page, 
        will slide from right to left as the user scrolls*/}
        <HomeMiddleContent showContent={showContent} />
        <Divider component="div" role="presentation">
          <Typography>fancy divider</Typography>
        </Divider>
        <HomeBottomContent />
      </Container>
    </>
  );
}
