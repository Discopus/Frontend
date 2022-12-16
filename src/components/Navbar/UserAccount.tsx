import { HStack, Image, Link } from "@chakra-ui/react";
import { FC } from "react";
import { User } from "../../redux/models/User";

const UserAccount: FC<Omit<User, "password">> = (user) => {
  return (
    <Link href={`/users/${user.id}`}>
      <HStack>
        <Image
          src={user.avatarURL}
          alt={user.firstName}
          borderRadius="full"
          boxSize={10}
        />
      </HStack>
    </Link>
  );
};

export default UserAccount;
