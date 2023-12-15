import { Container, Stack } from "@chakra-ui/react";

export function Header() {
  return (
    <Container as="header" maxWidth="container.xl">
      <Stack
        verticalAlign="middle"
        minH="80px"
        maxWidth="container.xl"
        direction={["row"]}
      ></Stack>
    </Container>
  );
}
