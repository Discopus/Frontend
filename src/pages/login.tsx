import {
  Button,
  Center,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  VStack,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import { UserForLogin } from "../redux/models/User";
import { authAPI } from "../redux/services/auth";

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
  const router = useRouter();
  const [formState, setFormState] = React.useState<UserForLogin>({
    email: "",
    password: "",
  });

  const handleChange = ({
    target: { name, value },
  }: React.ChangeEvent<HTMLInputElement>) =>
    setFormState((prev) => ({ ...prev, [name]: value }));

  const [login, { isLoading, error }] = authAPI.useLoginMutation();

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

        <Button
          w="full"
          colorScheme="cyan"
          onClick={async () => {
            try {
              await login(formState).unwrap();
              await router.push("/");
            } catch (error) {
              console.log(error);
            }
          }}
          isLoading={isLoading}
        >
          Login
        </Button>
      </VStack>
    </Center>
  );
}

export default Login;
