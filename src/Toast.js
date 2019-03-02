import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.css';


export default class Toast extends Component {

  componentDidMount(){
    // 开始运动
  }

  render() {
    return (
      <div className="toast-mask">
        <span className="toast-content">ssfddsfsd</span>
      </div>
    )
  }
}


Toast.propTypes = {

}