"use client";
import AppProvider from "@/context/AppProvider";
import React from "react";
import { AdminNavbar, AdminFooter } from "@/components/index";

function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <AppProvider>
        <div className=" relative bg-gradient-to-b from-yellow-50 to-gray-50">
          <AdminNavbar />
          {children}
          <AdminFooter />
        </div>
      </AppProvider>
    </div>
  );
}

export default AdminLayout;
