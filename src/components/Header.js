import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header = () => {
  const [loginBtn, setloginBtn] = useState("login");
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="logo" />
      </div>
      <div className="nav-item">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
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
