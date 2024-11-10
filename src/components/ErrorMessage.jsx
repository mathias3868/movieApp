/* eslint-disable react/prop-types */
import React from "react";

const ErrorMessage = ({ message }) => {
  return (
    <p>
      <span>📛</span>
      <span>{message}</span>
    </p>
  );
};

export default ErrorMessage;
