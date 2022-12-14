import { AtSignIcon, InfoIcon, LinkIcon, PhoneIcon } from "@chakra-ui/icons";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  HStack,
  Image,
  Spacer,
  Stack,
  Tag,
  Text,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";
import React, { FC } from "react";
import { Company } from "../../redux/models/Company";
import { companyAPI } from "../../redux/services/CompanyService";

interface Props {
  company: Company;
}

const CompanyCard: FC<Props> = ({ company }) => {
  const parsedTags = company.tags.slice(1, -1).replaceAll('"', "").split(",");
  return (
    <Card key={company.id} width={"full"} direction="row">
      <Image
        src={company.logoUrl}
        alt={company.name}
        boxSize="sm"
        objectFit="cover"
        borderLeftRadius={"inherit"}
      />
      <Stack width={"full"}>
        <CardBody padding={6} paddingBottom={0}>
          <Heading>{company.name}</Heading>
          <Spacer height={1} />
          <HStack>
            <LinkIcon />
            <Button colorScheme={"cyan"} variant="link">
              <Link href={"/"}>example.com</Link>
            </Button>
          </HStack>
          <Spacer height={4} />
          <HStack>
            {parsedTags.map((tag: any) => (
              <Tag key={tag} colorScheme="cyan">
                {tag}
              </Tag>
            ))}
          </HStack>
          <Spacer height={8} />
          <Text>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus
            necessitatibus a illo, nisi, in sit, quis quaerat laboriosam
            architecto iste doloribus totam iure consequatur culpa. Quidem
            ducimus nemo modi vel.
          </Text>
        </CardBody>
        <CardFooter alignItems={"end"} padding={6}>
          <VStack align={"start"}>
            <Button variant={"link"}>
              <AtSignIcon />
              <Spacer width={2} />
              <Link href={`mailto ${company.contacts.email}`}>
                {company.contacts.email}
              </Link>
            </Button>
            <Button variant={"link"}>
              <PhoneIcon />
              <Spacer width={2} />
              <Link href={`tel ${company.contacts.phone}`}>
                {company.contacts.phone}
              </Link>
            </Button>
            <Button variant={"link"}>
              <InfoIcon />
              <Spacer width={2} />
              <Link
                href={`https://www.google.com/maps/place/${company.contacts.address}`}
              >
                {company.contacts.address}
              </Link>
            </Button>
          </VStack>
          <Spacer width={"full"} />
          <Button colorScheme={"cyan"}>
            <Link href={`/companies/${company.id}`}>Подробнее</Link>
          </Button>
        </CardFooter>
      </Stack>
    </Card>
  );
};

export default CompanyCard;
