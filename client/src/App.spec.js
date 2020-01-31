import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    render(<App />, div);
    unmountComponentAtNode(div);
  });
});
