import {
  Button,
  useColorMode,
  Flex,
  Heading,
  Spacer,
  Box,
  Link,
  Text,
  Badge,
} from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { useEthers } from "@usedapp/core";

function Navbar() {
  const { activateBrowserWallet, account } = useEthers();
  const { colorMode, toggleColorMode } = useColorMode();
  const underlineColor = { light: "gray.500", dark: "gray.400" };

  return (
    <Flex
      py="4"
      px={["2", "4", "10", "10"]}
      borderBottom="2px"
      borderBottomColor={underlineColor[colorMode]}
    >
      <Spacer flex="1" />
      <Heading maxW={["302px", "4xl", "4xl", "4xl"]}>
        🎭 Impersonator 🕵️ <Badge colorScheme={"orange"}>feat Sirtambourine</Badge>
      </Heading>
      <Flex flex="1" justifyContent="flex-end" alignItems={"center"}>
        <Button onClick={toggleColorMode} rounded="full" h="40px" w="40px">
          {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
        </Button>

        <Flex pl="1rem" justify="center">
          <Link
            href={"https://github.com/apoorvlathey/impersonator"}
            isExternal
          >
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </Link>
          {account ? (
            <Text ml="1rem">{account}</Text>
          ) : (
            <Button
              ml="1rem"
              onClick={() => activateBrowserWallet()}
              colorScheme="orange"
              h="40px"
            >
              Connect External Wallet
            </Button>
          )}
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Navbar;
