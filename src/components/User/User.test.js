import { BrowserRouter } from 'react-router-dom'
import { render, screen, waitFor } from '@testing-library/react';

import ApiService from 'src/services/ApiService';

import { User } from './User';

jest.mock('src/services/ApiService');

describe('User component', () => {
  it('should shows an error when user not found', async () => {
    const errorMessage = 'User not found';

    ApiService.getUser.mockImplementation(() => new Error(errorMessage));

    render(<User />, { wrapper: BrowserRouter });

    await waitFor(() => {
      expect(screen.getByText(errorMessage)).toBeInTheDocument();
    });
  });

  it('should renders user profile', async () => {
    const mockUser = {
      name: 'John Doe',
    };

    ApiService.getUser.mockImplementation(() => mockUser);

    render(<User />, { wrapper: BrowserRouter });

    await waitFor(() => {
      expect(screen.getByText(mockUser.name)).toBeInTheDocument();
    });
  });
});
