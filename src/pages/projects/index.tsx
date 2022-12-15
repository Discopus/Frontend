import { Center, Heading, VStack } from "@chakra-ui/react";
import ProjectCard from "../../components/Cards/ProjectCard";
import { projectAPI } from "../../redux/services/ProjectService";


function Projects() {

  const {
    data: projects,
    isLoading,
    error,
  } = projectAPI.useGetProjectsQuery();

  return (
    <>
      <Center marginTop={6}>
        <Heading>Проекты</Heading>
      </Center>
      <VStack paddingY={12} spacing={12} width="full">
        {isLoading && <div>Loading...</div>}
        {error && <div>Ошибка</div>}
        {projects &&
          projects.map((project) => (
            <ProjectCard project={project} key={project.id} />
          ))}
      </VStack>
    </>
  );
}

export default Projects;
