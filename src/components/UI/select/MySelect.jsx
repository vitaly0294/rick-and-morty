import React from 'react';
import './mySelect.scss';
import PropTypes from 'prop-types';

function MySelect({
  options, defaultValue, value, onChange, name,
}) {
  return (
    <select
      name={name}
      value={value}
      onChange={(event) => onChange(event.target.value)}
    >
      {defaultValue !== ''
        ? <option disabled>{defaultValue}</option>
        : ''}
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  );
}

MySelect.defaultProps = {
  options: [{ value: 'value', name: 'name' }],
  defaultValue: '',
  value: '',
  onChange: () => {},
  name: '',
};

MySelect.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string,
    name: PropTypes.string,
  })),
  defaultValue: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  name: PropTypes.string,
};

export default MySelect;
