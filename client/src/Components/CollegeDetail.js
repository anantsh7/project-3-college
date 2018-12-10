import React from "react";
import { Link } from "react-router-dom";

const CollegeDetail = props => (

  // <div className="text-center">

  //   <h3>Name:{props.name}</h3>
  //   <h3>City:{props.city}</h3>
  //   <h3>Zip:{props.zip}</h3> 
  // </div>
  <div className="school results-card" data-compare="false">
    <span data-bind="school_container"></span>
    <div className="content-box">
      <div className="investigation-major-wrapper" data-bind="under_investigation" aria-hidden="true">
      </div>
      <div className="results-card-headings">
        <div>
          <Link className="link" to={'/school/' + props.name}>{props.name}</Link>
        </div>
        <br></br>
        <ul className="school-info">
          <li className="location">
            <span data-bind="city">{props.city}</span>,
          <span data-bind="state">{props.state}</span>
          </li>
          <li>
            <span data-bind="size_number">{props.all}</span> Undergraduates
        </li>
        </ul>
      </div>
      <Link className="link" to={'/school/' + props.name}>View More Details</Link>
      <h6>Login required to view more details</h6>
      <Link className="link" to="/login">Login</Link>
      <br></br>
      <Link className="link" to="/signup">Signup</Link>
    </div>
  </div>
);

export default CollegeDetail;
