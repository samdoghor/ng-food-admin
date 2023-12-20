import { useEffect } from "react";
import { Box } from "@chakra-ui/react";
import Navigation from "../components/Navigation";

const Contribute = () => {
  useEffect(() => {
    document.title = "Contributors | NIFDA";
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
      ></Box>
    </>
  );
};

export default Contribute;
