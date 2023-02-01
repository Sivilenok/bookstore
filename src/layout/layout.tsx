import { Outlet } from "react-router-dom";
import { Footer, Header } from "../components";
import { Container } from "../ui";


export const Layout = () => (
    <Container>
      <Header />
      <Outlet />
      <Footer />
    </Container>
  );