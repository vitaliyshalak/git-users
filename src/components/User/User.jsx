import React, { useEffect, useState, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import ApiService from 'src/services/ApiService';

import Loader from '../Loader';
import Repos from '../Repos';
import Icon from '../Icon';

import './styles.scss';

export const User = () => {
  const [user, setUser] = useState();
  const [error, setError] = useState(null);
  const { id } = useParams();

  const navigate = useNavigate();

  const fetchUser = useCallback(async () => {
    const result = await ApiService.getUser(id);

    if (result.message) {
      setError(result.message);
    } else {
      setUser(result);
    }
  }, [id]);

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div className="user">
      {(!user && !error) && (
        <Loader className="user__loader" />
      )}
      {error && (
        <div className="user__error">
          {error}
        </div>
      )}
      {user && (
        <>
          <div className="user__profile">
            <Icon
              name="arrow-left"
              className="user__profile-back"
              onClick={() => navigate('/')}
            />
            <img
              src={user.avatar_url}
              alt=""
              className="user__profile-img"
            />
            <div className="user__profile-info">
              {user.name && (
                <div className="user__profile-name">
                  {user.name}
                </div>
              )}
              <div className="user__profile-login">
                {user.login}
              </div>
              {user.bio && (
                <div className="user__profile-bio">
                  {user.bio}
                </div>
              )}
            </div>
          </div>
          <div className="user__repos">
            <Repos username={id} count={user.public_repos} />
          </div>
        </>
      )}
    </div>
  );
};
