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
          <div className="compare-school">
            <button type="button" className="button button-compare_schools" data-bind="selected_school" aria-label="Add to Compare" data-school="compare-schools" aria-pressed="" data-school-id="196255" data-school-name={props.name} aria-describedby="tip-compare-add">
              <i className="fa fa-star tooltip-target"></i>
              <span className="sr-only">Add to Compare</span>
            </button>
          </div>
        </div>
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
    </div>
  </div>
);

export default CollegeDetail;
