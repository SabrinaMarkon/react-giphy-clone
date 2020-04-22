import React from 'react';
import { render, cleanup, findBy } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import { act } from 'react-dom/test-utils';
import axiosMock from 'axios'; // import fake (mocked) axios. It detects the __mocks__/axios.js file.
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

//////// Above tests are ok

it('fetches and displays the data about the gif images', () => {
  act(() => {
    const { getByTestId } = render(<App />);
    const progressImg = getByTestId('loading');
    expect(progressImg).toBeInTheDocument();
  });
  axiosMock.get.mockResolvedValueOnce({ data: { public_id: 1 } });  
});

test.todo('uses Auth0 login when the login button is clicked');
test.todo('has an upload gif button for logged in users');
test.todo('has a create gif link for logged in users');
test.todo('has a logout button for logged in users');
test.todo('opens a Cloudinary window to upload a new gif when the upload gif button is clicked');
test.todo('opens a box requesting start and end times when the create gif link is clicked');
test.todo('opens a Cloudinary window to upload and convert a video to a gif after the start and end times are selected and the Create button is clicked');


