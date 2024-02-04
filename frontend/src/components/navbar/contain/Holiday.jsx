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
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import NavStyle from "../navbar.module.css";
function Holiday() {
  const navigate = useNavigate();
  function toggleSearch(e) {
    toggleUrlQuery({ q: e.target.innerHTML });
    navigate("/productpage");
  }
  return (
    <Popover trigger="hover">
      <PopoverTrigger>
        <Box className={NavStyle.blackHover} p="7px">
          Holiday 🎁
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
                onClick={toggleSearch}
                p="3px"
              >
                Shop All Holiday Beauty Gifts
              </Text>
              <Text
                className={NavStyle.greyHover}
                p="3px"
                onClick={toggleSearch}
              >
                Our Favorite Beauty Gift Sets
              </Text>
              <Text
                className={NavStyle.greyHover}
                p="3px"
                onClick={toggleSearch}
              >
                SkinStore Exclusive Gifts
              </Text>
              <Text
                className={NavStyle.greyHover}
                p="3px"
                onClick={toggleSearch}
              >
                SkinStore's Holiday Edit Box
              </Text>
              <Text
                className={NavStyle.greyHover}
                p="3px"
                onClick={toggleSearch}
              >
                Holiday Gift Ideas for Her
              </Text>
              <Text
                className={NavStyle.greyHover}
                p="3px"
                onClick={toggleSearch}
              >
                Holiday Gift Ideas for Him
              </Text>
            </Box>
            <Box>
              <Box p="0.2px" bg="grey"></Box>
              <Text mb="5px" p="3px" fontWeight="bold">
                By Gift Idea
              </Text>
              <Text
                className={NavStyle.greyHover}
                p="3px"
                onClick={toggleSearch}
              >
                Budget Friendly and Small Gifts
              </Text>
              <Text
                className={NavStyle.greyHover}
                p="3px"
                onClick={toggleSearch}
              >
                Stocking Stuffer Ideas
              </Text>
              <Text
                className={NavStyle.greyHover}
                p="3px"
                onClick={toggleSearch}
              >
                Thoughtful Gifts for Smart Splurges
              </Text>
              <Text
                className={NavStyle.greyHover}
                p="3px"
                onClick={toggleSearch}
              >
                Luxury Holiday Gifts
              </Text>
              <Text
                className={NavStyle.greyHover}
                p="3px"
                onClick={toggleSearch}
              >
                Last Minute Gift Ideas
              </Text>
              <Text
                className={NavStyle.greyHover}
                p="3px"
                onClick={toggleSearch}
              >
                Gifts For You
              </Text>
            </Box>
            <Box>
              <Box p="0.2px" bg="grey"></Box>
              <Text mb="5px" p="3px" fontWeight="bold">
                By Price
              </Text>
              <Text
                className={NavStyle.greyHover}
                p="3px"
                onClick={toggleSearch}
              >
                Gifts Under $25
              </Text>
              <Text
                className={NavStyle.greyHover}
                p="3px"
                onClick={toggleSearch}
              >
                Gifts Under $50
              </Text>
              <Text
                className={NavStyle.greyHover}
                p="3px"
                onClick={toggleSearch}
              >
                Gifts Under $100
              </Text>
              <Text
                className={NavStyle.greyHover}
                p="3px"
                onClick={toggleSearch}
              >
                Gifts Over $100
              </Text>
            </Box>
            <Box>
              <Box p="0.2px" bg="grey"></Box>
              <Text mb="5px" p="3px" fontWeight="bold">
                By Category
              </Text>
              <Text
                className={NavStyle.greyHover}
                p="3px"
                onClick={toggleSearch}
              >
                Skin Care Gifts
              </Text>
              <Text
                className={NavStyle.greyHover}
                p="3px"
                onClick={toggleSearch}
              >
                Body Care Gifts
              </Text>
              <Text
                className={NavStyle.greyHover}
                p="3px"
                onClick={toggleSearch}
              >
                Home Scents and Candle Gifts
              </Text>
              <Text
                className={NavStyle.greyHover}
                p="3px"
                onClick={toggleSearch}
              >
                Makeup Gifts
              </Text>
              <Text
                className={NavStyle.greyHover}
                p="3px"
                onClick={toggleSearch}
              >
                Hair Care Gifts
              </Text>
              <Text
                className={NavStyle.greyHover}
                p="3px"
                onClick={toggleSearch}
              >
                Beauty Tools and Hair Styling Gifts
              </Text>
            </Box>
          </Flex>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}

export default Holiday;
