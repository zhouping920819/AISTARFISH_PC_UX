import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import Test from './index';

describe('<Test />', () => {
  it('render Test with dumi', () => {
    const msg = 'dumi';

    render(<Test title={msg} />);
    expect(screen.queryByText(msg)).toBeInTheDocument();
  });
});
