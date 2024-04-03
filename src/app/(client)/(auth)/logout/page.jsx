"use client";

// import { signOut } from "next-auth/react";
import Link from "next/link";
import React from "react";

const Logout = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {" "}
      <h2 className="bg-red-500 py-3">Logout Page</h2>
      <form action="" className="flex flex-col gap-3 p-4">
        {/* <Link href={"/api/auth/signout"} className="btn bg-amber-500 rounded">
          Logout
        </Link> */}
        <Link href={"/signout"} className="btn bg-amber-500 rounded">
          Logout
        </Link>
        {/* <button
          className="btn bg-amber-500 rounded"
        >
          Logout
        </button> */}
      </form>
    </div>
  );
};

export default Logout;
