import { ChangeEvent, FormEvent, useState } from "react";
import styles from "./Login.module.css";
import Input from "../../components/input/input";
import useInput from "../../hooks/useInput";

const Login = () => {
  const userInput = useInput("");
  const emailInput = useInput("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    !userInput.value.trim()
      ? userInput.setError(true)
      : userInput.setError(false);
    !emailInput.value.trim()
      ? emailInput.setError(true)
      : emailInput.setError(false);

    console.log("email ==>", userInput.value, "password ==>", emailInput.value);
  };

  return (
    <div className="w-full">
      <div className="w-6/12 mx-auto">
        <h1 className="text-lg font-semibold">Login</h1>
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder={"Email"}
            label={"Email"}
            errorMessage={"Fill the field"}
            {...userInput}
           
          />

          <Input
            type="email"
            placeholder="Password"
            label="Password"
            errorMessage={"Preencha o campo"}
            {...emailInput}
          />

          <button className="font-semibold border-2 border-black px-14 py-3 hover:bg-violet-600" type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
