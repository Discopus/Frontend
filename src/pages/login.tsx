import {
  Button,
  Center,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  useToast,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { STUDENT_EMAIL, UNIVERISTY_EMAIL } from "../data";
import { UserForLogin } from "../redux/models/User";

function PasswordInput({
  name,
  onChange,
}: {
  name: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  return (
    <InputGroup size="md">
      <Input
        pr="4.5rem"
        type={show ? "text" : "password"}
        placeholder="Enter password"
        name={name}
        onChange={onChange}
      />
      <InputRightElement width="4.5rem">
        <Button h="1.75rem" size="sm" onClick={handleClick}>
          {show ? "Hide" : "Show"}
        </Button>
      </InputRightElement>
    </InputGroup>
  );
}

function Login() {
  const toast = useToast();
  const navigate = useNavigate();

  const [formState, setFormState] = React.useState<UserForLogin>({
    email: "",
    password: "",
  });

  const handleChange = ({
    target: { name, value },
  }: React.ChangeEvent<HTMLInputElement>) =>
    setFormState((prev) => ({ ...prev, [name]: value }));

  const handleLogin = async () => {
    switch (formState.email) {
      case STUDENT_EMAIL:
        navigate("/student/tasks");
        toast({
          title: "Успешный вход",
          status: "success",
          position: "bottom-right",
          duration: 3000,
          isClosable: true,
        });
        break;
      case UNIVERISTY_EMAIL:
        navigate("/university/tasks");
        toast({
          title: "Успешный вход",
          status: "success",
          position: "bottom-right",
          duration: 3000,
          isClosable: true,
        });
        break;
      default:
        toast({
          title: "Ошибка входа",
          status: "error",
          position: "bottom-right",
          duration: 3000,
          isClosable: true,
        });
    }
  };

  return (
    <Center h={600}>
      <VStack gap={6} w={600}>
        <Heading>С возвращением!</Heading>

        <VStack w="full">
          <InputGroup>
            <Input
              name="email"
              type="text"
              placeholder="Email"
              onChange={handleChange}
            />
          </InputGroup>
          <InputGroup>
            <PasswordInput name="password" onChange={handleChange} />
          </InputGroup>
        </VStack>

        <Button w="full" colorScheme="cyan" onClick={handleLogin}>
          Login
        </Button>
        <Text>
          Нет аккаунта?{" "}
          <Button variant="link" colorScheme="cyan">
            <Link to="/signup">Зарегистрируйся!</Link>
          </Button>
        </Text>
      </VStack>
    </Center>
  );
}

export default Login;
