import React from 'react';
import ReactDOM from 'react-dom';
import { render, waitForElement } from '@testing-library/react';
import 'jest-dom/extend-expect';
import axios from 'axios'
import App from '../App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('matches the snapshot', () => {
  const { asFragment } = render(<App />);
  expect(asFragment()).toMatchSnapshot();
});