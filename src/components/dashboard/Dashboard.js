//this is a class-based component
import React, { Component } from "react";
import Notifications from "./Notifications";
import ProjectList from "../projects/ProjectList";
import { connect } from "react-redux"; // connect Redux with store
import { firestoreConnect } from "react-redux-firebase"; //binding to react here; use as higher order component
import { compose } from "redux";
import { Redirect } from "react-router-dom";

class Dashboard extends Component {
  render() {
    // console.log(this.props)
    const { projects, auth } = this.props;
    //check UID for login status - if not logged in, redirect so they can't see
    if (!auth.uid) return <Redirect to="/signin" />;

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
const mapStateToProps = state => {
  // console.log(state);
  return {
    projects: state.firestore.ordered.projects, //these are object properties
    auth: state.firebase.auth //auth status tells whether user is logged in / out
  };
};
//connect is a function that returns a higher order component to take in dashboard
export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: "projects" } //telling it which specific collection to connect with
  ])
)(Dashboard);
