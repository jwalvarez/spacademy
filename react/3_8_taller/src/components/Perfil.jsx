import PropTypes from "prop-types";
import React, { Component } from "react";
import "./styles/Perfil.css";

export default class Perfil extends Component {
  render() {
    const { description, info } = this.props;
    return (
      <div className="perfil">
        <img src="https://placeimg.com/192/192/people" alt="" />
        <span>{description}</span>
        <h2>{info}</h2>
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
