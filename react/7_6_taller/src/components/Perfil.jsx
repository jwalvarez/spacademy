import PropTypes from "prop-types";
import React, { Component } from "react";
import "./styles/Perfil.css";

export default class Perfil extends Component {
  render() {
    const { description, info, data } = this.props;
    return (
      <div className="perfil">
        <img src={data["picture"]} alt="" />
        <span>{description}</span>
        <h2>{data[info] || "Seleccione una opción"}</h2>
      </div>
    );
  }
}
