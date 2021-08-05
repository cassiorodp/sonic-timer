import React, { Component } from 'react';
import DisplayTimer from './DisplayTimer';
import './timer.css'
import sonic_waiting from '../images/sonic-waiting.gif'
import sonic_running from '../images/sonic-running.gif'
import sonic_theme from '../sound_fx/sonic_music.mp3'
import sonic_ring_falling from '../sound_fx/sonic-rings-drop.mp3'
import sonic_jump from '../sound_fx/sonic-jump.mp3'
import sonic_ring from '../sound_fx/sonic-ring.mp3'

class Timer extends Component {
  constructor() {
    super();

    this.state = {
      sonicGif: sonic_waiting,
      min: 0,
      sec: 0,
    };

    this.startMusic = new Audio(sonic_theme);
    this.sonicRingsFalling = new Audio(sonic_ring_falling);
    this.sonicJump = new Audio(sonic_jump);
    this.sonicRing = new Audio(sonic_ring);
  }

  checkTimer = () => {
    const {sec} = this.state;
    if (sec === 60) {
      this.setState(({min}) => ({
        min: min + 1,
        sec: 0,
      }))
    }
  }

  addMin = () => {
    this.setState(({ min }) => ({
      min: min + 1
    }))
    this.sonicJump.play()
  }

  addSec = () => {
    this.setState(({ sec }) => ({
      sec: sec + 30
    }), () => {
      this.checkTimer()
    })
    this.sonicRing.play()
  }

  count = () => {
    const { min, sec } = this.state;

    this.setState(({ sec }) => ({
      sec: sec - 1
    }))

    if (min === 0 && sec === 0) {
      this.stopTimer()
    }

    if (sec < 0) {
      this.setState(({ min }) => ({
        min: min - 1,
        sec: 60,
      }))
    }
  }

  resetTimer = () => {
    this.setState({
      min: 0,
      sec: 0,
    })
  }

  startTimer = () => {
    const ONE_SECOND = 10
    let intervalId = setInterval(this.count, ONE_SECOND)
    this.setState({
      intervalId: intervalId,
      sonicGif: sonic_running
    })
    this.startMusic.play()
  }

  stopTimer = () => {
    const { intervalId } = this.state;
    clearInterval(intervalId);
    this.setState({ sonicGif: sonic_waiting })
    this.startMusic.pause()
    this.sonicRingsFalling.play()
    this.resetTimer()
  }

  render() {
    const { sonicGif, min, sec } = this.state;
    return (
      <div>
        <h1 className='timer-title'>Sonic Timer</h1>
        <DisplayTimer min={min} sec={sec} />
        <img className='sonic-gif' src={sonicGif} alt='sonic' />
        <section className='buttons-panel'>
          <div className='section-add-time-buttons'>
            <button className='add-time-buttons' onClick={this.addMin}>+1min</button>
            <button className='add-time-buttons' onClick={this.addSec}>+30sec</button>
          </div>
          <div className='section-start-stop-buttons'>
            <button className='start-stop-buttons' onClick={this.startTimer} >START!</button>
            <button className='start-stop-buttons' onClick={this.stopTimer} >STOP!</button>
          </div>
        </section>
      </div>
    );
  }
}

export default Timer;
