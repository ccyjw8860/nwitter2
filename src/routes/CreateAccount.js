import React, { useState } from "react";
import { authService } from "../myBase";

const CreateAccount = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };
  const onSubmit = async (event) => {
    event.preventDefault();
    const data = await authService.createUserWithEmailAndPassword(
      email,
      password
    );
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="email"
        placeHolder="Write your email"
        value={email}
        onChange={onChange}
        required
      />
      <input
        type="password"
        placeHolder="Write your email"
        value={password}
        onChange={onChange}
        required
      />
      <input type="submit" value="Sign In" />
    </form>
  );
};

export default CreateAccount;
