import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentDidMount() {

  }

  render() {
    return (
      <div>
        <Header />
        You gotta dig a bit, dig a bit deeper
        <Footer />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));