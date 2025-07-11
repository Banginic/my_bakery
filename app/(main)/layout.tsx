"use client";
import AppProvider from "@/context/AppProvider";
import React from "react";
import { Navbar, Footer } from "@/components/index";

function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <AppProvider>
        <div className=" relative">
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
      </AppProvider>
    </div>
  );
}

export default MainLayout;
