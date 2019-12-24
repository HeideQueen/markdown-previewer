import React from 'react';

import './editor.styles';

const Editor = ({ userInput, handleChange }) => (
  <div id='editor-container'>
    <textarea
      name='editor'
      id='editor'
      cols='80'
      rows='30'
      value={userInput}
      onChange={handleChange}
      style={{
        padding: '1em',
        backgroundColor: '#333',
        color: 'palevioletred'
      }}
    />
  </div>
);

export default Editor;
