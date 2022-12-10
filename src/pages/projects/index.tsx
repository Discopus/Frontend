import { AtSignIcon, InfoIcon, LinkIcon, PhoneIcon } from "@chakra-ui/icons";
import {
  Card,
  CardBody,
  Center,
  HStack,
  Stack,
  VStack,
  Image,
  Heading,
  Text,
  Container,
  CardFooter,
  Button,
  Flex,
  Spacer,
  Tag,
  Icon,
} from "@chakra-ui/react";
import { SP } from "next/dist/shared/lib/utils";
import Link from "next/link";
import React from "react";
import ProjectCard from "../../components/Cards/ProjectCard";

const data = [
  {
    id: "some_id1",
    name: "Проект 1",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia dolores sed eligendi quibusdam facilis magni voluptate non delectus, commodi hic velit esse minus fugit praesentium, voluptatum tempora omnis? Accusamus, fugit!",
    startDate:
      "Sun Dec 17 1995 00:00:00 GMT+0100 (Центральная Европа, стандартное время)",
    endDate:
      "Sun Dec 17 1995 00:00:00 GMT+0100 (Центральная Европа, стандартное время)",
    status: "1",
    tags: ["Technology", "Startup", "Data Science", "AI", "ML", "Software"],
    ownerId: "e581b67e-584b-4d8b-be06-14437cbcb006",
    companyID: "50441f7a-c0f5-4362-961e-2c35724c6efa",
  },
  {
    id: "some_id2",
    name: "Проект 2",
    description: "project description",
    startDate:
      "Sun Dec 17 1995 00:00:00 GMT+0100 (Центральная Европа, стандартное время)",
    endDate:
      "Sun Dec 17 1995 00:00:00 GMT+0100 (Центральная Европа, стандартное время)",
    status: "1",
    tags: ["tag1", "tag2", "tag3"],
    ownerId: "e581b67e-584b-4d8b-be06-14437cbcb006",
    companyID: "50441f7a-c0f5-4362-961e-2c35724c6efa",
  },
];

function Companies() {
  return (
    <>
      <Center marginTop={6}>
        <Heading>Проекты</Heading>
      </Center>
      <VStack paddingY={12} marginX={"auto"} spacing={12}>
        {data.map((project) => (
          <ProjectCard project={project} key={project.id} />
        ))}
      </VStack>
    </>
  );
}

export default Companies;
