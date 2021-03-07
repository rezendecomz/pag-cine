import React from 'react';
import { shallow } from 'enzyme';

import Pagamento from './Pagamento';

describe('Pagamento', () => {
  let component = null;
  let props = {};

  beforeEach(() => {
    props = {
      money: 70000
    };

    component = shallow(<Pagamento {...props} />);
  });

  it('should show correct money format', () => {
    expect(component.find('p').at(2).text()).toEqual('70,000 VND');
  });

  it('should render when money is undefined', () => {
    component.setProps({ money: undefined })
    expect(component.find('p').at(2).text()).toEqual('0 VND');
  });

});