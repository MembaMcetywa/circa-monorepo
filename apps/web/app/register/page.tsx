"use client";
import React, { useState } from "react";
import TextInput from "../components/TextInput";
import useAuthStore from "../store/authStore";
import styles from "../auth.module.css";
import Button from "../components/Button";


const Register: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const login = useAuthStore((state) => state.login);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

  };

  return (
    <div className={styles.container}>
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
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
        <Button onClick={() => console.log('registration')}>Register</Button>
      </form>
    </div>
  );
};

export default Register;
