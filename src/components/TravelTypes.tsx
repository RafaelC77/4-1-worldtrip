import {
  Img,
  Text,
  useBreakpointValue,
  Flex,
  Icon,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";

export function TravelTypes() {
  const isMobile = useBreakpointValue({
    base: true,
    md: false,
  });

  return (
    <Grid
      mx={{ base: "50px", sm: "80px", md: "100px", lg: "140px", xl: "auto" }}
      mt="90px"
      templateColumns={{ base: "1fr 1fr", md: "repeat(5, 1fr)" }}
      gap={{ base: 5, xl: 20 }}
    >
      <GridItem>
        <Flex
          direction={{ base: "row", md: "column" }}
          justify="flex-start"
          align="center"
        >
          {isMobile ? (
            <Icon as={ChevronRightIcon} color="highlight" h={8} w={8} />
          ) : (
            <Img src="assets/cocktail.svg" mb="24px" mx="auto" />
          )}

          <Text
            fontWeight={{ base: "500", md: "600" }}
            fontSize={{ base: "18px", md: "22px", lg: "24px" }}
            lineHeight={{ base: "27px", md: "32px", lg: "36px" }}
            textAlign={{ base: "start", md: "center" }}
          >
            vida noturna
          </Text>
        </Flex>
      </GridItem>
      <GridItem>
        <Flex
          direction={{ base: "row", md: "column" }}
          justify="flex-end"
          align="center"
        >
          {isMobile ? (
            <Icon as={ChevronRightIcon} color="highlight" h={8} w={8} />
          ) : (
            <Img src="assets/surf.svg" mb="24px" mx="auto" />
          )}

          <Text
            fontWeight={{ base: "500", md: "600" }}
            fontSize={{ base: "18px", md: "22px", lg: "24px" }}
            lineHeight={{ base: "27px", md: "32px", lg: "36px" }}
            textAlign={{ base: "start", md: "center" }}
          >
            praia
          </Text>
        </Flex>
      </GridItem>
      <GridItem>
        <Flex
          direction={{ base: "row", md: "column" }}
          justify="flex-start"
          align="center"
        >
          {isMobile ? (
            <Icon as={ChevronRightIcon} color="highlight" h={8} w={8} />
          ) : (
            <Img src="assets/building.svg" mb="24px" mx="auto" />
          )}

          <Text
            fontWeight={{ base: "500", md: "600" }}
            fontSize={{ base: "18px", md: "22px", lg: "24px" }}
            lineHeight={{ base: "27px", md: "32px", lg: "36px" }}
            textAlign={{ base: "start", md: "center" }}
          >
            moderno
          </Text>
        </Flex>
      </GridItem>
      <GridItem>
        <Flex
          direction={{ base: "row", md: "column" }}
          justify="flex-end"
          align="center"
        >
          {isMobile ? (
            <Icon as={ChevronRightIcon} color="highlight" h={8} w={8} />
          ) : (
            <Img src="assets/museum.svg" mb="24px" mx="auto" />
          )}

          <Text
            fontWeight={{ base: "500", md: "600" }}
            fontSize={{ base: "18px", md: "22px", lg: "24px" }}
            lineHeight={{ base: "27px", md: "32px", lg: "36px" }}
            textAlign={{ base: "start", md: "center" }}
          >
            clássico
          </Text>
        </Flex>
      </GridItem>
      <GridItem colSpan={{ base: 2, md: 1 }}>
        <Flex
          direction={{ base: "row", md: "column" }}
          justify="center"
          align="center"
        >
          {isMobile ? (
            <Icon as={ChevronRightIcon} color="highlight" h={8} w={8} />
          ) : (
            <Img src="assets/earth.svg" mb="24px" mx="auto" />
          )}

          <Text
            fontWeight={{ base: "500", md: "600" }}
            fontSize={{ base: "18px", md: "22px", lg: "24px" }}
            lineHeight={{ base: "27px", md: "32px", lg: "36px" }}
            textAlign={{ base: "start", md: "center" }}
          >
            e mais...
          </Text>
        </Flex>
      </GridItem>
    </Grid>
  );
}
