import {
  Avatar,
  Box,
  Flex,
  HStack,
  Spacer,
  Text,
  chakra,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Link as ReactRouterLink } from "react-router-dom";
import {
  MdCoPresent,
  MdCheckBox,
  MdLogout,
  MdEmail,
  MdArrowDropDown,
} from "react-icons/md";
import { IoBugSharp, IoStatsChartSharp } from "react-icons/io5";
import { GiTrophyCup } from "react-icons/gi";
import { LuFileInput } from "react-icons/lu";

const Navigation = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box
        as="div"
        bg={"ngDarkblue"}
        py={"12px"}
        position={"fixed"}
        top={"0"}
        w={"100%"}
        zIndex={10}
      >
        <Box px={{ base: "1rem", md: "6rem" }}>
          <Flex as={"nav"} alignItems={"center"} justifyContent={"center"}>
            <HStack>
              <Box onClick={onOpen}>
                <HamburgerIcon
                  boxSize={"20px"}
                  color={"white"}
                  fontWeight={900}
                  _hover={{
                    cursor: "pointer",
                    color: "gray.100",
                    boxSize: "20px",
                  }}
                />
              </Box>
              <Text
                onClick={onOpen}
                fontWeight={900}
                color={"white"}
                _hover={{ cursor: "pointer", color: "gray.100" }}
              >
                Menu
              </Text>
              {/* Drawer */}
              <Box>
                <Flex>
                  <Drawer
                    placement="left"
                    onClose={onClose}
                    isOpen={isOpen}
                    size={"xs"}
                  >
                    <DrawerOverlay />
                    <DrawerContent bg={"white"}>
                      <DrawerHeader
                        borderBottomWidth="2px"
                        borderBottomColor={"gray.300"}
                        fontWeight={900}
                        color={"ngDarkblue"}
                        fontSize={"1.8rem"}
                      >
                        Menu
                      </DrawerHeader>
                      <DrawerBody
                        as={"div"}
                        color={"ngDarkblue"}
                        fontWeight={500}
                        fontSize={{ base: "1rem", sm: "1.1rem" }}
                      >
                        <Menu>
                          <MenuItem
                            as={ReactRouterLink}
                            to="/dashboard"
                            py={"0.8rem"}
                          >
                            <IoStatsChartSharp />
                            <Text ps={"0.5rem"}>Dashboard</Text>
                          </MenuItem>
                          <MenuItem
                            as={ReactRouterLink}
                            to="/contribute"
                            py={"0.8rem"}
                          >
                            <LuFileInput />
                            <Text ps={"0.5rem"}>Contribute</Text>
                          </MenuItem>
                          <MenuItem
                            as={ReactRouterLink}
                            to="/leaderboard"
                            py={"0.8rem"}
                          >
                            <GiTrophyCup />
                            <Text ps={"0.5rem"}>Leader Board</Text>
                          </MenuItem>
                          <MenuItem
                            as={ReactRouterLink}
                            to="/dashboard"
                            py={"0.8rem"}
                          >
                            <IoBugSharp />
                            <Text ps={"0.5rem"}>Report Bug</Text>
                          </MenuItem>
                          <MenuItem
                            as={ReactRouterLink}
                            to="/dashboard"
                            py={"0.8rem"}
                          >
                            <MdCheckBox />
                            <Text ps={"0.5rem"}>Request Feature</Text>
                          </MenuItem>
                          <MenuItem
                            as={ReactRouterLink}
                            to="/dashboard"
                            py={"0.8rem"}
                          >
                            <MdLogout />
                            <Text ps={"0.5rem"}>Logout</Text>
                          </MenuItem>
                        </Menu>
                      </DrawerBody>
                    </DrawerContent>
                  </Drawer>
                </Flex>
              </Box>
            </HStack>
            <Spacer />
            <HStack spacing={"20px"}>
              <Text display={{ base: "none", md: "block" }}>
                <chakra.span
                  className="self-center whitespace-nowrap"
                  fontSize={"1.2rem"}
                  fontWeight={"900"}
                  color={"white"}
                >
                  <chakra.span color={"green.400"} fontSize={"1.6rem"}>
                    NIFODA
                  </chakra.span>
                  .com
                </chakra.span>
              </Text>
              <Flex>
                {/* profile */}
                <Menu>
                  <MenuButton as={"button"}>
                    <Flex
                      justifyContent={"center"}
                      alignItems={"center"}
                      padding={"4px"}
                      borderColor={"white"}
                      p={"6px"}
                    >
                      <Avatar
                        name="Samuel Doghor"
                        src=""
                        size="sm"
                        bg={"white"}
                      />
                      <Text color={"white"} ps={"0.3rem"} fontWeight={"medium"}>
                        Samuel, Doghor
                      </Text>
                      <Text
                        color={"white"}
                        fontSize={"1.8rem"}
                        fontWeight={900}
                      >
                        <MdArrowDropDown />
                      </Text>
                    </Flex>
                  </MenuButton>
                  <MenuList
                    as={"div"}
                    bg={"white"}
                    color={"ngDarkblue"}
                    fontSize={"1rem"}
                    fontWeight={500}
                    letterSpacing={"0.1rem"}
                    rounded={0}
                  >
                    <MenuItem as={ReactRouterLink} to="#" bg={"white"}>
                      <MdCoPresent />
                      <Text ps={"0.5rem"}>Profile</Text>
                    </MenuItem>
                    <MenuItem as={ReactRouterLink} to="#" bg={"white"}>
                      <MdEmail />
                      <Text ps={"0.5rem"}>Contact team </Text>
                    </MenuItem>
                    <MenuItem as={ReactRouterLink} to="#" bg={"white"}>
                      <IoBugSharp /> <Text ps={"0.5rem"}>Report bug</Text>
                    </MenuItem>
                    <MenuItem as={ReactRouterLink} to="#" bg={"white"}>
                      <MdCheckBox />
                      <Text ps={"0.5rem"}>Request feature</Text>
                    </MenuItem>
                    <MenuItem as={ReactRouterLink} to="#" bg={"white"}>
                      <MdLogout /> <Text ps={"0.5rem"}>Logout </Text>
                    </MenuItem>
                  </MenuList>
                </Menu>
              </Flex>
            </HStack>
          </Flex>
        </Box>
      </Box>
    </>
  );
};

export default Navigation;
