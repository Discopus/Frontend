import { Avatar, Button, Flex, Heading, HStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const UniversityRepresentativeNavbar = () => {
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
            <Link to={"/university/companies"}>Мой Компании</Link>
          </Button>
          <Button
            variant={"link"}
            fontSize={"lg"}
            color="gray.400"
            _hover={{ color: "gray.200" }}
          >
            <Link to={"/university/students"}>Мои студенты</Link>
          </Button>
        </HStack>
        <HStack>
          <Link to={`/university/users/university_example`}>
            <HStack>
              <Avatar />
            </HStack>
          </Link>
        </HStack>
      </Flex>
    </Flex>
  );
};
