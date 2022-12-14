import { AtSignIcon, InfoIcon, LinkIcon, PhoneIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardHeader,
  Grid,
  GridItem,
  Heading,
  HStack,
  Image,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";
import TaskCard from "../../components/Cards/TaskCard";

const colors: { [key: string]: string } = {
  "in progress": "yellow",
  completed: "green",
  paused: "red",
};

export interface task {
  id: string;
  title: string;
  description: string;
  tags: string[];
  importance: "high" | "medium" | "low";
  status: "in progress" | "completed" | "paused";
  timeStart: Date;
  timeEnd: Date;
  projectName: string;
}

const tasks: task[] = [
  {
    id: "some_id2",
    title: "Задача 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat ac tincidunt vitae semper quis. Ipsum a arcu cursus vitae congue mauris rhoncus.",
    tags: ["tag1", "tag2", "tag3"],
    importance: "low",
    status: "completed",
    timeStart: new Date(),
    timeEnd: new Date(),
    projectName: "Project 2",
  },
  {
    id: "some_id3",
    title: "Задача 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra accumsan in nisl nisi scelerisque eu ultrices vitae auctor. At volutpat diam ut venenatis tellus in metus.",
    tags: ["tag1", "tag2", "tag3"],
    importance: "medium",
    status: "paused",
    timeStart: new Date(),
    timeEnd: new Date(),
    projectName: "Project 2",
  },
];

const data = {
  id: "some_id1",
  name: "Project 1",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati libero eos dolor porro doloribus. Unde deserunt doloremque, explicabo culpa voluptatem suscipit asperiores animi, eos cumque amet blanditiis exercitationem est molestias.",
  tags: ["tag1", "tag2", "tag3"],
  startDate: new Date(),
  endDate: new Date(),
  status: "in progress",
  users: [
    {
      id: "some_id1",
      name: "Иванов Иван Иванович",
      role: "CEO",
      avatarURL: "https://avatars.githubusercontent.com/u/60107488?v=4",
    },
    {
      id: "some_id2",
      name: "Петров Петр Петрович",
      role: "CTO",
      avatarURL: "https://avatars.githubusercontent.com/u/62833220?v=4",
    },
  ],

  tasks: tasks
};

const progressColor: { [key: string]: string } = {
  "in progress": "yellow",
  completed: "green",
  paused: "red",
};

const importanceColor: { [key: string]: string } = {
  high: "red",
  medium: "yellow",
  low: "green",
};

function Project() {
  return (
    <Grid
      gridTemplateColumns={"2fr 4fr"}
      gap={5}
      width="full"
      marginX="auto"
      marginY={6}
      alignItems="stretch"
    >
      <GridItem as={VStack} gap={4} alignItems={"stretch"}>
        <Card>
          <CardBody>
            <Spacer height={4} />
            <Heading>{data.name}</Heading>
            <Spacer height={1} />
            <Badge colorScheme={colors[data.status]}>
                    {data.status}
            </Badge>
            <Spacer height={4} />
            <HStack>
              {data.tags.map((tag, index) => (
                <Badge key={index} colorScheme="cyan">
                  {tag}
                </Badge>
              ))}
            </HStack>
            <Spacer height={4} />
            <Text color={"gray.300"}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, eius!
              Nihil, minus? Numquam, nobis consequuntur! Aspernatur aperiam
              dolores exercitationem molestiae a placeat, molestias velit
              excepturi corporis totam. Ut, magni minus?
            </Text>
            <Spacer height={4} />
          </CardBody>
        </Card>
        <Card>
          <CardHeader paddingBottom={0}>
            <Heading>Команда</Heading>
          </CardHeader>
          <CardBody as={VStack} alignItems="stretch">
            {data.users.map((user, index) => (
              <HStack
                spacing={4}
                key={index}
                backgroundColor="gray.800"
                borderRadius={"md"}
                paddingX={4}
                paddingY={2}
              >
                <Image
                  src={user.avatarURL}
                  alt={user.name}
                  borderRadius={"full"}
                  boxSize={8}
                />
                <VStack align="start" spacing={0.5}>
                  <Text>{user.name}</Text>
                  <Text fontSize={"sm"} color={"gray.400"}>
                    {user.role}
                  </Text>
                </VStack>
              </HStack>
            ))}
          </CardBody>
        </Card>
      </GridItem>
      <GridItem>
        <Card>
          <CardHeader paddingBottom={0}>
            <Heading>Задачи</Heading>
            <CardBody>
              {data.tasks.map((task, index) => (
                <Card 
                  backgroundColor="gray.800"
                  marginBottom={2}
                >
                  <CardBody>
                    <VStack
                      justifyContent="space-between"
                      align="starts"
                      gap={4}
                      height="full"
                    >
                    <VStack gap={2} align="start">
                      <HStack
                        width="full"
                        justifyContent="space-between"
                        align="baseline"
                      >
                        <HStack align="baseline" gap={4}>
                          <Heading size="md">{task.title}</Heading>
                          <HStack>
                            {task.tags.map((tag, index) => (
                              <Badge key={index} colorScheme="cyan">
                                {tag}
                              </Badge>
                            ))}
                          </HStack>
                        </HStack>
                        <Badge colorScheme={progressColor[task.status]}>
                          {task.status}
                        </Badge>
                      </HStack>
                      <HStack gap={1}>
                        <Text fontWeight="semibold">Важность:</Text>
                        <Badge colorScheme={importanceColor[task.importance]}>
                          {task.importance}
                        </Badge>
                      </HStack>
                      <Text color="gray.300">{task.description}</Text>
                    </VStack>
                  </VStack>
                </CardBody>
              </Card>
              ))}
          </CardBody>
          </CardHeader>
        </Card>
      </GridItem>
    </Grid>
  );
}

export default Project;
