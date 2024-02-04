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
function Makeup() {
  return (
    <Popover trigger="hover">
      <PopoverTrigger>
        <Box className={NavStyle.blackHover} p="7px">
          Makeup
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
              <Text className={NavStyle.greyHover}>View All Cosmetics</Text>
              <Text className={NavStyle.greyHover}>Clean Makeup</Text>
              <Text className={NavStyle.greyHover}>New In</Text>
              <Text className={NavStyle.greyHover}>5* Rated Products</Text>
              <Text className={NavStyle.greyHover}>Gifts & Sets</Text>
              <Text className={NavStyle.greyHover}>Brushes & Applicators</Text>
              <Text className={NavStyle.greyHover}>Makeup palettes</Text>
              <Text className={NavStyle.greyHover}>Nails</Text>
            </Box>
            <Box>
              <Box p="0.2px" bg="grey"></Box>
              <Text mb="5px" p="3px" fontWeight="bold">
                Eyes
              </Text>
              <Text className={NavStyle.greyHover}>Eye Liners</Text>
              <Text className={NavStyle.greyHover}>Lash & Brow Enhancers</Text>
              <Text className={NavStyle.greyHover}>Eye Shadows</Text>
              <Text className={NavStyle.greyHover}>Mascaras</Text>
              <Text className={NavStyle.greyHover}>Brow Pencils</Text>
            </Box>
            <Box>
              <Box p="0.2px" bg="grey"></Box>
              <Text mb="5px" p="3px" fontWeight="bold">
                Face
              </Text>
              <Text className={NavStyle.greyHover}>BB & CC Cream</Text>
              <Text className={NavStyle.greyHover}>Blushers</Text>
              <Text className={NavStyle.greyHover}>Bronzers</Text>
              <Text className={NavStyle.greyHover}>Color Correctors</Text>
              <Text className={NavStyle.greyHover}>Concealers</Text>
              <Text className={NavStyle.greyHover}>Contour</Text>
              <Text className={NavStyle.greyHover}>Face Powders</Text>
              <Text className={NavStyle.greyHover}>Foundations</Text>
              <Text className={NavStyle.greyHover}>Highlighters</Text>
              <Text className={NavStyle.greyHover}>Makeup Removers</Text>
              <Text className={NavStyle.greyHover}>Makeup Setting Spray</Text>
              <Text className={NavStyle.greyHover}>Primers</Text>
              <Text className={NavStyle.greyHover}>Tinted Moisturizer</Text>
            </Box>
            <Box>
              <Box p="0.2px" bg="grey"></Box>
              <Text mb="5px" p="3px" fontWeight="bold">
                Lips
              </Text>
              <Text className={NavStyle.greyHover}>Lipsticks</Text>
              <Text className={NavStyle.greyHover}>Lip Balms</Text>
              <Text className={NavStyle.greyHover}>Lip Glosses</Text>
              <Text className={NavStyle.greyHover}>Lip Liners</Text>
              <Text className={NavStyle.greyHover}>Lip Plumpers</Text>
              <Text className={NavStyle.greyHover}>Liquid Lipsticks</Text>
            </Box>
          </Flex>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}

export default Makeup;
