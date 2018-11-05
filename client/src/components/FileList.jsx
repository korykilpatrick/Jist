import React from 'react';

import File from './File.jsx';

const FileList = ({ files, readonly }) => (
  <div className="filelist">
    {files.map((file, idx) => <File key={idx} file={file} readonly={readonly} /> )}
  </div>
);

export default FileList;