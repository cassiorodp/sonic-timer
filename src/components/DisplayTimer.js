import React, { Component } from 'react';
import './displayTimer.css'

class DisplayTimer extends Component {
  render() {
    const {min, sec} = this.props
    return (
      <div >
        <span className='timer-numbers'>{(min >= 10) ? `${min}:` : `0${min}:`}</span>
        <span className='timer-numbers'>{(sec >= 10) ? sec : `0${sec}`}</span>
      </div>
    );
  }
}

export default DisplayTimer;