import { Text, Flex, Heading, Button, Box, BoxProps } from "@chakra-ui/react";
import { motion } from "framer-motion";

import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const mainText = "Hi there! Our mission is simple:";
  const missionStatement =
    "We're going to revolutionize the way social causes reach the people who care about them.";

  const variants = {
    visible: {
      opacity: 1,
    },
    hidden: {
      opacity: 0,
    },
    below: {
      top: "-5px",
    },
    regular: {
      top: "0px",
    },
  };

  const MotionBox = motion<Omit<BoxProps, "transition">>(Box);

  return (
    <Flex
      h="100%"
      minW="100vw"
      minH="100vh"
      bg="tomato"
      direction="column"
      justify="center"
      align="center"
      color="pink"
    >
      <Flex
        direction="column"
        justify="center"
        align="start"
        margin="90px 50px 60px 80px"
      >
        <MotionBox
          as={motion.span}
          alignItems="center"
          justifyContent="center"
          fontWeight="extrabold"
          fontSize={{ base: "2.25em", md: "3em" }}
          marginBottom="10px"
          color="white"
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.05 }}
        >
          {mainText.split("").map((word) => {
            return <motion.span variants={variants}>{word}</motion.span>;
          })}
        </MotionBox>
        <MotionBox
          alignItems="center"
          justifyContent="center"
          fontWeight="bold"
          fontSize={{ base: "1.3em", md: "2.15em" }}
          w="80%"
          initial="below"
          animate="regular"
          transition={{ staggerChildren: 0.05 }}
        >
          {missionStatement.split(" ").map((word) => {
            return <motion.span variants={variants}>{word} </motion.span>;
          })}
        </MotionBox>
        <Button
          size="lg"
          variant="outline"
          marginLeft="-5px"
          marginTop="75px"
          color="wheat"
          fontWeight="extrabold"
          onClick={() => navigate("/about-us")}
        >
          ABOUT US{" "}
        </Button>
      </Flex>
    </Flex>
  );
};

export default Home;
