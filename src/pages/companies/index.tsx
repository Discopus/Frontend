import { Center, Heading, Text, VStack } from "@chakra-ui/react";
import { SerializedError } from "@reduxjs/toolkit";
import { FetchBaseQueryError } from "@reduxjs/toolkit/dist/query";
import { NextPage } from "next";
import { FC } from "react";
import CompanyCard from "../../components/Cards/CompanyCard";
import { useAuth } from "../../redux/hooks/useAuth";
import { Company } from "../../redux/models/Company";
import { companyAPI } from "../../redux/services/CompanyService";

// export const getServerSideProps: GetServerSideProps =
//   wrapper.getServerSideProps((store) => async (context) => {
//     await store.dispatch(companyAPI.endpoints.getCompanies.initiate());
//     return {
//       props: {},
//     };
//   });

type CompaniesProps = {
  companies: Company[] | undefined;
  isLoading: boolean;
  error: FetchBaseQueryError | SerializedError | undefined;
};

const CompaniesList: FC<CompaniesProps> = ({ companies, isLoading, error }) => {
  return (
    <>
      {isLoading && <div>Loading...</div>}
      {error && <div>Ошибка</div>}
      {companies &&
        companies.map((company) => (
          <CompanyCard company={company} key={company.id} />
        ))}
    </>
  );
};

const Companies: NextPage = () => {
  const {
    data: companies,
    isLoading,
    error,
  } = companyAPI.useGetCompaniesQuery();
  const { user } = useAuth();

  return (
    <>
      <Center marginTop={6}>
        <Heading>Компании партнеры</Heading>
      </Center>
      <VStack paddingY={12} spacing={12} width="full">
        {!user && <Text>Войдите в аккаунт, чтобы увидеть информацию</Text>}
        {user && (
          <CompaniesList
            companies={companies}
            isLoading={isLoading}
            error={error}
          />
        )}
      </VStack>
    </>
  );
};

export default Companies;
