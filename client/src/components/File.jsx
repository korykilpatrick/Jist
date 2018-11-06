import React from 'react';

import FileHeader from './FileHeader.jsx';

const File = ({file, readonly }) => (
  <div className="file">
    <FileHeader file={file} readonly={readonly} />
    <textarea rows="30" cols="50" value={file.text} readOnly={readonly}>
    </textarea>
  </div>
);

export default File;