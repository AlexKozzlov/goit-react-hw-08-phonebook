import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signInUser } from "../../redux/operations/authOperation";

import s from "./signIn.module.css";

const initialState = {
  email: "",
  password: "",
};

const SignIn = () => {
  const dispatch = useDispatch();

  const [dataSignIn, setDataSignIn] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDataSignIn({ ...dataSignIn, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signInUser({ ...dataSignIn }));
    setDataSignIn({ ...initialState });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className={s.form}>
        <label>
          E-mail
          <input
            type="text"
            name="email"
            value={dataSignIn.email}
            onChange={handleChange}
          />
        </label>
        <label>
          Password
          <input
            type="password"
            name="password"
            value={dataSignIn.password}
            onChange={handleChange}
          />
        </label>
        <button type="submit" className={s.btn}>
          SignIn
        </button>
      </form>
    </div>
  );
};

export default SignIn;
