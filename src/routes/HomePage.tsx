import { Container, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";

interface Props {
  name: string;
}

export function HomePage({ name }: Props) {
  return (
    <Container>
      <h1>Bienvenue {name}</h1>
      <Flex>
        <Link to="/list-details">Détails</Link>
      </Flex>
    </Container>
  );
}
