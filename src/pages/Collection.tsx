import { useEffect } from "react";
import { Box } from "@chakra-ui/react";

const Collection = () => {
  useEffect(() => {
    document.title = "Collections | NIFODA";
  }, []);
  return (
    <>
      <Box></Box>
    </>
  );
};

export default Collection;
