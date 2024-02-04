import {
  Box,
  Container,
  SimpleGrid,
  Stack,
  Text,
  Button,
  HStack,
  Icon,
  VStack,
  Divider,
  ListItem,
  ListIcon,
  List,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { PhoneIcon } from "@chakra-ui/icons";
import { TbTruckDelivery, TbRefresh, TbHelp } from "react-icons/tb";
import { MdGpsFixed } from "react-icons/md";
import { FaCookie, FaPinterest, FaSnapchat } from "react-icons/fa";
const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};
export default function Footer() {
  return (
    <Box>
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid
          templateColumns={{ sm: "1fr 1fr", md: "1fr 1fr" }}
          spacing={8}
        >
          <VStack>
            <Text pb=".5rem" fontWeight="600" fontSize="md">
              Sign up to our email list and receive 20% off your next order
            </Text>
            <Button
              fontWeight="600"
              bgColor="black"
              color="white"
              borderRadius="0"
              _hover={{
                bg: "cyan.500",
              }}
            >
              SIGN UP
            </Button>
          </VStack>
          <VStack textAlign="left">
            <Box textAlign="left" color="black">
              <Text fontSize="md" fontWeight="600">
                Connect with us
              </Text>
              <HStack gap={[2, 3, 4, 5]} p={2}>
                <Icon
                  boxSize={[4, 5, 6, 7]}
                  as={FaFacebook}
                  color="facebook.500"
                />
                <Icon
                  boxSize={[4, 5, 6, 7]}
                  as={FaTwitter}
                  color="twitter.500"
                />
                <Icon
                  boxSize={[4, 5, 6, 7]}
                  as={FaSnapchat}
                  color="yellow.400"
                />
                <Icon boxSize={[4, 5, 6, 7]} as={FaPinterest} color="red.700" />
                <Icon boxSize={[4, 5, 6, 7]} as={FaInstagram} color="maroon" />
              </HStack>
            </Box>
          </VStack>
        </SimpleGrid>
        {/* Top section uppper end */}
        <SimpleGrid
          templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr 1fr" }}
          spacing={8}
        >
          <Stack align={"flex-start"}>
            <Divider mb="2" h="2" borderColor={"black"} />
            <List>
              <ListHeader> Help & Information</ListHeader>
              <ListItem>
                <HStack>
                  <ListIcon as={PhoneIcon} fontSize="md" color="black.800" />
                  <Text>Customer Service</Text>
                </HStack>
              </ListItem>
              <ListItem>
                <HStack>
                  <ListIcon
                    as={TbTruckDelivery}
                    fontSize="md"
                    color="black.800"
                  />
                  <Text>Delivery Information</Text>
                </HStack>
              </ListItem>
              <ListItem>
                <HStack>
                  <ListIcon as={TbRefresh} fontSize="md" color="black.800" />
                  <Text> Return & Refund</Text>
                </HStack>
              </ListItem>
              <ListItem>
                <HStack>
                  <ListIcon as={TbHelp} fontSize="md" color="black.800" />
                  <Text>Help Center</Text>
                </HStack>
              </ListItem>
              <ListItem>
                <HStack>
                  <ListIcon
                    as={MdGpsFixed}
                    fontSize="1.2rem"
                    color="black.800"
                  />
                  <Text>Track my order</Text>
                </HStack>
              </ListItem>
              <ListItem>
                <HStack>
                  <ListIcon as={FaCookie} fontSize="1.2rem" color="black.800" />
                  <Text>Cookie Setting</Text>
                </HStack>
              </ListItem>
            </List>
          </Stack>
          <Stack align={"flex-start"}>
            <Divider mb="2" h="2" borderColor={"black"} />
            <ListHeader>Key Workers Discount</ListHeader>
            <Link href={"#"}>About Us</Link>
            <Link href={"#"}>Affilate Program</Link>
            <Link href={"#"}>Brand Directory</Link>
            <Link href={"#"}>Coupon Codes</Link>
            <Link href={"#"}>Student Discount</Link>
          </Stack>
          <Stack align={"flex-start"}>
            <Divider mb="2" h="2" borderColor={"black"} />
            <ListHeader>Legal</ListHeader>
            <Link href={"#"}>Cookie Information</Link>
            <Link href={"#"}>Privacy Policy</Link>
            <Link href={"#"}>Terms & Condition</Link>
            <Link href={"#"}>Modern Slavery Statement</Link>
          </Stack>
          <Stack align={"flex-start"}>
            <Divider mb="2" h="2" borderColor={"black"} />
            <ListHeader> How To Contact Us</ListHeader>
            <Link href={"#"}>Message Us</Link>
            <Link href={"#"}>Free Beauty Consultations</Link>
            <Link href={"#"}>Terms & Condition</Link>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
