import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import App from './App';

import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter()})

describe('<App />', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<App />);
    })
    it('contains a header', () => {
        console.log(wrapper.debug())
        expect(wrapper.exists('header')).toEqual(true);
    })
})