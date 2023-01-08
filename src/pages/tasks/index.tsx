import {
  Grid,
  GridItem,
  Heading,
  Spacer,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import React from "react";
import TaskCard from "../../components/Cards/TaskCard";

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
  projectId: string;
}

const data: task[] = [
  {
    id: "some_id1",
    title: "Задача 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ornare arcu odio ut sem. Bibendum at varius vel pharetra vel turpis nunc. Amet est placerat in egestas erat imperdiet sed euismod. Semper viverra nam libero justo.",
    tags: ["AI", "Database", "Web"],
    importance: "high",
    status: "in progress",
    timeStart: new Date(),
    timeEnd: new Date(),
    projectName: "Project 1",
    projectId: "some_id1",
  },
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
    projectId: "some_id2",
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
    projectId: "some_id2",
  },
];

const Panel = ({ children }: { children: React.ReactNode }) => (
  <TabPanel
    as={Grid}
    gridTemplateColumns="repeat(2, 1fr)"
    gap={4}
    width="full"
    alignItems="stretch"
  >
    {children}
  </TabPanel>
);

function Tasks() {
  const uniqueProjectTitles = [
    ...new Set(data.map((task) => task.projectName)),
  ];

  return (
    <>
      <Heading>Задачи</Heading>
      <Spacer height={4} />
      <Tabs variant="line" colorScheme="cyan" minHeight={"50vh"}>
        <TabList>
          <Tab>Все</Tab>
          {uniqueProjectTitles.map((title, index) => (
            <Tab key={index}>{title}</Tab>
          ))}
        </TabList>
        <TabPanels>
          <GridItem>
            <Panel>
              {data.map((task, index) => (
                <TaskCard key={index} data={task} />
              ))}
            </Panel>
          </GridItem>
          {uniqueProjectTitles.map((title, index) => (
            <GridItem key={index}>
              <Panel>
                {data
                  .filter((task) => task.projectName === title)
                  .map((task, index) => (
                    <TaskCard key={index} data={task} />
                  ))}
              </Panel>
            </GridItem>
          ))}
        </TabPanels>
      </Tabs>
    </>
  );
}

export default Tasks;
