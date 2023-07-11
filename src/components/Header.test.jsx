import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header', () => {
  context('when user loads homepage', () => {
    it('shows product name', () => {
      const productName = 'Biscuits';
      render(<Header />);

      expect(screen.getByText(productName)).toBeTruthy();
    });
  });
});
