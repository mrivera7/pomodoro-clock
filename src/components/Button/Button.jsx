/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';

const Button = (props) => (
  <button id={props.id} type="button" onClick={props.onClick}>
    {props.children}
  </button>
);

export default Button;
