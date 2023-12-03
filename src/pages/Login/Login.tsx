import { ChangeEvent, FormEvent, useState } from "react";
import styles from "./Login.module.css";
import Input from "../../components/input/input";
import useInput from "../../hooks/useInput";

const Login = () => {
  const userInput = useInput('');
  const emailInput = useInput('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    !userInput.value.trim() ? userInput.setError(true) : userInput.setError(false); 
    !emailInput.value.trim() ? emailInput.setError(true) : emailInput.setError(false);

    console.log('email ==>', userInput.value, 'password ==>', emailInput.value);
  };

  return (
    <div className={styles.container}>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>

        <Input
          type="text"
          placeholder={"Email"}
          label={"Email"}
          errorMessage={"Fill the field"}
          { ... userInput}
        />

        <Input
          type="email"
          placeholder="Password"
          label="Password"
          errorMessage={"Preencha o campo"}
          { ... emailInput}
        />

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Login;
