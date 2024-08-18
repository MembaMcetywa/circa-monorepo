"use client";
import React, { useState } from "react";
import TextInput from "../components/TextInput";
import useAuthStore from "../store/authStore";
import styles from "../auth.module.css";
import Button from "../components/Button";
import axios from "axios";


const Register: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const login = useAuthStore((state) => state.login);

const handleRegister = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    const response = await axios.post(
      "http://localhost:3001/api/register",
      { email, password },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(response.status)
    if (response.status !== 201) {
      throw new Error("Registration failed");
    }

    const data = response.data;
    login(data.accessToken, data.refreshToken);
  } catch (err: any) {
    setError(err.message);
  }
};

  return (
    <div className={styles.container}>
      <h2>Register</h2>
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
        <Button className={styles.button} onClick={handleRegister}>Register</Button>
      </form>
    </div>
  );
};

export default Register;
