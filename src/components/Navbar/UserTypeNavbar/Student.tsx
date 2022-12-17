import { Button, Flex, Heading, HStack, Image } from "@chakra-ui/react";
import { FC } from "react";
import { Link } from "react-router-dom";
import { NavbarProps } from "../Navbar";

export const StudentNavbar: FC<NavbarProps> = ({ user }) => {
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
            <Link to={"/universities"}>Мой Университет</Link>
          </Button>
          <Button
            variant={"link"}
            fontSize={"lg"}
            color="gray.400"
            _hover={{ color: "gray.200" }}
          >
            <Link to={"/projects"}>Мои проекты</Link>
          </Button>
          <Button
            variant={"link"}
            fontSize={"lg"}
            color="gray.400"
            _hover={{ color: "gray.200" }}
          >
            <Link to={"/tasks"}>Мои задачи</Link>
          </Button>
        </HStack>
        <HStack>
          <Link to={`/users/${user.id}`}>
            <HStack>
              <Image
                src={user.avatarURL}
                alt={user.firstName}
                borderRadius="full"
                boxSize={10}
              />
            </HStack>
          </Link>
        </HStack>
      </Flex>
    </Flex>
  );
};
