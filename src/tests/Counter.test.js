// import necessary react testing library helpers here
import { fireEvent, render, screen } from '@testing-library/react';
// import the Counter component here
import Counter from '../components/App';

beforeEach(() => {
  // Render the Counter component here
  render(<Counter />);
})

test('renders counter message', () => {
  const welcomeMessage = screen.getByText(/count/i);
  expect(welcomeMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  expect(screen.getByTestId(/count/).textContent).toEqual("0");
});

test('clicking + increments the count', () => {
  fireEvent.click(screen.getByRole('button', { name: '+' }))
  expect(screen.getByTestId(/count/).textContent).toEqual("1");
});

test('clicking - decrements the count', () => {
  fireEvent.click(screen.getByRole('button', { name: '-' }))
  expect(screen.getByTestId(/count/).textContent).toEqual("-1");
});
