import { Box, Center, Heading } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { UserCard } from "../../components/Cards/UserCard";
import { userAPI } from "../../redux/services/UserService";

const UserPage = () => {
  const { id } = useParams();
  const {
    data: user,
    isLoading,
    error,
  } = userAPI.useGetUserByIdQuery(id != undefined ? id.toString() : "");
  return (
    <Box mb={32} mt={24}>
      <Center mb={6}>
        <Heading>Ваш профиль</Heading>
      </Center>
      {isLoading && <div>Loading...</div>}
      {error && <div>Something went wrong</div>}
      {user && <UserCard user={user} />}
    </Box>
  );
};

export default UserPage;
