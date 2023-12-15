import { Container } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { Footer } from "../components/layout/Footer";
import { Header } from "../components/layout/Header";

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
