import { Box, Center, Heading } from "@chakra-ui/react";

const Index = () => (
  <Box height="100vh">
    <Center paddingY="30vh">
      <Heading
        bgGradient={`linear(to-r, cyan.400, blue.500, purple.600)`}
        bgClip="text"
        fontSize={"5xl"}
        height="20vh"
      >
        Добро пожаловать на главную страницу Discopus
      </Heading>
    </Center>
  </Box>
);

export default Index;
