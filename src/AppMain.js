import React from 'react';
import { Formik, Form } from 'formik';
import { Divider, Button } from '@material-ui/core';
import { MetaFields } from './FieldComponents/FieldGroups';

const AppMain = () =>{
    return (
    <main>
        Enter datapack details here.
        <Formik
          initialValues={{
            pack_name: '', 
            pack_mcmeta:{
              pack_format: '',
              description: ''
              },
            data: {
            }
          }}
          onSubmit={(values, { setSubmitting }) => {
           setTimeout(() => {
             alert(JSON.stringify(values, null, 2));
             setSubmitting(false);
           }, 400);
         }}>
         {({ isSubmitting }) => (
          <Form className="form-container">
            <MetaFields />
            <Divider variant="middle"></Divider>
            <Button variant="outlined" type="submit" disabled={isSubmitting}>
              Submit
            </Button>
          </Form>
        )}
        </Formik>
      </main>)
}
    
export default AppMain;