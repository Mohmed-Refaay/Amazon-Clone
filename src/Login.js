import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./login.css";
import { auth } from "./firebase";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://chicagocrusader.com/wp-content/uploads/sites/2/2020/04/Amazon-Logo_Dark-Background-Feature.jpg"
        />
      </Link>

      <div className="login__container">
        <h1>Sign in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
          />
          <h5>Password</h5>
          <input
            value={password}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={login} type="submit">
            Sign In
          </button>
        </form>
        <p>
          By siging-in you agree to Amazon's conditions of Use & Sale. Please
          see you Privacy Notice, our Cookies Notice and our Interest=Based Ads
          Notice.
        </p>
        <button onClick={register}>Creat you Amazon Account</button>
      </div>
    </div>
  );
}

export default Login;
