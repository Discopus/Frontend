import { Center, Heading, VStack } from "@chakra-ui/react";
import CompanyCard from "../../components/Cards/CompanyCard";
import { CompanyForRegistration } from "../../redux/models/Company";
import { companyAPI } from "../../redux/services/CompanyService";

const data = [
  {
    id: "some_id1",
    name: "Skolkovo",
    tags: ["Technology", "Startup", "Data Science", "AI", "ML", "Software"],
    websiteURL: "https://sk.ru",
    logoURL:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fglobalnetwork.io%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmax_1300x1300%2Fpublic%2F2019-12%2FSKOLKOVO%2520campus.jpg%3Fitok%3DPhFxA6pv&f=1&nofb=1&ipt=f79a35839e5a0deecc77e9fa420f657a656b6e8b140ba99fa289205629e85f8e&ipo=images",
    contacts: {
      email: "skolkovo@skolkovo.ru",
      phone: "8 800 555-35-35",
      address: "Russia, Moscow, 3rd Tverskaya-Yamskaya street, 15",
      city: "Moscow",
      country: "some_country",
      zip: "some_zip",
    },
  },
  {
    id: "some_id2",
    name: "Company 2",
    tags: ["tag1", "tag2", "tag3"],
    websiteURL: "https://google.com",
    logoURL:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fblog.parknews.biz%2Fwp-content%2Fuploads%2F2019%2F12%2FMoscow-City-scaled.jpg&f=1&nofb=1&ipt=b42d37f297d62a0b672e5e72ac78008a089a67c1aa4b5bf855df52bf30737dd1&ipo=images",
    contacts: {
      email: "some_email",
      phone: "some_phone",
      address: "some_address",
      city: "some_city",
      country: "some_country",
      zip: "some_zip",
    },
  },
];

function Companies() {
  // const dispatch = useAppDispatch();
  // const { companies, isLoading, error } = useAppSelector(
  //   (state) => state.companyReducer
  // );

  // useEffect(() => {
  //   dispatch(fetchCompanies());
  // }, []);

  const {
    data: companies,
    isLoading,
    error,
  } = companyAPI.useGetCompaniesQuery();

  const [addCompany, {}] = companyAPI.useAddCompanyMutation();

  const handleCreate = async () => {
    const newCompany: CompanyForRegistration = {
      name: "Skolkovo",
      tags: ["Technology", "Startup", "Data Science", "AI", "ML", "Software"],
      logoUrl: "https://www.newsko.ru/media/5979608/skolkovo.jpg",
      contacts: {
        email: "skolkovo@skolkovo.ru",
        phone: "8 800 555-35-35",
        address: "Сиреневый бульвар, 10",
        city: "Москва",
        country: "Россия",
        zip: "123456",
      },
    };

    await addCompany(newCompany);
  };

  return (
    <>
      <button onClick={handleCreate}>Create</button>
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
}

export default Companies;
