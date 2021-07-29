/* eslint-disable react/forbid-foreign-prop-types */
import React from 'react';
import { render } from '@testing-library/react';
import PropTypes from 'prop-types';
import Display from '../Display';

describe('Display', () => {
  it('should render default value', () => {
    const { getByText } = render(<Display result={undefined} />);
    getByText('0');
  });

  it('should render new result (123)', () => {
    const { getByText } = render(<Display result="123" />);
    getByText('123');
  });

  it('Prop-types should be required', () => {
    expect(Display.propTypes.result).toBe(PropTypes.string);
  });
});
