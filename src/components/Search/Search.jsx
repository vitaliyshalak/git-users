import React, { useState } from 'react';

import ApiService from 'src/services/ApiService';

import Icon from '../Icon';
import Loader from '../Loader';
import { SearchItem } from './SearchItem';

import './styles.scss';

export const Search = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);

  const onSearch = async (event) => {
    event.preventDefault();
    const username = event.target.username.value;

    if (username.length) {
      setLoading(true);
      const { items } = await ApiService.searchUsers(event.target.username.value);
      setUsers(items);
      setLoading(false);
    }
  };

  return (
    <div className="search">
      <form className="search__form" onSubmit={onSearch}>
        <Icon name="users" className="search__form-icon" />
        <input
          type="text"
          name="username"
          autoComplete="off"
          className="search__form-input"
          placeholder="Type username"
        />
        <button
          type="submit"
          disabled={loading}
          className="search__form-btn"
        >
          SEARCH
        </button>
      </form>
      <div className="search__users-list">
        {loading ? <Loader className="search__loader" /> : users.map(user => (
          <SearchItem key={user.id} {...user} />
        ))}
      </div>
    </div>
  );
};
