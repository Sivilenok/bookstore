import { createHashRouter, createRoutesFromElements, Route } from "react-router-dom";
import { Layout } from "../layout/layout";
import { BookPage } from "../pages/book/book-page";
import { MainPage } from "../pages/main/main-page";
import { ROUTE } from "./routes";

export const router = createHashRouter(
  createRoutesFromElements(
    <Route element={<Layout />} path={ROUTE.ROOT}>
      <Route element={<MainPage />} index/>
      <Route element={<BookPage />} path={ROUTE.OFFER} />
      <Route element={<BookPage />} path={ROUTE.DETAILS} />
      <Route element={<BookPage />} path={ROUTE.TERMS} />
      
    </Route>
  )
);
