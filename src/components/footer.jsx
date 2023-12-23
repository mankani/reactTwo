import React from "react";
import {
  Box,
  Button,
  HStack,
  Heading,
  Input,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import {
  AiOutlineSend,
  AiFillYoutube,
  AiFillInstagram,
  AiFillTwitterCircle,
} from "react-icons/ai";

const footer = () => {
  return (
    <Box bgColor={"blackAlpha.900"} minH={"48"} p={"16"} color={"white"}>
      <Stack direction={["column", "row"]}>
        <VStack
          size="md"
          textTransform={"uppercase"}
          w={"full"}
          alignItems={"stretch"}
          px={"4"}
        >
          <Heading size={"md"} textAlign={["center", "left"]}>
            Subscribe to get updates
          </Heading>
          <HStack borderBottom={"2px solid white"} py={"2"}>
            <Input
              type="text"
              placeholder="Enter Your Email Here"
              border={"none"}
              outline={"none"}
              borderRadius={"none"}
              focusBorderColor="none"
            />
            <Button
              colorScheme={"purple"}
              variant={"ghost"}
              p={"0"}
              borderRadius={"0 20px 20px 0"}
            >
              <AiOutlineSend size={20} />
            </Button>
          </HStack>
        </VStack>

        <VStack
          w={"full"}
          borderLeft={["none", "2px solid white"]}
          borderRight={["none", "2px solid white"]}
          //   borderTop={["2px solid white", "none"]}
          borderBottom={["2px solid white", "none"]}
          textAlign={"center"}
          p={["8", "0"]}
        >
          <Heading size={"md"} textTransform={"uppercase"}>
            CrispyCoirHub
          </Heading>
          <Text>@all rights reserved</Text>
        </VStack>

        <VStack w={"full"}>
          <Heading textTransform={"uppercase"} size={"md"}>
            Social Media
          </Heading>
          <Button variant={"link"} colorScheme="white">
            <AiFillYoutube />
            <a href="https://www.youtube.com/@21savage" target="_blank">
              Youtube
            </a>
          </Button>
          <Button variant="link" colorScheme="white">
            <AiFillInstagram />
            <a href="https://www.instagram.com/21savage/" target="_blank">
              Instagram
            </a>
          </Button>
          <Button variant="link" colorScheme="white">
            <AiFillTwitterCircle />
            <a href="https://twitter.com/21savage" target="_blank">
              Twitter
            </a>
          </Button>
        </VStack>
      </Stack>
    </Box>
  );
};

export default footer;
