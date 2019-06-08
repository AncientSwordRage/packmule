import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import App from './App';

import Adapter from 'enzyme-adapter-react-16';
import AppMain from './AppMain';
Enzyme.configure({ adapter: new Adapter()})

describe('<App />', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<App />);
    })
    it('contains a header', () => {
        expect(wrapper.exists('header')).toEqual(true);
    })
    it('contains an AppMain', () => {
        expect(wrapper.exists(AppMain)).toEqual(true);
    })
})