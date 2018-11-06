import React from 'react';
import ReactDOM from 'react-dom';

import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import JistView from './components/JistView.jsx';

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
        <Navbar />
        <JistView />
        <Footer />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));