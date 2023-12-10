import { Box } from "@chakra-ui/react";
import { useEffect } from "react";

const Dashboard = () => {
  useEffect(() => {
    document.title = "Dashboard | NIFDA";
  }, []);
  return (
    <>
      <Box></Box>
    </>
  );
};

export default Dashboard;
