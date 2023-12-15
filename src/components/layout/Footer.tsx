import { Container, Link, Stack, Text } from "@chakra-ui/react";

export function Footer() {
  return (
    <Container as="footer" maxWidth="container.xl">
      <Stack my={5}>
        <Text align="center">
          Made by <Link href="https://www.abur.io/">Aburio</Link>
        </Text>
      </Stack>
    </Container>
  );
}
