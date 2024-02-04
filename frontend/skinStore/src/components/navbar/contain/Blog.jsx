import {
  Box,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
  Text,
  SimpleGrid,
  Image,
} from "@chakra-ui/react";
import React from "react";

import NavStyle from "../navbar.module.css";
function Blog() {
  return (
    <Popover trigger="hover">
      <PopoverTrigger>
        <Box className={NavStyle.blackHover} p="7px">
          Blog
        </Box>
      </PopoverTrigger>
      <PopoverContent w="80vw">
        <PopoverArrow />
        <PopoverBody bg=" #f5f3f3" p="25px">
          <SimpleGrid gap="40px" columns={5}>
            <Box bg="white" className={NavStyle.shadowHover}>
              <Image
                w="100%"
                src="https://s1.thcdn.com/navigation/121/us/2023/01/original-1228-STDCRE-45267-SS-MH-2023-Photography-THG0035336-Batching-Shot-5-380x312-20230103.jpg"
              />
              <Text py="5px" textAlign="center">
                Skin Care
              </Text>
            </Box>
            <Box bg="white" className={NavStyle.shadowHover}>
              <Image
                w="100%"
                src="https://s1.thcdn.com/navigation/121/us/2023/01/original-1228-STDCRE-45267-SS-MH-2023-Photography-THG0035336-Batching-Shot-10-380x312-20230103.jpg"
              />
              <Text py="5px" textAlign="center">
                Hair Care
              </Text>
            </Box>
            <Box bg="white" className={NavStyle.shadowHover}>
              <Image
                w="100%"
                src="https://s1.thcdn.com/navigation/121/us/2023/01/original-1228-STDCRE-45267-SS-MH-2023-Photography-THG0035336-Batching-Shot-11-380x312-20230103.jpg"
              />
              <Text py="5px" textAlign="center">
                Makeup
              </Text>
            </Box>
            <Box bg="white" className={NavStyle.shadowHover}>
              <Image
                w="100%"
                src="https://s1.thcdn.com/navigation/121/us/2023/01/original-1228-STDCRE-45267-SS-MH-2023-Photography-THG0035336-Batching-Shot-12-380x312-20230103.jpg"
              />
              <Text py="5px" textAlign="center">
                Body
              </Text>
            </Box>
            <Box bg="white" className={NavStyle.shadowHover}>
              <Image
                w="100%"
                src="https://s1.thcdn.com/navigation/121/us/2023/01/original-1228-STDCRE-45267-SS-MH-2023-Photography-THG0035336-Batching-Shot-17-380x312-20230103.jpg"
              />
              <Text py="5px" textAlign="center">
                Tips & Advice
              </Text>
            </Box>
            <Box bg="white" className={NavStyle.shadowHover}>
              <Image
                w="100%"
                src="https://s1.thcdn.com/navigation/121/us/2023/01/original-1228-STDCRE-45267-SS-MH-2023-Photography-THG0035336-Batching-Shot-3-380x312-20230103.jpg"
              />
              <Text py="5px" textAlign="center">
                Beauty Center
              </Text>
            </Box>
            <Box bg="white" className={NavStyle.shadowHover}>
              <Image
                w="100%"
                src="https://s1.thcdn.com/navigation/121/us/2023/01/original-1228-STDCRE-45267-SS-MH-2023-Photography-THG0035336-Batching-Shot-15-380x312-20230103.jpg"
              />
              <Text py="5px" textAlign="center">
                Free Beauty Consultations
              </Text>
            </Box>
          </SimpleGrid>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}

export default Blog;
