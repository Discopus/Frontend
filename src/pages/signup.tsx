import {
  Button,
  Center,
  Heading,
  HStack,
  PinInput,
  PinInputField,
  Text,
  useToast,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

function SignUp() {
  const [code, setCode] = React.useState("");
  const toast = useToast();
  const navigate = useNavigate();

  const handleSubmit = () => {
    let status: "success" | "error" = "success";
    let title = "Код приглашения верен";

    if (code.length !== 6) {
      title = "Код приглашения должен состоять из 6 символов";
      status = "error";
    } else if (code === "111111") {
      title = "Код приглашения не верен";
      status = "error";
    }

    toast({
      title,
      status,
      duration: 3000,
      position: "bottom-right",
      isClosable: true,
    });

    switch (code) {
      case "123456":
        return navigate(`/register/student/${code}`);
      case "222222":
        return navigate(`/register/university/${code}`);
      case "333333":
        return navigate(`/register/company/${code}`);
      default:
        return;
    }
  };

  return (
    <Center h={600}>
      <VStack gap={6} w={600}>
        <Heading>Добро пожаловать в Discopus!</Heading>
        <VStack padding={6} gap={2}>
          <Heading size="md">Введите код приглашения</Heading>
          <HStack>
            <PinInput
              placeholder=""
              value={code}
              onChange={(value) => setCode(value)}
            >
              <PinInputField />
              <PinInputField />
              <PinInputField />
              <PinInputField />
              <PinInputField />
              <PinInputField />
            </PinInput>
          </HStack>
          <Button colorScheme="cyan" w="full" onClick={handleSubmit}>
            Начать регистрацию
          </Button>
        </VStack>
        <Text>
          Уже есть аккаунт?{" "}
          <Button variant="link" colorScheme="cyan">
            <Link to="/login">Залогинься</Link>
          </Button>
        </Text>
      </VStack>
    </Center>
  );
}

export default SignUp;
