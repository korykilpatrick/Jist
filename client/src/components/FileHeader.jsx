import React from 'react';

// need to find better way of rendering - first conditional returns 0

const FileHeader = ({file, readonly }) => (
  <div className="fileHeader">
    {readonly && <input
                    readOnly
                    className="input-filename"
                    type="text" 
                    value={file.filename}>
                 </input> || ''}
    {!readonly && <input
                    className="input-filename"
                    type="text"
                    defaultValue={file.filename}
                    placeholder="Filename including extension...">
                    </input>}
  </div>

);

export default FileHeader;