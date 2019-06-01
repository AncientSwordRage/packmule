import React from 'react';
import './App.css';
import AppMain from './AppMain'
import { Typography } from "@material-ui/core";

const namespace = {
  advancements: '',
  functions: '',
  loot_tables: '',
  recipes: '',
  structures: '',
  tags: ''
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Typography variant="h1">PackMule</Typography>
        <Typography variant="h2">Make datapacks for MineCraft</Typography>
      </header>
      <AppMain />
    </div>
  );
}

export default App;
