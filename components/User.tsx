"use client";
import React, { useContext } from "react";
import Link from "next/link";
import { AppContext } from "@/context/AppProvider";
import { useRouter } from "next/navigation";

function User() {
  const router = useRouter()
  const { user, setUser } = useContext(AppContext)!;
  return (
    <div>
      {user ? (
        <button
          onClick={() => {
            localStorage.clear();
            setUser(null)
            router.push('/admin/sign-in')
          }}
          className="border border-gray-400 rounded px-4 py-2 cursor-pointer hover:bg-gray-100 trans"
        >
          Log out
        </button>
      ) : (
        <Link
          href={"/admin/sign-in"}
          className={ `${!user && 'hidden'} bg-black text-yellow-300 py-2 px-4 rounded cursor-pointer hover:scale-x-105`}
        >
          Login
        </Link>
      )}
    </div>
  );
}

export default User;
