import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";

const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize={"50px"} />
      <Text>Game Terminal</Text>
    </HStack>
  );
};

export default NavBar;
