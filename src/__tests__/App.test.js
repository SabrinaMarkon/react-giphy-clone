import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup, waitForElement } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
// import axios from 'axios';
import App from '../App';

afterEach(cleanup);

it('matches the snapshot', () => {
  const { asFragment } = render(<App />);
  expect(asFragment()).toMatchSnapshot();
});