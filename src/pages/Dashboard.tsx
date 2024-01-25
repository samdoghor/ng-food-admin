import { useEffect } from "react";
import Navigation from "../components/Navigation";
import { Box, Button, Highlight, Link, Stack, Text } from "@chakra-ui/react";

const Dashboard = () => {
  useEffect(() => {
    document.title = "Dashboard | NIFODA";
  }, []);
  return (
    <>
      <Navigation />
      <Box
        as="div"
        display={"block"}
        zIndex={4}
        mt={"5rem"}
        px={{ base: "1rem", md: "6rem" }}
        fontWeight={400}
      >
        <Box>
          <Stack>
            <Text
              fontSize={"2.6rem"}
              fontWeight={900}
              color={"ngDarkblue"}
              fontFamily={"heebo"}
            >
              Dashboard
            </Text>
            <Text
              fontSize={"1rem"}
              color={"ngDarkblue"}
              fontFamily={"overpass"}
              fontWeight={400}
            >
              Welcome,
              <Highlight
                query="Samuel Doghor"
                styles={{
                  px: "2",
                  mx: "2",
                  py: "1",
                  rounded: "full",
                  bg: "ngDarkblue",
                  color: "white",
                  lineHeight: "2rem",
                }}
              >
                Samuel Doghor
              </Highlight>
              , all your efforts you put in are really appreciated.
            </Text>
            <Box
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Link as={"a"} href="/addfood" mx={"2"}>
                <Button
                  mx={"auto"}
                  mt={"2rem"}
                  bg={"ngDarkblue"}
                  color={"white"}
                  _hover={{ bg: "ngDarkerblue", color: "gray.300" }}
                >
                  Add Food
                </Button>
              </Link>
              <Link as={"a"} href="/editor" mx={"2"}>
                <Button
                  mx={"auto"}
                  mt={"2rem"}
                  bg={"ngDarkblue"}
                  color={"white"}
                  _hover={{ bg: "ngDarkerblue", color: "gray.300" }}
                >
                  Add Others
                </Button>
              </Link>
            </Box>
          </Stack>
        </Box>
        <Box my={"4rem"}>
          <Box
            display={"grid"}
            gridGap={"3rem"}
            overflow={"hidden"}
            gridTemplateColumns={{
              lg: "repeat(3, 1fr)",
              md: "repeat(2, 1fr)",
            }}
          >
            <Box>
              <Box
                as={"div"}
                backgroundColor={"white"}
                p={"2rem"}
                mx={"2.5rem"}
                h={"72"}
                rounded={"1rem"}
                boxShadow="2xl"
                borderBottom={"4px"}
                borderBottomColor={"ngDarkblue"}
                overflow={"hidden"}
                _hover={{ cursor: "pointer" }}
                position={"relative"}
              >
                <Text
                  color={"ngDarkblue"}
                  fontSize={"1.5rem"}
                  pb={"1rem"}
                  fontFamily={"overpass"}
                  fontWeight={700}
                >
                  Food Groups
                </Text>
                <Text
                  color={"ngDarkblue"}
                  fontFamily={"albertSans"}
                  fontSize={"1rem"}
                >
                  Food group is a nutritional category guiding balanced and
                  healthy eating. The total number of Food Groups
                </Text>
                <Text
                  color={"ngDarkblue"}
                  fontFamily={"heebo"}
                  fontWeight={900}
                  fontSize={"2rem"}
                  bottom={"1rem"}
                  position={"absolute"}
                >
                  9
                </Text>
              </Box>
            </Box>

            <Box>
              <Box
                as={"div"}
                backgroundColor={"white"}
                p={"2rem"}
                mx={"2.5rem"}
                h={"72"}
                rounded={"1rem"}
                boxShadow="2xl"
                borderBottom={"4px"}
                borderBottomColor={"ngDarkblue"}
                overflow={"hidden"}
                _hover={{ cursor: "pointer" }}
                position={"relative"}
              >
                <Text
                  color={"ngDarkblue"}
                  fontSize={"1.5rem"}
                  pb={"1rem"}
                  fontFamily={"overpass"}
                  fontWeight={700}
                >
                  Food Categories
                </Text>
                <Text
                  color={"ngDarkblue"}
                  fontFamily={"albertSans"}
                  fontSize={"1rem"}
                >
                  Food group is a nutritional category guiding balanced and
                  healthy eating. The total number of Food Groups
                </Text>
                <Text
                  color={"ngDarkblue"}
                  fontFamily={"heebo"}
                  fontWeight={900}
                  fontSize={"2rem"}
                  bottom={"1rem"}
                  position={"absolute"}
                >
                  25
                </Text>
              </Box>
            </Box>

            <Box>
              <Box
                as={"div"}
                backgroundColor={"white"}
                p={"2rem"}
                mx={"2.5rem"}
                h={"72"}
                rounded={"1rem"}
                boxShadow="2xl"
                borderBottom={"4px"}
                borderBottomColor={"ngDarkblue"}
                overflow={"hidden"}
                _hover={{ cursor: "pointer" }}
                position={"relative"}
              >
                <Text
                  color={"ngDarkblue"}
                  fontSize={"1.5rem"}
                  pb={"1rem"}
                  fontFamily={"overpass"}
                  fontWeight={700}
                >
                  Food Items
                </Text>
                <Text
                  color={"ngDarkblue"}
                  fontFamily={"albertSans"}
                  fontSize={"1rem"}
                >
                  Food group is a nutritional category guiding balanced and
                  healthy eating. The total number of Food Groups
                </Text>
                <Text
                  color={"ngDarkblue"}
                  fontFamily={"heebo"}
                  fontWeight={900}
                  fontSize={"2rem"}
                  bottom={"1rem"}
                  position={"absolute"}
                >
                  523
                </Text>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Dashboard;
