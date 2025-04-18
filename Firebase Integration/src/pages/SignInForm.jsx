import React, { useState } from "react";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../components/context/AuthContext";

export default function SignInForm() {
  const [showRegisterForm, setShowRegisterForm] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const { createUser, signIn } = UserAuth();

  const onFormSwitch = () => {
    setShowRegisterForm((prevState) => !prevState);
    setEmail("");
    setPassword("");
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const data = { name, email, password, confirmPassword };
    console.log(data);
    try {
      await createUser(email, password).then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        navigate("/home");
      });
    } catch (err) {
      console.log(err);
    }
    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  const onSignIn = async (e) => {
    e.preventDefault();
    try {
      await signIn(email, password);
      navigate("/home");
      alert("Signed in Successfully!")
    } catch (err) {
      console.log(err);
    }
  };

  const renderForm = () => {
    if (showRegisterForm) {
      return (
        <>
          <h2>Register</h2>
          <form className="inForm" onSubmit={onSubmit}>
            <input
              description="Name"
              type="text"
              className="nameInput"
              placeholder="Enter Your Full Name"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              description="Email"
              type="email"
              className="emailInput"
              placeholder="Enter Your Email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              description="Password"
              type="password"
              className="password"
              placeholder="Enter Your Password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              description="Confirm Password"
              type="password"
              className="password"
              placeholder="Confirm Your Password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <button className="logbtn" >Register</button>
            <div>
              <p>Already have an account ?</p>
              <Link to="#" className="links"  onClick={onFormSwitch}>
                Login here!
              </Link>
            </div>
          </form>
        </>
      );
    }
    return (
      <>
        <h2>Log In</h2>
        <form onSubmit={onSignIn}>
          <input
            description="Email"
            type="email"
            className="emailInput"
            placeholder="Enter Your Email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            description="Password"
            type="password"
            className="password"
            placeholder="Enter Your Password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="logbtn" > Log In</button>

          <div>
            <Link to="/forgot-password" className="links">
              Forgot Password?
            </Link>
            <p>Don't have an account ?</p>
            <Link to="#" id="registerLink" className="links" onClick={onFormSwitch}>
              Register Here!
            </Link>
          </div>
        </form>
      </>
    );
  };

  return <div className="loginForm">{renderForm()}</div>;
}