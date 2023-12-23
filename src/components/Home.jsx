import { Box, Container, Heading, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import img5 from "../assets/5.png";

const headingOptions = {
  pos: "absolute",
  left: "50%",
  top: "50%",
  transform: "translate(-50%,-50%)",
  textTransform: "uppercase",
  p: "4",
  size: "4xl",
};

const Home = () => {
  return (
    <Box>
      <MyCarousel />
      <Container minH={"50vh"} maxW={"container.xl"} p={"16"}>
        <Heading
          textTransform="uppercase"
          py="2"
          borderBottom={"2px solid"}
          w={"fit-content"}
          // textAlign={"center"}
          margin={"auto"}
        >
          some bullshit
        </Heading>
        <Stack
          h={"full"}
          p="4"
          alignItems={"center"}
          direction={["column", "row"]} // Responsive choti screen me col
        >
          <Image src={img5} h={["40", "400"]} filter={"hue-rotate(-130deg)"} />
          <Text
            letterSpacing={"widest"}
            lineHeight={"190%"}
            p={["4", "16"]}
            textAlign={"center"}
          >
            Gaming kro , padhai mt kro, Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Sint, a. khush raho aabad raho gharwalo ki mt suno
            hawa lehar me udo aur......... gaming kro ~karan 2023
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};

const MyCarousel = () => {
  return (
    <Carousel
      autoPlay={true}
      infiniteLoop={true}
      showStatus={false}
      showThumbs={false}
      showArrows={false}
      // showIndicators={false}
      interval={1000}
    >
      <Box w="full" h={"100vh"}>
        <Image src={img1} />
        <Heading bgColor={"whiteAlpha.800"} color={"black"} {...headingOptions}>
          Watch The Future
        </Heading>
      </Box>
      <Box w={"full"} h={"100vh"}>
        <Image src={img2} />
        <Heading bgColor={"blackAlpha.600"} color={"white"} {...headingOptions}>
          Gaming is Future
        </Heading>
      </Box>
      <Box w={"full"} h={"100vh"}>
        <Image src={img3} />
        <Heading bgColor={"blackAlpha.600"} color={"white"} {...headingOptions}>
          Gaming on Console
        </Heading>
      </Box>
      <Box w={"full"} h={"100vh"}>
        <Image src={img4} />
        <Heading bgColor={"blackAlpha.600"} color={"white"} {...headingOptions}>
          Night life is cool
        </Heading>
      </Box>
    </Carousel>
  );
};

export default Home;
