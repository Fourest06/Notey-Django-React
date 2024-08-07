import React from 'react';
import { FaSquarePlus } from "react-icons/fa6";
import { Link } from "react-router-dom";

const NavBar = ({ searchText, handleSearchText }) => {
  return (
    <nav className="navbar bg-body-tertiary py-3">
      <div className="container d-flex justify-content-between align-items-center">
        <Link className="navbar-brand" to="/">
          <h4 className="fw-bold">Notey</h4>
        </Link>
        
        <div className="d-flex flex-grow-1 justify-content-center mx-3" style={{ maxWidth: "350px" }}>
          <div className="input-group input-group-sm">
            <input
              className="form-control"
              placeholder="Search"
              value={searchText}
              onChange={(e) => handleSearchText(e.target.value)}
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </div>
        </div>

        <Link to="/add-note" className="btn btn-outline-primary d-flex align-items-center">
          <FaSquarePlus className="me-2 fs-4 d-none d-md-block" />
          <span className="d-none d-md-inline">Add Notes</span>
          <FaSquarePlus className="d-block d-md-none fs-4" />
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
