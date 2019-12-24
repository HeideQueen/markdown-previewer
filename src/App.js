import React, { useState } from 'react';

import Editor from './components/editor/editor.component';
import Preview from './components/preview/preview.component';

import initialState from './App.utils';

import { Container, Col } from './App.styles';

const App = () => {
  const [userInput, setUserInput] = useState(initialState);

  const handleChange = event => {
    setUserInput(event.target.value);
  };

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Queen's Markdown Previewer</h1>
      <hr />
      <Container>
        <Col>
          <h2>Write your markdown here:</h2>
          <Editor userInput={userInput} handleChange={handleChange} />
        </Col>
        <Col>
          <h2>Here the magic happens:</h2>
          <Preview userInput={userInput} />
        </Col>
      </Container>
    </div>
  );
};

export default App;
