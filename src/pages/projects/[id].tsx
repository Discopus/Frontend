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
import { useRouter } from "next/router";
import { isStringObject } from "util/types";
import TaskCard from "../../components/Cards/TaskCard";
import { projectAPI } from "../../redux/services/ProjectService";

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

  const router = useRouter();
  const { id } = router.query;

    const {
      data: project,
      isLoading,
      error,
    } = projectAPI.useGetProjectQuery(id as string);


  if (project !== undefined) {
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
              <Heading>{project.name}</Heading>
              <Spacer height={1} />
              <Badge colorScheme={colors[project.status]}>
                      {project.status}
              </Badge>
              <Spacer height={4} />
              <HStack>
                {project.tags.map((tag, index) => (
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
            {/* <CardBody as={VStack} alignItems="stretch">
              {project.users.map((user, index) => (
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
            </CardBody> */}
          </Card>
        </GridItem>
        <GridItem>
          <Card>
            <CardHeader paddingBottom={0}>
              <Heading>Задачи</Heading>
              {/* <CardBody>
                {project.tasks.map((task, index) => (
                  <Card 
                    key={index}
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
            </CardBody> */}
            </CardHeader>
          </Card>
        </GridItem>
      </Grid>
    );
  } else {
    if(isLoading){
      <VStack paddingY={12} spacing={12} width="full">
        <div>Loading...</div>
      </VStack>
    }
    else if(error){
      <VStack paddingY={12} spacing={12} width="full">
        <div>Ошибка</div>
      </VStack>
    }
  }

  
}

export default Project;
