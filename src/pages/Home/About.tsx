import React from "react";
import { useNavigate } from "react-router-dom";
import { Heading, Text, Flex, Avatar, Button, Box } from "@chakra-ui/react";

import vishnuProfilePic from "../../assets/vishnuprofilepic.jpg";

interface IAboutProps {
  name: string;
  title: string;
  avatarSrc: string;
  children: any;
}

const AboutSection: React.FC<IAboutProps> = ({
  name,
  title,
  avatarSrc,
  children,
}) => {
  return (
    <Flex direction="row" justify="start" align="start" w="100%">
      <Flex direction="column" justify="center" align="start" w="70%">
        <Heading marginBottom="20px" color="#ed81a1">
          {name}
          {", "}
          {title}
        </Heading>
        <Text fontWeight="semibold">{children}</Text>
      </Flex>
      <Box w="50px" />
      <Flex flexGrow="1" h="100%" justify="start" align="center">
        <Avatar size="2xl" border="2px solid red" name={name} src={avatarSrc} />
      </Flex>
    </Flex>
  );
};

const About = () => {
  const navigate = useNavigate();

  return (
    <Flex
      w="100%"
      h="100%"
      minHeight="100vh"
      bg="white"
      direction="column"
      justify="start"
      align="center"
      color="#ed81a1"
    >
      <Box maxH="20%" minH="200px" />
      <Flex
        direction="column"
        w="80%"
        justify="center"
        align="start"
        margin="80px 80px 80px 80px"
      >
        <Heading
          as="h1"
          alignItems="center"
          justifyContent="center"
          fontWeight="extrabold"
          fontSize="3em"
          marginBottom="40px"
          color="#ed81a1"
        >
          About us
        </Heading>
        <AboutSection
          name={"Vishnu Pydah"}
          title={"Co-Founder"}
          avatarSrc={vishnuProfilePic}
        >
          I'm a former Meta employee with several years under my belt as both a
          software developer and a volunteer! I feel that modern social media is
          addictive, mind-numbing, and enslaves us without us even realizing it;
          people need to focus on the things that matter -- their communities,
          their families, and the people and causes they believe in. After
          volunteering at local sanctuaries in the Greater Seattle Area, I
          decided there needed to be a better way for likeminded, caring people
          to stay in touch with the organizations and social causes they care
          about.{" "}
        </AboutSection>
        <Box h="50px" />
        <AboutSection name={"Hareem Ahmad"} title={"Co-Founder"} avatarSrc="">
          I come from the Healthcare space and have seen how extremely basic
          support systems can uplift individuals who have lost hope. I seek to
          help make those resources more widely available and to create a
          platform enabling people to be rooted in their communities.{" "}
        </AboutSection>
        <Button
          size="lg"
          variant="outline"
          marginLeft="-5px"
          marginTop="150px"
          color="#e75480"
          fontWeight="extrabold"
          borderColor="#e75480"
          onClick={() => navigate("/")}
        >
          BACK{" "}
        </Button>
      </Flex>
    </Flex>
  );
};

export default About;
