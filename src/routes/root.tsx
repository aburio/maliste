import { Container } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { Footer } from "../components/layout/footer";
import { Header } from "../components/layout/header";

export default function Root() {
  return (
    <>
      <Header />
      <Container as="main" maxWidth="container.xl">
        <Outlet />
      </Container>
      <Footer />
    </>
  );
}
