import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup, waitForElement } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import axiosMock from 'axios';
import App from '../App';

afterEach(cleanup);

it('matches the snapshot', () => {
  const { asFragment } = render(<App />);
  expect(asFragment()).toMatchSnapshot();
});

it('fetches and displays the data (gifs)', async () => {
  const { getByAltText } = render(<App />);
  const progressImg = getByAltText('Loading...');
  expect(progressImg).toBeInTheDocument();
});