import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Quotes from '../Quotes';

test('renders "Albert Einstein" on Quotes link', () => {
  render(<Quotes />);
  const paragraphElement = screen.getByText(/georg/i);
  expect(paragraphElement).toBeTruthy();
});

it('renders correctly', () => {
  const tree = renderer.create(<Quotes />).toJSON();
  expect(tree).toMatchSnapshot();
});
