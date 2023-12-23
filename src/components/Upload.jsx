import { Button, Container, HStack, Input, VStack } from "@chakra-ui/react";
import React from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";

const Upload = () => {
  return (
    <Container maxW={"container.xl"} h={"100vh"} p={"16"}>
      <VStack color={"purple.500"} justifyContent={"center"} h={"40vh"}>
        <AiOutlineCloudUpload size={"10vmax"} />
      </VStack>

      <form>
        <HStack>
          <Input
            required
            type="file"
            outline={"2px solid purple"}
            w={"50%"}
            marginLeft={["12", "272"]}
            // focusBorderColor="purple.900"
            css={{
              "&::file-selector-button": {
                border: "none",
                // borderRight: "2px solid red",
                // borderRadius: "2px",
                // outline: "purple solid 2px",
                width: "calc(100% + 36px)",
                height: "100%",
                marginLeft: "-16px",
                // marginRight: "0px",
                color: "purple",
                backgroundColor: "white",
                // outline: "2px solid purple",

                cursor: "pointer",
              },
            }}
          ></Input>
          <Button colorScheme="purple" type="submit">
            Upload
          </Button>
        </HStack>
      </form>
    </Container>
  );
};

export default Upload;
