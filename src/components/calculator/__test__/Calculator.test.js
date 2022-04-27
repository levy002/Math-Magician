import { render, fireEvent, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Calculator from '../Calculator';

it('renders "AC" on Quotes link', () => {
  render(<Calculator />);
  const linkElement = screen.getByText("Let's do some Maths");
  expect(linkElement).toBeTruthy();
});

it('renders correctly', () => {
  const tree = renderer.create(<Calculator />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('contains exactly 20 buttons', () => {
  render(<Calculator />);

  const buttons = screen.getAllByRole('button');

  expect(buttons.length).toBe(20);
});

it('returns the correct result after a {2, +, 2, =} operation', () => {
  render(<Calculator />);
  const calcscreen = screen.getByTestId(/calc-screen/);
  const twoButton = screen.getByText(/2/);
  const plusButton = screen.getByText(/^[+]$/);
  const equalButton = screen.getByText(/=/);

  fireEvent.click(twoButton);
  fireEvent.click(plusButton);
  fireEvent.click(twoButton);
  fireEvent.click(equalButton);

  expect(calcscreen.textContent).toBe('4');
});

it('returns the correct result after a {4, ÷, 2, =} operation', () => {
  render(<Calculator />);
  const calcscreen = screen.getByTestId(/calc-screen/);
  const oneButton = screen.getByText(/4/);
  const plusButton = screen.getByText(/^[÷]$/);
  const twoButton = screen.getByText(/2/);
  const equalButton = screen.getByText(/=/);

  fireEvent.click(oneButton);
  fireEvent.click(plusButton);
  fireEvent.click(twoButton);
  fireEvent.click(equalButton);

  expect(calcscreen.textContent).toBe('2');
});
