import { useAuth } from "../../redux/hooks/useAuth";
import { UserRoleID, UserWithoutPassword } from "../../redux/models/User";
import { StudentNavbar } from "./UserTypeNavbar/Student";
import { UnauthorizedNavbar } from "./UserTypeNavbar/Unauthorized";

export type NavbarProps = {
  user: UserWithoutPassword;
};

const Navbar = () => {
  const { user } = useAuth();
  switch (user?.roleId) {
    case UserRoleID.student:
      return <StudentNavbar user={user} />;
    default:
      return <UnauthorizedNavbar />;
  }
};

export default Navbar;
