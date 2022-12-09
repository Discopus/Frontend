import {
  Box,
  Card,
  CardHeader,
  Center,
  Grid,
  GridItem,
  Heading,
} from "@chakra-ui/react";
import React from "react";

const data = {
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
      marginTop={12}
    >
      <GridItem gridArea="info">
        <Card height={"full"}>
          <CardHeader>
            <Heading>{data.name}</Heading>
          </CardHeader>
        </Card>
      </GridItem>
      <GridItem gridArea="projects">
        <Card>
          <CardHeader>
            <Heading>Projects</Heading>
          </CardHeader>
        </Card>
      </GridItem>
      <GridItem gridArea="users">
        <Card>
          <CardHeader>
            <Heading>Users</Heading>
          </CardHeader>
        </Card>
      </GridItem>
      <GridItem gridArea="bar">
        <Card>
          <CardHeader>
            <Heading>Bar</Heading>
          </CardHeader>
        </Card>
      </GridItem>
    </Grid>
  );
}

export default Company;
