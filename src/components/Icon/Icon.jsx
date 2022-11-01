import React from 'react';
import cx from 'classnames';
import Feather from 'feather-icons/dist/feather-sprite.svg';

import './styles.scss';

export const Icon = ({ name, size = 20, className, onClick, ...props }) => {
  const iconClass = cx(
    'icon',
    className,
    { 'icon--pointer': !!onClick }
  );

  return (
    <i className={iconClass} onClick={onClick} {...props}>
      <svg
        width={size}
        height={size}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <use href={`${Feather}#${name}`} />
      </svg>
    </i>
  );
};
