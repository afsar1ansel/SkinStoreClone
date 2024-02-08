import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Toast,
} from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import Cards from "react-credit-cards-2";
import "react-credit-cards-2/dist/es/styles-compiled.css";
import { UserContext } from "../Contexts/UserContext";
import { Navigate, useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";

function CreditCardForm() {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [total, setTotal] = useState(0);
  const toast = useToast();
  if (!user.status) {
    return <Navigate to="/login" />;
  }

  useEffect(() => {
    setTotal(user.totalPrice);
  });

  const [state, setState] = useState({
    number: "",
    expiry: "",
    cvc: "",
    name: "",
    focus: "",
  });

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;
    setState((prev) => ({ ...prev, [name]: value }));
    console.log(state);
  };

  const handleInputFocus = (evt) => {
    setState((prev) => ({ ...prev, focus: evt.target.name }));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (!state.number || !state.expiry || !state.cvc || !state.name) {
        console.log("Please enter all the fields");
        toast({
          title: "Please enter all the fields",
          status: "error",
          duration: 9000,
          isClosable: true,

        })
    }else{

        const examplePromise = new Promise((resolve, reject) => {
        //   setTimeout(() =>  resolve(200), 5000);
          setTimeout(()=>{
              resolve(200)
            navigate("/");
          }, 5000)
        });
    
         toast.promise(examplePromise, {
           success: {
             title: "Payment Successful",
             description: "Thank you for shopping with us 🎁  ",
           },
           error: { title: "Promise rejected", description: "Something wrong" },
           loading: {
             title: "Payment Being Processed",
             description: "Please do not close the tab...",
           }
        }

        )
            
        
        
    
       console.log("Form submitted:", state);
      

    }


  };

  return (
    <Box display={"flex"} flexDir={"column"} alignItems={"center"} m={15}>
      <Cards
        number={state.number}
        expiry={state.expiry}
        cvc={state.cvc}
        name={state.name}
        focused={state.focus}
      />

      <Box
        // border={"1px solid black"}
        boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px"}
        p={4}
        display={"flex"}
        justifyContent={"center"}
        w={"40%"}
      >

        <FormControl onSubmit={handleSubmit}>
          <Box>
            <FormLabel htmlFor="number">Card Number</FormLabel>
            <Input
              type="number"
              id="number"
              name="number"
              placeholder="**** **** **** ****"
              value={state.number}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              required
            />
          </Box>
          <Box>
            <FormLabel htmlFor="expiry">Expiration Date:-</FormLabel>
            <Input
              type="text"
              id="expiry"
              name="expiry"
              placeholder="MM/YY"
              value={state.expiry}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              required
            />
          </Box>
          <Box>
            <FormLabel htmlFor="cvc">CVC</FormLabel>
            <Input
              type="text"
              id="cvc"
              name="cvc"
              placeholder="CVC"
              value={state.cvc}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              required
            />
          </Box>
          <Box>
            <FormLabel htmlFor="name">Cardholder Name</FormLabel>
            <Input
              type="text"
              id="name"
              name="name"
              placeholder="Cardholder Name"
              value={state.name}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              required
            />
          </Box>
          <Box>
            <Input
              m={4}
              w={"50%"}
              bg={"green"}
              color={"white"}
              _hover={{ bg: "white", color: "green" }}
              type="submit"
              value="Pay"
              onClick={handleSubmit}
            />
          </Box>
        </FormControl>
      </Box>
    </Box>
  );
}

export default CreditCardForm;
