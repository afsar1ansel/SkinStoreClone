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
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);

  //https://real-red-hen-hem.cyclic.app/user/login

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(email, password);
    user.email = email;
    user.password = password;
    // console.log(user);
    logingin();
  };

  const logingin = async () => {
    setLoading(true);
    axios
      .post("https://skinstore.onrender.com/user/login", user, {
        withCredentials: true,
      })
      .then((res) => {
        // console.log(res);
        user.status = true;
        user.name = res.data.userDetail.name;
        user.id = res.data.userDetail._id;
        localStorage.setItem("userStatus", JSON.stringify(user.status));
        navigate("/");
        setLoading(false);
        console.log(res.data.userDetail);
        console.log(user);
      })
      .catch((err) => {
        alert("Invalid Credentials");
        setLoading(false);
        console.log(err);
      });
  };

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
                <Link to="/ForgotPass" >
                  <Text color={"blue.400"}>Forgot Password?</Text>
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
                isLoading={loading}
                loadingText="Loging in..."
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
