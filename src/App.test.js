import { render, screen } from '@testing-library/react';
import App from './App';

test('renders create react app link', () => {
  render(<App />);
  const linkElement = screen.getByText(/create react app/i);
  expect(linkElement).toBeInTheDocument();
});
