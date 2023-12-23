import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  VStack,
  HStack,
} from "@chakra-ui/react";
import { BiMenuAltLeft } from "react-icons/bi";
import { Link } from "react-router-dom";

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        zIndex={"overlay"}
        position={"fixed"}
        top={"4"}
        left={"4"}
        colorScheme={"purple"}
        p={"0"}
        w={"10"}
        h={"10"}
        borderRadius={"full"}
        onClick={onOpen}
      >
        <BiMenuAltLeft size={"24"} />
      </Button>

      {/* <HStack
        position={"absolute"}
        top={"4"}
        right={"20"}
        // left={"0"}
        // width={"200px"}
        // justifyContent={"space-evenly"}
        // bgColor={"red"}
      >
        <Button colorScheme="purple">
          <Link to={"login"}>Log in</Link>
        </Button>
        <Button variant={"ghost"} colorScheme="purple">
          <Link to={"/signup"}>Sign up</Link>
        </Button>
      </HStack> */}

      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />

        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Crispy Coir HUB</DrawerHeader>

          <DrawerBody>
            <VStack alignItems={"flex-start"}>
              <Button
                onClick={onClose}
                variant={"ghost"}
                colorScheme={"purple"}
              >
                <Link to={"/"}>Home</Link>
              </Button>
              <Button
                onClick={onClose}
                variant={"ghost"}
                colorScheme={"purple"}
              >
                <Link to={"/videos"}>Videos</Link>
              </Button>
              <Button
                onClick={onClose}
                variant={"ghost"}
                colorScheme={"purple"}
              >
                <Link to={"/upload"}>Upload Videos</Link>
              </Button>
              <Button
                onClick={onClose}
                variant={"solid"}
                // colorScheme={"gold"}
                bg={"rgb(238, 188, 29)"}
                color={"purple"}
              >
                <Link to={"/premium"}>*Buy Premium*</Link>
              </Button>
            </VStack>

            <HStack
              bottom={"10"}
              left={"0"}
              position={"absolute"}
              width={"full"}
              justifyContent={"space-evenly"}
              // bgColor={"red"}
            >
              <Button onClick={onClose} colorScheme="purple">
                <Link to={"/login"}>Log in</Link>
              </Button>
              <Button
                onClick={onClose}
                variant={"outline"}
                colorScheme="purple"
              >
                <Link to={"/signup"}>Sign up</Link>
              </Button>
            </HStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;
