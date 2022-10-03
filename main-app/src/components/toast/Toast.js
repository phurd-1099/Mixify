import { useState, useEffect } from "react";
import PropTypes from "prop-types";

import "./Toast.css";

const Toast = (props) => {
  const { position, title, description, show, buttonTitle } = props;

  const goHome = () => {
    localStorage.clear("Token");
    window.location.replace("http://localhost:3000");
  };
  return (
    <div className={show}>
      <div className={`notification-container ${position}`}>
        <div className={`notification toast ${position}`}>
          <div className="notification-image"></div>
          <div>
            <p className="notification-title">{title}</p>
            <p className="notification-message">{description}</p>
          </div>
          <button onClick={goHome}>{buttonTitle}</button>
        </div>
      </div>
    </div>
  );
};

export default Toast;
