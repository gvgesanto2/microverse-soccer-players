/* eslint-disable react/require-default-props */
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

import Breadcrumbs from '../breadcrumbs/breadcrumbs.component';
import Icon from '../icon/icon.component';

import './breadcrumbs-bar.styles.scss';

export default function BreadcrumbsBar({
  customRoutes = [],
  routesToExclude = [],
}) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1);
  };

  return (
    <nav className="breadcrumbs-bar">
      <div className="breadcrumbs-bar__desktop">
        <Breadcrumbs
          customRoutes={customRoutes}
          routesToExclude={routesToExclude}
        />
      </div>

      <button
        onClick={handleClick}
        type="button"
        className="breadcrumbs-bar__btn"
      >
        <Icon iconName="chevron-left" size="sm" />
        <span>Back</span>
      </button>
    </nav>
  );
}

BreadcrumbsBar.propTypes = {
  customRoutes: PropTypes.arrayOf(
    PropTypes.exact({
      path: PropTypes.string.isRequired,
      breadcrumb: PropTypes.string.isRequired,
    }),
  ),
  routesToExclude: PropTypes.arrayOf(PropTypes.string),
};
