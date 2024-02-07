import { Box, Button, Center } from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
// import { useAuth } from "../../Utilis/Auth";

function CartQuantity({ quantity }) {
  const [count, setCount] = useState(quantity ? quantity : 1);
  console.log(count);
//   const { getUser } = useAuth();
//   const toggleAddToCart = (x) => {
    // const url = process.env.REACT_APP_BASE_URL;
    // const user = getUser();
    // const body = {
    //   productId: id,
    //   qty: x,
    // };
    // console.log(body);
//     axios
//       .post("https://skin-care-hub.onrender.com" + "/cart", body, {
//         headers: {
//           token: user,
//         },
//       })
//       .then((res) => {
//         console.log(res.data);
//         fun();
//       })
//       .catch((e) => {
//         console.log(e.message);
//       });
//   };

//   useEffect(() => {
//     toggleAddToCart();
//   }, [count]);
  return (
    <Center>
      <Box
        display="flex"
        alignItems="center"
        gap="10px"
        justifyContent="center"
      >
        <Button
          w="30px"
          h="30px"
          onClick={() => {
            setCount(count - 1);
            toggleAddToCart(-1);
          }}
          disabled={count <= 1}
        >
          -
        </Button>
        <Button>{count}</Button>
        <Button
          w="30px"
          h="30px"
          onClick={() => {
            setCount(count + 1);
            toggleAddToCart(1);
          }}
        >
          +
        </Button>
      </Box>
    </Center>
  );
}

export default CartQuantity;
