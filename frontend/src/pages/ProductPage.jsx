import { useContext, useEffect, useState } from "react";
import {
  Box,
  chakra,
  Text,
  Image,
  Button,
  Heading,
  Center,
  HStack,
  Icon,
  Tooltip,
  SimpleGrid,
  Select,
  Stack,
  Radio,
  RadioGroup,
  Alert,
  AlertIcon,
  AlertTitle,
} from "@chakra-ui/react";
import { FiShoppingCart } from "react-icons/fi";
import axios from "axios";
import { UserContext } from "../Contexts/UserContext";
// import { SearchContext } from "../Utilis/Context/SearchContext";
// "https://makeup-api.herokuapp.com/api/v1/products.json"
const ProductPage = () => {
//   const { search, togglesearch } = useContext(SearchContext);
  const { user, setUser, search, setSearch } = useContext(UserContext);
  const [posts, setPosts] = useState([]);
  const [noofElements, setnoofElements] = useState(10);
  const [sortBy, setsortBy] = useState(null);
  const [load, setLoad] = useState(false);
  useEffect(() => {
    const fetchPosts = async () => {
      // console.log(query)'
      setLoad(true);

      const res = await axios.get(`https://real-red-hen-hem.cyclic.app/product/search/${search}`);
      console.log(res.data);

    //   const res = await axios.get(
    //     `https://skin-care-hub.onrender.com/product?l=all${
    //       sortBy ? "price=" + sortBy : ""
    //     }${search.brand ? "&brand=" + search.brand : ""}${
    //       search.type ? "&type=" + search.type : ""
    //     }${search.q ? "&q=" + search.q : ""}`
    //   );
    //   console.log(search);
    //   console.log(
    //     `https://skin-care-hub.onrender.com/product?l=all${
    //       sortBy ? "price=" + sortBy : ""
    //     }${search.brand ? "&brand=" + search.brand : ""}${
    //       search.type ? "&type=" + search.type : ""
    //     }${search.q ? "&q=" + search.q : ""}`
    //   );
    //   console.log(res.data);
    //   setPosts(res.data);
      setLoad(false);
    };
    fetchPosts();
  }, [sortBy,search]);

  const slice = posts.slice(0, noofElements);
  const loadMore = () => {
    setnoofElements(noofElements + noofElements);
  };
  if (load) {
    return (
      <Image
        m="auto"
        mt="150px"
        src="https://media.tenor.com/BtC0jVjzYToAAAAM/loading-chain.gif"
      />
    );
  }
  return (
    <>
      {/* <Box
        w="95%"
        margin="auto"
        p={4}
        bg="blackAlpha.800"
        color="white"
        _hover={{ bg: "white", color: "black" }}
        marginTop="150px"
        marginBottom="2"
      >
        <Text fontSize="lg" fontWeight="600">
          {" "}
          25% off with code REPLAY + free Holiday Beauty Bag (worth $170) @
          $150+ | SHOP NOW &gt;
        </Text>
      </Box> */}
      <Box  w="95%" m={5} justifyContent="space-evenly">
        <Box>
          <Heading>The Holiday Countdown is On!</Heading>
          <Text margin="auto" textAlign="left" fontWeight="100">
            The Countdown is on! Save up to 30% off your purchase when you use
            code COUNTDOWN. But be quick! Discount drops 1% every 3 hours. Offer
            started at 9AM EST. *Exclusions apply. All products below included
            in the offer.
          </Text>
        </Box>
      </Box>

      <SimpleGrid gap={10} gridTemplateColumns={"1fr 1fr"} p={2}>
        <HStack display="grid" gridTemplateColumns={"0.5fr 1.5fr"} p={2}>
          <Heading fontWeight="200">Brands</Heading>
          <Select
            placeholder="Select option"
            onChange={(e) => setSearch({ q: e.target.value })}
          >
            <option value="eyeliner">Eyeliner</option>
            <option value="foundation">Foundation</option>
            <option value="eyeshadow">Eye Shadow</option>
            <option value="lipstick">Lipstick</option>
            <option value="mascara">Mascara</option>
            <option value="bronzer">Bronzer</option>
            <option value="nail_polish">Nail Polish</option>
            <option value="lip_liner">Lip Liner</option>
          </Select>
        </HStack>
        {/* <RadioGroup onChange={setProductype} value={productype}>
            <Stack direction="row">
              <Radio value="eyeliner">Eyeliner</Radio>
              <Radio value="foundation">Foundation</Radio>
            </Stack>
          </RadioGroup> */}
        <HStack>
          <RadioGroup onChange={setsortBy} value={sortBy}>
            <Stack direction="row">
              <Radio value="asc">Price Low To High</Radio>
              <Radio value="des">Price High To Low</Radio>
            </Stack>
          </RadioGroup>
        </HStack>
        {/* WOrking Radio Button dont delete */}
        {/*  <RadioGroup onChange={setProductype} value={productype}>
            <Stack direction="row">
              <Radio value="eyeliner">Eyeliner</Radio>
              <Radio value="foundation">Foundation</Radio>
              <Radio value="eyeshadow">Eye Shadow</Radio>
              <Radio value="lipstick">Lipstick</Radio>
              <Radio value="mascara">Mascara</Radio>
              <Radio value="bronzer">Bronzer</Radio>
              <Radio value="blush">Blush</Radio>
              <Radio value="nail_polish">Nail Polish</Radio>
              <Radio value="lip_liner">Lip Liner</Radio>
            </Stack>
          </RadioGroup> */}
      </SimpleGrid>
      {slice.length !== 0 ? (
        <Box
          w="95%"
          margin="auto"
          display="grid"
          gridTemplateColumns={["1fr", "1fr 1fr", "1fr 1fr 1fr 1fr "]}
          p={2}
          gap={5}
        >
          {slice &&
            slice.map((el, index) => (
              <Center py={6} key={index}>
                <Box key={el.id} rounded="lg" shadow="md" position="relative">
                  {el.quantity < 1 ? (
                    <Alert status="error">
                      <AlertIcon />
                      <AlertTitle>Out Of Stock!</AlertTitle>
                    </Alert>
                  ) : (
                    ""
                  )}
                  <Box>
                    {" "}
                    <Image
                      boxSize="270"
                      src={el.image_link}
                      alt={el.name}
                      roundedTop="lg"
                      objectFit={"contain"}
                      onError={(e) => {
                        e.target.src =
                          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsNGGjrfSqqv8UjL18xS4YypbK-q7po_8oVQ&usqp=CAU";
                        e.onError = null;
                      }}
                    />
                  </Box>
                  <Heading
                    as="h3"
                    fontSize="sm"
                    fontWeight="semibold"
                    lineHeight="tight"
                    maxH="md"
                    // border="2px solid red"
                    // height="40"
                    p={2}
                  >
                    {el.name}
                  </Heading>
                  <Text fontSize="lg" fontWeight="600" textAlign="center" p={1}>
                    ₹ {el.price}
                  </Text>{" "}
                  <HStack
                    p={1}
                    margin="auto"
                    justifyContent="space-evenly"
                    bg="gray.700"
                    fontWeight="600"
                    bgColor="black"
                    color="white"
                    borderRadius="0"
                    _hover={{
                      bg: "cyan.500",
                    }}
                  >
                    <Tooltip
                      label="Add to cart"
                      bg="white"
                      placement={"top"}
                      color={"gray.800"}
                      fontSize={"1.2em"}
                    >
                      <chakra.a
                        href={`/product/${el._id}`}
                        display={"flex"}
                        margin="auto"
                      >
                        <HStack>
                          {" "}
                          <Icon
                            as={FiShoppingCart}
                            h={7}
                            w={7}
                            alignSelf={"center"}
                          />
                          <Text fontSize="md" fontWeight="600">
                            QUICKBUY
                          </Text>
                        </HStack>
                      </chakra.a>
                    </Tooltip>
                  </HStack>
                </Box>
              </Center>
            ))}
        </Box>
      ) : (
        <Image
          m="auto"
          src="https://ih1.redbubble.net/image.1304795334.8057/pp,840x830-pad,1000x1000,f8f8f8.jpg"
        />
      )}

      <Button
        fontWeight="600"
        bgColor="black"
        color="white"
        borderRadius="0"
        _hover={{
          bg: "cyan.500",
        }}
        onClick={() => loadMore()}
        p={4}
      >
        Load More
      </Button>
    </>
  );
};
export default ProductPage;
