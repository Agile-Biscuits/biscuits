import { render, screen } from '@testing-library/react';
import Navbar from './Navbar';

describe('Header', () => {
  context('when user loads homepage', () => {
    it('shows product name', () => {
      const productName = 'Biscuits';
      render(<Navbar />);

      expect(screen.getByText(productName)).toBeTruthy();
    });
  });
});
