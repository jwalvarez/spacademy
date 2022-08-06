import PropTypes from "prop-types";
import React, { Component } from "react";
import "./styles/Perfil.css";

export default class Perfil extends Component {
  render() {
    const email = this.props.email;
    return (
      <div className="perfil">
        <img src="https://placeimg.com/192/192/people" alt="" />
        <span>My email address is</span>
        <h2>{email}</h2>
      </div>
    );
  }
}

Perfil.propTypes = {
  email: PropTypes.string.isRequired,
};

Perfil.defaultProps = {
  email: "youremail@domain.com",
};
