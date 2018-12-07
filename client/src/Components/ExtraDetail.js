import React, { Component } from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import API from "../utils/API";
import { Redirect } from "react-router-dom";

var divStyle = {
    width: "50%",
    left: "0"
}

class ExtraDetail extends Component {
  constructor() {
    super();
  }

  state = {
    data: [],
  }

  // Check login status on load
  componentDidMount() {
    this.searchColleges(this.props.match.params.schoolname)
  }

  searchColleges = query => {
    API.search(query)
      .then(res => {
        var dataObj = {
          id: res.data.results[0].id,
          school: res.data.results[0].school,
          latest: res.data.results[0].latest,
        }
        const schoolData = [...this.state.data, dataObj]
        this.setState({
          data: schoolData
        })
        console.log(schoolData)
      })
      .catch(err => console.log(err));
  };

  render() {
    console.log(sessionStorage.getItem("isAuthenticated"))
    if (sessionStorage.getItem("isAuthenticated") != 1) {
      return <Redirect to="/login" />
    }
    return (
      <Container>
        <Row>
          {this.state.data.length ? (this.state.data.map(res => (
            <Col size="md-12">
              <div>
                <h2>Name: {res.school.name}</h2>
                <h3>City: {res.school.city}</h3>
                <h3>State: {res.school.state}</h3>
                <h3>Zip: {res.school.zip}</h3>
                <h3>Numer of Branches: {res.school.branches}</h3>
              </div>
              <div>
                <h2>Academic Info:</h2>
                <div style={divStyle}>
                <h3>SAT Scores: </h3>
                <ul> <h4>25th Percentile Scores</h4>
                  <li>Critical Reading: {res.latest.admissions.sat_scores["25th_percentile"].critical_reading}</li>
                  <li>Math: {res.latest.admissions.sat_scores["25th_percentile"].math}</li>
                  <li>Writing: {res.latest.admissions.sat_scores["25th_percentile"].writing}</li>
                </ul>
                <ul> <h4>75th Percentile Scores</h4>
                  <li>Critical Reading: {res.latest.admissions.sat_scores["75th_percentile"].critical_reading}</li>
                  <li>Math: {res.latest.admissions.sat_scores["75th_percentile"].math}</li>
                  <li>Writing: {res.latest.admissions.sat_scores["75th_percentile"].writing}</li>
                </ul>
                </div>
              </div>
              <div style={divStyle}>
              <h3>ACT Scores: </h3>
                <ul> <h4>25th Percentile Scores</h4>
                  <li>English: {res.latest.admissions.act_scores["25th_percentile"].english}</li>
                  <li>Math: {res.latest.admissions.act_scores["25th_percentile"].math}</li>
                  <li>Writing: {res.latest.admissions.act_scores["25th_percentile"].writing}</li>
                </ul>
                <ul> <h4>75th Percentile Scores</h4>
                  <li>English: {res.latest.admissions.act_scores["75th_percentile"].english}</li>
                  <li>Math: {res.latest.admissions.act_scores["75th_percentile"].math}</li>
                  <li>Writing: {res.latest.admissions.act_scores["75th_percentile"].writing}</li>
                </ul>
              </div>
            </Col>
          ))) : ""}
        </Row>
      </Container>
    )
  }

};

export default ExtraDetail;
