import { AtSignIcon, InfoIcon, LinkIcon, PhoneIcon } from "@chakra-ui/icons";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Grid,
  GridItem,
  Heading,
  HStack,
  Image,
  Spacer,
  VStack,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const data = {
  id: "some_id1",
  name: "Skolkovo",
  tags: ["Technology", "Startup", "Data Science", "AI", "ML", "Software"],
  websiteURL: "https://sk.ru",
  logoURL:
    "https://www.timacad.ru/uploads/media/cache/image_sm_resize/uploads/images/20190301/1551464393_skolkovo.png",
  contacts: {
    email: "skolkovo@skolkovo.ru",
    phone: "8-800-555-35-35",
    address: "Russia, Moscow, 3rd Tverskaya-Yamskaya street, 15",
    city: "Moscow",
    country: "some_country",
    zip: "some_zip",
  },
};

function Company() {
  return (
    <Grid
      templateAreas={`"info projects users"
                      "info bar bar"`}
      gridTemplateRows="1fr 1fr"
      gridTemplateColumns={"1fr 1.5fr 1.5fr"}
      gap={4}
      width="6xl"
      marginX="auto"
      marginY={6}
      alignItems="stretch"
      minHeight={"50vh"}
    >
      <GridItem gridArea="info">
        <Card height={"full"}>
          <CardBody>
            <Image src={data.logoURL} alt={data.name} borderRadius={"sm"} />
            <Spacer height={4} />
            <Heading>{data.name}</Heading>
            <Spacer height={1} />
            <HStack>
              <LinkIcon />
              <Button colorScheme={"cyan"} variant="link">
                <Link href={data.websiteURL}>{data.websiteURL}</Link>
              </Button>
            </HStack>
            <Text>
              AAFAFAAFAAFAFAFAFSAFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF
            </Text>
            {/* <VStack align={"start"}>
              <Button variant={"link"}>
                <AtSignIcon />
                <Spacer width={2} />
                <Link href={`mailto ${data.contacts.email}`}>
                  {data.contacts.email}
                </Link>
              </Button>
              <Button variant={"link"}>
                <PhoneIcon />
                <Spacer width={2} />
                <Link href={`tel ${data.contacts.phone}`}>
                  {data.contacts.phone}
                </Link>
              </Button>
              <Button variant={"link"}>
                <InfoIcon />
                <Spacer width={2} />
                <Link
                  href={`https://www.google.com/maps/place/${data.contacts.address}`}
                >
                  <Text overflowWrap={"break-word"}>
                    {data.contacts.address}
                  </Text>
                </Link>
              </Button>
            </VStack> */}
          </CardBody>
        </Card>
      </GridItem>
      <GridItem gridArea="projects">
        <Card height={"full"}>
          <CardHeader>
            <Heading>Projects</Heading>
          </CardHeader>
        </Card>
      </GridItem>
      <GridItem gridArea="users">
        <Card height={"full"}>
          <CardHeader>
            <Heading>Users</Heading>
          </CardHeader>
        </Card>
      </GridItem>
      <GridItem gridArea="bar">
        <Card height={"full"}>
          <CardHeader>
            <Heading>Bar</Heading>
          </CardHeader>
        </Card>
      </GridItem>
    </Grid>
  );
}

export default Company;
