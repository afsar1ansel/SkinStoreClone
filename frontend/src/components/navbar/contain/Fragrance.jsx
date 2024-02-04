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
function Fragrance() {
  return (
    <Popover trigger="hover">
      <PopoverTrigger>
        <Box className={NavStyle.blackHover} p="7px">
          Fragrance
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
                View All Fragrance
              </Text>
              <Text className={NavStyle.greyHover} p="3px">
                New In
              </Text>
              <Text className={NavStyle.greyHover} p="3px">
                5* Rated Products
              </Text>
            </Box>
            <Box>
              <Box p="0.2px" bg="grey"></Box>
              <Text mb="5px" p="3px" fontWeight="bold">
                Top Brands
              </Text>
              <Text className={NavStyle.greyHover} p="3px">
                NEOM Organics
              </Text>
              <Text className={NavStyle.greyHover} p="3px">
                Glasshouse Fragrances
              </Text>
              <Text className={NavStyle.greyHover} p="3px">
                KORRES
              </Text>
              <Text className={NavStyle.greyHover} p="3px">
                NEST Fragrances
              </Text>
              <Text className={NavStyle.greyHover} p="3px">
                Molton Brown
              </Text>
            </Box>
            <Box>
              <Box p="0.2px" bg="grey"></Box>
              <Text mb="5px" p="3px" fontWeight="bold">
                Personal Fragrance
              </Text>
              <Text className={NavStyle.greyHover} p="3px">
                Perfume
              </Text>
              <Text className={NavStyle.greyHover} p="3px">
                Eau de Toilette
              </Text>
              <Text className={NavStyle.greyHover} p="3px">
                Body Spray
              </Text>
              <Text className={NavStyle.greyHover} p="3px">
                For Her
              </Text>
              <Text className={NavStyle.greyHover} p="3px">
                For Him
              </Text>
            </Box>
            <Box>
              <Box p="0.2px" bg="grey"></Box>
              <Text mb="5px" p="3px" fontWeight="bold"></Text>
              <Text className={NavStyle.greyHover} p="3px">
                Home Fragrance
              </Text>
              <Text className={NavStyle.greyHover} p="3px">
                Scented Candles
              </Text>
              <Text className={NavStyle.greyHover} p="3px">
                Diffusers
              </Text>
              <Text className={NavStyle.greyHover} p="3px">
                Aromatherapy
              </Text>
              <Text className={NavStyle.greyHover} p="3px">
                Pillow Mists
              </Text>
              <Text className={NavStyle.greyHover} p="3px">
                Room Sprays
              </Text>
            </Box>
          </Flex>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}

export default Fragrance;
