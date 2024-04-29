import {
  Box,
  Icon,
  IconButton,
  Flex,
  Image,
  Link,
  VStack,
  Text,
  Center,
  Divider,
} from "@chakra-ui/react";
import { MdSpaceDashboard } from "react-icons/md";

const Navigaton = () => {
  return (
    <>
      <Box
        bgColor={"ngDarkblue"}
        minHeight={"100vh"}
        position={"fixed"}
        left={0}
        top={0}
        width={"100px"}
        paddingY={"20px"}
      >
        <Flex justify="center" p="4">
          <VStack>
            <Link href="/dashboard">
              <Text color={"white"} fontWeight={900} pb={"10px"}>
                NIFODA
              </Text>
              <Box>
                <Image
                  src="src/assets/img/nigeria_flag.jpg"
                  alt="Nigeria Flag & Coat of Arms"
                  borderRadius="full"
                  boxSize="50px"
                  objectFit="cover"
                  mx={"auto"}
                  my={"auto"}
                  fallbackSrc="https://via.placeholder.com/150"
                />
              </Box>
            </Link>
            <Center width="100%" mt={"20px"}>
              <Divider orientation="horizontal" />
            </Center>
            <Link marginY={"5px"} href="/dashboard">
              <IconButton
                aria-label="Dashboard"
                icon={<Icon as={MdSpaceDashboard} />}
                variant="ghost"
                color={"white"}
                fontSize={"30px"}
                _hover={{
                  color: "gray.400",
                  bgColor: "none",
                }}
              />
            </Link>
          </VStack>
        </Flex>
      </Box>
    </>
  );
};

export default Navigaton;
