import React from 'react';

import './editor.styles';

const Editor = ({ userInput, handleChange }) => (
  <div id='editor-container'>
    <textarea
      name='editor'
      id='editor'
      cols='80'
      rows='20'
      value={userInput}
      onChange={handleChange}
    />
  </div>
);

export default Editor;
