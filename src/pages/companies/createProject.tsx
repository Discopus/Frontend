import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
  Input,
  Spacer,
  useToast,
  VStack,
  Center,
  Heading
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import { FormikContextType } from "formik/dist/types";
import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../redux/hooks/redux";
import { Project, ProjectForRegistration } from "../../redux/models/Project";
import { createProject } from "../../redux/reducers/projectsSlice";
import { projectAPI } from "../../redux/services/ProjectService";

type ProjectCardProps = {
  project: Project;
};


type FieldProps = {
  field: any;
  form: FormikContextType<Project & { passwordRepeat: string }>;
};

const validateName = (value: string) => {
  if (!value) {
    return "Обязательное поле";
  } else if (value.length < 2) {
    return "Минимальная длина 2 символа";
  }
  return undefined;
};

const validateDescription = (value: string) => {
  if (!value) {
    return "Обязательное поле";
  } else if (value.length < 10) {
    return "Минимальная длина 10 символов";
  }
  return undefined;
};

const validateDeadline = (value: Date | null) => {
  if (!value) {
    return "Обязательное поле";
  } else if (value < new Date()) {
    return "Дедлайн не может быть раньше текущей даты";
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


export const ProjectCard: FC = () => {
  const toast = useToast();
  const [createProjectMutation, { isLoading, error }] = projectAPI.useAddProjectMutation();
  const dispatch = useAppDispatch();


  const handleSubmit = (values: ProjectForRegistration, actions: any) => {
    const example ={
      ...values,
      startDate: new Date(),
      status: "1",
      tags: ["tag1", "tag2"],
      ownerId: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMTRmYjE3OS1lYzkyLTQzMWEtYTc1MS1mYWJmMDQ1MzIyYTEiLCJpYXQiOjE2NzE0NTI5MzkwMjF9.vvo-IEO6SBMQA-Wu6sq1CJ8q1YKA-6roO_p6_3xu0Fk",
      companyID: "66a8b22c-e3b8-4e14-80f4-69bfe4b21db0"
    }
    createProjectMutation(values as ProjectForRegistration);
    dispatch(createProject(values));
    toast({
      title: "Проект создан",
      status: "success",
      position: "bottom-right",
      duration: 3000,
      isClosable: true,
    });
    actions.setSubmitting(false);
  };

  return (
    <Formik initialValues={{} as ProjectForRegistration} onSubmit={handleSubmit}>
      {(props) => (
        <VStack align="stretch" spacing={4}>
          <FieldRow>
            <FormControl isInvalid={Boolean(props.errors.name) && props.touched.name}>
              <FormLabel htmlFor="name">Название проекта</FormLabel>
              <Field name="name" validate={validateName}>
                {({ field }: FieldProps) => (
                  <Input {...field} id="name" placeholder="Название проекта" />
                )}
              </Field>
              <FormErrorMessage>{props.errors.name}</FormErrorMessage>
            </FormControl>
          </FieldRow>
          <FieldRow>
            <FormControl isInvalid={Boolean(props.errors.description) && props.touched.description}>
              <FormLabel htmlFor="description">Описание проекта</FormLabel>
              <Field name="description" validate={validateDescription}>
                {({ field }: FieldProps) => (
                  <Input
                    {...field}
                    id="description"
                    placeholder="Описание проекта"
                    textarea
                  />
                )}
              </Field>
              <FormErrorMessage>{props.errors.description}</FormErrorMessage>
            </FormControl>
          </FieldRow>
          <FieldRow>
            <FormControl isInvalid={Boolean(props.errors.endDate) && props.touched.endDate}>
              <FormLabel htmlFor="endDate">Дедлайн</FormLabel>
              <Field name="endDate" validate={validateDeadline}>
                {({ field }: FieldProps) => (
                  <Input
                    {...field}
                    id="endDate"
                    type="date"
                  />
                )}
              </Field>
              <FormErrorMessage>{props.errors.endDate}</FormErrorMessage>
            </FormControl>
          </FieldRow>
          <FieldRow>
            <Button
              type="submit"
              isLoading={isLoading}
              // variantColor="teal"
              size="lg"
              width="100%"
              disabled={!props.isValid || !props.dirty}
            >
              Создать проект
            </Button>
          </FieldRow>
          {/* {error && (
            <FieldRow>
              <FormErrorMessage>{error.message}</FormErrorMessage>
            </FieldRow>
          )} */}
        </VStack>
      )}
    </Formik>
  );
};

const CreateProject = () => {
  return (
    <Box mb={32} mt={24}>
      <Center mb={6}>
        <Heading>Создание нового проекта</Heading>
      </Center>
      <ProjectCard />
    </Box>
  );
};

export default CreateProject;