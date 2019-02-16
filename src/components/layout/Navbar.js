import React from "react";
import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
import { connect } from "react-redux";

const Navbar = props => {
  const { auth } = props; //destructuring by taking auth property from props
  console.log(auth);
  const links = auth.uid ? <SignedInLinks /> : <SignedOutLinks />; //stores component dependent on status
  
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to="/" className="brand-logo">
          Fresh Perspective
        </Link>
        {links}
      </div>
    </nav>
  );
};

const mapStateToProps = state => {
  console.log(state);
  return {
    auth: state.firebase.auth //we return different content depending on this status
  };
};

export default connect(mapStateToProps)(Navbar);
