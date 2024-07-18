import React from "react";
import buildingGIF from "../../assets/giphy.gif";
import { Flex, Heading, Image, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const WebsiteInProgress = () => {
  const navigate = useNavigate();

  return (
    <Flex
      w="100vw"
      h="100vh"
      bg="#e74853"
      direction="column"
      justify="center"
      align="center"
      color="pink"
    >
      <Flex
        direction="column"
        justify="center"
        align="start"
        margin="80px 80px 80px 80px"
      >
        <Flex boxSize="lg" w="100%" justify="center" direction="column">
          <Heading
            as="h1"
            alignItems="center"
            justifyContent="center"
            fontWeight="extrabold"
            fontSize="2em"
            marginBottom="30px"
            color="white"
          >
            Shhh~ Sorry, creativity is currently in progress!
          </Heading>
          <Image src={buildingGIF} alt="building-something" />
          <Button
            size="lg"
            minH="45px"
            variant="outline"
            marginLeft="-5px"
            marginTop="30px"
            color="wheat"
            fontWeight="extrabold"
            onClick={() => navigate("/")}
          >
            BACK{" "}
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default WebsiteInProgress;
