import { Text, Image, Box } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import rooster_haus from "../../assets/rooster_haus.png";
import save_the_children_logo from "../../assets/save-the-children.png";
import american_cancer_society_logo from "../../assets/american_cancer_society.webp";

let donations = [
  {
    org: "Save the Children",
    amount: "6500",
    src: save_the_children_logo,
    size: "100px",
  },
  { org: "Rooster Haus", amount: "3500", src: rooster_haus, size: "100px" },
  { org: "American Cancer Society", amount: "???", src: american_cancer_society_logo, size: "100px" },
];

const DonationBox = ({ src, size, amount }) => {
  return (
    <Box>
      <Image src={src} boxSize={size} />
    </Box>
  );
};

const Carousel = () => {
  const [curDonationIndex, setCurDonationIndex] = useState(0);
  const curDonation = donations[curDonationIndex];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurDonationIndex((curDonationIndex + 1) % donations.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [curDonationIndex]);

  return (
    <DonationBox
      src={curDonation.src}
      size={curDonation.size}
      amount={curDonation.amount}
    />
  );
};

export default Carousel;
