import { Button, Flex, Heading, HStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const UnauthorizedNavbar = () => {
  return (
    <Flex
      borderBottom={"1px"}
      borderColor={"gray.700"}
      padding={4}
      position="sticky"
      as={"nav"}
    >
      <Flex
        direction={"row"}
        justify="space-between"
        marginX={"auto"}
        width="1200px"
      >
        <Link to={"/"}>
          <Heading size={"lg"}>Discopus</Heading>
        </Link>
        <HStack spacing={12}>
          <Button
            variant={"link"}
            fontSize={"lg"}
            color="gray.400"
            _hover={{ color: "gray.200" }}
          >
            <Link to={"/companies"}>Companies</Link>
          </Button>
          <Button
            variant={"link"}
            fontSize={"lg"}
            color="gray.400"
            _hover={{ color: "gray.200" }}
          >
            <Link to={"/universities"}>Universities</Link>
          </Button>
          <Button
            variant={"link"}
            fontSize={"lg"}
            color="gray.400"
            _hover={{ color: "gray.200" }}
          >
            <Link to={"/projects"}>Projects</Link>
          </Button>
          <Button
            variant={"link"}
            fontSize={"lg"}
            color="gray.400"
            _hover={{ color: "gray.200" }}
          >
            <Link to={"/tasks"}>Tasks</Link>
          </Button>
        </HStack>
        <HStack>
          <Button colorScheme={"cyan"}>
            <Link to={"/login"}>Login</Link>
          </Button>
        </HStack>
      </Flex>
    </Flex>
  );
};
