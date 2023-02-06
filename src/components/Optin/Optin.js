import React, { Component } from "react";
import "./Optin.css";

class Optin extends Component {
  modal() {
    const modal = document.getElementById("modal");
    modal.classList.toggle("is_open");
  }

  render() {
    return (
      <div className="optin">
        <h4>Call - <a className="tel" href="tel:3314805906">3314805906</a> </h4>
        <h4>Piazza Spotorno, 02, 20159 Milano MI</h4>
        <h4>Tuesday - Sunday: 09:30 - 12:30 , 13:30 - 19:30</h4>
      </div>
    );
  }
}

export default Optin;
