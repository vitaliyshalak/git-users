import React, { useCallback } from 'react';
import cx from 'classnames';

export const PagerItem = ({ value, selected, onClick }) => {
  const itemClass = cx('pager__item', {
    'pager__item--selected': selected === `${value}`
  });

  const onPageChange = useCallback(
    () => onClick({ page: value }),
    [value, onClick]
  );

  return (
    <div className={itemClass} onClick={onPageChange}>
      {value}
    </div>
  );
}
