import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
  Badge,
  Button,
  Card,
  CardBody,
  Heading,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { task } from "../../pages/tasks";

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

function TaskCard({ data }: { data: task }) {
  return (
    <Card>
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
                <Heading size="md">{data.title}</Heading>
                <HStack>
                  {data.tags.map((tag, index) => (
                    <Badge key={index} colorScheme="cyan">
                      {tag}
                    </Badge>
                  ))}
                </HStack>
              </HStack>
              <Badge colorScheme={progressColor[data.status]}>
                {data.status}
              </Badge>
            </HStack>
            <HStack gap={1}>
              <Text fontWeight="semibold">Важность:</Text>
              <Badge colorScheme={importanceColor[data.importance]}>
                {data.importance}
              </Badge>
            </HStack>
            <Text color="gray.300">{data.description}</Text>
          </VStack>
          <HStack>
            <Button
              rightIcon={<ArrowForwardIcon />}
              colorScheme="cyan"
              variant="outline"
            >
              {data.projectName}
            </Button>
          </HStack>
        </VStack>
      </CardBody>
    </Card>
  );
}

export default TaskCard;
