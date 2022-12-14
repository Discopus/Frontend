import { Center, Heading, VStack } from "@chakra-ui/react";
import CompanyCard from "../../components/Cards/CompanyCard";

const data = [
  {
    id: "hse",
    name: "Высшая Школа Экономики",
    tags: ["Data Science", "AI", "ML", "Business", "Economics"],
    websiteURL: "https://www.hse.ru",
    logoURL:
      "https://ksonline.ru/wp-content/uploads/2016/01/01_06_MBA_Myasnitskaya_9_11.jpg",
    contacts: {
      email: "hse@hse.ru",
      phone: "8 495 771-32-32",
      address: "Россия, Москва, Покровский бульвар, д. 11",
      city: "Moscow",
      country: "Russia",
      zip: "some_zip",
    },
  },
  {
    id: "itmo",
    name: "Национальный исследовательский ИТМО",
    tags: ["IT", "Cybernatics", "Quantum", "Cybersecurity", "Software"],
    websiteURL: "https://itmo.ru",
    logoURL: "https://smapse.ru/storage/2020/10/itmo-spb-smapse1.png",
    contacts: {
      email: "od@itmo.ru",
      phone: "+7 812 480-00-00",
      address: "Россия, Санкт-Петербург, Кронверкский проспект, д.49, литер А.",
      city: "Moscow",
      country: "Russia",
      zip: "some_zip",
    },
  },
];

function Universities() {
  return (
    <>
      <Center marginTop={6}>
        <Heading>Университеты партнеры</Heading>
      </Center>
      <VStack paddingY={12} spacing={12} width="full">
        {data.map((company) => (
          <CompanyCard company={company} key={company.id} />
        ))}
      </VStack>
    </>
  );
}

export default Universities;
