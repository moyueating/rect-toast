import React, { Component } from 'react';
import PropTypes from 'prop-types';

const AnimationType = {
  In: 'in',
  Out: 'out'
}

const STEP = 0.05

export default class Toast extends Component {

  constructor(props) {
    super(props)
    this.state = {
      visible: false
    }
    this.toastRef = React.createRef()
  }

  componentDidMount() {
    this.fade(AnimationType.In, this.dismiss)
  }

  easeOutQuart = (last) => {
    return Math.sqrt((+new Date() - last) / 500)
  }

  fade = (type, cb) => {
    const last = +new Date()
    const tick = () => {
      const dom = this.toastRef.current
      const opacity = Number(dom.style.opacity)
      dom.style.opacity = type === AnimationType.In ? opacity + STEP : opacity - STEP

      if (type === AnimationType.In && dom.style.opacity < 1 || type === AnimationType.Out && dom.style.opacity > 0) {
        requestAnimationFrame(tick)
      } else {
        cb()
      }
    }
    requestAnimationFrame(tick)
  }

  dismiss = () => {
    const { duration, onClose } = this.props
    this.timer = setTimeout(() => {
      this.fade(AnimationType.Out, onClose)
    }, duration);
  }

  render() {
    return (
      <div className="toast-mask">
        <span className="toast-content" ref={this.toastRef}>{this.props.msg}</span>
      </div>
    )
  }
}


Toast.propTypes = {
  msg: PropTypes.string,
  duration: PropTypes.number,
  onClose: PropTypes.func
}

Toast.defaultProps = {
  msg: '',
  duration: 500,
  onClose: () => {}
}