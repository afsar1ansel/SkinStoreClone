import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Text,
  Center,
  Divider,
  Box,
  Button,
  Image,
  useToast,
} from "@chakra-ui/react";
import CartStyle from "./cartStyles.module.css";
import { RxCrossCircled } from "react-icons/rx";
import axios from "axios";
import { useContext, useEffect, useState } from "react";

import { UserContext } from "../../Contexts/UserContext";







function CartTable() {
const [data, setData] = useState([]);
  const { user, setUser } = useContext(UserContext);
  const [load, setLoad] = useState(true);
  const [cartTotal,setcartTotal] = useState(0) 

  if(!user.status){
    return <Navigate to="/login" />
  }

  // var cartTotal = 0;
  const toast = useToast();

  

  useEffect(() => {

    axios
      .get(`https://skinstore.onrender.com/product/usercart/${user.id}`, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data);
        setData(res.data);
        console.log(user);
      })
      .catch((err) => {
        console.log(err);
      });

      // console.log(data)
    
  }, [user.id, load]);
  
  function toggleRemoveFromCart(id) {
    console.log(id)
    axios
      .delete(`https://skinstore.onrender.com/product/cart/delete/${id}`, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data);
        setLoad(!load);
      })
      .catch((err) => {
        console.log(err);
      });
  }

   useEffect(() => {
     console.log(data);
    //  toggleRemoveFromCart();
        user.cart = data.length;

        const total = data.reduce((acc, item) => {
          return acc + item.price;
        },0)
        setcartTotal(total)
        user.totalPrice = total;

   }, [data]);



  console.log(data);


  if (data.length === 0) {
    return (
      <Box>
        <Divider />
        <Center my="50px">
          <Text fontSize="30px" alignItems="center">
            No Items In Cart!
          </Text>
        </Center>
        <Divider />
      </Box>
    );
  }
  
  return (
    <>
      <TableContainer minW="1000px" maxW="1400px">
        <Table variant="simple">
          <Thead>
            <Tr textAlign="center">
              <Th>Items</Th>
              <Th></Th>
              <Th>Price</Th>
              {/* <Th textAlign="center">Quantity</Th> */}
              {/* <Th>Price</Th> */}
            </Tr>
          </Thead>
          <Tbody>
            {data.map((e) => {
            //   cartTotal += +e.productId.price * e.quantity;
              return (
                <Tr key={e._id} >
                  <Td>
                    <Box
                      display="flex"
                      justifyContent="center"
                      w="150px"
                      h="150px"
                      alignItems="center"
                    >
                      <Image h="100%" src={e.image_link1} />
                    </Box>
                  </Td>
                  <Td>
                    <Box
                      display="flex"
                      flexDir="column"
                      h="170px"
                      justifyContent="space-around"
                      maxW="100px"
                    >
                      <Box>
                        <Text
                          w="100%"
                          fontWeight="semibold"
                          mb="5px"
                          fontSize="20px"
                        >
                          {e.name}
                        </Text>
                        <Text
                          fontWeight="bold"
                          textTransform="uppercase"
                          fontSize="10px"
                          w="100%"
                        >
                          {e.brand}
                        </Text>
                      </Box>
                      <Button px="70px">Add to Whishlist</Button>
                    </Box>
                  </Td>
                  <Td>$ {e.price}</Td>
                  {/* <Td>
                    {
                      <CartQuantity
                        fun={fun}
                        id={e.productId._id}
                        quantity={e.quantity}
                      />
                    }
                    "- total*quantity +"
                  </Td> */}
                  {/* <Td>
                    {e.productId.price_sign +
                      (e.quantity
                        ? e.quantity * e.productId.price
                        : e.productId.price)}
                    
                  </Td> */}
                  <Td>
                    <Box
                      className={CartStyle.blackHover}
                      onClick={() => {
                        toggleRemoveFromCart(e.id );
                      }}
                      w="16px"
                      borderRadius="50%"
                    >
                      <RxCrossCircled />
                    </Box>
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
      <Divider />
      <Box textAlign="right" w="100%">
        <Text>
          Cart Subtotal:{" "}
          <span style={{ fontWeight: "bold" }}>${cartTotal}</span>
        </Text>
      </Box>
      <Divider />
    </>
  );
}

export default CartTable;
