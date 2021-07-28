import React from 'react';
import { render, cleanup } from '@testing-library/react';
import ButtonPanel from '../ButtonPanel';

let container = null;

beforeEach(() => {
  container = document.createElement('button');
  document.body.appendChild(container);
});

afterEach(cleanup);

it('should render all 19 buttons', () => {
  const { container } = render(<ButtonPanel clickHandler={() => {}} />);
  const buttons = container.getElementsByTagName('button');
  expect(buttons.length).toBe(19);
});
