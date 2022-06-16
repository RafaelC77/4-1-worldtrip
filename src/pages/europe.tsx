import {
  Box,
  Flex,
  Heading,
  HStack,
  Image,
  SimpleGrid,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import { Header } from "../components/Header";

export default function Europe() {
  return (
    <>
      <Header isSecondaryPage={true} />

      <Flex
        w="100%"
        h={{ base: "150px", sm: "250px", md: "500px" }}
        bgImage="images/europeBanner.png"
        bgSize="cover"
        justify={{ base: "center", md: "unset" }}
        align={{ base: "center", md: "unset" }}
      >
        <Heading
          color="light.headingsAndText"
          ml={{ md: "140px" }}
          mt={{ md: "369px" }}
          fontWeight="600"
          fontSize={{ base: "28px", md: "48px" }}
          lineHeight={{ base: "42px", md: "72px" }}
        >
          Europa
        </Heading>
      </Flex>

      <Flex
        mx={{ base: "16px", sm: "48px", md: "80px", lg: "140px", xl: "auto" }}
        my="80px"
        justify={{ base: "center", xl: "space-between" }}
        align="center"
        maxWidth="1160px"
        direction={{ base: "column", xl: "row" }}
      >
        <Text
          fontSize={{ base: "14px", md: "24px" }}
          lineHeight={{ base: "21px", md: "36px" }}
          textAlign="justify"
          mr={{ xl: "50px" }}
          mb="16px"
          maxW="600px"
        >
          A Europa é, por convenção, um dos seis continentes do mundo.
          Compreendendo a península ocidental da Eurásia, a Europa geralmente
          divide-se da Ásia a leste pela divisória de águas dos montes Urais, o
          rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
        </Text>
        <HStack my="auto" spacing={{ base: "21px", md: "42px" }}>
          <Box
            color="highlight"
            fontWeight="600"
            fontSize={{ base: "24px", md: "48px" }}
            lineHeight={{ base: "36px", md: "72px" }}
            textAlign={{ base: "start", xl: "center" }}
          >
            <span>50</span>
            <Text
              color="dark.headingsAndText"
              fontSize={{ base: "20px", md: "24px" }}
              lineHeight={{ base: "24px", md: "36px" }}
              fontWeight={{ base: "400", md: "600" }}
            >
              países
            </Text>
          </Box>
          <Box
            color="highlight"
            fontWeight="600"
            fontSize={{ base: "24px", md: "48px" }}
            lineHeight={{ base: "36px", md: "72px" }}
            textAlign={{ base: "start", xl: "center" }}
          >
            <span>60</span>
            <Text
              color="dark.headingsAndText"
              fontSize={{ base: "20px", md: "24px" }}
              lineHeight={{ base: "24px", md: "36px" }}
              fontWeight={{ base: "400", md: "600" }}
            >
              línguas
            </Text>
          </Box>
          <Box
            color="highlight"
            fontWeight="600"
            fontSize={{ base: "24px", md: "48px" }}
            lineHeight={{ base: "36px", md: "72px" }}
            textAlign={{ base: "start", xl: "center" }}
          >
            <span>27</span>
            <Flex align="center">
              <Text
                color="dark.headingsAndText"
                fontSize={{ base: "20px", md: "24px" }}
                lineHeight={{ base: "24px", md: "36px" }}
                textAlign="center"
                fontWeight={{ base: "400", md: "600" }}
              >
                cidades +100
              </Text>
              <Tooltip label="Informações sobre as cidades +100">
                <Image src="images/info.png" ml="5px" w="16px" h="16px"></Image>
              </Tooltip>
            </Flex>
          </Box>
        </HStack>
      </Flex>

      <Box
        mt={{ base: "32px", md: "80px" }}
        mb={{ base: "16px", md: "35px" }}
        px={{ base: "16px", md: "70px", xl: "140px" }}
      >
        <Heading
          fontWeight="500"
          fontSize={{ base: "24px", md: "36px" }}
          lineHeight={{ base: "36px", md: "54px" }}
          mb={{ base: "20px", md: "40px" }}
        >
          Cidades +100
        </Heading>

        <SimpleGrid
          flex="1"
          minChildWidth="256px"
          alignItems="center"
          justifyItems="center"
          gap={{ base: "20px", md: "45px" }}
          mx="auto"
        >
          <Box
            w="256px"
            h="279px"
            borderRadius="0.25rem"
            border="1px solid #FFBA08"
            overflow="hidden"
          >
            <Image src="images/londonCard.png" />
            <Flex mx="24px" mt="18px" justify="space-between">
              <Box>
                <Text
                  fontWeight="600"
                  fontSize="20px"
                  lineHeight="25px"
                  mb="18px"
                >
                  Londres
                </Text>
                <Text
                  fontWeight="500"
                  fontSize="16px"
                  lineHeight="26px"
                  color="dark.info"
                >
                  Reino Unido
                </Text>
              </Box>
              <Image src="images/ukFlag.png" w="30" h="30" my="auto" />
            </Flex>
          </Box>

          <Box
            w="256px"
            h="279px"
            borderRadius="0.25rem"
            border="1px solid #FFBA08"
          >
            <Image src="images/parisCard.png" />
            <Flex mx="24px" mt="18px" justify="space-between">
              <Box>
                <Text
                  fontWeight="600"
                  fontSize="20px"
                  lineHeight="25px"
                  mb="18px"
                >
                  Paris
                </Text>
                <Text
                  fontWeight="500"
                  fontSize="16px"
                  lineHeight="26px"
                  color="dark.info"
                >
                  França
                </Text>
              </Box>
              <Image src="images/franceFlag.png" w="30" h="30" my="auto" />
            </Flex>
          </Box>

          <Box
            w="256px"
            h="279px"
            borderRadius="0.25rem"
            border="1px solid #FFBA08"
          >
            <Image src="images/romeCard.png" />
            <Flex mx="24px" mt="18px" justify="space-between">
              <Box>
                <Text
                  fontWeight="600"
                  fontSize="20px"
                  lineHeight="25px"
                  mb="18px"
                >
                  Roma
                </Text>
                <Text
                  fontWeight="500"
                  fontSize="16px"
                  lineHeight="26px"
                  color="dark.info"
                >
                  Itália
                </Text>
              </Box>
              <Image src="images/italyFlag.png" w="30" h="30" my="auto" />
            </Flex>
          </Box>

          <Box
            w="256px"
            h="279px"
            borderRadius="0.25rem"
            border="1px solid #FFBA08"
          >
            <Image src="images/pragueCard.png" />
            <Flex mx="24px" mt="18px" justify="space-between">
              <Box>
                <Text
                  fontWeight="600"
                  fontSize="20px"
                  lineHeight="25px"
                  mb="18px"
                >
                  Praga
                </Text>
                <Text
                  fontWeight="500"
                  fontSize="16px"
                  lineHeight="26px"
                  color="dark.info"
                >
                  República Tcheca
                </Text>
              </Box>
              <Image
                src="images/czechRepublicFlag.png"
                w="30"
                h="30"
                my="auto"
              />
            </Flex>
          </Box>

          <Box
            w="256px"
            h="279px"
            borderRadius="0.25rem"
            border="1px solid #FFBA08"
          >
            <Image src="images/amsterdamCard.png" />
            <Flex mx="24px" mt="18px" justify="space-between">
              <Box>
                <Text
                  fontWeight="600"
                  fontSize="20px"
                  lineHeight="25px"
                  mb="18px"
                >
                  Amsterdã
                </Text>
                <Text
                  fontWeight="500"
                  fontSize="16px"
                  lineHeight="26px"
                  color="dark.info"
                >
                  Holanda
                </Text>
              </Box>
              <Image src="images/nederlandFlag.png" w="30" h="30" my="auto" />
            </Flex>
          </Box>
        </SimpleGrid>
      </Box>
    </>
  );
}
