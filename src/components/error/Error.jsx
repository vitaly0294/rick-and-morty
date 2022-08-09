import React from 'react';
import PropTypes from 'prop-types';
import './error.scss';
import { getRandomKey } from '../../utils/pages';

function Error({ errors }) {
  return (
    <div className="error">
      {errors.length
        ? (
          <>
            <h2>
              Что то пошло не так, попробуйте позже.
            </h2>
            {errors.map((error) => (
              <div key={() => getRandomKey()}>
                <p>
                  {`Ошибка: ${error.message}.`}
                </p>
              </div>
            ))}
          </>
        )
        : ''}
    </div>
  );
}

Error.defaultProps = {
  errors: [],
};

Error.propTypes = {
  errors: PropTypes.arrayOf(PropTypes.shape),
};

export default Error;
