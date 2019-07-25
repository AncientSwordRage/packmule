import React from 'react';
import { Typography } from "@material-ui/core";
import { SimpleField } from './Fields';

export const MetaFields = () => (
    <React.Fragment>
        <Typography variant="h3">
            Meta Fields
        </Typography>
        <SimpleField name="pack_name" label="Pack Name" />
        <SimpleField name="pack_mcmeta.pack_format" label="Pack Format" />
        <SimpleField name="pack_mcmeta.description" label="Pack Description" />
    </React.Fragment>
);
