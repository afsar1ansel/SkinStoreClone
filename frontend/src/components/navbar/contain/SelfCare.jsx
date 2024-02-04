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
function SelfCare() {
  return (
    <Popover trigger="hover">
      <PopoverTrigger>
        <Box className={NavStyle.blackHover} p="7px">
          Self Care
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
                Self Care
              </Text>
              <Text className={NavStyle.greyHover} p="3px">
                New In
              </Text>
              <Text className={NavStyle.greyHover} p="3px">
                5* Rated Products
              </Text>
              <Text className={NavStyle.greyHover} p="3px">
                At-Home Spa
              </Text>
              <Text className={NavStyle.greyHover} p="3px">
                View All Wellness Products
              </Text>
            </Box>
            <Box>
              <Box p="0.2px" bg="grey"></Box>
              <Text mb="5px" p="3px" fontWeight="bold">
                Sexual Wellness
              </Text>
              <Text className={NavStyle.greyHover} p="3px">
                Devices
              </Text>
              <Text className={NavStyle.greyHover} p="3px">
                Skin Care
              </Text>
            </Box>
            <Box>
              <Box p="0.2px" bg="grey"></Box>
              <Text mb="5px" p="3px" fontWeight="bold">
                Supplements
              </Text>
              <Text className={NavStyle.greyHover} p="3px">
                Skin
              </Text>
              <Text className={NavStyle.greyHover} p="3px">
                Hair
              </Text>
              <Text className={NavStyle.greyHover} p="3px">
                Immune Boosting
              </Text>
              <Text className={NavStyle.greyHover} p="3px">
                Health & Wellbeing
              </Text>
              <Text className={NavStyle.greyHover} p="3px">
                Weight Loss
              </Text>
            </Box>
            <Box>
              <Box p="0.2px" bg="grey"></Box>
              <Text mb="5px" p="3px" fontWeight="bold">
                Clean Beauty
              </Text>
              <Text className={NavStyle.greyHover} p="3px">
                Clean Skincare
              </Text>
              <Text className={NavStyle.greyHover} p="3px">
                Clean Haircare
              </Text>
              <Text className={NavStyle.greyHover} p="3px">
                Clean Makeup
              </Text>
              <Text className={NavStyle.greyHover} p="3px">
                Clean Bath & Body
              </Text>
            </Box>
          </Flex>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}

export default SelfCare;
