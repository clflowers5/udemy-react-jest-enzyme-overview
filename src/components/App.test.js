import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

const app = shallow(<App />);

describe('App', () => {
  it('Renders correctly', () => {
    expect(app).toMatchSnapshot();
  });

  it('Initializes `state` with empty list of gifts', () => {
    expect(app.state().gifts).toEqual([]);
  });

  describe('when clicking the `add gift` button', () => {
    beforeEach(() => {
      app.find('.btn-add').simulate('click');
    });

    afterEach(() => {
      app.setState({ gifts: [] });
    });

    it('Adds a new gift to `state`', () => {
      expect(app.state().gifts).toEqual([{ id: 1 }]);
    });

    it('Adds a new gift to the rendered list', () => {
      expect(app.find('.gift-list').children().length).toEqual(1);
    });
  });
});
