import React, { useRef } from "react";
import "./SignIn.css";
import { auth } from "../firebase";

const SignIn = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  // Sign up Function
  const signUp = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((user) => {
        console.log(user);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // Sign In Function
  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((user) => {
        console.log("user", user);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="signin">
      <form action="">
        <h1>Sign in</h1>
        <label>Username</label>
        <input ref={emailRef} type="email" />
        <label>Password</label>
        <input ref={passwordRef} type="password" />

        <button id="signInButton" onClick={signIn}>
          Sign in
        </button>
        <h6>
          Not yet register?{" "}
          <span className="signin__link" onClick={signUp}>
            sign up
          </span>
        </h6>
      </form>
    </div>
  );
};
export default SignIn;
