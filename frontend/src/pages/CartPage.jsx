import {
  Box,
  Button,
  Flex,
  Input,
  InputGroup,
  InputRightAddon,
  Text,
} from "@chakra-ui/react";
import axios, { Axios } from "axios";
import { useContext, useEffect } from "react";
import { useState } from "react";
import { BsFillShieldLockFill } from "react-icons/bs";
import CartTable from "../components/cart/CartTable";
import { UserContext } from "../Contexts/UserContext";
import { Link, Navigate, useParams } from "react-router-dom";


function CartPage() {
  const { user, setUser } = useContext(UserContext);
  const [cartData, setCatData] = useState([]);
  const [cartId, setCartId] = useState("");
  const [item, setItem] = useState({});
  const params = useParams();
  if(!user.status){
    return <Navigate to="/login" />
  }
  
  


  return (
    <Box mt="15px" p={{ lg: "50px", md: "40px", sm: "10px", base: "10px" }}>
      <Flex mb="20px" alignItems="center" justifyContent="space-between">
        <Text fontSize="40px" fontWeight="semibold">
          Your Orders
        </Text>
        {/* <Button color="white" bg="black">
          <BsFillShieldLockFill />
          <Text ml="5px">CHECKOUT SECURELY NOW</Text>
        </Button> */}
      </Flex>
      <CartTable />
      <InputGroup w="500px" m="auto" mt="50px">
        <Input placeholder="Got a coupon code? Enter it here:" />
        <InputRightAddon>ADD</InputRightAddon>
      </InputGroup>
      <Flex my="20px" alignItems="center" justifyContent="space-between">
        <Link to={"/productpage"}>
          <Button>Continue Shopping</Button>
        </Link>
        <Link to={"/CreditCardForm"}>
          <Button color="white" bg="black">
            <BsFillShieldLockFill />
            <Text ml="5px">CHECKOUT SECURELY NOW</Text>
          </Button>
        </Link>
      </Flex>
    </Box>
  );
}

export default CartPage;
