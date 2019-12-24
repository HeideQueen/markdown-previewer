import React from 'react';

import marked from 'marked';

import { PreviewArea } from './preview.styles';

const Preview = ({ userInput }) => {
  const getMarkdown = () => ({
    __html: marked(userInput, { sanitize: true, breaks: true })
  });

  return (
    <div id='preview-container'>
      <PreviewArea id='preview' dangerouslySetInnerHTML={getMarkdown()} />
    </div>
  );
};

export default Preview;
