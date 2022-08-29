import React from "react";
import { Footer } from "../Footer";
import { Header } from "../Header";

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">{children}</main>
      <Footer />
    </>
  );
};
