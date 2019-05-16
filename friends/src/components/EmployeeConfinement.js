import React, { Component } from "react";
import { getEmployees } from "../actions";

import { connect } from "react-redux";
class EmployeeConfinement extends Component {
  componentDidMount() {
    console.log(this.props,"AAAAAAAAAAAAAAAAAAAAAAAAAA");
    this.props.getEmployees();
  }
  render() {
      console.log('this.propsADFADFADFADFAD', this.props)
    return (
        <div>
            {this.props.employees && (this.props.employees.map((emp,i)=><h1 key={i}>{emp.name}</h1>))}
        </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state,"AAAAAAAAAAAAAAAAAAAAAAA");
  return {
    employees: state.empReducer.employees
  };
};

export default connect(
  mapStateToProps,
  { getEmployees }
)(EmployeeConfinement);
