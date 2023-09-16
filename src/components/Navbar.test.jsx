import {cleanup, render, screen} from '@testing-library/react';
import Navbar from './Navbar';

afterEach(cleanup);

describe('Header', () => {
  context('when user loads homepage', () => {
    it('shows product name', () => {
      const productName = 'Biscuits';
      render(<Navbar />);

      expect(screen.getByText(productName)).toBeTruthy();
    });
  });
});
