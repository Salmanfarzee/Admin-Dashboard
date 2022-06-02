import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useApi } from "../utils/restutil";

const Login = () => {
  const { post } = useApi();
  const navigate = useNavigate();
  const tempcredentials = {
    email: "salman",
    password: "Test@123",
  };

  const [errorMessage, setErrorMessage] = useState({
    email: "",
    password: "",
    authenticationError: "",
  });
  const [credential, setCredential] = useState({
    email: "",
    password: "",
  });

  const validate = (e) => {
    e.preventDefault();
    // form validation

    if (credential.email === "" || credential.email.length < 5) {
      // alert("Name can't be blank");
      setErrorMessage({
        email: "email should be atleast 5 characters ",
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
    post("users/login", credential)
      .then((res) => {
        console.log(res);
        console.log("successfully logged in ");
        localStorage.setItem("accessToken", res.data.accessToken);
        localStorage.setItem("refreshToken", res.data.refreshToken);
        navigate("/");
      })
      .catch((e) => {
        console.log(e);
      });
    // if (
    //   credential.email === tempcredentials.email &&
    //   credential.password === tempcredentials.password
    // ) {
    //   navigate("/dashboard");
    // } else {
    //   setErrorMessage({
    //     authenticationError: "incorrect email and password",
    //   });
    // }
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
              email: e.target.value,
            });
          }}
        />
        <br />
        {errorMessage.email && <p style={{ color: "red" }}>invalid email</p>}
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
          <p style={{ color: "red" }}>Invalid email and Password</p>
        )}
      </form>
    </div>
  );
};
export default Login;
