import { Input, InputGroup, InputRightAddon } from "@chakra-ui/react";
import React, { useContext, useState, useEffect } from "react";
import { BiSearch } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../Contexts/UserContext";

function Search() {
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();
  const { search, setSearch } = useContext(UserContext);

  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSearch = () => {
    setSearch(searchInput);
    console.log(searchInput);
    navigate(`/productpage?q=${searchInput}`);
  };

  const handleKeyPress = (e) => {
    if (e.code === "Enter") {
      handleSearch();
    }
  };

  return (
    <InputGroup w="100%" h="40px" size="sm">
      <Input
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        value={searchInput}
        h="100%"
        placeholder="Search for product or brand..."
      />
      <InputRightAddon
        h="100%"
        bg="white"
        onClick={handleSearch}
        children={<BiSearch />}
      />
    </InputGroup>
  );
}

export default Search;
