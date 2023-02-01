import { Outlet } from "react-router-dom";
import { Container } from "../../ui";
import { Footer }  from "../footer/footer";
import { Header } from "../header/header";

export const Layout = () => (
    <Container>
      <Header />
      <Outlet />
      <Footer />
    </Container>
  );