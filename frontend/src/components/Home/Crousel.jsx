import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import {Image} from "@chakra-ui/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./style.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Box } from "@chakra-ui/react";

export default function App() {
  return (
    <Box h="70vh" w="80%">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        // pagination={{
        //   clickable: true,
        // }}
        // navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image
            src={
              "https://static.thcdn.com/images/xlarge/webp/widgets/121-us/46/1130-STDCRE-44452-SS-MH-Q4-Photography-December-THG0035165-Batching-And-Artwork-P2-Shot-2-1180x450.jpeg-050446.jpg"
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={
              "https://static.thcdn.com/images/xlarge/webp/widgets/121-us/14/original-1180x450%5B1%5D-045414.jpeg"
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Image src="https://static.thcdn.com/images/xlarge/webp/widgets/121-us/03/1207-STDCRE-44662-SS-MH-Beauty-Bag-Amend-1180x450-V1-050203.jpg" />{" "}
        </SwiperSlide>
        <SwiperSlide>
          <Image src="https://static.thcdn.com/images/xlarge/webp/widgets/121-us/10/original-New_Project_%283%29-085610.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="https://static.thcdn.com/images/xlarge/webp/widgets/121-us/55/Shot6-1180x450-095455.jpeg" />
        </SwiperSlide>
      </Swiper>
    </Box>
  );
}
