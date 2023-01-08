import { useLocation } from "react-router-dom";
import { UserRoleID, UserWithoutPassword } from "../../redux/models/User";
import { StudentNavbar } from "./UserTypeNavbar/Student";
import { UnauthorizedNavbar } from "./UserTypeNavbar/Unauthorized";
import { UniversityRepresentativeNavbar } from "./UserTypeNavbar/University";

export type NavbarProps = {
  user: UserWithoutPassword;
};

const Navbar = () => {
  const user = useLocation().pathname.split("/")[1];
  switch (user) {
    case "student":
      return <StudentNavbar />;
    case "university":
      return <UniversityRepresentativeNavbar />;
    default:
      return <UnauthorizedNavbar />;
  }
};

export default Navbar;
