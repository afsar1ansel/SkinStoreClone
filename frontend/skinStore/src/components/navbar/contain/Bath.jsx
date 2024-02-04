import {
  Box,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
  Flex,
  Text,
} from "@chakra-ui/react";
import React from "react";

import NavStyle from "../navbar.module.css";
function Bath() {
  return (
    <Popover trigger="hover">
      <PopoverTrigger>
        <Box className={NavStyle.blackHover} p="7px">
          Bath&Body
        </Box>
      </PopoverTrigger>
      <PopoverContent w="1000px">
        <PopoverArrow />
        <PopoverBody p="25px">
          <Flex p="15px" justifyContent="space-between">
            <Box>
              <Box p="0.2px" bg="grey"></Box>
              <Text mb="5px" p="3px" fontWeight="bold">
                Popular Categories
              </Text>
              <Text className={NavStyle.greyHover} p="3px">
                View All Bath & Body
              </Text>
              <Text className={NavStyle.greyHover} p="3px">
                New In
              </Text>
              <Text className={NavStyle.greyHover} p="3px">
                Clean Bath & Body
              </Text>
              <Text className={NavStyle.greyHover} p="3px">
                5* Rated Products
              </Text>
              <Text className={NavStyle.greyHover} p="3px">
                Travel Sizes
              </Text>
              <Text className={NavStyle.greyHover} p="3px">
                At Home Spa
              </Text>
              <Text className={NavStyle.greyHover} p="3px">
                Deodorants
              </Text>
              <Text className={NavStyle.greyHover} p="3px">
                Gifts & Sets
              </Text>
              <Text className={NavStyle.greyHover} p="3px">
                Oral Care
              </Text>
              <Text className={NavStyle.greyHover} p="3px">
                Mom & Baby
              </Text>
            </Box>
            <Box>
              <Box p="0.2px" bg="grey"></Box>
              <Text mb="5px" p="3px" fontWeight="bold">
                Bath & Shower
              </Text>
              <Text className={NavStyle.greyHover} p="3px">
                Baths Oils/Soak
              </Text>
              <Text className={NavStyle.greyHover} p="3px">
                Bath Salts
              </Text>
              <Text className={NavStyle.greyHover} p="3px">
                Body Washes
              </Text>
              <Text className={NavStyle.greyHover} p="3px">
                Cleansing Bars
              </Text>
              <Text className={NavStyle.greyHover} p="3px">
                Exfoliators
              </Text>
              <Text className={NavStyle.greyHover} p="3px">
                Self Tanners
              </Text>
            </Box>
            <Box>
              <Box p="0.2px" bg="grey"></Box>
              <Text mb="5px" p="3px" fontWeight="bold">
                Self Tanners
              </Text>
              <Text className={NavStyle.greyHover} p="3px">
                Accessories
              </Text>
              <Text className={NavStyle.greyHover} p="3px">
                Pre-Tan Preparation
              </Text>
              <Text className={NavStyle.greyHover} p="3px">
                Body Tanners
              </Text>
              <Text className={NavStyle.greyHover} p="3px">
                Post Tanning
              </Text>
            </Box>
            <Box>
              <Box p="0.2px" bg="grey"></Box>
              <Text mb="5px" p="3px" fontWeight="bold">
                Moisturizers
              </Text>
              <Text className={NavStyle.greyHover} p="3px">
                Balms
              </Text>
              <Text className={NavStyle.greyHover} p="3px">
                Butters
              </Text>
              <Text className={NavStyle.greyHover} p="3px">
                Creams
              </Text>
              <Text className={NavStyle.greyHover} p="3px">
                Lotions
              </Text>
              <Text className={NavStyle.greyHover} p="3px">
                Oils
              </Text>
            </Box>
            <Box>
              <Box p="0.2px" bg="grey"></Box>
              <Text mb="5px" p="3px" fontWeight="bold">
                Targeted Care
              </Text>
              <Text className={NavStyle.greyHover} p="3px">
                Bust
              </Text>
              <Text className={NavStyle.greyHover} p="3px">
                Cellulite
              </Text>
              <Text className={NavStyle.greyHover} p="3px">
                Dry Skin
              </Text>
              <Text className={NavStyle.greyHover} p="3px">
                Hair Removal
              </Text>
              <Text className={NavStyle.greyHover} p="3px">
                Hand & Foot Care
              </Text>
              <Text className={NavStyle.greyHover} p="3px">
                Hand Soap, Sanitizers & Creams
              </Text>
              <Text className={NavStyle.greyHover} p="3px">
                Legs
              </Text>
              <Text className={NavStyle.greyHover} p="3px">
                Slimming & Sculpting
              </Text>
              <Text className={NavStyle.greyHover} p="3px">
                Stretch Marks
              </Text>
              <Text className={NavStyle.greyHover} p="3px">
                Sunscreen
              </Text>
            </Box>
          </Flex>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}

export default Bath;
