import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import AppMain from './AppMain';

import Adapter from 'enzyme-adapter-react-16';
import { Formik } from 'formik';
Enzyme.configure({ adapter: new Adapter()})

describe('<AppMain />', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<AppMain />);
    });
    it('Uses formik', () => {
        console.log(wrapper.debug());
        expect(wrapper.exists(Formik)).toEqual(true)
    });
});