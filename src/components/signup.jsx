import {
  Button,
  Container,
  Heading,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Avatar } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const signup = () => {
  return (
    <Container h={"110vh"} maxW={"container.xl"} p={"16"}>
      <form>
        <VStack
          alignItems={"stretch"}
          w={["full", "80"]}
          spacing={"7"}
          m={"auto"}
          marginTop={"15"}
          //   my={"25"}
        >
          <Heading>CrispyCoir hub</Heading>
          <Avatar alignSelf={"center"} boxSize={"32"} />
          <Input
            type="text"
            placeholder="Name"
            required
            focusBorderColor={"rgb(128,0,128)"}
          />
          <Input
            type="email"
            placeholder="Email"
            required
            focusBorderColor={"rgb(128,0,128)"}
          />
          <Input
            type="password"
            placeholder="Password"
            required
            focusBorderColor={"rgb(128,0,128)"}
          />
          <Button variant={"solid"} colorScheme="purple">
            Sign Up
          </Button>
          {/* <Button variant={"link"} alignSelf={"flex-end"}>
          <Link to={"forgetPass"}>Forgot Password</Link>
        </Button> */}
          <Text alignSelf={"self-end"}>
            Alredy the User?{" "}
            <Button variant={"link"} colorScheme={"purple"}>
              <Link to={"/login"}>Log In</Link>
            </Button>
          </Text>
        </VStack>
      </form>
    </Container>
  );
};

export default signup;
