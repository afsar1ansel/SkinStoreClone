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
// import Admin from "../../Pages/Admin";
// import { useAuth } from "../../Utilis/Auth";
import NavStyle from "./navbar.module.css";
import { UserContext } from "../../Contexts/UserContext";
import { useContext } from "react";





function UserAccount() {

  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);
//   const { logout } = useAuth();
 console.log(user)


  return (
    <Popover trigger="hover">
      <PopoverTrigger>
        <Flex alignItems="center" gap="10px">
          <RxPerson size="20px" ml="" />{" "}
          <Text
            display={{ lg: "initial", md: "none", sm: "none", base: "none" }}
          >
            {user.name}
            {/* {user} */}
          </Text>
        </Flex>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader pt="40px" bg="#f9f9f9">
          {/* {role === "Admin" ? (
            <Button
              w="100%"
              onClick={() => {
                navigate("/admin");
              }}
            >
              Admin
            </Button>
          ) : (
            `Logged in As ${role}`
          )} */}
        </PopoverHeader>
        <PopoverBody p="20px">
          <Flex flexDir="column">
            <Text fontWeight="semibold">Name: {user.name}</Text>
            <Text fontWeight="semibold">Email: {user.email}</Text>
            <Button
              colorScheme="teal"
              mt="20px"
            //   onClick={logout}
              variant="outline"
              onClick={() => {
                location.reload();
              }}
            >
              Log Out
            </Button>
          </Flex>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}

export default UserAccount;
