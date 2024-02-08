import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";

export default function ForgotPass() {
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const toast = useToast();

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    console.log(otp);
    axios
      .post("http://localhost:5000/user/forgot", { email: otp })
      .then((res) => {
        console.log(res.data);
        if (res.error) {
          throw new Error(res.message);
        }
        toast({
          title: "OTP sent.",
          description: "We've sent OTP to your email..",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
        toast({
          title: "Something went wrong!",
          description: err.message,
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <Flex
      minH={"50vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={5} mx={"auto"} maxW={"lg"} w="100%">
        <Stack align={"center"}>
          <Heading fontWeight={350} fontSize={"4xl"}>
            {/* Existing Customers */}
          </Heading>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="otp">
              <FormLabel>Please Enter Your Email id :-</FormLabel>
              <Input type="text" onChange={(e) => setOtp(e.target.value)} />
            </FormControl>
            <Stack spacing={10}>
              <Button
                onClick={handleLogin}
                fontWeight="500"
                bgColor="black"
                color="white"
                borderRadius="0"
                _hover={{
                  bg: "cyan.500",
                }}
                isLoading={loading}
                loadingText="Verifying..."
              >
                Enter
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
