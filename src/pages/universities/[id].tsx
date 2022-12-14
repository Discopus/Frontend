import { AtSignIcon, InfoIcon, LinkIcon } from "@chakra-ui/icons";
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
import { FC } from "react";
import { Link, useParams } from "react-router-dom";
import { University } from "../../redux/models/University";
import { User, UserRoleID } from "../../redux/models/User";
import { universityAPI } from "../../redux/services/UniversityService";
import { userAPI } from "../../redux/services/UserService";

const colors: { [key: string]: string } = {
  "in progress": "yellow",
  completed: "green",
  paused: "red",
};

const data = {
  id: "some_id1",
  name: "Сколково",
  tags: ["Technology", "Startup", "Data Science", "AI", "ML", "Software"],
  websiteURL: "https://sk.ru",
  logoURL:
    "https://www.timacad.ru/uploads/media/cache/image_sm_resize/uploads/images/20190301/1551464393_skolkovo.png",
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
  projects: [
    {
      id: "some_id1",
      name: "Project 1",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati libero eos dolor porro doloribus. Unde deserunt doloremque, explicabo culpa voluptatem suscipit asperiores animi, eos cumque amet blanditiis exercitationem est molestias.",
      tags: ["tag1", "tag2", "tag3"],
      startDate: new Date(),
      endDate: new Date(),
      status: "in progress",
    },
    {
      id: "some_id2",
      name: "Project 2",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati libero eos dolor porro doloribus. Unde deserunt doloremque, explicabo culpa voluptatem suscipit asperiores animi, eos cumque amet blanditiis exercitationem est molestias.",
      tags: ["tag1", "tag2", "tag3"],
      startDate: new Date(),
      endDate: new Date(),
      status: "completed",
    },
    {
      id: "some_id3",
      name: "Project 3",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati libero eos dolor porro doloribus. Unde deserunt doloremque, explicabo culpa voluptatem suscipit asperiores animi, eos cumque amet blanditiis exercitationem est molestias.",
      tags: ["tag1", "tag2", "tag3"],
      startDate: new Date(),
      endDate: new Date(),
      status: "paused",
    },
  ],
  contacts: {
    email: "skolkovo@skolkovo.ru",
    phone: "+7 (800) 555-35-35",
    address: "Инновационный центр Сколково",
    city: "Москва",
    country: "Россия",
    zip: "some_zip",
  },
};

type PageProps = {
  university: University;
  users: User[];
};

const Page: FC<PageProps> = ({ university, users }) => {
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
        <Card w="full">
          <CardBody w="full">
            <Image
              objectFit={"cover"}
              src={university.logoURL}
              alt={university.name}
              borderRadius={"sm"}
            />
            <Spacer height={4} />
            <Heading>{university.name}</Heading>
            <Spacer height={1} />
            <HStack>
              <LinkIcon />
              <Button colorScheme={"cyan"} variant="link">
                <Link to={data.websiteURL}>{data.websiteURL}</Link>
              </Button>
            </HStack>
            <Spacer height={4} />
            <Text color={"gray.300"}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, eius!
              Nihil, minus? Numquam, nobis consequuntur! Aspernatur aperiam
              dolores exercitationem molestiae a placeat, molestias velit
              excepturi corporis totam. Ut, magni minus?
            </Text>
            <Spacer height={4} />
            <VStack align={"start"}>
              <Button variant={"link"}>
                <AtSignIcon />
                <Spacer width={2} />
                <Link to={`mailto:${university.contacts.email}`}>
                  {university.contacts.email}
                </Link>
              </Button>
              <Button variant={"link"}>
                <InfoIcon />
                <Spacer width={2} />
                <Link to={`https://yandex.ru/maps/-/CCUn4XUMWC`}>
                  <Text>{university.contacts.address}</Text>
                </Link>
              </Button>
            </VStack>
          </CardBody>
        </Card>
        <Card>
          <CardHeader paddingBottom={0}>
            <Heading>Важные люди</Heading>
          </CardHeader>
          <CardBody as={VStack} alignItems="stretch">
            {users.map((user, index) => (
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
                  alt={user.firstName[0]}
                  borderRadius={"full"}
                  boxSize={8}
                />
                <VStack align="start" spacing={0.5}>
                  <Heading size="md">
                    {user.firstName + " " + user.lastName}
                  </Heading>
                  <Text fontSize={"sm"} color={"gray.400"}>
                    {UserRoleID[user.roleId]}
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
            <Heading>Проекты</Heading>
          </CardHeader>
          <CardBody>
            {data.projects.map((project, index) => (
              <VStack
                key={index}
                backgroundColor="gray.800"
                borderRadius={"md"}
                padding={4}
                marginBottom={2}
                alignItems="start"
              >
                <HStack width="full" gap={4} alignItems="baseline">
                  <Heading size="md">{project.name}</Heading>
                  <Badge colorScheme={colors[project.status]}>
                    {project.status}
                  </Badge>
                </HStack>
                <Spacer height={2} />
                <Text>{project.description}</Text>
                <Spacer height={2} />
                <HStack>
                  {project.tags.map((tag, index) => (
                    <Badge key={index} colorScheme="cyan">
                      {tag}
                    </Badge>
                  ))}
                </HStack>
              </VStack>
            ))}
          </CardBody>
        </Card>
      </GridItem>
    </Grid>
  );
};

function University() {
  const { id } = useParams();

  const {
    data: university,
    error: universityError,
    isLoading: universityIsLoading,
  } = universityAPI.useGetUniversityByIdQuery(
    id != undefined ? id.toString() : ""
  );

  const {
    data: users,
    error: usersError,
    isLoading: usersIsLoading,
  } = userAPI.useGetUsersQuery();
  const data = { university, users } as PageProps;
  return (
    <>
      {(universityError || usersError) && (
        <div>Something went wrong or no auth</div>
      )}
      {universityIsLoading && <div> university loading...</div>}
      {usersIsLoading && <div> Users loading...</div>}
      {university && users && Page(data)}
    </>
  );
}

export default University;
