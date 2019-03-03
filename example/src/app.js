import React, { Component } from 'react';
import Toast from '../../src';
import '../../src/index.css'
import { hot } from 'react-hot-loader'
import './index.css'

class App extends Component {

  show = () => {
    Toast.info('确认成功', 2000)
  }

  render() {
    return (
      <div>
        <div onClick={this.show} className="btn">show toast!</div>
      </div>
    )
  }
}

export default hot(module)(App)