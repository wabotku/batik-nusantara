// Login.tsx

import React, { useEffect, useState } from "react";

const Login: React.FC = () => {
  const [darkMode] = useState(false);
  const [username, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEmail("");
    setPassword("");

    // Perform login logic with email and password
    // try {
    //   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/1`, {
    //     method: "GET",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   });
    //   const data = await res.json();
    //   console.log(data.userId);
    // } catch (err) {
    //   console.log(err);
    // }
  };

  return (
    <div className="container w-full md:w-1/4 mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="username" className="block text-lg font-medium mb-1">
            Username
          </label>
          <input
            id="username"
            value={username}
            onChange={handleUsernameChange}
            className={`border border-gray-300 px-3 py-2 w-full ${
              darkMode ? "bg-neutral-900 text-white" : "bg-white text-black"
            }`}
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-lg font-medium mb-1">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            className={`border border-gray-300 px-3 py-2 w-full ${
              darkMode ? "bg-neutral-900 text-white" : "bg-white text-black"
            }`}
            required
          />
        </div>
        <button
          type="submit"
          className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
