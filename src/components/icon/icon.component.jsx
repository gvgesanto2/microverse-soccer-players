import PropTypes from 'prop-types';

import sprite from '../../assets/images/sprite.svg';
import './icon.styles.scss';

export default function Icon({ iconName, size }) {
  return (
    <svg className={`icon--${size}`}>
      <use xlinkHref={`${sprite}#${iconName}`} />
    </svg>
  );
}

Icon.propTypes = {
  iconName: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
};
