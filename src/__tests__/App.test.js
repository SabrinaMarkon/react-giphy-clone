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

it('has a login button', () => {
  const { getByRole } = render(<App />);
  const loginButton = getByRole('button', {name: /Login/});
  expect(loginButton).toBeInTheDocument();
});

it('has a link to view all gifs on the index url', () => {
  const { getByText } = render(<App />);
  const allGifsLink = getByText(/All Gifs/);
  expect(document.querySelector("a").getAttribute("href")).toBe('/');
  expect(allGifsLink).toBeInTheDocument();
});

it('includes the website title that is a link to the index url ', () => {
  const { getByText } = render(<App />);
  const siteNameLink = getByText(/React Giphy Clone/);
  expect(siteNameLink).toBeInTheDocument();
});


// it('fetches and displays the data about the gif images', () => {
//   const { getByTestId } = render(<App />);
//   const progressImg = getByTestId('loading');
//   expect(progressImg).toBeInTheDocument();
// });
