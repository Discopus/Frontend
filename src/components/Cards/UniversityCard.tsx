import { AtSignIcon, InfoIcon, LinkIcon } from "@chakra-ui/icons";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  HStack,
  Image,
  Spacer,
  Stack,
  Tag,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FC } from "react";
import { Link } from "react-router-dom";
import { University } from "../../redux/models/University";

interface Props {
  university: University;
}

export const UniversityCard: FC<Props> = ({ university }) => {
  return (
    <Card key={university.id} width={"full"} direction="row">
      <Image
        src={university.logoURL}
        alt={university.name}
        boxSize="sm"
        objectFit="cover"
        borderLeftRadius={"inherit"}
      />
      <Stack width={"full"}>
        <CardBody padding={6} paddingBottom={0}>
          <Heading>{university.name}</Heading>
          <Spacer height={1} />
          <HStack>
            <LinkIcon />
            <Button colorScheme={"cyan"} variant="link">
              <Link to={"/"}>example.com</Link>
            </Button>
          </HStack>
          <Spacer height={4} />
          <HStack>
            {university.tags.map((tag: any) => (
              <Tag key={tag} colorScheme="cyan">
                {tag}
              </Tag>
            ))}
          </HStack>
          <Spacer height={8} />
          <Text>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus
            necessitatibus a illo, nisi, in sit, quis quaerat laboriosam
            architecto iste doloribus totam iure consequatur culpa. Quidem
            ducimus nemo modi vel.
          </Text>
        </CardBody>
        <CardFooter alignItems={"end"} padding={6}>
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
              <Link
                to={`https://www.google.com/maps/place/${university.contacts.address}`}
              >
                {university.contacts.address}
              </Link>
            </Button>
          </VStack>
          <Spacer width={"full"} />
          <Button colorScheme={"cyan"}>
            <Link to={`/universities/${university.id}`}>Подробнее</Link>
          </Button>
        </CardFooter>
      </Stack>
    </Card>
  );
};
