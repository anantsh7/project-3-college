import React, { Component } from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import Card from "./Card";
import SearchForm from "./SearchForm";
import CollegeDetail from "./CollegeDetail";
import API from "../utils/API";

class DataContainer extends Component {
  state = {
    data: [],
    search: ""
  };

  componentDidMount() {
    this.searchColleges("");
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

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.searchColleges(this.state.search);
  };

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-12">
            <Card heading="Search for a college to receive more info!">
              <SearchForm
                value={this.state.search}
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
              />
            </Card>
          </Col>
          {this.state.data.length ? (this.state.data.map(res => (
            <Col size="md-4">
              <Card
                heading="">
                <CollegeDetail
                  name={res.school.name}
                  city={res.school.city}
                  state={res.school.state}
                  all={res.latest.student.enrollment.all}
                  cost={res.latest.cost.attendance.academic_year}
                />
              </Card>
            </Col>
          ))) : ""}
        </Row>
      </Container>
    );
  }
}

export default DataContainer;
