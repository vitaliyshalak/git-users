import React, { useEffect, useCallback, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import ApiService from 'src/services/ApiService';

import Pager from '../Pager';
import Loader from '../Loader';
import { ReposItem } from './ReposItem';

import './styles.scss';

export const Repos = ({ username, count, limit = 30 }) => {
  const [searchParams] = useSearchParams();
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);

  const page = searchParams.get('page');

  const fetchRepos = useCallback(async (page) => {
    setLoading(true);
    setRepos(await ApiService.getUserRepos({ username, page, limit }));
    setLoading(false);
  }, [username, limit]);

  useEffect(() => {
    fetchRepos(page);
  }, [page]);

  return (
    <div className="repos">
      <div className="repos__count">
        Repositories: {count}
        {loading && <Loader className="repos__loader" />}
      </div>
      <div className="repos__list" data-testid="repos-list">
        {repos.map(repo => (
          <ReposItem key={repo.id} {...repo} loading={loading} />
        ))}
      </div>
      {!!repos.length && <Pager items={count} limit={limit} />}
    </div>
  );
};
