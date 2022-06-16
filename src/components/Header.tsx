import { Flex, Image, Img, Link as ChakraLink } from "@chakra-ui/react";
import Link from "next/link";

interface HeaderProps {
  isSecondaryPage?: boolean;
}

export function Header({ isSecondaryPage = false }: HeaderProps) {
  return (
    <Flex
      as="header"
      w="100%"
      h={{ base: "50px", md: "100px" }}
      align="center"
      justify="center"
    >
      {isSecondaryPage && (
        <Link href="/">
          <ChakraLink>
            <Img
              src="images/vector.png"
              position="absolute"
              left={{ base: "16px", md: "140px" }}
            />
          </ChakraLink>
        </Link>
      )}

      <Image
        src="images/logo.png"
        alt="worldtrip"
        h={{ base: "20px", md: "45px" }}
        w={{ base: "81px", md: "184px" }}
      />
    </Flex>
  );
}
