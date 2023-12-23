import {
  Button,
  Container,
  Heading,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const login = () => {
  return (
    <Container h={"100vh"} maxW={"container.xl"} p={"16"}>
      <form>
        <VStack
          alignItems={"stretch"}
          w={["full", "80"]}
          spacing={"8"}
          m={"auto"}
          my={"30"}
        >
          <Heading>Hi! Welcome Back</Heading>
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
            Log In
          </Button>
          <Button variant={"link"} alignSelf={"flex-end"}>
            <Link to={"/forgetpassword"}>Forgot Password</Link>
          </Button>
          <Text alignSelf={"self-end"}>
            New User?{" "}
            <Button variant={"link"} colorScheme="purple">
              <Link to={"/signup"}>Sign up</Link>
            </Button>
          </Text>
        </VStack>
      </form>
    </Container>
  );
};

export default login;
