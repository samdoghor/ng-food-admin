import { Box } from "@chakra-ui/react";
import { useEffect } from "react";

const LeaderBoard = () => {
  useEffect(() => {
    document.title = "Leader Board | NIFODA";
  }, []);
  return (
    <>
      <Box></Box>
    </>
  );
};

export default LeaderBoard;
