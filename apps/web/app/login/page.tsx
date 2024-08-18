"use client";
import React, { useState } from "react";
import TextInput from "../components/TextInput";
import useAuthStore from "../store/authStore";
import styles from "../auth.module.css";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const login = useAuthStore((state) => state.login);

  const handleLogin = async (e: any) => {
    e.preventDefault();
  };

  return (
    <div className={styles["auth-container"]}>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <TextInput
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          label="Email"
          required
        />
        <TextInput
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          label="Password"
          required
        />
        {error && <p className={styles["error-text"]}>{error}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
