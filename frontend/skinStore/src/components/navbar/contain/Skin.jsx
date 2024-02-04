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
function Skin() {
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
            navigate("/skincare");
          }}
          className={NavStyle.blackHover}
          p="7px"
        >
          Skin Care
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
                px="3px"
                py="1px"
                onClick={toggleSearch}
              >
                View All Skin Care
              </Text>
              <Text
                className={NavStyle.greyHover}
                px="3px"
                py="1px"
                onClick={toggleSearch}
              >
                New In
              </Text>
              <Text
                className={NavStyle.greyHover}
                px="3px"
                py="1px"
                onClick={toggleSearch}
              >
                Clean Skincare
              </Text>
              <Text
                className={NavStyle.greyHover}
                px="3px"
                py="1px"
                onClick={toggleSearch}
              >
                5* Rated Products
              </Text>
              <Text
                className={NavStyle.greyHover}
                px="3px"
                py="1px"
                onClick={toggleSearch}
              >
                Gifts & Sets
              </Text>
              <Text
                className={NavStyle.greyHover}
                px="3px"
                py="1px"
                onClick={toggleSearch}
              >
                Supersizes & Duo
              </Text>
              <Text
                className={NavStyle.greyHover}
                px="3px"
                py="1px"
                onClick={toggleSearch}
              >
                Travel Sizes
              </Text>
            </Box>

            <Box>
              <Box p="0.2px" bg="grey"></Box>
              <Text mb="5px" p="3px" fontWeight="bold">
                By Product Type
              </Text>
              <Text
                className={NavStyle.greyHover}
                px="3px"
                py="1px"
                onClick={toggleSearch}
              >
                Cleansers
              </Text>
              <Text
                className={NavStyle.greyHover}
                px="3px"
                py="1px"
                onClick={toggleSearch}
              >
                Moisturizers
              </Text>
              <Text
                className={NavStyle.greyHover}
                px="3px"
                py="1px"
                onClick={toggleSearch}
              >
                Serums
              </Text>
              <Text
                className={NavStyle.greyHover}
                px="3px"
                py="1px"
                onClick={toggleSearch}
              >
                Eye Serum
              </Text>
              <Text
                className={NavStyle.greyHover}
                px="3px"
                py="1px"
                onClick={toggleSearch}
              >
                Exfoliators
              </Text>
              <Text
                className={NavStyle.greyHover}
                px="3px"
                py="1px"
                onClick={toggleSearch}
              >
                Masks
              </Text>
              <Text
                className={NavStyle.greyHover}
                px="3px"
                py="1px"
                onClick={toggleSearch}
              >
                Eye Care
              </Text>
              <Text
                className={NavStyle.greyHover}
                px="3px"
                py="1px"
                onClick={toggleSearch}
              >
                Toners
              </Text>
              <Text
                className={NavStyle.greyHover}
                px="3px"
                py="1px"
                onClick={toggleSearch}
              >
                Lip Care
              </Text>
              <Text
                className={NavStyle.greyHover}
                px="3px"
                py="1px"
                onClick={toggleSearch}
              >
                Oils
              </Text>
              <Text
                className={NavStyle.greyHover}
                px="3px"
                py="1px"
                onClick={toggleSearch}
              >
                Treatments
              </Text>
              <Text
                className={NavStyle.greyHover}
                px="3px"
                py="1px"
                onClick={toggleSearch}
              >
                Mists
              </Text>
              <Text
                className={NavStyle.greyHover}
                px="3px"
                py="1px"
                onClick={toggleSearch}
              >
                Self Tanning
              </Text>
              <Text
                className={NavStyle.greyHover}
                px="3px"
                py="1px"
                onClick={toggleSearch}
              >
                Tools
              </Text>
            </Box>

            <Box>
              <Box p="0.2px" bg="grey"></Box>
              <Text mb="5px" p="3px" fontWeight="bold">
                By Ingredient
              </Text>
              <Text
                className={NavStyle.greyHover}
                px="3px"
                py="1px"
                onClick={toggleSearch}
              >
                Vitamin C
              </Text>
              <Text
                className={NavStyle.greyHover}
                px="3px"
                py="1px"
                onClick={toggleSearch}
              >
                AHA
              </Text>
              <Text
                className={NavStyle.greyHover}
                px="3px"
                py="1px"
                onClick={toggleSearch}
              >
                Caffeine
              </Text>
              <Text
                className={NavStyle.greyHover}
                px="3px"
                py="1px"
                onClick={toggleSearch}
              >
                Retinol
              </Text>
              <Text
                className={NavStyle.greyHover}
                px="3px"
                py="1px"
                onClick={toggleSearch}
              >
                Hyaluronic Acid
              </Text>
              <Text
                className={NavStyle.greyHover}
                px="3px"
                py="1px"
                onClick={toggleSearch}
              >
                Niacinamide
              </Text>
              <Text
                className={NavStyle.greyHover}
                px="3px"
                py="1px"
                onClick={toggleSearch}
              >
                Lactic Acid
              </Text>
              <Text
                className={NavStyle.greyHover}
                px="3px"
                py="1px"
                onClick={toggleSearch}
              >
                Salicylic Acid
              </Text>
              <Text
                className={NavStyle.greyHover}
                px="3px"
                py="1px"
                onClick={toggleSearch}
              >
                Glycolic Acid
              </Text>
              <Text
                className={NavStyle.greyHover}
                px="3px"
                py="1px"
                onClick={toggleSearch}
              >
                Azelaic Acid
              </Text>
            </Box>

            <Box>
              <Box p="0.2px" bg="grey"></Box>
              <Text mb="5px" p="3px" fontWeight="bold">
                By Specific Concern
              </Text>
              <Text
                className={NavStyle.greyHover}
                px="3px"
                py="1px"
                onClick={toggleSearch}
              >
                Acne & Blemishes{" "}
              </Text>
              <Text
                className={NavStyle.greyHover}
                px="3px"
                py="1px"
                onClick={toggleSearch}
              >
                Fine Lines & Wrinkles
              </Text>
              <Text
                className={NavStyle.greyHover}
                px="3px"
                py="1px"
                onClick={toggleSearch}
              >
                Dark Circles
              </Text>
              <Text
                className={NavStyle.greyHover}
                px="3px"
                py="1px"
                onClick={toggleSearch}
              >
                Dry Skin
              </Text>
              <Text
                className={NavStyle.greyHover}
                px="3px"
                py="1px"
                onClick={toggleSearch}
              >
                Dullness
              </Text>
              <Text
                className={NavStyle.greyHover}
                px="3px"
                py="1px"
                onClick={toggleSearch}
              >
                Lack of Firmness
              </Text>
              <Text
                className={NavStyle.greyHover}
                px="3px"
                py="1px"
                onClick={toggleSearch}
              >
                Pigmentation
              </Text>
              <Text
                className={NavStyle.greyHover}
                px="3px"
                py="1px"
                onClick={toggleSearch}
              >
                Pregnancy Skincare
              </Text>
              <Text
                className={NavStyle.greyHover}
                px="3px"
                py="1px"
                onClick={toggleSearch}
              >
                Redness & Rosacea
              </Text>
              <Text
                className={NavStyle.greyHover}
                px="3px"
                py="1px"
                onClick={toggleSearch}
              >
                Sensitive Skin
              </Text>
              <Text
                className={NavStyle.greyHover}
                px="3px"
                py="1px"
                onClick={toggleSearch}
              >
                Visible Pores
              </Text>
            </Box>

            <Box>
              <Box p="0.2px" bg="grey"></Box>
              <Text mb="5px" p="3px" fontWeight="bold">
                Sunscreen & Suncare
              </Text>
              <Text
                className={NavStyle.greyHover}
                px="3px"
                py="1px"
                onClick={toggleSearch}
              >
                Take The SPF Quiz
              </Text>
              <Text
                className={NavStyle.greyHover}
                px="3px"
                py="1px"
                onClick={toggleSearch}
              >
                SPF 30 and over
              </Text>
              <Text
                className={NavStyle.greyHover}
                px="3px"
                py="1px"
                onClick={toggleSearch}
              >
                SPF 50 and over
              </Text>
              <Text
                className={NavStyle.greyHover}
                px="3px"
                py="1px"
                onClick={toggleSearch}
              >
                After Sun
              </Text>
              <Text
                className={NavStyle.greyHover}
                px="3px"
                py="1px"
                onClick={toggleSearch}
              >
                Tinted
              </Text>
              <Text
                className={NavStyle.greyHover}
                px="3px"
                py="1px"
                onClick={toggleSearch}
              >
                Mineral
              </Text>
              <Text
                className={NavStyle.greyHover}
                px="3px"
                py="1px"
                onClick={toggleSearch}
              >
                Eye Protection
              </Text>
            </Box>
          </Flex>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}

export default Skin;
