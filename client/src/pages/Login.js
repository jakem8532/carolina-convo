import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";
import Auth from "../utils/auth";

const Login = () => {
  const [formState, setFormState] = useState({ email: "", password: "" });

  const [login, { error }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });

    console.log({ ...formState });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    console.log({ ...formState });

    try {
      const { data } = await login({
        variables: { ...formState },
      });

      console.log(data);

      Auth.login(data.login.token);
    } catch (e) {
      console.log(e);
    }

    // clear form values
    setFormState({
      email: "",
      password: "",
    });
  };

  return (
    <main className="login-page">
      <div className="login-window">
        <h4 className="login-title">Login</h4>
        <div className="login-body">
          <form onSubmit={handleFormSubmit}>
            <input
              className="form-input"
              placeholder="Your email"
              name="email"
              type="email"
              id="email"
              value={formState.email}
              onChange={handleChange}
            ></input>
            <input
              className="form-input"
              placeholder="Password"
              name="password"
              type="password"
              id="password"
              value={formState.password}
              onChange={handleChange}
            />
            <div>
              <p className="no-account">(If you dont have an account </p>
              <Link className="no-account" to="/signup">
                Signup)
              </Link>
            </div>
            <button className="login-submit" type="submit">
              submit
            </button>
            {error && <div>Login failed</div>}
          </form>
        </div>
      </div>
    </main>
  );
};

export default Login;
