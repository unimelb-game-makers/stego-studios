import React from "react";
import Header from "./Header.tsx";
import Footer from "./Footer.tsx";
import { Outlet } from "react-router-dom";

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
