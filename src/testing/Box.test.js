import { render, screen } from '@testing-library/react';
import Box from '../components/Box';

test("Hay un contador en box", () => {
  render(<Box />);
  const itemContador = screen.getByText(/Contador/i)
  expect(itemContador).toBeInTheDocument();
});
