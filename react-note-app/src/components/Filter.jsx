import React from "react";

const Filter = ({ handleFilterText }) => {
  return (
    <div className="container mt-4 mb-4">
      <div className="row justify-content-center">
        <div className="col-10 col-sm-8 col-md-6 col-lg-4">
          <select
            className="form-select"
            aria-label="Default select example"
            onChange={(e) => handleFilterText(e.target.value)}
          >
            <option value="">All Notes</option>
            <option value="BUSINESS">Business</option>
            <option value="PERSONAL">Personal</option>
            <option value="IMPORTANT">Important</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Filter;
