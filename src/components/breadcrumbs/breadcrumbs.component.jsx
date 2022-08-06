/* eslint-disable react/require-default-props */
import PropTypes from 'prop-types';
import useBreadcrumbs from 'use-react-router-breadcrumbs';
import { NavLink } from 'react-router-dom';

import './breadcrumbs.styles.scss';

export default function Breadcrumbs({
  customRoutes = [],
  routesToExclude = [],
}) {
  const breadcrumbs = useBreadcrumbs(customRoutes, {
    excludePaths: routesToExclude,
  });

  return (
    <div className="breadcrumbs">
      {breadcrumbs.map(({ match, breadcrumb }) => (
        <NavLink
          key={match.pathname}
          className={({ isActive }) => (isActive
            ? 'breadcrumbs__link breadcrumbs__link--active'
            : 'breadcrumbs__link')}
          to={match.pathname}
        >
          {breadcrumb}
        </NavLink>
      ))}
    </div>
  );
}

Breadcrumbs.propTypes = {
  customRoutes: PropTypes.arrayOf(
    PropTypes.exact({
      path: PropTypes.string.isRequired,
      breadcrumb: PropTypes.string.isRequired,
    }),
  ),
  routesToExclude: PropTypes.arrayOf(PropTypes.string),
};
