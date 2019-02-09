//this is a class-based component
import React, { Component } from "react";
import Notifications from "./Notifications";
import ProjectList from "../projects/ProjectList";
// connect Redux with store
import { connect } from 'react-redux';

class Dashboard extends Component {
  render() {
    // console.log(this.props)
    const { projects } = this.props;

    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <ProjectList projects={projects} />
          </div>
          <div className="col s12 m5 offset-m1">
            <Notifications />
          </div>
        </div>
      </div>
    );
  }
}
//takes in state of store and returns object
const mapStateToProps = (state) => {
  return {
    projects: state.project.projects
  }
}
//connect is a function that returns a higher order component to take in dashboard 
export default connect(mapStateToProps)(Dashboard)
