import React from 'react';

const JistFooter = ({ newJist }) => (
  <div>
    <button type="submit"
            className="btn-addFile">
            Add file
    </button>
    {newJist && <button 
                  type="submit"
                  className="btn-secret"
                  value="0">
                  Create secret jist
                </button>
     ||
                <button 
                  type="submit"
                  className="btn-cancel">
                  Cancel
                </button>}
    {newJist && <button 
                  type="submit"
                  className="btn-public"
                  value="1">
                  Create public jist
                </button>
     ||
                <button 
                  type="submit"
                  className="btn-update">
                  Update jist
                </button>}
  </div>
);

export default JistFooter;