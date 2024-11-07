import React, { ReactNode } from "react";
import Navigation from "../Navigation";
import Footer from "../Footer";

interface LayoutProps {
    children: ReactNode;
  }

function Layout({ children }: LayoutProps) {
  return (
    <div>
      <Navigation />
      <div>{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
