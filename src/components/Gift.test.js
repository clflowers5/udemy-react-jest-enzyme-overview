import React from 'react';
import { shallow } from 'enzyme';
import Gift from './Gift';

describe('Gift', () => {
  const gift = shallow(<Gift />);

  it('Renders properly', () => {
    expect(gift).toMatchSnapshot();
  });

  it('Initializes a `state`', () => {
    expect(gift.state()).toEqual({ person: '', present: '' });
  });

  describe('When typing into the input component', () => {
    const person = 'Uncle';

    beforeEach(() => {
      gift
        .find('.input-person')
        .simulate('change', { target: { value: person } });
    });

    it('Updates the person in `state`', () => {
      expect(gift.state().person).toEqual(person);
    });
  });
});
