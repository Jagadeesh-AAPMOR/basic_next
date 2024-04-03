"use client";

import { useRouter } from "next/navigation";
import React from "react";

const Signup = () => {
  const router = useRouter();

  // const hanldeSubmit = async (e) => {
  //   e.preventDefault();
  //   console.log(`e`, e);
  //   console.log(`e.target`, e.target[0].value, e.target[1].value);
  //   try {
  //     // const response = await axios.post("/api/users/signup", values);
  //     const response = await fetch("/api/users/signup", {
  //       method: "POST",
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         email: e.target[0].value,
  //         password: e.target[1].value,
  //       }),
  //     });
  //     // console.log("Login success", response.data);
  //     router.push("/login");
  //   } catch (error) {
  //     console.log("Signup failed", error.message);
  //   }
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
      <h2 className="bg-slate-500 py-3">Signup Page</h2>
      <form
        // onSubmit={hanldeSubmit}
        action=""
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <input
          type="email"
          placeholder="email"
          className="px-2 rounded text-black"
        />
        <input
          type="password"
          placeholder="password"
          className="px-2 rounded text-black"
        />
        <button type="submit" className="btn bg-amber-500 rounded">
          Sign up
        </button>
      </form>
    </div>
  );
};

export default Signup;
