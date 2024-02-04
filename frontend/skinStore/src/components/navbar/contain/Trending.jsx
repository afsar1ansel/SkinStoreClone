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
function Trending() {
  return (
    <Popover trigger="hover">
      <PopoverTrigger>
        <Box className={NavStyle.blackHover} p="7px">
          New&Trending
        </Box>
      </PopoverTrigger>
      <PopoverContent w="700px">
        <PopoverArrow />
        <PopoverBody p="25px">
          <Flex p="15px" justifyContent="space-between">
            <Box>
              <Box p="0.2px" bg="grey"></Box>
              <Text mb="5px" p="3px" fontWeight="bold">
                Latest brands
              </Text>
              <Text className={NavStyle.greyHover} p="3px">
                ISDIN
              </Text>
              <Text className={NavStyle.greyHover} p="3px">
                Act + Acre
              </Text>
              <Text className={NavStyle.greyHover} p="3px">
                Ellis Brooklyn
              </Text>
              <Text className={NavStyle.greyHover} p="3px">
                Rituals
              </Text>
              <Text className={NavStyle.greyHover} p="3px">
                Juliette Has a Gun
              </Text>
              <Text className={NavStyle.greyHover} p="3px">
                Chris Collins
              </Text>
              <Text className={NavStyle.greyHover} p="3px">
                Cire Trudon
              </Text>
              <Text className={NavStyle.greyHover} p="3px">
                Carrière Frères
              </Text>
              <Text className={NavStyle.greyHover} p="3px">
                Alurx
              </Text>
              <Text className={NavStyle.greyHover} p="3px">
                Lumira
              </Text>
              <Text className={NavStyle.greyHover} p="3px">
                Hermetica
              </Text>
              <Text className={NavStyle.greyHover} p="3px">
                Veronique Gabai
              </Text>
              <Text className={NavStyle.greyHover} p="3px">
                Liquides Imaginaires
              </Text>
              <Text className={NavStyle.greyHover} p="3px">
                Arquiste Parfumeur
              </Text>
              <Text className={NavStyle.greyHover} p="3px">
                David Mallett
              </Text>
            </Box>
            <Box>
              <Box p="0.2px" bg="grey"></Box>
              <Text mb="5px" p="3px" fontWeight="bold">
                View All New
              </Text>
              <Text className={NavStyle.greyHover} p="3px">
                New Skin Care
              </Text>
              <Text className={NavStyle.greyHover} p="3px">
                New Makeup
              </Text>
              <Text className={NavStyle.greyHover} p="3px">
                New Hair Care
              </Text>
              <Text className={NavStyle.greyHover} p="3px">
                New Bath & Body
              </Text>
              <Text className={NavStyle.greyHover} p="3px">
                New Fragrance
              </Text>
            </Box>
            <Box>
              <Box p="0.2px" bg="grey"></Box>
              <Text mb="5px" p="3px" fontWeight="bold">
                Trending Now
              </Text>
              <Text className={NavStyle.greyHover} p="3px">
                Best of British Brands
              </Text>
            </Box>
          </Flex>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}

export default Trending;
