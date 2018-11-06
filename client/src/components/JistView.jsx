import React from 'react';

import FileList from './FileList.jsx';
import JistHeader from './JistHeader.jsx';
import JistFooter from './JistFooter.jsx';

class JistView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      readonly: false,
      newJist: true,
      description: 'my gist',
      files: [{ filename: 'file1.js', text: 'my code' }]
    }
    this.renderDescription = this.renderDescription.bind(this);
    this.updateJist = this.updateJist.bind(this);
    this.renderFooter = this.renderFooter.bind(this);
  }

  renderDescription() {
    if (!this.state.readonly) {
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

  renderFooter() {
    if (this.state.readonly) {
      return <div></div>
    }
    return <JistFooter newJist={this.state.newJist} />
  }

  updateJist(e) {
    let files = this.state.files;
    // let file = {
    //   ...files[e.target.value],
    //   filename: e
    // }
    // this.setState({ files: })
  }

  render() {
    return (
      <div>
        {this.renderDescription()}
        <FileList files={this.state.files} readonly={this.state.readonly} />
        {this.renderFooter()}
      </div>
    )
  }
}

export default JistView;