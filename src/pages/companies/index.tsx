import { Center, Heading, VStack } from "@chakra-ui/react";
import { GetServerSideProps, NextPage } from "next";
import CompanyCard from "../../components/Cards/CompanyCard";
import { companyAPI } from "../../redux/services/CompanyService";
import { wrapper } from "../../redux/store";

// export const getServerSideProps: GetServerSideProps =
//   wrapper.getServerSideProps((store) => async (context) => {
//     await store.dispatch(companyAPI.endpoints.getCompanies.initiate());
//     return {
//       props: {},
//     };
//   });

const Companies: NextPage = () => {
  const {
    data: companies,
    isLoading,
    error,
  } = companyAPI.useGetCompaniesQuery();

  return (
    <>
      <Center marginTop={6}>
        <Heading>Компании партнеры</Heading>
      </Center>
      <VStack paddingY={12} spacing={12} width="full">
        {isLoading && <div>Loading...</div>}
        {error && <div>Ошибка</div>}
        {companies &&
          companies.map((company) => (
            <CompanyCard company={company} key={company.id} />
          ))}
      </VStack>
    </>
  );
};

export default Companies;
