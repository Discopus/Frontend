import { Center, Heading, VStack } from "@chakra-ui/react";
import { FC } from "react";
import CompanyCard from "../../components/Cards/CompanyCard";
import { Company } from "../../redux/models/Company";

export const companies = [
  {
    id: "1",
    name: "Сбербанк",
    logoUrl: "https://yamobi.ru/i/posts/rec018874/0_big.jpg",
    websiteUrl: "https://www.sberbank.ru/",
    contacts: {
      email: "info@sber.ru",
      phone: "+7 (999) 999-99-99",
      address: "г. Москва, ул. Ленина, д. 1",
      city: "Москва",
      country: "Россия",
      zip: "123456",
    },
  },
  {
    id: "2",
    name: "Сколково",
    logoUrl: "https://www.newsko.ru/media/5979608/skolkovo.jpg",
    websiteUrl: "https://www.sk.ru/",
    contacts: {
      email: "info@sk.ru",
      phone: "+7 (999) 999-99-99",
      address: "г. Москва, ул. Ленина, д. 1",
      city: "Москва",
      country: "Россия",
      zip: "123456",
    },
  },
];

type CompaniesProps = {
  companies: Company[] | undefined;
};

const CompaniesList: FC<CompaniesProps> = ({ companies }) => {
  return (
    <>
      {companies &&
        companies.map((company) => (
          <CompanyCard company={company} key={company.id} />
        ))}
    </>
  );
};

const Companies = () => {
  return (
    <>
      <Center marginTop={6}>
        <Heading>Компании партнеры</Heading>
      </Center>
      <VStack paddingY={12} spacing={12} width="full">
        <CompaniesList companies={companies} />
      </VStack>
    </>
  );
};

export default Companies;
