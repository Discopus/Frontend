import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
  Image,
  Input,
  Spacer,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import { FormikContextType } from "formik/dist/types";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../redux/hooks/redux";
import { User, UserWithoutPassword } from "../../redux/models/User";
import { logout } from "../../redux/reducers/authSlice";
import { userAPI } from "../../redux/services/UserService";

type UserCardProps = {
  user: User;
};

type FieldProps = {
  field: any;
  form: FormikContextType<User & { passwordRepeat: string }>;
};

const validateName = (value: string) => {
  if (!value) {
    return "Обязательное поле";
  } else if (value.length < 2) {
    return "Минимальная длина 2 имени";
  } else if (/[^a-zA-Zа-яА-Я]/.test(value)) {
    return "Неверный формат имени";
  }
  return undefined;
};

const validateEmail = (value: string) => {
  if (!value) {
    return "Обязательное поле";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
    return "Неверный формат email";
  }
  return undefined;
};

const FieldRow: FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <HStack gap={2} align="start">
      {children}
    </HStack>
  );
};

export const UserCard: FC<UserCardProps> = ({ user }) => {
  const navigate = useNavigate();
  const toast = useToast();

  const [updateUser, { isLoading, error }] = userAPI.useUpdateUserMutation();
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logout());
    toast({
      title: "Вы вышли из аккаунта",
      status: "warning",
      position: "bottom-right",
      duration: 3000,
      isClosable: true,
    });
    navigate("/");
  };

  const handleSubmit = (values: UserWithoutPassword, actions: any) => {
    updateUser(values as UserWithoutPassword);
    toast({
      title: "Профиль обновлен",
      status: "success",
      position: "bottom-right",
      duration: 3000,
      isClosable: true,
    });
    actions.setSubmitting(false);
  };

  return (
    <Formik initialValues={user} onSubmit={handleSubmit}>
      {(props) => (
        <HStack w="full" gap={16}>
          <Image src={user.avatarURL} alt={user.username} boxSize={80} />
          <Box w="full">
            <Form>
              <VStack align="stretch" w="full" mx="auto" my="6" gap={2}>
                <FieldRow>
                  <Field name="firstName" validate={validateName}>
                    {({ field, form }: FieldProps) => (
                      <FormControl
                        isInvalid={
                          Boolean(form.errors.firstName) &&
                          form.touched.firstName
                        }
                      >
                        <FormLabel htmlFor="firstName">Имя</FormLabel>
                        <Input
                          {...field}
                          id="firstName"
                          placeholder="First name"
                        />
                        <FormErrorMessage>
                          {form.errors.firstName}
                        </FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Field name="lastName" validate={validateName}>
                    {({ field, form }: FieldProps) => (
                      <FormControl
                        isInvalid={
                          Boolean(form.errors.lastName) && form.touched.lastName
                        }
                      >
                        <FormLabel htmlFor="lastName">Фамилия</FormLabel>
                        <Input
                          {...field}
                          id="lastName"
                          placeholder="Last name"
                        />
                        <FormErrorMessage>
                          {form.errors.lastName}
                        </FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                </FieldRow>
                <FieldRow>
                  <Field name="email" validate={validateEmail}>
                    {({ field, form }: FieldProps) => (
                      <FormControl
                        isInvalid={
                          Boolean(form.errors.email) && form.touched.email
                        }
                      >
                        <FormLabel htmlFor="email">Email</FormLabel>
                        <Input {...field} id="email" placeholder="Email" />
                        <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Field name="username">
                    {({ field, form }: FieldProps) => (
                      <FormControl
                        isInvalid={
                          Boolean(form.errors.username) && form.touched.username
                        }
                      >
                        <FormLabel htmlFor="username">Логин</FormLabel>
                        <Input
                          {...field}
                          id="username"
                          placeholder="Username"
                        />
                        <FormErrorMessage>
                          {form.errors.username}
                        </FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                </FieldRow>
                <FieldRow>
                  <Field name="password">
                    {({ field, form }: FieldProps) => (
                      <FormControl
                        isDisabled={true}
                        isInvalid={
                          Boolean(form.errors.password) && form.touched.password
                        }
                      >
                        <FormLabel htmlFor="password">Новый пароль</FormLabel>
                        <Input
                          {...field}
                          id="password"
                          placeholder="Password"
                        />
                        <FormErrorMessage>
                          {form.errors.password}
                        </FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Field name="passwordRepeat">
                    {({ field, form }: FieldProps) => (
                      <FormControl
                        isDisabled={true}
                        isInvalid={
                          Boolean(form.errors.passwordRepeat) &&
                          form.touched.passwordRepeat
                        }
                      >
                        <FormLabel htmlFor="passwordRepeat">
                          Повторите пароль
                        </FormLabel>
                        <Input
                          {...field}
                          id="passwordRepeat"
                          placeholder="Password repeat"
                        />
                        <FormErrorMessage>
                          {form.errors.passwordRepeat}
                        </FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                </FieldRow>
                <Spacer />
                <Button
                  colorScheme="cyan"
                  isLoading={props.isSubmitting}
                  type="submit"
                >
                  Сохранить
                </Button>
                <Button colorScheme="red" onClick={handleLogout}>
                  Выйти из аккаунта
                </Button>
              </VStack>
            </Form>
          </Box>
        </HStack>
      )}
    </Formik>
  );
};
