import React from 'react';

import FileHeader from './FileHeader.jsx';

const File = ({file, readonly }) => (
  <div className="file">
    <FileHeader file={file} readonly={readonly} />
    <textarea rows="30" cols="50" readOnly={readonly}>
      {file.text}
    </textarea>
  </div>
);

export default File;