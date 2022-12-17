import { Center, Heading, Text, VStack } from "@chakra-ui/react";
import { SerializedError } from "@reduxjs/toolkit";
import { FetchBaseQueryError } from "@reduxjs/toolkit/dist/query";
import { FC } from "react";
import { UniversityCard } from "../../components/Cards/UniversityCard";
import { useAuth } from "../../redux/hooks/useAuth";
import { University } from "../../redux/models/University";
import { universityAPI } from "../../redux/services/UniversityService";

type UniversitiesProps = {
  universities: University[] | undefined;
  isLoading: boolean;
  error: FetchBaseQueryError | SerializedError | undefined;
};

const UniversitiesList: FC<UniversitiesProps> = ({
  universities,
  isLoading,
  error,
}) => {
  return (
    <>
      {isLoading && <div>Loading...</div>}
      {error && <div>Ошибка</div>}
      {universities &&
        universities.map((university) => (
          <UniversityCard university={university} key={university.id} />
        ))}
    </>
  );
};

function Universities() {
  const {
    data: universities,
    isLoading,
    error,
  } = universityAPI.useGetCompaniesQuery();
  const { user } = useAuth();
  return (
    <>
      <Center marginTop={6}>
        <Heading>Университеты партнеры</Heading>
      </Center>
      <VStack paddingY={12} spacing={12} width="full">
        {user ? (
          <UniversitiesList
            universities={universities}
            isLoading={isLoading}
            error={error}
          />
        ) : (
          <Text>Войдите в аккаунт, чтобы увидеть информацию</Text>
        )}
      </VStack>
    </>
  );
}

export default Universities;
