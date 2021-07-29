/* eslint-disable react/forbid-foreign-prop-types */
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import PropTypes from 'prop-types';
import renderer from 'react-test-renderer';
import Button from '../Button';

let container = null;

beforeEach(() => {
  container = document.createElement('button');
  document.body.appendChild(container);
});

afterEach(cleanup);

it('should render one button', () => {
  const { container } = render(<Button key={5} handleClick={() => {}} name="5" />);
  const buttons = container.getElementsByTagName('button');
  expect(buttons.length).toBe(1);
});

it("should render a button of type 'button'", () => {
  const tree = renderer
    .create(<Button key={5} handleClick={() => {}} name="5" />)
    .toJSON();
  expect(tree.type).toBe('button');
});

test('Button value should be 5', () => {
  const { container } = render(<Button key={5} handleClick={() => {}} name="5" />);
  const buttons = container.getElementsByTagName('button');
  expect(buttons[0].textContent).toBe('5');
});

test('Prop types should be required', () => {
  expect(Button.propTypes.name).toBe(PropTypes.string.isRequired);
  expect(Button.propTypes.handleClick).toBe(PropTypes.func.isRequired);
});
