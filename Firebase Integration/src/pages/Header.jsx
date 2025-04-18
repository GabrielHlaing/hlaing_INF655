import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { UserAuth } from "../components/context/AuthContext";

export default function Header() {
  const { logout } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/signIn");
      alert("You are logged out");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="header">
        <h1>Firebase Integration Assignment</h1>
        <nav>
          <ul>
            <li>
              <NavLink to="/home">Home</NavLink>
            </li>
            <li>
              <NavLink to="/signIn">Register</NavLink>
            </li>
            <li>
              <NavLink onClick={handleLogout}>Logout</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}