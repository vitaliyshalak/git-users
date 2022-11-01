import React, { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';

import { PagerItem } from './PagerItem';

import './styles.scss';

export const Pager = ({ items, limit }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const selected = useMemo(() => {
    if (!searchParams.get('page')) return '1';
    return searchParams.get('page');
  }, [searchParams]);

  const pages = useMemo(
    () => Math.ceil(items / limit) || 0,
    [items, limit]
  );

  if (pages > 1)

  return (
    <div className="pager" data-testid="pager">
      {[...Array(pages).keys()].map((item) => (
        <PagerItem
          key={item}
          value={item + 1}
          selected={selected}
          onClick={setSearchParams}
        />
      ))}
    </div>
  );
};
