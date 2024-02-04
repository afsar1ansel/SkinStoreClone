import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  Flex,
  Button,
  Box,
  Text,
} from "@chakra-ui/react";
import { RxPerson } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import NavStyle from "./navbar.module.css";
function Acount() {
  const navigate = useNavigate();
  return (
    <Popover trigger="hover">
      <PopoverTrigger>
        <Flex alignItems="center" gap="10px">
          <RxPerson size="20px" ml="" />{" "}
          <Text
            display={{ lg: "initial", md: "none", sm: "none", base: "none" }}
          >
            Account
          </Text>
        </Flex>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader pt="40px" bg="#f9f9f9">
          <Flex flexDir="column" rowGap="20px">
            <Button
              onClick={() => navigate("/login")}
              colorScheme="blackAlpha"
              variant="solid"
            >
              Login
            </Button>
            <Button
              onClick={() => navigate("/register")}
              colorScheme="black"
              variant="outline"
            >
              Sign Up
            </Button>
          </Flex>
        </PopoverHeader>
        <PopoverBody p="0px">
          <Flex flexDir="column">
            <Box p="15px" className={NavStyle.greyHover}>
              Whish List
            </Box>
            <Box p="15px" className={NavStyle.greyHover}>
              Your Order
            </Box>
            <Box p="15px" className={NavStyle.greyHover}>
              Your Refferal
            </Box>
          </Flex>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}

export default Acount;
