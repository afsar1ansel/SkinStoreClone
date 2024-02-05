import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../Contexts/UserContext";
import axios from "axios";

// import jwt from "jsonwebtoken";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  const { user, setUser} = useContext(UserContext);


  const handleLogin = (e) => {
    e.preventDefault();
    console.log(email, password);
    user.email = email;
    user.password = password;
    // console.log(user);
    logingin()
  };

  const logingin = async () => {
    axios.post("https://real-red-hen-hem.cyclic.app/user/login", user)
    .then((res)=>{
      // console.log(res);
    user.status = true;
    user.name = res.data.userDetail.name;
      navigate("/")
      console.log(res.data.userDetail)
      console.log(user)
    })
    .catch((err)=>{
      console.log(err);
    })
  }

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={5} mx={"auto"} maxW={"lg"} w="100%">
        <Stack align={"center"}>
          <Heading fontWeight={350} fontSize={"4xl"}>
            Existing Customers
          </Heading>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" onChange={(e) => setEmail(e.target.value)} />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Link to="/register">
                  <Text color={"blue.400"}> New Customer?</Text>
                </Link>
              </Stack>
              <Button
                onClick={handleLogin}
                fontWeight="600"
                bgColor="black"
                color="white"
                borderRadius="0"
                _hover={{
                  bg: "cyan.500",
                }}
              >
                LOGIN
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
