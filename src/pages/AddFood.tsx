import { Box, Highlight, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import Navigation from "../components/Navigation";

const AddFood = () => {
  useEffect(() => {
    document.title = "Add Food | NIFODA";
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
          <Text
            fontSize={"1.4rem"}
            color={"ngDarkblue"}
            fontFamily={"overpass"}
            fontWeight={600}
          >
            Add
            <Highlight
              query="Food"
              styles={{
                px: "6",
                mx: "2",
                py: "1",
                rounded: "full",
                bg: "ngDarkblue",
                color: "white",
                lineHeight: "2rem",
              }}
            >
              Food
            </Highlight>
          </Text>
        </Box>
      </Box>
    </>
  );
};

export default AddFood;
