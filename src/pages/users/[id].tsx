import { useParams } from "react-router-dom";
import { userAPI } from "../../redux/services/UserService";

const UserPage = () => {
  const { id } = useParams();
  const {
    data: user,
    isLoading,
    error,
  } = userAPI.useGetUserByIdQuery(id != undefined ? id.toString() : "");
  return (
    <>
      {isLoading && <div>Loading...</div>}
      {error && <div>Something went wrong</div>}
      {user && <div>{user.firstName}</div>}
    </>
  );
};

export default UserPage;
