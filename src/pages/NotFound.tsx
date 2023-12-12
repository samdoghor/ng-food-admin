import { Box, Text, Image, chakra, Button, Link } from "@chakra-ui/react";
import { useEffect } from "react";

const NotFound = () => {
  useEffect(() => {
    document.title = "Not Found | NIFDA Editor";
  }, []);

  return (
    <>
      <Box>
        <Box maxW="100vw" minH="100vh" mx="auto" bg="gray.100">
          <Box p={{ base: "1rem", lg: "2.5rem" }} mt={"2rem"}>
            <Box
              py={"3rem"}
              px={{ base: "0.8rem", lg: "8rem" }}
              textAlign={"center"}
            >
              <Image
                src="src/assets/img/nigeria_flag.jpg"
                alt="Nigeria Flag & Coat of Arms"
                borderRadius="full"
                boxSize="150px"
                objectFit="cover"
                mx={"auto"}
                fallbackSrc="https://via.placeholder.com/150"
              />
              <Text
                fontSize={{ base: "2.5rem", lg: "3.7rem" }}
                overflow={"hidden"}
                fontWeight={"900"}
                lineHeight={"1.5"}
                pt={"2rem"}
                px={{ md: "4rem" }}
                color={"ngDarkblue"}
                fontFamily={"archivoBlack"}
              >
                <chakra.span color={"gray.600"} fontSize={"2rem"} pr={"1rem"}>
                  #error
                </chakra.span>
                404
              </Text>
              <Text
                fontSize={{ base: "2.5rem", lg: "3.7rem" }}
                overflow={"hidden"}
                fontWeight={"900"}
                lineHeight={"1.5"}
                px={{ md: "4rem" }}
                color={"ngDarkblue"}
                fontFamily={"archivoBlack"}
              >
                Page Not Found
              </Text>
              <Text
                fontSize={"1.25rem"}
                fontFamily={"albertSans"}
                lineHeight={"1.625"}
                color={"gray.700"}
                pt={"1rem"}
                px={{ lg: "6rem" }}
                fontWeight={"600"}
              >
                The food you want is not available on the menu.
              </Text>
              <Link href="/">
                <Button mx={"auto"} mt={"2rem"}>
                  Go back home
                </Button>
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default NotFound;
