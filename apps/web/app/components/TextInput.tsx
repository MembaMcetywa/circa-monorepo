import React from "react";
import styles from "./TextInput.module.css";

interface TextInputProps {
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  label?: string;
  error?: string;
  required?: boolean;
}

const TextInput: React.FC<TextInputProps> = ({
  type,
  placeholder,
  value,
  onChange,
  name,
  label,
  error,
  required = false,
}) => {
  return (
    <div className={styles.container}>
      {label && <label htmlFor={name}>{label}</label>}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
        id={name}
        required={required}
        className={`${styles.input} ${error ? styles["input-error"] : ""}`}
      />
      {error && <span className={styles["input-error"]}>{error}</span>}
    </div>
  );
};

export default TextInput;
