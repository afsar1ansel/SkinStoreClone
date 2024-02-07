import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  Box,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  List,
  ListItem,
  HStack,
  Tag,
  TagLabel,
  TagCloseButton,
  Badge,
  Divider,
  useToast,
} from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { MdLocalShipping } from "react-icons/md";


const Productdetails = () => {

  const [item, setItem] = useState({});
  const params = useParams();
  const toast = useToast();


  const x1 = useColorModeValue("gray.900", "gray.400");
  const x2 = useColorModeValue("gray.200", "gray.600");
  const x3 = useColorModeValue("gray.500", "gray.400");
  const x4 = useColorModeValue("yellow.500", "yellow.300");
  const x5 = useColorModeValue("gray.900", "gray.50");
  const x6 = useColorModeValue("white", "gray.900");
  const fetchData = () => {
    console.log(params);
    axios.get(`http://localhost:5000/product/id/${params.id}`).then((res) => {
      console.log(res.data.data);
      setItem(res.data.data);
    });
  };
  useEffect(() => {
    console.log(params);
    fetchData();
  }, []);
  return (
    <>
      {!item ? (
        "Not Found"
      ) : (
        <Container mt="150px" maxW={"7xl"} p={4}>
          <SimpleGrid
            columns={{ base: 1, lg: 2 }}
            spacing={{ base: 8, md: 10 }}
            py={{ base: 10, md: 15 }}
          >
            <Flex>
              <Image
                rounded={"md"}
                alt={item.image_link1}
                src={item.image_link}
                objectFit={"contain"}
                align={"center"}
                w={"100%"}
                h={{ base: "100%", sm: "400px", lg: "500px" }}
              />
            </Flex>
            <Stack spacing={{ base: 6, md: 10 }}>
              <Box as={"header"}>
                <Heading
                  lineHeight={1.1}
                  fontWeight={600}
                  fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
                >
                  {item.name}
                </Heading>
                <Text color={x1} fontWeight={500} p={4} fontSize={"3xl"}>
                  ${item.price} USD
                </Text>
              </Box>
              <Stack
                spacing={{ base: 4, sm: 6 }}
                direction={"column"}
                divider={<StackDivider borderColor={x2} />}
              >
                <VStack spacing={{ base: 4, sm: 6 }}>
                  <Text
                    color={x3}
                    fontSize={"2xl"}
                    fontWeight={"300"}
                    textTransform={"capitalize"}
                  >
                    {item.product_type}
                  </Text>
                  <Text fontSize={"lg"}>{item.description}</Text>
                </VStack>
                <Box>
                  <Text
                    fontSize={{ base: "16px", lg: "18px" }}
                    color={x4}
                    fontWeight={"500"}
                    textTransform={"uppercase"}
                    mb={"4"}
                  >
                    Product Details
                  </Text>

                  <List spacing={2}>
                    <ListItem>
                      <Text as={"span"} fontWeight={"bold"}>
                        Ingredients:
                      </Text>{" "}
                      Water, Propanediol, Hydrolyzed Hyaluronic Acid, Tremella
                      Fuciformis Sporocarp Extract, Betaine, Glycerin, Magnesium
                      Sulfate, Carbomer, Hydroxyethylcellulose,
                      Ethylhexylglycerin, Potassium Sorbate, Caprylyl Glycol,
                      Phenoxyethanol, Sodium HydroxideTocopherol, Disodium
                      Phosphate, Sodium Phosphate, Polysorbate 60
                    </ListItem>
                    <ListItem textTransform="capitalize">
                      <Text as={"span"} fontWeight={"bold"}>
                        Brand:
                      </Text>{" "}
                      <a href={item.website_link}>{item.brand}</a>
                    </ListItem>
                  </List>
                </Box>
              </Stack>
              <Button
                rounded={"none"}
                w={"full"}
                mt={8}
                size={"lg"}
                py={"7"}
                bg={x5}
                color={x6}
                textTransform={"uppercase"}
                _hover={{
                  transform: "translateY(2px)",
                  boxShadow: "lg",
                }}
                onClick={() => {
                  toggleAddToCart({ id: params.id });
                }}
              >
                Add to cart
              </Button>

              <Stack
                direction="row"
                alignItems="center"
                justifyContent={"center"}
              >
                <MdLocalShipping />
                <Text>2-3 business days delivery</Text>
              </Stack>
            </Stack>
          </SimpleGrid>
        </Container>
      )}
    </>
  );
};
export default Productdetails;
