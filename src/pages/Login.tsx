import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";
import { useEffect } from "react";

const Login = () => {
  useEffect(() => {
    document.title = "Login - Admin | The Nigeria Food API";
  }, []);

  const currentYear = new Date().getFullYear();

  return (
    <>
      <Box minHeight={"100vh"}>
        <Grid templateColumns={{ md: "repeat(2, 1fr)" }}>
          <GridItem
            w={"100%"}
            bg={"gray.800"}
            h={{ base: "50vh", md: "100vh" }}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Box w={"60%"}>
              <Image
                src="src/assets/img/nigeria_flag.jpg"
                alt="Nigeria Flag & Coat of Arms"
                borderRadius="full"
                boxSize="100px"
                objectFit="cover"
                mx={"auto"}
                my={"auto"}
                fallbackSrc="https://via.placeholder.com/150"
              />
              <Text
                color={"white"}
                fontSize={"2rem"}
                fontWeight={"700"}
                align={"center"}
              >
                The Nigeria Food Database API (NIFDA)
              </Text>

              <Text
                color={"gray.600"}
                fontSize={"1.5rem"}
                fontWeight={"700"}
                align={"center"}
              >
                Content Editor Page
              </Text>
            </Box>
          </GridItem>
          <GridItem
            w={"100%"}
            bg={"white"}
            h={{ base: "50vh", md: "100vh" }}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Box w={"60%"}>
              <Box borderBottom={"2px"} borderColor={"gray.800"} p={"2px"}>
                <Text color={"gray.800"} fontSize={"2rem"} fontWeight={"700"}>
                  Login
                </Text>
              </Box>
              <Box pt={"2rem"}>
                <FormControl>
                  <Box>
                    <FormLabel>Email address</FormLabel>
                    <Input type="email" />
                  </Box>
                  <Box>
                    <FormLabel>Password</FormLabel>
                    <Input type="password" />
                  </Box>
                  <Box display={"flex"} justifyContent={"center"}>
                    <Button
                      mt={4}
                      type="submit"
                      bg={"gray.800"}
                      color={"white"}
                      as="a"
                      _hover={{ bg: "gray.700", cursor: "pointer" }}
                    >
                      Login
                    </Button>
                  </Box>
                </FormControl>
              </Box>
              <Box display={"flex"} justifyContent={"center"}>
                <Box
                  position={"absolute"}
                  bottom={0}
                  p={"1rem"}
                  mx={"auto"}
                  display={"flex"}
                  justifyContent={"center"}
                >
                  <Text align={"center"}>
                    All right reserved © NIFDA {currentYear}
                  </Text>
                </Box>
              </Box>
            </Box>
          </GridItem>
        </Grid>
      </Box>
    </>
  );
};

export default Login;
