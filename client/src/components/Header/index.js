import React from "react";
import { Link } from "react-router-dom";

import Auth from "../../utils/auth";

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <header>
      <nav className="link-wrapper">
        <Link className="header-links" to="/">
          <h1>Carolina Convo</h1>
        </Link>
        {Auth.loggedIn() && (
          <>
            <a className="header-links" href="/" onClick={logout}>
              Logout
            </a>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
