import { Box } from "@chakra-ui/react";
import Navigaton from "../components/Navigation";
import Header from "../components/Header";

const Dashboard = () => {
  return (
    <>
      <Box>
        <Navigaton />
        <Header pagetitle={"NIFODA Dashboard"} />
        <Box bgColor={"ngPWhiteoff"} minHeight={"100vh"} py={"20px"}>
          <Box marginLeft={"100px"} paddingX={"20px"}></Box>
        </Box>
      </Box>
    </>
  );
};

export default Dashboard;
