import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { SimpleField } from "./Fields";
import { Field, ErrorMessage } from 'formik';
import { TextField } from '@material-ui/core';
Enzyme.configure({ adapter: new Adapter()})

const fieldApi = name => ({name, value:'test123'});
describe('Fields', () => {
    describe('<SimpleFields />', () => {
        let wrapper;
        let name = 'testName';
        let label = 'testLabel';
        let field = fieldApi(name);
        beforeEach(() => {
            wrapper = shallow(<SimpleField name={name} label={label} />)
        });
        it('uses a Field from formik', () => {
            expect(wrapper.exists(Field)).toEqual(true);
        });
        it('Renders a field using a TextField', () => {
            const renderedField = wrapper.find(Field).renderProp('render')({field});
            expect(renderedField.exists(TextField)).toEqual(true);
        });
        it('renders an error message', () => {
            expect(wrapper.exists(ErrorMessage)).toBe(true);
        })
    })
})