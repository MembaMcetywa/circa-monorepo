"use client";
import React, { useState } from "react";
import TextInput from "../components/TextInput";
import useAuthStore from "../stores/authStore";
import styles from "../auth.module.css";
import Button from "../components/Button";
import axios from "axios";
import Link from "next/link";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const login = useAuthStore((state: any) => state.login);

  const handleLogin = async (e: any) => {
    e.preventDefault();
      try {
        const response = await axios.post(
          "http://localhost:3001/api/login",
          { email, password },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        console.log(response.status);
        if (response.status !== 201) {
          throw new Error("login failed");
        }

        const data = response.data;
        login(data.accessToken, data.refreshToken);
      } catch (err: any) {
        setError(err.message);
      }
  };

  return (
    <div className={styles.container}>
      <h2>Login</h2>
      <form>
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
        <Button onClick={handleLogin}>Login</Button>
      </form>
      <div className={styles['register-container']}>
        <Link className={styles.register} href={"/register"}>
          Register
        </Link>
      </div>
    </div>
  );
};

export default Login;
