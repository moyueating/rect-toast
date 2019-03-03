import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import Toast from './Toast'

function toast(msg, duration, onClose) {

  render(onClose)

  function render(callback) {
    const container = document.createElement('div')
    const child = (
      <Toast
        duration={duration}
        msg={msg}
        onClose={() => {
          ReactDOM.unmountComponentAtNode(container)
          document.body.removeChild(container)
          callback && typeof callback === 'function' && callback()
        }}
      />
    )

    ReactDOM.render(child, container)
    document.body.appendChild(container)
  }
}



export default {
  info(msg, duration, onClose){
    toast(msg, duration, onClose)
  }
}