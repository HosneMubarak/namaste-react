import { LOGO_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import { Link } from "react-router";

const Header = () => {
  const [loginBtn, setloginBtn] = useState("login");

  useEffect(() => {}, [loginBtn]);

  return (
    <div className="header">
      <div className="logo-container">
        <Link to="/">
          <img className="logo" src={LOGO_URL} alt="logo" />
        </Link>
      </div>
      <div className="nav-item">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About us</Link>
          </li>
          <li>
            <Link to="/contact">Contact us</Link>
          </li>
          <li>Cart</li>
          <li>
            <button
              className="login-btn"
              onClick={() => {
                loginBtn == "login"
                  ? setloginBtn("Logout")
                  : setloginBtn("login");
              }}
            >
              {loginBtn}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
