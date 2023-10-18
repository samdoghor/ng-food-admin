import { Box, Image, Text } from "@chakra-ui/react";
import { useEffect } from "react";

const Login = () => {
  useEffect(() => {
    document.title = "Login - Admin | The Nigeria Food API";
  }, []);

  return (
    <>
      <Box>
        <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
          <Box
            display={"grid"}
            gridGap={"5rem"}
            overflow={"hidden"}
            gridTemplateColumns={{
              md: "repeat(2, 1fr)",
            }}
          >
            <Box>
              <Image
                src="src/assets/img/nigeria_flag.jpg"
                alt="Nigeria Flag & Coat of Arms"
                borderRadius="full"
                boxSize="100px"
                objectFit="cover"
                mx={"auto"}
                fallbackSrc="https://via.placeholder.com/150"
              />
            </Box>
            <Box>
              <Text>Login</Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Login;
