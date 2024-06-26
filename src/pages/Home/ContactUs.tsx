import React from "react";
import { Text, Flex, Heading, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const ContactUs = () => {
  const navigate = useNavigate();

  return (
    <Flex
      w="100%"
      h="100%"
      minW="100vw"
      minH="100vh"
      bg="whitesmoke"
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
        <Heading
          as="h1"
          alignItems="center"
          justifyContent="center"
          fontWeight="semibold"
          fontSize="3em"
          marginBottom="10px"
          color="#484848"
        >
          Our site is still under development but
        </Heading>
        <Text
          alignItems="center"
          justifyContent="center"
          fontSize="2.25em"
          color="grey"
          w="100%"
        >
          please send us an email at{" "}
          <Text as="span" color="black">
            <a href="mailto: info@garuda-labs.org"> info@garuda-labs.org</a> 
          </Text>
        </Text>
        <Button
          size="lg"
          variant="outline"
          marginLeft="-5px"
          marginTop="30px"
          color="black"
          fontWeight="extrabold"
          borderColor="black"
          onClick={() => navigate("/")}
        >
          BACK{" "}
        </Button>
      </Flex>
    </Flex>
  );
};

export default ContactUs;
