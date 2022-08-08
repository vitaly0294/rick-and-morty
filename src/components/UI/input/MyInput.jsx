/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import './myInput.scss';

function MyInput(props) {
  return (
    <input {...props} />
  );
}

export default MyInput;
