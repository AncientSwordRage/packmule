import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import AppMain from './AppMain';

import Adapter from 'enzyme-adapter-react-16';
import { Formik } from 'formik';
import { Button } from '@material-ui/core';
Enzyme.configure({ adapter: new Adapter()})

describe('<AppMain />', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<AppMain />);
    });
    it('Uses formik', () => {
        expect(wrapper.exists(Formik)).toEqual(true)
    });
    it('Renders a form with a submit button', () => {
        const renderedForm = wrapper.find(Formik).renderProp('render')({isSubmitting:false});
        expect(renderedForm.exists('.form-container')).toEqual(true);
        expect(renderedForm.find(Button).prop('disabled')).toEqual(false);
    })
    it('Disables the submit button while submiting', () => {
        const renderedForm = wrapper.find(Formik).renderProp('render')({isSubmitting:true});
        expect(renderedForm.find(Button).prop('disabled')).toEqual(true);
    })
});