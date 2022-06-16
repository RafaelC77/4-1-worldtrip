import { Flex, Box, Heading, Text, Image } from "@chakra-ui/react";

export function Banner() {
  return (
    <Flex
      w="100%"
      h={{ base: "163px", md: "335px" }}
      bgImage="images/background.png"
      bgSize="cover"
      justify={{ base: "center", lg: "space-between" }}
      align="center"
      px={{ base: "16px", sm: "32px", lg: "140px", "2xl": "200px" }}
    >
      <Box color="light.headingsAndText" maxWidth="524px">
        <Heading
          fontWeight="500"
          fontSize={{ base: "20", md: "28px", lg: "36px" }}
          lineHeight={{ base: "30px", md: "42px", lg: "54px" }}
        >
          5 Continentes,
          <br />
          infinitas possibilidades.
        </Heading>
        <Text
          fontWeight="400"
          fontSize={{ base: "14px", md: "17px", lg: "20px" }}
          lineHeight={{ base: "21px", md: "26px", lg: "30px" }}
          mt={{ base: "8px", md: "14px", lg: "20px" }}
        >
          Chegou a hora de tirar do papel a viagem que você sempre sonhou.
        </Text>
      </Box>
      <Image
        src="images/airplane.png"
        alt="desenho de um avião com nuvens ao fundo"
        w="417.15px"
        h="270.74px"
        transform="translateY(48px)"
        display={{ base: "none", xl: "block" }}
      />
    </Flex>
  );
}
