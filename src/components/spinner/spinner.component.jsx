/* eslint-disable react/require-default-props */
import PropTypes from 'prop-types';

import './spinner.styles.scss';

export default function Spinner({ size = 'md' }) {
  return (
    <div className={`spinner spinner--${size}`}>
      <div className="spinner__content" />
    </div>
  );
}

Spinner.propTypes = {
  size: PropTypes.string,
};
