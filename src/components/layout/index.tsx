import { Header } from "../header";
import { Outlet } from "react-router-dom";
import { ArrowUp } from "../arrowUp";
import { Footer } from "../footer";

export function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <ArrowUp />
      <Footer />
    </>
  );
}
