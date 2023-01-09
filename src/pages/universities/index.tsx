import { Center, Heading, Text, VStack } from "@chakra-ui/react";
import { SerializedError } from "@reduxjs/toolkit";
import { FetchBaseQueryError } from "@reduxjs/toolkit/dist/query";
import { FC } from "react";
import { UniversityCard } from "../../components/Cards/UniversityCard";
import { useAuth } from "../../redux/hooks/useAuth";
import { University } from "../../redux/models/University";
import { universityAPI } from "../../redux/services/UniversityService";


export const universities = [
  {
    id: "1",
    name: "Высшая Школа Экономики",
    tags: ["Data Science", "AI", "ML", "Business", "Economics"],
    logoURL: "https://ksonline.ru/wp-content/uploads/2016/01/01_06_MBA_Myasnitskaya_9_11.jpg",
    contacts: {
      email: "hse@hse.ru",
      address: "Покровский бульвар, д. 11",
      city: "Москва",
      country: "Россия",
      zip: "123456",
    },
  },
  {
    id: "2",
    name: "Национальный исследовательский ИТМО",
    tags: ["IT", "Cybernatics", "Quantum", "Cybersecurity", "Software"],
    logoURL: "https://smapse.ru/storage/2020/10/itmo-spb-smapse1.png",
    contacts: {
      email: "od@itmo.ru",
      address: "Кронверкский проспект, д.49",
      city: "Москва",
      country: "Россия",
      zip: "123456",
    },
  },
];

type UniversitiesProps = {
  universities: University[] | undefined;
};

const UniversitiesList: FC<UniversitiesProps>  = ({ universities }) => {
  return (
    <>
      {universities &&
        universities.map((university) => (
          <UniversityCard university={university} key={university.id} />
        ))}
    </>
  );
};

const Universities = () => {
  return (
    <>
      <Center marginTop={6}>
        <Heading>Университеты партнеры</Heading>
      </Center>
      <VStack paddingY={12} spacing={12} width="full">
          <UniversitiesList universities={universities} />
      </VStack>
    </>
  );
};

export default Universities;
