import { Center, Heading } from "@chakra-ui/react";
import StudentList from "../../components/StudentList/StudentList";

const Students = () => {
  return (
    <>
      <Center mt={6}>
        <Heading>Студенты</Heading>
      </Center>
      <StudentList />
    </>
  );
};

export default Students;
