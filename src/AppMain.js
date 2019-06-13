import React from 'react';
import { Formik, Form } from 'formik';
import JSZip from "jszip";
import { Divider, Button } from '@material-ui/core';
import { MetaFields } from './FieldComponents/FieldGroups';

//todo replace with webextensions
function download(filename, base64) {
  var element = document.createElement('a');
  element.setAttribute('href', base64);
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

const handleSubmit = (values, { setSubmitting }) => {
  var zip = new JSZip();
  const pack = values.pack_mcmeta;
  setTimeout(() => {
    zip.file('pack.mcmeta', JSON.stringify({ pack }, null, 2));
    zip.folder('data');
    zip.generateAsync({type:"base64"}).then(function (base64) {
      download(values.pack_name, base64);
      setSubmitting(false);
  }, function (err) {
      alert(err);
  });
  }, 400);
};
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
          onSubmit={handleSubmit}
         render={({ isSubmitting }) => (
          <Form className="form-container">
            <MetaFields />
            <Divider variant="middle"></Divider>
            <Button variant="outlined" download="foo-bar.zip" type="submit" disabled={isSubmitting}>
              Submit
            </Button>
          </Form>
        )}>
        </Formik>
      </main>)
}
    
export default AppMain;