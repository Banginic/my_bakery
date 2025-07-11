"use client";
import React, { useContext } from "react";
import { adminNavlinks } from "@/assets/data";
import { Navlinks, Hamburger, Sidebar, Logo, User } from "./index";
import { AppContext } from "@/context/AppProvider";
import Link from "next/link";

function AdminNavbar() {
  const { adminSidebar, setAdminSidebar } = useContext(AppContext)!;
  return (
    <header className="h-[13dvh] flex lg:py-8 items-center relative bg-gradient-to-t from-yellow-50 to-yellow-50/50">
      <nav className="flex items-center justify-between px-6 lg:justify-around w-full">
        <Link href={"/admin"}>
          <Logo />
        </Link>
        <Navlinks navlinks={adminNavlinks} />
        <div className="flex items-center gap-4">
          <Hamburger
            isSidebarOpen={adminSidebar}
            setSidebar={setAdminSidebar}
          />
        </div>
        <div className="hidden lg:block">
          <User />
        </div>
      </nav>
      <div>
        <Sidebar
          isSidebarOpen={adminSidebar}
          setSidebar={setAdminSidebar}
          navlinks={adminNavlinks}
        />
      </div>
    </header>
  );
}

export default AdminNavbar;
