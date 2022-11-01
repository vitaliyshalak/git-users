import React from 'react';
import cx from 'classnames';

import Icon from '../Icon';

import './styles.scss';

export const Loader = ({ className }) => {
  const loaderClass = cx('loader', className);

  return (
    <Icon size={36} className={loaderClass} name="loader" />
  );
}
