import React from 'react';
import PropTypes from 'prop-types';
import './myInput.scss';

function MyInput({ value, onChange, placeholder }) {
  return (
    <input value={value} onChange={onChange} placeholder={placeholder} />
  );
}

MyInput.defaultProps = {
  value: '',
  onChange: () => {},
  placeholder: '',
};

MyInput.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
};

export default MyInput;
