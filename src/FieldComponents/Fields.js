import React from 'react';
import { Field, ErrorMessage } from 'formik';
import { TextField } from '@material-ui/core';

export const SimpleField = ({name, label}) => (
    <React.Fragment>
        <Field type="text" name={name} render={({
            field
        }) => <TextField {...field} label={label} />} />
        <ErrorMessage name={name} component="div" />
    </React.Fragment>
);