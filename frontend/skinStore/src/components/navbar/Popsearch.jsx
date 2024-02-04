import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
  Box,
  useBoolean,
  InputGroup,
  Input,
  InputRightAddon,
} from "@chakra-ui/react";
import { BiSearch } from "react-icons/bi";
import { GrClose } from "react-icons/gr";
import Search from "./Search";

function Popsearch() {
  const [isEditing, setIsEditing] = useBoolean();
  return (
    <Popover
      isOpen={isEditing}
      onOpen={setIsEditing.on}
      onClose={setIsEditing.off}
    >
      <PopoverTrigger>
        <Box>{isEditing ? <GrClose /> : <BiSearch />}</Box>
      </PopoverTrigger>
      <PopoverContent w="100vw">
        <PopoverArrow />
        <PopoverBody>
          <Search />
          {/* <InputGroup w="95%" m="auto" h="40px" size="sm">
            <Input
              onKeyPress={(e) => {
                if (e.code === "Enter") {
                //   toggleSearch();
                }
              }}
              onChange={(e) => {
               
                // console.log(e)
              }}
              h="100%"
              placeholder="Search for product or brand..."
            />
            <InputRightAddon
              h="100%"
              bg="white"
            //   onClick={toggleSearch}
              children={<BiSearch />}
            />
          </InputGroup> */}
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}

export default Popsearch;
