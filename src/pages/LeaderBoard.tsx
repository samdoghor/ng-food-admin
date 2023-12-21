import {
  Box,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import Navigation from "../components/Navigation";
import { useEffect } from "react";

const LeaderBoard = () => {
  useEffect(() => {
    document.title = "Leader Board | NIFODA";
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
        <Text fontSize={"2rem"} fontWeight={700}>
          See top contributors below
        </Text>
        <TableContainer mt={"2rem"}>
          <Table variant="simple" size="md">
            <TableCaption>List of Top Contributors</TableCaption>
            <Thead>
              <Tr>
                <Th>S/No.</Th>
                <Th>Full Name</Th>
                <Th isNumeric>Points</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>1</Td>
                <Td>Samuel, Doghor</Td>
                <Td isNumeric>1367 pts</Td>
              </Tr>
              <Tr>
                <Td>2</Td>
                <Td>Graham, George</Td>
                <Td isNumeric>1048 pts</Td>
              </Tr>
              <Tr>
                <Td>3</Td>
                <Td>Wisdom Adeyemi</Td>
                <Td isNumeric>1009 pts</Td>
              </Tr>
            </Tbody>
            <Tfoot>
              <Tr>
                <Th>S/No.</Th>
                <Th>Full Name</Th>
                <Th isNumeric>Points</Th>
              </Tr>
            </Tfoot>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};

export default LeaderBoard;
