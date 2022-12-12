import {
  Button,
  Center,
  Flex,
  Grid,
  GridItem,
  Heading,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";
import { ReactNode } from "react";
import { DarkModeSwitch } from "../DarkModeSwitch";

const data = [
  {
    title: "Компания",
    links: [
      {
        title: "О нас",
        href: "/",
      },
      {
        title: "Контакты",
        href: "/",
      },
      {
        title: "Вакансии",
        href: "/",
      },
      {
        title: "Партнеры",
        href: "/companies",
      },
    ],
  },
  {
    title: "Заголовок",
    links: [
      {
        title: "Демо ссылки",
        href: "/",
      },
      {
        title: "Демо ссылки",
        href: "/",
      },
    ],
  },
  {
    title: "Заголовок",
    links: [
      {
        title: "Демо ссылки",
        href: "/",
      },
      {
        title: "Демо ссылки",
        href: "/",
      },
      {
        title: "Демо ссылки",
        href: "/",
      },
    ],
  },
  {
    title: "Заголовок",
    links: [
      {
        title: "Демо ссылки",
        href: "/",
      },
    ],
  },
];

const FooterButton = (props: { children: ReactNode }) => {
  return (
    <Button variant="link" color="gray.400" _hover={{ color: "gray.100" }}>
      {props.children}
    </Button>
  );
};

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
    <Flex width="1200px" marginX="auto">
      <Grid templateColumns={"2fr repeat(4, 1fr)"} width="full">
        <GridItem paddingRight={16}>
          <Heading>Discopus</Heading>
          <Spacer height={4} />
          <Text>
            Мега крутой слоган чтобы все люди читают и такие вообще вау это
            очень круто
          </Text>
          <Spacer height={4} />
          <DarkModeSwitch />
        </GridItem>
        {data.map((item, index) => (
          <GridItem key={index}>
            <Heading size={"md"}>{item.title}</Heading>
            <Spacer height={6} />
            <VStack align={"start"} gap={1}>
              {item.links.map((link, index) => (
                <Link href={link.href} key={index}>
                  <FooterButton>{link.title}</FooterButton>
                </Link>
              ))}
            </VStack>
          </GridItem>
        ))}
      </Grid>
    </Flex>
    <Center>
      <Text>© 2023 Discopus, Inc.</Text>
    </Center>
  </Flex>
);
