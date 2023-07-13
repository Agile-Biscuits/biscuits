import { cleanup, render, screen, fireEvent } from '@testing-library/react';
import { Router, useNavigate, MemoryRouter } from 'react-router-dom';
import Navbar from './Navbar';

afterEach(cleanup);

const NavbarComponent = () => {
  const navigate = useNavigate();
  return (
      <Navbar />
  );
};

describe('Navbar', () => {
  context('when user loads homepage', () => {
    it('shows product name', () => {
      const productName = 'Biscuits';
      render(<MemoryRouter><NavbarComponent /></MemoryRouter>);
      expect(screen.getByText(productName)).toBeTruthy();
    });
    xit('navigates to envelopes page on pencil icon click', () => {
      render(<MemoryRouter><NavbarComponent /></MemoryRouter>);

      // Simulate a click on the pencil icon link
      fireEvent.click(screen.getByTestId('navbar-edit-icon'));

      // Check that the content changed to the new page
      expect(window.location.pathname).toBe('/envelopes');
    });
    xit('navigates back to home page on pencil icon click twice', () => {
      render(<MemoryRouter><NavbarComponent /></MemoryRouter>);

      // Simulate a click on the pencil icon link
      fireEvent.click(screen.getByTestId('navbar-edit-icon'));

      // Check that the content changed to the new page
      expect(window.location.pathname).toBe('/envelopes');

      // Simulate a click on the pencil icon link again
      fireEvent.click(screen.getByTestId('navbar-edit-icon'));

      // Check that the content changed back to the Home page
      expect(window.location.pathname).toBe('/');
    });
  });
});
