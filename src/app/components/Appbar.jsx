"use client";

// import { signIn, signOut, useSession } from "next-auth/react";

// import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const AppBar = () => {
  // const { data: session } = useSession();
  // console.log(`session`, session);
  // console.log(`user`, session?.user);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      {" "}
      <div
        style={{
          display: "flex",
          gap: "20px",
        }}
      >
        <Link className="text-amber-800 hover:text-sky-700" href={"/"}>
          Home
        </Link>
        <Link className="text-amber-800 hover:text-sky-700" href={"/admin"}>
          Admin Panel
        </Link>
        <Link className="text-amber-800 hover:text-sky-700" href={"/user"}>
          User Panel
        </Link>
      </div>
      <div
        style={{
          display: "flex",
          gap: "20px",
        }}
      >
        {/* {session?.user ? ( */}
        {/* <> */}
        {/* <p className="text-sky-600"> {session.user.name}</p> */}
        <p className="text-sky-600"></p>
        <Link href={"/signup"}>
          <button className="text-gray-600">
            {/* onClick={() => signIn()}> */}
            Sign up
          </button>
        </Link>
        {/* </> */}
        {/* ) : ( */}
        <Link href={"/login"}>
          <button className="text-green-600">
            {/* onClick={() => signIn()}> */}
            Sign In
          </button>
        </Link>

        <Link href={"/logout"}>
          <button className="text-red-500">
            {/*onClick={() => signOut()}>*/}
            Sign Out
          </button>
        </Link>
        {/* )} */}
      </div>
    </div>
  );
};

export default AppBar;
