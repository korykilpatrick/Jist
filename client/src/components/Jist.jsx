import React from 'react';

import FileList from './FileList.jsx';

class Jist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      readonly: 1,
      description: 'my gist',
      files: [{ filename: 'file1.js', text: 'my code' }]
    }
    this.renderDescription = this.renderDescription.bind(this);
  }

  renderDescription() {
    if (this.state.readonly == 0) {
      return (
        <input
          type="text"
          className="jistDescription"
          defaultValue={this.state.description}
          placeholder="Gist description...">
        </input> 
      )
    } 
    return <div>{this.state.description}</div>
  }

  render() {
    return (
      <div>
        {this.renderDescription()}
        <FileList files={this.state.files} readonly={this.state.readonly} />
        <button type="submit"
                className="btn-addFile">
                Add file
        </button>
        <button type="submit"
                className="btn-secret"
                value="0">
                Create secret jist
        </button>
        <button type="submit"
                className="btn-public"
                value="1">
                Create public jist
        </button>
      </div>
    )
  }
}

export default Jist;