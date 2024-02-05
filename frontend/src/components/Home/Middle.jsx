import { Box, SimpleGrid, Image } from "@chakra-ui/react";
import React from "react";

const Middle = () => {
  return (
    <SimpleGrid
      columns={[2, 3, 6]}
      spacing={10}
      w="90%"
      m={8}
      mt="12rem"
      pl="10%"
      pr="2.5%"
    >
      <Box display="flex" justifyContent="center">
        <Image
          width="15vw"
          height="4vw"
          src="https://static.thcdn.com/images/small/webp/widgets/121-us/26/180x72_4_233548301_CA_SS_Logo_Amend_BAU_THG0030424-041301-124116-063126.png"
        />
      </Box>
      <Box display="flex" justifyContent="center">
        <Image
          width="15vw"
          height="4vw"
          src="https://static.thcdn.com/images/small/webp/widgets/121-us/18/original-logo-1024x383-035229-063318.png"
        />
      </Box>
      <Box display="flex" justifyContent="center">
        <Image
          width="15vw"
          height="4vw"
          src="https://static.thcdn.com/images/small/webp/widgets/121-us/11/Revision_Skincare_Logo_without_Tag_Line-052511.png"
        />
      </Box>
      <Box display="flex" justifyContent="center">
        <Image
          width="15vw"
          height="4vw"
          src="https://static.thcdn.com/images/small/webp/widgets/121-us/46/original-NF_Skinstore_Banner_Logo_Color_320x140-01-011402-010546.png"
        />
      </Box>
      <Box display="flex" justifyContent="center">
        <Image
          width="15vw"
          height="4vw"
          src="https://static.thcdn.com/images/small/webp/widgets/121-us/27/220322-ELTAMD-LOGO-RGB-01-065127.png"
        />
      </Box>
      <Box display="flex" justifyContent="center">
        <Image
          width="15vw"
          height="4vw"
          src="https://static.thcdn.com/images/small/webp/widgets/121-us/07/original-LOGO-2022_SkinStore_Landing_Page-BLACK-060107.png"
        />
      </Box>
    </SimpleGrid>
  );
};

export default Middle;
