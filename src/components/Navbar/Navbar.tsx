import { Button, Flex, Heading, HStack } from "@chakra-ui/react";
import Link from "next/link";
import { useAuth } from "../../redux/hooks/useAuth";
import UserAccount from "./UserAccount";

const Navbar = () => {
  const { user } = useAuth();
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
        <Link href={"/"}>
          <Heading size={"lg"}>Discopus</Heading>
        </Link>
        <HStack spacing={12}>
          <Button
            variant={"link"}
            fontSize={"lg"}
            color="gray.400"
            _hover={{ color: "gray.200" }}
          >
            <Link href={"/companies"}>Companies</Link>
          </Button>
          <Button
            variant={"link"}
            fontSize={"lg"}
            color="gray.400"
            _hover={{ color: "gray.200" }}
          >
            <Link href={"/universities"}>Universities</Link>
          </Button>
          <Button
            variant={"link"}
            fontSize={"lg"}
            color="gray.400"
            _hover={{ color: "gray.200" }}
          >
            <Link href={"/projects"}>Projects</Link>
          </Button>
          <Button
            variant={"link"}
            fontSize={"lg"}
            color="gray.400"
            _hover={{ color: "gray.200" }}
          >
            <Link href={"/tasks"}>Tasks</Link>
          </Button>
        </HStack>
        <HStack>
          {user && UserAccount(user)}
          {!user && (
            <Button colorScheme={"cyan"}>
              <Link href={"/login"}>Login</Link>
            </Button>
          )}
        </HStack>
      </Flex>
    </Flex>
  );
};

export default Navbar;
