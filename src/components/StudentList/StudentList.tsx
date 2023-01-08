import {
  Link as ChakraLink,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Portal,
  Table,
  TableContainer,
  Tag,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { FC } from "react";
import { Link } from "react-router-dom";
import { UserWithoutPassword } from "../../redux/models/User";

type AdditionalUserData = {
  status: string;
  code?: string;
};

type UserData = UserWithoutPassword & AdditionalUserData;

const data: UserData[] = [
  {
    id: "fd77c75b-4275-43ef-b51b-c706cdf4b147",
    firstName: "Евгений",
    lastName: "Мичков",
    roleId: 2,
    email: "a@ya.ru",
    avatarURL: "https://avatars.githubusercontent.com/u/60107488?s=2048&v=4",
    status: "active",
  },
  {
    id: "dfaea7d1-b4d7-40b2-9d29-45d0fdc0783c",
    firstName: "Афанасий",
    lastName: "Долгорукий",
    roleId: 2,
    email: "long_hand@ya.ru",
    avatarURL: "https://avatars.githubusercontent.com/u/36966491?v=4&s=1024",
    status: "pending",
    code: "123456",
  },
  {
    id: "fa5b10d8-e168-49e3-8daf-05267edb34dd",
    firstName: "Дмитрий",
    lastName: "Белик",
    roleId: 2,
    email: "x@ya.ru",
    avatarURL: "https://avatars.githubusercontent.com/u/62833220?s=1024&v=4",
    status: "pending",
    code: "654321",
  },
];

const StatusTag: FC<AdditionalUserData> = ({ status, code }) => {
  switch (status) {
    case "active":
      return <Tag colorScheme="green">Активен</Tag>;
    case "pending":
      return (
        <Popover size="sm">
          <PopoverTrigger>
            <Tag cursor="pointer" colorScheme="yellow">
              Ожидает подтверждения
            </Tag>
          </PopoverTrigger>
          <Portal>
            <PopoverContent>
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverHeader>Код подтверждения</PopoverHeader>
              <PopoverBody>{code}</PopoverBody>
            </PopoverContent>
          </Portal>
        </Popover>
      );
    default:
      return <Tag colorScheme="gray">Неизвестно</Tag>;
  }
};

const StudentList = () => {
  return (
    <TableContainer mt={12}>
      <Table variant="striped">
        <Thead>
          <Tr>
            <Th>Id</Th>
            <Th>Имя</Th>
            <Th>Фамилия</Th>
            <Th>email</Th>
            <Th>Профиль</Th>
            <Th>Статус</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((user, index) => (
            <Tr key={index}>
              <Td>{index + 1}</Td>
              <Td>{user.firstName}</Td>
              <Td>{user.lastName}</Td>
              <Td>{user.email}</Td>
              <Td>
                <ChakraLink color="cyan.300">
                  <Link to={`/university/users/${user.id}`}>{user.id}</Link>
                </ChakraLink>
              </Td>
              <Td>
                <StatusTag status={user.status} code={user.code} />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default StudentList;
