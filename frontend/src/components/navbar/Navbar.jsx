import { Box, Flex, Text } from "@chakra-ui/react";

import TopNav from "./TopNav";
import Search from "./Search";
import Acount from "./Acount";
import Cart from "./Cart";
import Brands from "./contain/Brands";
import Holiday from "./contain/Holiday";
import Sale from "./contain/Sale";
import Skin from "./contain/Skin";
import Hair from "./contain/Hair";
import Makeup from "./contain/Makeup";
import Bath from "./contain/Bath";
import Fragrance from "./contain/Fragrance";
import SelfCare from "./contain/SelfCare";
import Tools from "./contain/Tools";
import Trending from "./contain/Trending";
import Build from "./contain/Build";
import Blog from "./contain/Blog";
import Navmenu from "./Navmenu";
import Popsearch from "./Popsearch";
// import { Link } from "react-router-dom";

function Navbar() {
  return (
    <Flex
      zIndex={"999"}
      w={"100%"}
      bg={"white"}
      flexDir={"column"}
      alignItems={"space-between"}
    >
      <TopNav />
      <Flex
        display={{ lg: "none", md: "flex", sm: "flex", base: "flex" }}
        gap="15px"
        alignItems="center"
        w={"80%"}
      >
        <Flex w={"80%"} gap={"15px"} alignItems={"center"} m={3} >
        <Navmenu />
        <Popsearch />
        </Flex>
        <Flex w={"80%"} justifyContent={"space-evenly"} >
        <Acount />
        <Cart />
        </Flex>
      </Flex>

      <Box
        display={"flex"}
        justifyContent={"space-evenly"}
        alignItems={"center"}
        borderBottom={"2px solid black"}
        pb={"20px"}
      >
        <Flex
          cursor={"pointer"}
          onClick={() => (window.location.href = "/")}
          display={{ lg: "flex", md: "none", sm: "none", base: "none" }}
          justifyContent={"center"}
          flexDir={"column"}
        >
          <Text
            fontWeight={"530"}
            fontSize={"50px"}
            color={"#2e3337"}
            mb={0}
            h={"55px"}
          >
            SkinStore
          </Text>
          <Text fontSize={"13px"} color={"#2e3337"} mb={0}>
            part of the LOOKFANTASTIC group
          </Text>
        </Flex>
        <Box w={"40%"} display={{ lg: "flex", md: "none", sm: "none", base: "none" }} >
        <Search />
        </Box>
        <Flex w={"20%"} justifyContent={"space-evenly"} display={{ lg: "flex", md: "none", sm: "none", base: "none" }} >
          <Acount />
          <Cart />
        </Flex>
      </Box>
      <Flex
        display={{ lg: "flex", md: "none", sm: "none", base: "none" }}
        gap="10px"
        bg="white"
        boxShadow={` rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;`}
        justifyContent="center"
        color={"#333"}
        fontSize={"15px"}
      >
        <Brands />
        <Holiday />
        <Sale />
        <Skin />
        <Hair />
        <Makeup />
        <Bath />
        <Fragrance />
        <SelfCare />
        <Tools />
        <Trending />
        <Build />
        <Blog />
      </Flex>
    </Flex>
  );
}

export default Navbar;
