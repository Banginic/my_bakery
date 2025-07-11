import React from "react";
import Link from "next/link";

function User() {
  return (
    <div>
      <Link href={'/admin/login'} className="bg-black text-yellow-300 py-2 px-4 rounded cursor-pointer hover:scale-x-105">
        Login
      </Link>
    </div>
  );
}

export default User;
