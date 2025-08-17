import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      {/*Navigation bar code from the bootstrap*/}
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand text-decoration-none text-dark" href="/">
            CRUD
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/*Add button to add the user functinality */}
          <Link className="btn btn-outline-dark btn-color-blue" to ="/addUser">
            Add User
          </Link>
        </div>
      </nav>
    </div>
  );
};
