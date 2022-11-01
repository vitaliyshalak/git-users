import React from 'react';
import cx from 'classnames';

export const ReposItem = ({ name, description, loading }) => {
  const itemClass = cx('repos__list-item', {
    'repos__list-item--loading': loading
  });

  return (
    <div className={itemClass}>
      <div className="repos__list-item-name">
        {name}
      </div>
      {description}
    </div>
  );
};
