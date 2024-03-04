import { useState } from "react";
import { CART_LOGO, LOGOUT_ICON, LOGO_URL } from "../utils/constant";
import { LOGIN_ICON } from "../utils/constant";
import { Link } from "react-router-dom";
let Header = () => {
  const [loginout, setLogInOut] = useState(LOGIN_ICON);
  return (
    <div className="header">
      <div>
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="Nav-Items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>Offer</li>
          <li>
            <Link to="/contact">Help</Link>
          </li>
          <li>
            <img width={22} src={CART_LOGO} />
          </li>
          <li>
            <img
              className="login_img"
              onClick={() => {
                loginout === LOGIN_ICON
                  ? setLogInOut(LOGOUT_ICON)
                  : setLogInOut(LOGIN_ICON);
              }}
              width={35}
              src={loginout}
            ></img>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
