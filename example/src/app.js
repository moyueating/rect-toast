import React, { Component } from 'react';
import Toast from '../../src/Toast';
import { hot } from 'react-hot-loader'


class App extends Component {

  show = () => {

  }

  render() {
    return (
      <div>
        <div onClick={this.show} style={{height: 100}}>show toast</div>
      </div>
    )
  }
}

export default hot(module)(App)