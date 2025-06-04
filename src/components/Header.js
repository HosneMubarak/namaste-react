import { LOGO_URL } from "../utils/constants";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/userContext";

const Header = () => {
  const [loginBtn, setloginBtn] = useState("login");
  const onlineStatus = useOnlineStatus();
  const { LoggedInUser } = useContext(UserContext);
  console.log(useContext(UserContext));

  useEffect(() => {}, [loginBtn]);

  return (
    <div className="flex justify-between bg-pink-100 shadow">
      <div className="logo-container">
        <Link to="/">
          <img className="w-40" src={LOGO_URL} alt="logo" />
        </Link>
      </div>
      <div className="nav-item flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">
            <a href="#">Online Status: {onlineStatus ? "✅" : "🔴"}</a>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About us</Link>
          </li>
          <li>
            <Link to="/contact">Contact us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4">Cart</li>
          <li className="px-4">
            <button
              className=""
              onClick={() => {
                loginBtn == "login"
                  ? setloginBtn("Logout")
                  : setloginBtn("login");
              }}
            >
              {loginBtn}
            </button>
          </li>
          <li className="px-4">{LoggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
