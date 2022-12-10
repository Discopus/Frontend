import {
  Center,
  Flex,
  Grid,
  GridItem,
  Heading,
  Spacer,
  Text,
} from "@chakra-ui/react";

export const Footer = () => (
  <Flex
    as="footer"
    borderTop={"1px"}
    borderColor={"gray.700"}
    direction="column"
    paddingX={4}
    paddingY={12}
    gap={12}
  >
    <Flex width="1188px" marginX="auto">
      <Grid templateColumns={"1.5fr repeat(3, 1fr)"} width="full" gap={10}>
        <GridItem>
          <Heading>Discopus</Heading>
          <Spacer height={4} />
          <Text>
            Мега крутой слоган чтобы все люди читают и такие вообще вау это
            очень круто
          </Text>
        </GridItem>
        <GridItem>
          <Text>Text</Text>
        </GridItem>
        <GridItem>
          <Text>Text</Text>
        </GridItem>
        <GridItem>
          <Text>Text</Text>
        </GridItem>
      </Grid>
    </Flex>
    <Center>
      <Text>© 2023 Discopus Inc.</Text>
    </Center>
  </Flex>
);
