import { Button, Flex, Heading, HStack, Image, Avatar } from "@chakra-ui/react";
import { FC } from "react";
import { Link } from "react-router-dom";
import { NavbarProps } from "../Navbar";

export const CompanyRepresentativeNavbar = () => {
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
            <Link to={"/company/universities"}>Университеты</Link>
          </Button>
          <Button
            variant={"link"}
            fontSize={"lg"}
            color="gray.400"
            _hover={{ color: "gray.200" }}
          >
            <Link to={"/company/students"}>Студенты</Link>
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
