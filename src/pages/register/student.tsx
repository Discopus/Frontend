import {
  Button,
  Center,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  HStack,
  Image,
  Input,
  InputGroup,
  InputLeftAddon,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { Field, Form, Formik, FormikContextType } from "formik";
import { useNavigate, useParams } from "react-router-dom";
import {
  FieldRow,
  validateEmail,
  validateName,
} from "../../components/Cards/UserCard";
import { UserForRegistration } from "../../redux/models/User";
import { authAPI } from "../../redux/services/auth";
import { userAPI } from "../../redux/services/UserService";

type AdditionalInitialValues = {
  passwordRepeat: string;
  phone: string;
  website: string;
  github: string;
  linkedin: string;
};

type InitialValues = Omit<UserForRegistration, "contacts"> &
  AdditionalInitialValues;

type RequiredData = {
  name: "firstName" | "lastName" | "email" | "password" | "passwordRepeat";
  placeholder: string;
  type: string;
  validation?: Function;
};

type AdditionalData = {
  name: "phone" | "website" | "github" | "linkedin";
  title: string;
  placeholder: string;
  child: string;
  type: string;
  validation?: Function;
};

type FieldProps = {
  field: any;
  form: FormikContextType<InitialValues>;
};

const StudentRegistration = () => {
  const { code } = useParams();
  const [addUser, { data, isLoading, error }] = userAPI.useAddUserMutation();
  const [
    login,
    { data: loginData, isLoading: loginLoading, error: loginError },
  ] = authAPI.useLoginMutation();
  const toast = useToast();
  const navigate = useNavigate();

  const validatePhone = (value: string) => {
    if (!/^\d{10}$/.test(value) && value) {
      return "Неверный формат номера телефона";
    }
  };

  const validateDomain = (value: string) => {
    if (!/^[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}$/.test(value) && value) {
      return "Неверный формат сайта";
    }
  };

  const validatePassword = (value: string) => {
    if (value.length < 8) {
      return "Пароль должен быть не менее 8 символов";
    }
  };

  const validatePasswordRepeat = (value: string) => {
    const password = document.getElementById("password") as HTMLInputElement;
    if (!value) {
      return "Обязательное поле";
    } else if (password.value !== value) {
      return "Пароли не совпадают";
    }
  };

  const handleSubmit = (values: InitialValues, actions: any) => {
    const user: UserForRegistration = {
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      password: values.password,
      roleId: values.roleId,
      avatarURL: values.avatarURL,
    };

    console.log(user);

    try {
      addUser(user).unwrap();
      try {
        login({ email: values.email, password: values.password }).unwrap();
        navigate("/");
      } catch (err) {
        console.log(err);
      }
    } catch (err) {
      console.log(err);
    }

    // addUser(user)
    //   .unwrap()
    //   .then((res) => {
    //     login({ email: values.email, password: values.password })
    //       .unwrap()
    //       .then((res) => {
    //         toast({
    //           status: "success",
    //           title: "Вы успешно зарегистрировались и вошли в аккаунт",
    //           position: "bottom-right",
    //           duration: 3000,
    //           isClosable: true,
    //         });
    //       })
    //       .catch((err) => {
    //         console.log("1", err);
    //         toast({
    //           title: "Не удалось войти в аккаунт",
    //           status: "error",
    //           position: "bottom-right",
    //           duration: 3000,
    //           isClosable: true,
    //         });
    //       });
    //   })
    //   .catch((err) => {
    //     console.log("2", err);
    //     toast({
    //       title: "Не удалось зарегистрировать пользователя",
    //       status: "error",
    //       position: "bottom-right",
    //       duration: 3000,
    //       isClosable: true,
    //     });
    //   });

    actions.setSubmitting(false);
  };

  const initialValues: InitialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    passwordRepeat: "",
    roleId: 2,
    avatarURL: "https://via.placeholder.com/500?text=Avatar",
    github: "",
    linkedin: "",
    phone: "",
    website: "",
  };

  const formRequiredData: RequiredData[][] = [
    [
      {
        name: "firstName",
        placeholder: "Имя",
        type: "text",
        validation: validateName,
      },
      {
        name: "lastName",
        placeholder: "Фамилия",
        type: "text",
        validation: validateName,
      },
      {
        name: "email",
        placeholder: "Email",
        type: "email",
        validation: validateEmail,
      },
    ],
    [
      {
        name: "password",
        placeholder: "Пароль",
        type: "password",
        validation: validatePassword,
      },
      {
        name: "passwordRepeat",
        placeholder: "Повторите пароль",
        type: "password",
        validation: validatePasswordRepeat,
      },
    ],
  ];

  const formAddtitionalData: AdditionalData[][] = [
    [
      {
        name: "phone",
        title: "Телефон",
        placeholder: "800 555 35 35",
        child: "+7",
        type: "tel",
        validation: validatePhone,
      },
      {
        name: "website",
        title: "Сайт",
        placeholder: "example.com",
        child: "https://",
        type: "text",
        validation: validateDomain,
      },
    ],
    [
      {
        name: "github",
        title: "Github",
        placeholder: "MegaCode",
        child: "github.com/",
        type: "text",
      },
      {
        name: "linkedin",
        title: "Linkedin",
        placeholder: "mega-coder-123456789",
        child: "linkedin.com/in/",
        type: "text",
      },
    ],
  ];

  return (
    <>
      <Center mt={6}>
        <Heading>Страница регистрации студента</Heading>
      </Center>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {(props) => (
          <Form>
            <VStack align="stretch" w="1024px" my={12} gap={2} mx="auto">
              <Center>
                <Heading size="md">Обязательная информация</Heading>
              </Center>
              {formRequiredData.map((row, index) => (
                <FieldRow key={index}>
                  {row.map((dataField) => (
                    <Field
                      key={dataField.name}
                      name={dataField.name}
                      validate={dataField.validation}
                    >
                      {({ field, form }: FieldProps) => (
                        <FormControl
                          isInvalid={Boolean(
                            form.errors[dataField.name] &&
                              form.touched[dataField.name]
                          )}
                        >
                          <FormLabel htmlFor={dataField.name}>
                            {dataField.placeholder}
                          </FormLabel>
                          <Input
                            {...field}
                            id={dataField.name}
                            placeholder={dataField.placeholder}
                            type={dataField.type}
                          />
                          <FormErrorMessage>
                            {form.errors[dataField.name]}
                          </FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                  ))}
                </FieldRow>
              ))}

              <Center pt={6}>
                <Heading size="md">Дополнительные данные</Heading>
              </Center>

              {formAddtitionalData.map((row, index) => (
                <FieldRow key={index}>
                  {row.map((dataField) => (
                    <Field
                      key={dataField.name}
                      name={dataField.name}
                      validate={dataField.validation}
                    >
                      {({ field, form }: FieldProps) => (
                        <FormControl
                          isDisabled={true}
                          isInvalid={Boolean(
                            form.errors[dataField.name] &&
                              form.touched[dataField.name]
                          )}
                        >
                          <FormLabel htmlFor={dataField.name}>
                            {dataField.title}
                          </FormLabel>
                          <InputGroup>
                            <InputLeftAddon children={dataField.child} />
                            <Input
                              {...field}
                              id={dataField.name}
                              placeholder={dataField.placeholder}
                              type={dataField.type}
                            />
                          </InputGroup>
                          <FormErrorMessage>
                            {form.errors[dataField.name]}
                          </FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                  ))}
                </FieldRow>
              ))}
              <HStack align="start" gap={2}>
                <Field name="avatarURL">
                  {({ field, form }: FieldProps) => (
                    <FormControl
                      isInvalid={Boolean(
                        form.errors.avatarURL && form.touched.avatarURL
                      )}
                    >
                      <FormLabel htmlFor="avatarURL">
                        Ссылка на аватар
                      </FormLabel>
                      <Input
                        {...field}
                        id="avatarURL"
                        placeholder="Ссылка на аватар"
                        type="text"
                      />
                      <FormErrorMessage>
                        {form.errors.avatarURL}
                      </FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <VStack w="full">
                  <Heading size="sm" mb={1}>
                    Предпросмотр
                  </Heading>
                  <Image
                    w="full"
                    borderRadius="md"
                    objectFit="cover"
                    src={props.values.avatarURL}
                    alt={
                      props.values.avatarURL
                        ? "Картинка не найдена"
                        : "Введите url"
                    }
                  />
                </VStack>
              </HStack>
              <VStack pt={6}>
                <Button
                  w="50%"
                  alignSelf="center"
                  colorScheme="cyan"
                  isLoading={props.isSubmitting}
                  type="submit"
                >
                  Зарегистрироваться
                </Button>
              </VStack>
            </VStack>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default StudentRegistration;
