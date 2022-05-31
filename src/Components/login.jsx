import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const tempcredentials = {
    username: "salman",
    password: "Test@123",
  };

  const [errorMessage, setErrorMessage] = useState({
    username: "",
    password: "",
    authenticationError: "",
  });
  const [credential, setCredential] = useState({
    username: "",
    password: "",
  });

  const goToDashboard = () => {
    navigate("/dashboard");
  };
  const validate = (e) => {
    e.preventDefault();
    // form validation

    if (credential.username === "" || credential.username.length < 5) {
      // alert("Name can't be blank");
      setErrorMessage({
        username: "Username should be atleast 5 characters ",
      });
      return false;
    } else if (credential.password.length < 6) {
      // alert("Password must be at least 6 characters long.");
      setErrorMessage({
        password: "password should be atleast 6 characters long",
      });
      return false;
    }

    // temp authentication

    if (
      credential.username === tempcredentials.username &&
      credential.password === tempcredentials.password
    ) {
      navigate("/dashboard");
    } else {
      setErrorMessage({
        authenticationError: "incorrect username and password",
      });
    }
  };

  return (
    <div>
      <form>
        <label htmlFor="">Name:</label>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          onChange={(e) => {
            setCredential({
              ...credential,
              username: e.target.value,
            });
          }}
        />
        <br />
        {errorMessage.username && (
          <p style={{ color: "red" }}>invalid username</p>
        )}
        <label>Password:</label>
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          onChange={(e) => {
            setCredential({
              ...credential,
              password: e.target.value,
            });
          }}
        />
        <br />
        {errorMessage.password && (
          <p style={{ color: "red" }}>invalid password</p>
        )}
        <button onClick={validate}>Login</button>
        {errorMessage.authenticationError && (
          <p style={{ color: "red" }}>Invalid Username and Password</p>
        )}
      </form>
    </div>
  );
};
export default Login;
