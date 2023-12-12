import { useEffect } from "react";
import Navigation from "../components/Navigation";
import { Box, Highlight, Stack, Text } from "@chakra-ui/react";

const Dashboard = () => {
  useEffect(() => {
    document.title = "Dashboard | NIFDA";
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
      >
        <Box>
          <Stack>
            <Text
              fontSize={"3rem"}
              fontWeight={600}
              color={"ngDarkblue"}
              fontFamily={"dhurjati"}
            >
              Dashboard
            </Text>
            <Text
              fontSize={"1.2rem"}
              color={"ngDarkblue"}
              fontFamily={"overpass"}
              fontWeight={400}
            >
              Welcome,
              <Highlight
                query="Samuel Doghor"
                styles={{ px: "2", py: "1", rounded: "full", bg: "red.100" }}
              >
                Samuel Doghor
              </Highlight>
              , all your efforts you put in are really appreciated.
            </Text>
          </Stack>
        </Box>
        <Box mt={"1rem"}>Home</Box>
      </Box>
    </>
  );
};

export default Dashboard;
