import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Heading,
  Text,
  Flex,
  ListIcon,
  Box,
  List,
  ListItem,
} from "@chakra-ui/react";

import {
  MdBrowserNotSupported,
  MdCheckBox,
  MdCrueltyFree,
} from "react-icons/md";

const Faqs = () => {
  const navigate = useNavigate();

  //   Why should we use your platform?
  // Multiplatform app and a website free with built-in donate button
  // Exposure to volunteers in adjacent organizations & local areas
  // Directly communicate with pinned events, direct messages, etc. to stay connected with your community
  // Simplifying outreach and fundraising
  // Crossposting feature across major social medias
  // Create sponsorable events and listings to show to corporations
  // Problems with Existing Software:
  // Users can struggle to stay connected with your org after they volunteer through a volunteer match or post (VolunteerMatch, etc.)
  // Users can’t directly donate to your organization through existing platforms (Facebook, Instagram)
  // Volunteer databases aren’t well-organized around events and don’t organically help you interact with users
  // Most CRM and HR software is paid software and can get expensive
  // Other applications and websites don’t surface your posts and content regularly in an activity feed
  // No singular platform that allows you to manage your volunteers, display your activity, post listings, find and vet talent, and fundraise
  // Other Features We Have In Mind:
  // Simplify volunteering management (listing creation simplification, waivers)
  // Corporate sponsorship option, shop
  // Validation of high-skilled volunteers (skilled especially)
  // Collaborative forum, event ideas
  // Basic CRM for volunteering

  return (
    <Flex
      w="100%"
      h="100%"
      minW="100vw"
      minH="100vh"
      bg="white"
      direction="column"
      justify="center"
      align="center"
      color="#ed81a1"
    >
      <Flex
        direction="column"
        w="80%"
        maxW="1980px"
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
          FAQs
        </Heading>
        <Box marginBottom="40px" w="80%">
          <Text fontSize={{ base: "0.9em", md: "1.5em" }}>
            Q: Why should we use your platform?
          </Text>
          <Text fontSize={{ base: "0.9em", md: "1em" }}>
            A: We provide a multiplatform (Android, iOS, website, desktop)
            application with a built-in donate button for your organization. We
            also:
            <List spacing={1} ml={4}>
              <ListItem>
                <ListIcon as={MdCheckBox} />
                Increase your exposure to volunteers in adjacent organizations
                and local areas
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckBox} />
                Allow you to directly communicate to your community with pinned
                events, direct messages, and posts
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckBox} />
                Let companies discover sponsorable events and listings from your
                non-profit
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckBox} />
                Let you create a single post on our platform and crosspost to
                other platforms (Twitter, Facebook, Instagram, etc.)
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckBox} />
                Make sure you're in the know about what other local
                organizations are up to
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckBox} />
                We're the only all-in-one platform that lets you stay connected
                with your community, manage your local volunteers, find and vet
                talent, post your activity, and fundraise
              </ListItem>
            </List>
          </Text>
          <Box h="20px" />
          <Text fontSize={{ base: "0.9em", md: "1.5em" }}>
            Q: What are the problems with existing solutions for non-profits?
          </Text>
          <Text fontSize={{ base: "0.8em", md: "1em" }}>
            A: Existing software can get expensive, hard to manage, and it's all
            over the place:
            <List spacing={1} ml={4}>
              <ListItem>
                <ListIcon as={MdBrowserNotSupported} />
                Users can struggle to stay connected with your org after they
                volunteer through a volunteer match or post (i.e.
                VolunteerMatch){" "}
              </ListItem>
              <ListItem>
                <ListIcon as={MdBrowserNotSupported} />
                Volunteer databases aren’t well-organized around events and
                don’t organically help you interact with users
              </ListItem>
              <ListItem>
                <ListIcon as={MdBrowserNotSupported} />
                Existing platforms don't natively support direct donations and
                fundraising drives that help you get the funds you need
              </ListItem>
              <ListItem>
                <ListIcon as={MdBrowserNotSupported} />
                Most CRM and HR software is paid software and can get expensive
              </ListItem>
              <ListItem>
                <ListIcon as={MdBrowserNotSupported} />
                Other applications and websites don’t surface your posts and
                content regularly in an activity feed directly
              </ListItem>
            </List>
          </Text>
        </Box>
        <Box>
          <Text fontSize={{ base: "0.9em", md: "1.5em" }}>
            Q: What are upcoming features that would get us excited to onboard?
          </Text>
          <Text fontSize={{ base: "0.8em", md: "1em" }}>
            A: There are a whole slew of awesome features we have planned for
            volunteers AND non-profits:{" "}
            <List spacing={1} ml={4}>
              <ListItem>
                <ListIcon as={MdCrueltyFree} />
                Volunteer and job listing simplification with help on waivers,
                legal issues, instructional videos, and help sourcing volunteer
                managers
              </ListItem>
              <ListItem>
                <ListIcon as={MdCrueltyFree} />
                Carpooling simplification and logistics, along with identity
                verification for volunteers
              </ListItem>
              <ListItem>
                <ListIcon as={MdCrueltyFree} />
                Adhoc event suggestions for non-profits and requests from
                locals, like neighborhood and beach cleanups, etc.
              </ListItem>
              <ListItem>
                <ListIcon as={MdCrueltyFree} />
                Fundraising shop on the application that lets non-profits
                collaborate with for-profit businesses -- each purchase supports
                your local non-profit!
              </ListItem>
              <ListItem>
                <ListIcon as={MdCrueltyFree} />
                Support for volunteering groups that operate independently and
                can form local communities who are interested in social good
              </ListItem>
              <ListItem>
                <ListIcon as={MdCrueltyFree} />
                Advanced CRM and analytics through a premium option
              </ListItem>
            </List>
          </Text>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Faqs;
