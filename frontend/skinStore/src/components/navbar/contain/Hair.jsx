import {
  Box,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  Flex,
  Heading,
  Divider,
  Text,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import NavStyle from "../navbar.module.css";
function Hair() {
  const navigate = useNavigate();
  function toggleSearch(e) {
    toggleUrlQuery({ q: e.target.innerHTML });
    navigate("/productpage");
  }
  return (
    <Popover trigger="hover">
      <PopoverTrigger>
        <Box
          onClick={() => {
            navigate("/haircare");
          }}
          className={NavStyle.blackHover}
          p="7px"
        >
          Hair Care
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
              <Text
                className={NavStyle.greyHover}
                p="3px"
                onClick={toggleSearch}
              >
                View All Hair Care
              </Text>
              <Text
                className={NavStyle.greyHover}
                p="3px"
                onClick={toggleSearch}
              >
                New In
              </Text>
              <Text
                className={NavStyle.greyHover}
                p="3px"
                onClick={toggleSearch}
              >
                Clean Hair Care
              </Text>
              <Text
                className={NavStyle.greyHover}
                p="3px"
                onClick={toggleSearch}
              >
                5* Rated Products
              </Text>
              <Text
                className={NavStyle.greyHover}
                p="3px"
                onClick={toggleSearch}
              >
                Gifts & Sets
              </Text>
              <Text
                className={NavStyle.greyHover}
                p="3px"
                onClick={toggleSearch}
              >
                Travel Sizes
              </Text>
              <Text
                className={NavStyle.greyHover}
                p="3px"
                onClick={toggleSearch}
              >
                Supersize & Duos
              </Text>
            </Box>
            <Box>
              <Box p="0.2px" bg="grey"></Box>
              <Text mb="5px" p="3px" fontWeight="bold">
                Product Type
              </Text>
              <Text
                className={NavStyle.greyHover}
                p="3px"
                onClick={toggleSearch}
              >
                Shampoo
              </Text>
              <Text
                className={NavStyle.greyHover}
                p="3px"
                onClick={toggleSearch}
              >
                Conditioners
              </Text>
              <Text
                className={NavStyle.greyHover}
                p="3px"
                onClick={toggleSearch}
              >
                Hair Treatments
              </Text>
              <Text
                className={NavStyle.greyHover}
                p="3px"
                onClick={toggleSearch}
              >
                Hair Masks
              </Text>
              <Text
                className={NavStyle.greyHover}
                p="3px"
                onClick={toggleSearch}
              >
                Hair Oils
              </Text>
              <Text
                className={NavStyle.greyHover}
                p="3px"
                onClick={toggleSearch}
              >
                Hair Sprays
              </Text>
              <Text
                className={NavStyle.greyHover}
                p="3px"
                onClick={toggleSearch}
              >
                Hair Styling
              </Text>
              <Text
                className={NavStyle.greyHover}
                p="3px"
                onClick={toggleSearch}
              >
                Hair Thinning & Loss
              </Text>
              <Text
                className={NavStyle.greyHover}
                p="3px"
                onClick={toggleSearch}
              >
                Hair Color Treatments
              </Text>
              <Text
                className={NavStyle.greyHover}
                p="3px"
                onClick={toggleSearch}
              >
                Hair Supplements
              </Text>
              <Text
                className={NavStyle.greyHover}
                p="3px"
                onClick={toggleSearch}
              >
                Hair Brushes & Combs
              </Text>
            </Box>
            <Box>
              <Box p="0.2px" bg="grey"></Box>
              <Text mb="5px" p="3px" fontWeight="bold">
                Hair Type
              </Text>
              <Text
                className={NavStyle.greyHover}
                p="3px"
                onClick={toggleSearch}
              >
                Anti-Dandruff & Scalp Care
              </Text>
              <Text
                className={NavStyle.greyHover}
                p="3px"
                onClick={toggleSearch}
              >
                Coarse & Textured Hair
              </Text>
              <Text
                className={NavStyle.greyHover}
                p="3px"
                onClick={toggleSearch}
              >
                Colored Hair
              </Text>
              <Text
                className={NavStyle.greyHover}
                p="3px"
                onClick={toggleSearch}
              >
                Curly & Wavy Hair
              </Text>
              <Text
                className={NavStyle.greyHover}
                p="3px"
                onClick={toggleSearch}
              >
                Damaged Hair
              </Text>
              <Text
                className={NavStyle.greyHover}
                p="3px"
                onClick={toggleSearch}
              >
                Dry Hair
              </Text>
              <Text
                className={NavStyle.greyHover}
                p="3px"
                onClick={toggleSearch}
              >
                Fine Hair
              </Text>
              <Text
                className={NavStyle.greyHover}
                p="3px"
                onClick={toggleSearch}
              >
                Oily Hair
              </Text>
            </Box>
            <Box>
              <Box p="0.2px" bg="grey"></Box>
              <Text mb="5px" p="3px" fontWeight="bold">
                Electrical
              </Text>
              <Text
                className={NavStyle.greyHover}
                p="3px"
                onClick={toggleSearch}
              >
                Flat Irons
              </Text>
              <Text
                className={NavStyle.greyHover}
                p="3px"
                onClick={toggleSearch}
              >
                Hair Dryers
              </Text>
              <Text
                className={NavStyle.greyHover}
                p="3px"
                onClick={toggleSearch}
              >
                Rollers & Curling Tongs
              </Text>
            </Box>
            <Box>
              <Box p="0.2px" bg="grey"></Box>
              <Text mb="5px" p="3px" fontWeight="bold">
                Hair Removal
              </Text>
              <Text
                className={NavStyle.greyHover}
                p="3px"
                onClick={toggleSearch}
              >
                Hair Removal Devices
              </Text>
              <Text
                className={NavStyle.greyHover}
                p="3px"
                onClick={toggleSearch}
              >
                Hair Removal Products
              </Text>
              <Text
                className={NavStyle.greyHover}
                p="3px"
                onClick={toggleSearch}
              >
                Men's Shaving Products
              </Text>
            </Box>
          </Flex>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}

export default Hair;
