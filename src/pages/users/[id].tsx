import { NextPage } from "next";
import { useRouter } from "next/router";
import { userAPI } from "../../redux/services/UserService";

const UserPage: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
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
