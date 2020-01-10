/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';

const SubmitButton = (props) => (
  <button id={props.id} type="submit" onClick={props.onClick()}>
    {props.value}
  </button>
);

export default SubmitButton;
