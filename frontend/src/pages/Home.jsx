import { Box, Flex, Text,Image } from "@chakra-ui/react";
import Crousel from "../components/Home/Crousel";
import Trending from "../components/Home/Trending";
import CardSlide from "../components/Home/CardSlide";
import Middle from "../components/Home/Middle";

export default function Home() {
  return (
    <Flex justifyContent={"center"} flexDir={"column"} alignItems={"center"}>
      <Box
        bg={"black"}
        w={"80%"}
        h={"40px"}
        color={"white"}
        textAlign={"center"}
        py="8px"
        fontSize={"12px"}
        m={3}
        _hover={{ bg: "white", color: "black" }}
      >
        {" "}
        <Text fontSize={"18px"} fontWeight={"bold"}>
          15% off select products with code SS15 + 2 free gifts @ $150+{" "}
        </Text>
      </Box>
      <Crousel />
      <Trending />
      <Box m={8} w={"90%"} >
        <Image w={"100%"} src="https://static.thcdn.com/images/xlarge/webp/widgets/121-us/54/original-Page-005-035154.png" />
      </Box>
      <CardSlide />
      <Middle />
    </Flex>
  );
}
