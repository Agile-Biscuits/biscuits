import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  context('when user loads homepage', () => {
    it('shows product name', () => {
      render(<App />);
      const linkElement = screen.getByText('Welcome to Agile Biscuits App')
      expect(linkElement).toBeTruthy();
    });
  });
});
