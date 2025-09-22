import Header from "./header.tsx";
import Footer from "./footer.tsx";
import { Outlet } from "@tanstack/react-router";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
