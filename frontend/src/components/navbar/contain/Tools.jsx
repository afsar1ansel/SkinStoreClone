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
function Tools() {
  return (
    <Popover trigger="hover">
      <PopoverTrigger>
        <Box className={NavStyle.blackHover} p="7px">
          Tools
        </Box>
      </PopoverTrigger>
      <PopoverContent w="700px">
        <PopoverArrow />
        <PopoverBody p="25px">
          <Flex p="15px" justifyContent="space-between">
            <Box>
              <Box p="0.2px" bg="grey"></Box>
              <Text mb="5px" p="3px" fontWeight="bold">
                Popular Categories
              </Text>
              <Text className={NavStyle.greyHover} p="3px">
                View All Tools
              </Text>
              <Text className={NavStyle.greyHover} p="3px">
                Makeup Brushes & Accessories
              </Text>
            </Box>
            <Box>
              <Box p="0.2px" bg="grey"></Box>
              <Text mb="5px" p="3px" fontWeight="bold">
                Hair Care
              </Text>
              <Text className={NavStyle.greyHover} p="3px">
                Hair Dryers
              </Text>
              <Text className={NavStyle.greyHover} p="3px">
                Flat Irons
              </Text>
              <Text className={NavStyle.greyHover} p="3px">
                Rollers & Curling Irons
              </Text>
              <Text className={NavStyle.greyHover} p="3px">
                Hair Brushes
              </Text>
            </Box>
            <Box>
              <Box p="0.2px" bg="grey"></Box>
              <Text mb="5px" p="3px" fontWeight="bold">
                Skincare
              </Text>
              <Text className={NavStyle.greyHover} p="3px">
                LED Light Therapy
              </Text>
              <Text className={NavStyle.greyHover} p="3px">
                Facial Toning
              </Text>
              <Text className={NavStyle.greyHover} p="3px">
                Cleansing
              </Text>
              <Text className={NavStyle.greyHover} p="3px">
                Dermabrasion
              </Text>
            </Box>
          </Flex>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}

export default Tools;
