import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  HStack,
  Spacer,
  Stack,
  Tag,
  Text,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";

const ProjectCard = function ({ project }: any) {
  let DateStart: Date = new Date(project.startDate);
  let DateEnd: Date = new Date(project.endDate);

  return (
    <Card key={project.id} width={"full"} direction="row">
      <Stack width={"full"}>
        <CardBody padding={6} paddingBottom={0}>
          <Heading>{project.name}</Heading>
          <Spacer height={2} />
          <Text>Текущий статус: {project.status}</Text>
          <Spacer height={4} />
          <HStack>
            {project.tags.map((tag: any) => (
              <Tag key={tag} colorScheme="cyan">
                {tag}
              </Tag>
            ))}
          </HStack>
          <Spacer height={8} />
          <Text>{project.description}</Text>
        </CardBody>
        <CardFooter alignItems={"end"} padding={6}>
          <VStack align={"start"}>
            <Text as="b">
              Проект начат: {DateStart.getDay()}.{DateStart.getMonth()}.
              {DateStart.getFullYear()}
            </Text>
            <Text as="b">
              Дедлайн: {DateEnd.getDay()}.{DateEnd.getMonth()}.
              {DateEnd.getFullYear()}
            </Text>
          </VStack>
          <Spacer width={"full"} />
          <Button colorScheme={"cyan"}>
            <Link href={`/projects/${project.id}`}>Подробнее</Link>
          </Button>
        </CardFooter>
      </Stack>
    </Card>
  );
};

export default ProjectCard;
