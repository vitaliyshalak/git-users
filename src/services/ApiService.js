import axios from 'axios';

class ApiService {
  async #request({ method = 'GET', path, data }) {
    return axios({
      method,
      url: `${process.env.REACT_APP_API_URL}${path}`,
      data,
    });
  };

  async searchUsers(username) {
    try {
      const { data } = await this.#request({
        path: `/search/users?q=${username}`
      });

      return data;
    } catch (error) {
      console.log(error);
    }
  }

  async getUserRepos({ username, page = 1, limit = 30 }) {
    try {
      const { data } = await this.#request({
        path: `/users/${username}/repos?page=${page}&per_page=${limit}`
      });

      return data;
    } catch (error) {
      console.log(error);
    }
  }

  async getUser(username) {
    try {
      const { data } = await this.#request({
        path: `/users/${username}`
      });

      return data;
    } catch (error) {
      if (error.response.status === 404) {
        return Error('User not found');
      }

      console.log(error);
    }
  }
}

export default new ApiService();
