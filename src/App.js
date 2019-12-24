import React, { useState } from 'react';

import Editor from './components/editor/editor.component';
import Preview from './components/preview/preview.component';

import initialState from './App.utils';

import './App.css';

const App = () => {
  const [userInput, setUserInput] = useState(initialState);

  const handleChange = event => {
    setUserInput(event.target.value);
  };

  return (
    <div className='App'>
      <Editor userInput={userInput} handleChange={handleChange} />
      <Preview userInput={userInput} />
    </div>
  );
};

export default App;
