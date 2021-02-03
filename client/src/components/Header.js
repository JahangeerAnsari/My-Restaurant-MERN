import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const token = localStorage.getItem("token");
  const logout = () => {
    localStorage.clear();
    window.location = "/signin";
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link to="/" className="navbar-brand">
        Logo{" "}
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          
          {token === null ? (
            <>
              <li className="nav-item ">
                <Link to="/signup" className="nav-link">
                <i className="fa fa-user-plus"></i>{' '}  Signup
                </Link>
              </li>
              <li className="nav-item">
                <Link to="signin" className="nav-link">
                <i className="fa fa-sign-in-alt"></i>{' '} Signin
                </Link>
              </li>
            </>
          ) : (
            <>
            <li className="nav-item ">
            <Link to="/dashboard" className="nav-link">
            <i className="fa fa-home"></i> DashBoard
            </Link>
          </li>

            <li className="nav-link">
             <span onClick={logout}>
             <i className="fa fa-sign-out-alt"></i>{' '}
 Logout
             </span> 
            </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
