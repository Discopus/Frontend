import { Avatar, Button, Flex, Heading, HStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const StudentNavbar = () => {
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
            <Link to={"/student/university"}>Мой Университет</Link>
          </Button>
          <Button
            variant={"link"}
            fontSize={"lg"}
            color="gray.400"
            _hover={{ color: "gray.200" }}
          >
            <Link to={"/student/projects"}>Мои проекты</Link>
          </Button>
          <Button
            variant={"link"}
            fontSize={"lg"}
            color="gray.400"
            _hover={{ color: "gray.200" }}
          >
            <Link to={"/student/tasks"}>Мои задачи</Link>
          </Button>
        </HStack>
        <HStack>
          <Link to={`student/users/example_user`}>
            <HStack>
              <Avatar
                bg="cyan.600"
                src="https://avatars.githubusercontent.com/u/60107488"
              />
            </HStack>
          </Link>
        </HStack>
      </Flex>
    </Flex>
  );
};
