import { AtSignIcon, InfoIcon, LinkIcon, PhoneIcon } from "@chakra-ui/icons";
import {
  Card,
  CardBody,
  Center,
  HStack,
  Stack,
  VStack,
  Image,
  Heading,
  Text,
  Container,
  CardFooter,
  Button,
  Flex,
  Spacer,
  Tag,
  Icon
} from "@chakra-ui/react";
import { SP } from "next/dist/shared/lib/utils";
import Link from "next/link";
import React from "react";
import CompanyCard from "../../components/CompanyCard";

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
      phone: "8-800-555-35-35",
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
  return (
    <>
      <Center marginTop={6}>
        <Heading>
          Компании партнеры
        </Heading>
      </Center>
      <VStack paddingY={12} marginX={"auto"} spacing={12}>
        {data.map((company) => (
          <CompanyCard company = {company}/>
        ))}
      </VStack>
    </>
  );
}

export default Companies;
