import React from 'react';
import { Formik, Form } from 'formik';
import JSZip from "jszip";
import { Divider, Button } from '@material-ui/core';
import { MetaFields } from './FieldComponents/FieldGroups';
import download from './download';

const handleSubmit = (values, { setSubmitting }) => {
  const pack = values.pack_mcmeta;
  setTimeout(() => {
    generateZip(pack).then(function (base64) {
      onSuccess(values.pack_name, base64);
      setSubmitting(false);
    }, function (err) {
      onError(err);
    });
  })
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
            <Divider component="div" variant="middle"></Divider>
            <Button variant="outlined" download="foo-bar.zip" type="submit" disabled={isSubmitting}>
              Download DataPack
            </Button>
          </Form>
        )}>
        </Formik>
      </main>)
}
    
export default AppMain;

const onError = (err) => {
  alert(err);
}

const onSuccess = (pack_name, base64) => {
  download(pack_name, base64);
}
function generateZip(pack) {
  var zip = new JSZip();
  zip.file('pack.mcmeta', JSON.stringify({ pack }, null, 2));
  zip.folder('data');
  return zip.generateAsync({ type: "base64" });
}

