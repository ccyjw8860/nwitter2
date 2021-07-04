import React, { useState } from "react";
import { Redirect } from "react-router-dom";
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
    if (data) {
      <Redirect to="/" />;
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="email"
        name="email"
        placeholder="Write your email"
        value={email}
        onChange={onChange}
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Write your password"
        value={password}
        onChange={onChange}
        required
      />
      <input type="submit" value="Sign In" />
    </form>
  );
};

export default CreateAccount;
