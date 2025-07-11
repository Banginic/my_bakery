"use client";
import React, { createContext, useState } from "react";

type UserType = {
  name: string;
  email: string;
  password?: string;
};
interface ContextType {
  showSidebar: boolean;
  setSidebar: React.Dispatch<React.SetStateAction<boolean>>;
  adminSidebar: boolean;
  setAdminSidebar: React.Dispatch<React.SetStateAction<boolean>>;
  showEditOrder: boolean;
  setEditOrder: React.Dispatch<React.SetStateAction<boolean>>;
  user: UserType | null;
  setUser: React.Dispatch<React.SetStateAction<UserType | null>>;
}

export const AppContext = createContext<ContextType | null>(null);

function AppProvider({ children }: { children: React.ReactNode }) {
  const [showSidebar, setSidebar] = useState(false);
  const [adminSidebar, setAdminSidebar] = useState(false);
  const [showEditOrder, setEditOrder] = useState(false);
  const [user, setUser] = useState<UserType | null>(null);

  console.log(adminSidebar);
  const values = {
    showSidebar,
    setSidebar,
    adminSidebar,
    setAdminSidebar,
    showEditOrder,
    setEditOrder,
    user,
    setUser,
  };
  return <AppContext value={values}>{children}</AppContext>;
}

export default AppProvider;
