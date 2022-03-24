/*
 * @Description: 
 * @Version: 2.0
 * @Autor: baijue
 * @Date: 2022-03-21 17:31:15
 * @LastEditors: 
 * @LastEditTime: 2022-03-22 17:00:22
 */
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
