import { BrowserRouter } from 'react-router-dom'
import { render, screen, waitFor } from '@testing-library/react';

import ApiService from 'src/services/ApiService';

import { Repos } from './Repos';

jest.mock('src/services/ApiService');

const mockRepos = [
  { id: 1 },
  { id: 2 }
];

describe('Repos component', () => {
  it('should renders amount of repositories', async () => {
    const amountOfRepos = 5;

    render(<Repos count={amountOfRepos} />, { wrapper: BrowserRouter });

    await waitFor(() => {
      expect(screen.getByText(`Repositories: ${amountOfRepos}`)).toBeInTheDocument();
    });
  });

  it('should renders pager component', async () => {
    ApiService.getUserRepos.mockImplementation(() => mockRepos);

    render(<Repos count={2} limit={1} />, { wrapper: BrowserRouter });

    await waitFor(() => {
      expect(screen.getByTestId('pager')).toBeInTheDocument();
    });
  });

  it('should renders list of repositories', async () => {
    ApiService.getUserRepos.mockImplementation(() => mockRepos);

    render(<Repos />, { wrapper: BrowserRouter });

    await waitFor(() => {
      expect(screen.getByTestId('repos-list')).not.toBeEmptyDOMElement();
    });
  });
});
