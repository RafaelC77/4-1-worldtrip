import {
  Box,
  Divider,
  Flex,
  Heading,
  Text,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import Link from "next/link";

import { Header } from "../components/Header";
import { Banner } from "../components/Banner";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { TravelTypes } from "../components/TravelTypes";

export default function Home() {
  return (
    <Flex direction="column">
      <Header />

      <Banner />

      <TravelTypes />

      <Divider
        mt="80px"
        mx="auto"
        border="2px solid"
        borderColor="dark.headingsAndText"
        width={{ base: "60px", md: "90px" }}
      />

      <Text
        mt={{ base: "24px", md: "52px" }}
        mx="auto"
        fontWeight="500"
        fontSize={{ base: "20px", md: "36px" }}
        lineHeight={{ base: "30px", md: "54px" }}
        textAlign="center"
      >
        Vamos nessa? <br />
        Então escolha seu continente
      </Text>

      <Box
        mt="52px"
        mb={{ base: "24px", md: "40px" }}
        mx={{ md: "100px", "2xl": "auto" }}
        maxWidth="1240px"
      >
        <Swiper
          navigation={true}
          pagination={{ clickable: true }}
          modules={[Navigation, Pagination]}
          autoplay={{
            delay: 10000,
          }}
        >
          <SwiperSlide>
            <Link href="/europe">
              <ChakraLink>
                <Flex
                  bgImage="images/europeImage.png"
                  bgSize="cover"
                  w="100%"
                  h={{ base: "250px", md: "450px" }}
                  flexDir="column"
                  align="center"
                  justify="center"
                >
                  <Heading
                    color="light.headingsAndText"
                    fontWeight="700"
                    fontSize={{ base: "24px", md: "48px" }}
                    lineHeight={{ base: "36px", md: "72px" }}
                  >
                    Europa
                  </Heading>
                  <Text
                    color="light.info"
                    fontWeight="700"
                    fontSize={{ base: "14px", md: "24px" }}
                    lineHeight={{ base: "21px", md: "36px" }}
                  >
                    O continente mais antigo.
                  </Text>
                </Flex>
              </ChakraLink>
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            <Link href="/">
              <ChakraLink>
                <Flex
                  bgImage="images/southAmericaImage.jpg"
                  bgSize="cover"
                  w="100%"
                  h={{ base: "250px", md: "450px" }}
                  flexDir="column"
                  align="center"
                  justify="center"
                >
                  <Heading
                    color="dark.headingsAndText"
                    fontWeight="700"
                    fontSize={{ base: "24px", md: "48px" }}
                    lineHeight={{ base: "36px", md: "72px" }}
                  >
                    América do Sul
                  </Heading>
                  <Text
                    color="dark.headingsAndText"
                    fontWeight="700"
                    fontSize={{ base: "14px", md: "24px" }}
                    lineHeight={{ base: "21px", md: "36px" }}
                  >
                    Um dos cinco continentes.
                  </Text>
                </Flex>
              </ChakraLink>
            </Link>
          </SwiperSlide>
        </Swiper>
      </Box>
    </Flex>
  );
}
