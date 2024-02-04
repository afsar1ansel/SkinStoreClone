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
function Build() {
  return (
    <Popover trigger="hover">
      <PopoverTrigger>
        <Box className={NavStyle.blackHover} p="7px">
          Build a Routine
        </Box>
      </PopoverTrigger>
      <PopoverContent w="850px">
        <PopoverArrow />
        <PopoverBody p="25px">
          <Flex p="15px" justifyContent="space-between">
            <Box>
              <Box p="0.2px" bg="grey"></Box>
              <Text mb="5px" p="3px" fontWeight="bold">
                Skin Type Routines
              </Text>
              <Text className={NavStyle.greyHover} p="3px">
                Dry Skin Routine
              </Text>
              <Text className={NavStyle.greyHover} p="3px">
                Normal Skin Routine
              </Text>
              <Text className={NavStyle.greyHover} p="3px">
                Oily Skin Routine
              </Text>
              <Text className={NavStyle.greyHover} p="3px">
                Combination Skin Routine
              </Text>
              <Text className={NavStyle.greyHover} p="3px">
                Sensitive Skin Routine
              </Text>
            </Box>
            <Box>
              <Box p="0.2px" bg="grey"></Box>
              <Text mb="5px" p="3px" fontWeight="bold">
                Skin Concern Routines
              </Text>
              <Text className={NavStyle.greyHover} p="3px">
                Acne Routine
              </Text>
              <Text className={NavStyle.greyHover} p="3px">
                Fine Lines & Wrinkles Routine
              </Text>
              <Text className={NavStyle.greyHover} p="3px">
                Dark Spots & Discoloration Routine
              </Text>
              <Text className={NavStyle.greyHover} p="3px">
                Redness & Rosacea Routine
              </Text>
              <Text className={NavStyle.greyHover} p="3px">
                Dullness & Brightening Routine
              </Text>
            </Box>
            <Box>
              <Box p="0.2px" bg="grey"></Box>
              <Text mb="5px" p="3px" fontWeight="bold">
                Build a Hair Routine
              </Text>
              <Text className={NavStyle.greyHover} p="3px">
                Fine, Thinning Hair Routine
              </Text>
              <Text className={NavStyle.greyHover} p="3px">
                Healthy Scalp Routine
              </Text>
              <Text className={NavStyle.greyHover} p="3px">
                Colored Hair Routine
              </Text>
              <Text className={NavStyle.greyHover} p="3px">
                Dry, Damaged Hair Routine
              </Text>
              <Text className={NavStyle.greyHover} p="3px">
                Oily Hair Routine
              </Text>
              <Text className={NavStyle.greyHover} p="3px">
                Hair Styling Routine
              </Text>
            </Box>
          </Flex>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}

export default Build;
