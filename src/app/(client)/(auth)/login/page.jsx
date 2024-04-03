"use client";

// import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const Login = () => {
  // const session = useSession();
  // const router = useRouter();
  // useEffect(() => {
  //   if (session?.user) {
  //     router.replace("/admin");
  //   }
  // }, [session]);
  // const loginSubmitHandler = async (e) => {
  //   e.preventDefault();
  //   const result = await signIn("credentials", {
  //     email: e.target[0].value,
  //     password: e.target[1].value,
  //     redirect: true,
  //     callbackUrl: "/admin",
  //   });
  // };
  // const googleSignIn = async (e) => {
  //   e.preventDefault();
  //   console.log(`I am google signin`);
  //   const result = await signIn("google", {
  //     callbackUrl: "/admin",
  //   });
  //   console.log(`result`, { result });
  // };
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
      <h2 className="text-black bg-emerald-300 py-3">Login Page</h2>
      <form
        action=""
        // onSubmit={loginSubmitHandler}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <input type="email" placeholder="email" className="px-2 rounded" />
        <input
          type="password"
          placeholder="password"
          className="px-2 rounded"
        />
        <button type="submit" className="btn bg-amber-500 rounded">
          Login
        </button>
        {/* <button className="btn bg-amber-500 rounded" onClick={googleSignIn}> */}
        <button className="btn bg-amber-500 rounded">Login in google</button>
      </form>
    </div>
  );
};

export default Login;
