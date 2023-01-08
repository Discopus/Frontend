import { useParams } from "react-router-dom";
import { UserCard } from "../../components/Cards/UserCard";
import { User } from "../../redux/models/User";

const UserPage = () => {
  const { id } = useParams();
  const user = {
    firstName: "Евгений",
    lastName: "Мичков",
    email: "example@discopus.com",
    avatarURL: "https://avatars.githubusercontent.com/u/60107488",
    id: id,
  } as User;
  return <UserCard user={user} />;
};

export default UserPage;
