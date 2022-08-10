import React from 'react';
import PropTypes from 'prop-types';
import styles from './error.module.scss';
import { getRandomKey } from '../../utils/pages';

function Error({ errors }) {
  return (
    <div className={styles.error}>
      {errors.length
        ? (
          <>
            <h2 className={styles.title}>
              Что то пошло не так, попробуйте позже.
            </h2>
            {errors.map((error) => (
              <ol key={() => getRandomKey()} className={styles.list}>
                <li className={styles.item}>
                  {`Ошибка: ${error.message}.`}
                </li>
              </ol>
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
