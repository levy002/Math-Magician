import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Home from '../Home';

test('renders "The history of mathematics" on homepage link', () => {
  render(<Home />);
  const linkElement = screen.getByText(/The history of mathematics/i);
  expect(linkElement).toBeTruthy();
});

it('renders correctly', () => {
  const tree = renderer.create(<Home />).toJSON();
  expect(tree).toMatchSnapshot();
});
