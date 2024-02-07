import {
  Box,
  Flex,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavStyle from "../navbar.module.css";
import { UserContext } from "../../../Contexts/UserContext";





function Brands() {

  const [brandnames, setBrandnames] = useState([
    "almay",
    "anna sui",
    "annabelle",
  ]);
  const { user, setUser, search, setSearch } = useContext(UserContext);

  const [brandkeys, setBrandkeys] = useState([]);
  const navigate = useNavigate();
  // console.log(brandnames);
  const brands = {
    A: ["almay", "anna sui", "annabelle"],
    B: ["benefit", "boosh", "burt's bees", "butter london"],
    C: ["cargo cosmetics", "china glaze", "clinique", "colourpop", "covergirl"],
    D: ["dalish", "dior", "dr. hauschka"],
    E: ["e.l.f.", "essie"],
    F: ["fenty"],
    G: ["glossier", "green people"],
    H: ["huda beauty", "hya", "huda", "huda beauty"],
    I: ["iman", "l'oreal"],
    J: ["jil sander", "jo malone", "jove"],
    M: [
      "maia's mineral galaxy",
      "marcelle",
      "marienatie",
      "maybelline",
      "milani",
      "mineral fusion",
      "misa",
      "mistura",
    ],
    N: ["null", "nyx"],
    O: ["orly"],
    P: ["pacifica", "physicians formula", "piggy paint", "pure anada"],
    R: ["revlon"],
    S: [
      "sally b's skin yummies",
      "salon perfect",
      "sante",
      "sinful colours",
      "smashbox",
      "stila",
      "suncoat",
    ],
    W: ["wet n wild"],
    Z: ["zorah biocosmetiques"],
  };
  function setkeys() {
    let arr = [];
    for (let keys in brands) {
      arr.push(keys);
      // console.log(keys);
    }
    setBrandkeys(arr);
  }
  function toggleSearch(e) {
    e.preventDefault();

    console.log(brandnames[0]);
    setSearch(brandnames[0]);
    navigate("/productpage");
  }
  useEffect(() => {
    setkeys();
  }, []);

  return (
    <Popover trigger="hover">
      <PopoverTrigger>
        <Box className={NavStyle.blackHover} p="7px">
          Brands
        </Box>
      </PopoverTrigger>
      <PopoverContent w="90vw">
        <PopoverArrow />
        <PopoverHeader>
          <Box h="0.5px" bg="black" w="100%" m="auto"></Box>
          <Flex mx="50px" alignItems="center" justifyContent="space-between">
            <Flex gap="1px">
              {brandkeys.map((e) => (
                <Box
                 key={e}
                  className={NavStyle.greyHover}
                  p="10px"
                  onMouseOver={() => {
                    setBrandnames(brands[e]);
                  }}
                >
                  {e}
                </Box>
              ))}
            </Flex>
            <Box>View All Brands</Box>
          </Flex>
          <Box h="1px" bg="black" w="100%" m="auto"></Box>
        </PopoverHeader>
        <PopoverBody>
          <SimpleGrid mx="50px" columns={5}>
            {brandnames.map((e) => {
              return (
                <Box key={e} className={NavStyle.greyHover}>
                  <Text onClick={toggleSearch}>{e}</Text>
                </Box>
              );
            })}
          </SimpleGrid>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}

export default Brands;
