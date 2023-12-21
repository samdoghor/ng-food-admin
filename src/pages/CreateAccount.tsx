import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Image,
  Input,
  Link,
  Text,
} from "@chakra-ui/react";
import { useEffect } from "react";

const CreateAccount = () => {
  useEffect(() => {
    document.title = "Create Account | NIFODA Editor";
  }, []);

  const currentYear = new Date().getFullYear();

  return (
    <>
      <Box minHeight={"100vh"}>
        <Grid templateColumns={{ md: "repeat(2, 1fr)" }}>
          <GridItem
            w={"100%"}
            bg={"ngDarkblue"}
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
                The Nigeria Food Database API (NIFODA)
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
            minH={{ base: "70vh", md: "100vh" }}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Box w={"60%"}>
              <Box borderBottom={"2px"} borderColor={"ngDarkblue"} p={"2px"}>
                <Text color={"ngDarkblue"} fontSize={"2rem"} fontWeight={"700"}>
                  Create Account
                </Text>
              </Box>
              <Box pt={"2rem"}>
                <FormControl>
                  <Box>
                    <FormLabel>Email address</FormLabel>
                    <Input type="email" placeholder="type your email address" />
                  </Box>
                  <Box>
                    <FormLabel>Password</FormLabel>
                    <Input type="password" placeholder="type your password" />
                  </Box>
                  <Box>
                    <FormLabel>First Name</FormLabel>
                    <Input type="text" placeholder="type your first name" />
                  </Box>
                  <Box>
                    <FormLabel>Last Name</FormLabel>
                    <Input type="text" placeholder="type your surname" />
                  </Box>
                  <Box display={"flex"} justifyContent={"center"}>
                    <Button
                      mt={4}
                      type="submit"
                      bg={"ngDarkblue"}
                      color={"white"}
                      as="a"
                      _hover={{ bg: "ngDarkerblue", cursor: "pointer" }}
                    >
                      Create Account
                    </Button>
                  </Box>
                  <Box
                    display={"flex"}
                    justifyContent={"center"}
                    pt={{ base: "1rem", md: "2rem" }}
                  >
                    or
                    <Link href="/" ps={"4px"}>
                      login
                    </Link>
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
                    All right reserved © NIFODA {currentYear}
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

export default CreateAccount;
