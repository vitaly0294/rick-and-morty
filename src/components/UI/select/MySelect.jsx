import React from 'react';
import PropTypes from 'prop-types';
import style from './mySelect.module.scss';

function MySelect({
  options, defaultValue, value, onChange, name, nameSelect,
}) {
  return (
    <div className={style.wrap}>
      {nameSelect !== '' && (
        <h3 className={style.title}>
          {`${nameSelect.toUpperCase()}: `}
        </h3>
      )}

      <select
        name={name}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className={style.select}
      >
        {defaultValue !== '' && <option disabled>{defaultValue}</option>}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.name.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
}

MySelect.defaultProps = {
  options: [{ value: 'value', name: 'name' }],
  defaultValue: '',
  value: '',
  onChange: () => {},
  name: '',
  nameSelect: '',
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
  nameSelect: PropTypes.string,
};

export default MySelect;
