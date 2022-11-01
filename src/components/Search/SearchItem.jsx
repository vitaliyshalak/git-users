import React from 'react';
import { Link } from 'react-router-dom';

export const SearchItem = ({ login, avatar_url }) => (
  <Link to={`/${login}`} className="search__user-item">
    <img className="search__user-item-avatar" src={avatar_url} alt="" />
    {login}
  </Link>
);
