import React, { Component } from 'react';
import DisplayTimer from './DisplayTimer';
import './timer.css'
import sonic_waiting from '../images/sonic-waiting.gif'
import sonic_running from '../images/sonic-running.gif'
import tails_waiting from '../images/tails-waiting.gif'
import tails_running from '../images/tails-running.gif'
import mario_waiting from '../images/mario-waiting.gif'
import mario_running from '../images/mario-running.gif'
import green_hill from '../sound_fx/green_hill.mp3'
import marble_zone from '../sound_fx/marble_zone.mp3'
import spring_zone from '../sound_fx/Spring_Yard_Zone.mp3'
import labirynth_zone from '../sound_fx/Labyrinth_Zone.mp3'
import star_light_zone from '../sound_fx/Star_Light_Zone.mp3'
import scrap_brain_zone from '../sound_fx/Scrap_Brain_Zone.mp3'
import final_zone from '../sound_fx/Final_Zone.mp3'
import boss_theme from '../sound_fx/Boss_Theme.mp3'
import special_stage from '../sound_fx/Special_Stage.mp3'
import staff_roll from '../sound_fx/Staff_Roll.mp3'
import sonic_ring_falling from '../sound_fx/sonic-rings-drop.mp3'
import too_slow from '../sound_fx/youre-too-slow.mp3'
import sonic_jump from '../sound_fx/sonic-jump.mp3'
import sonic_ring from '../sound_fx/sonic-ring.mp3'
import sonic_boing from '../sound_fx/sonic-boing.mp3'
import sonic_spin from '../sound_fx/sonic-spindash.mp3'
import tails_sound from '../sound_fx/tails-sound.mp3'
import mario_sound from '../sound_fx/mario-sound.mp3'

class Timer extends Component {
  constructor() {
    super();

    this.state = {
      song: green_hill,
      character: 'sonic',
      gifImage: sonic_waiting,
      min: 0,
      sec: 0,
      buttonDisable: false,
    };

    const { song } = this.state;
    this.startMusic = new Audio(song);
    this.startMusic.muted = false;
    this.tooSlow = new Audio(too_slow);
    this.sonicRingsFalling = new Audio(sonic_ring_falling);
    this.sonicJump = new Audio(sonic_jump);
    this.sonicRing = new Audio(sonic_ring);
    this.sonicBoing = new Audio(sonic_boing);
    this.sonicSpin = new Audio(sonic_spin);
    this.tailsSound = new Audio(tails_sound);
    this.marioSound = new Audio(mario_sound);
  }

  checkTimer = () => {
    const { sec } = this.state;
    if (sec >= 60) {
      this.setState(({ min }) => ({
        min: min + 1,
        sec: 0,
      }))
    }
  }

  addMin = ({ target: { value } }) => {
    this.setState(({ min }) => ({
      min: min + Number(value)
    }))
    if (value === '5') this.sonicSpin.play();
    if (value === '1') this.sonicJump.play();
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
    }), () => {
      if (min === 0 && sec === 0) {
        this.stopTimer()
      } else if (sec === 0) {
        this.setState(({ min }) => ({
          min: min - 1,
          sec: 59,
        }))
      }
    })
    this.checkTimer()
  }

  resetTimer = () => {
    this.setState({
      min: 0,
      sec: 0,
    })
  }

  startTimer = () => {
    const { character } = this.state;
    const ONE_SECOND = 1000
    let intervalId = setInterval(this.count, ONE_SECOND)
    this.setState({
      intervalId: intervalId,
    })
    if (character === 'sonic') this.setState({ gifImage: sonic_running })
    if (character === 'tails') this.setState({ gifImage: tails_running })
    if (character === 'secret') this.setState({ gifImage: mario_running })
    const { song } = this.state
    this.startMusic = new Audio(song);
    this.startMusic.loop = true;
    this.startMusic.play()
    this.setState({buttonDisable: true})
  }

  pauseTimer = () => {
    const { intervalId, character } = this.state;
    clearInterval(intervalId);
    if (character === 'sonic') this.setState({ gifImage: sonic_waiting })
    if (character === 'tails') this.setState({ gifImage: tails_waiting })
    if (character === 'secret') this.setState({ gifImage: mario_waiting })
    this.startMusic.pause();
    this.sonicBoing.play();
    this.setState({buttonDisable: false})
  }

  stopTimer = () => {
    const { intervalId, character } = this.state;
    clearInterval(intervalId);
    if (character === 'sonic') this.setState({ gifImage: sonic_waiting })
    if (character === 'tails') this.setState({ gifImage: tails_waiting })
    if (character === 'secret') this.setState({ gifImage: mario_waiting })
    this.startMusic.pause();
    this.startMusic.currentTime = 0;
    this.sonicRingsFalling.play();
    this.resetTimer();
    this.setState({buttonDisable: false})
  }

  muteSong = () => {
    this.startMusic.muted = true;
  }

  unmuteSong = () => {
    this.startMusic.muted = false;
  }

  changeSong = ({ target: { value } }) => {
    this.setState({ song: value })
  }

  changeCharacter = () => {
    this.setState({
      character: 'tails',
      gifImage: tails_waiting,
    })
    this.tailsSound.play();
  }

  secretSoungEG = () => {
    setTimeout(() => {
      this.tooSlow.play();
    }, 4000)
  }

  secretCharacter = () => {
    this.setState({
      character: 'secret',
      gifImage: mario_waiting,
    })
    this.marioSound.play()
  }

  componentDidMount() {
    // this.secretSoungEG()
  }

  render() {
    const { gifImage, min, sec, character, buttonDisable } = this.state;
    return (
      <div>
        <h1 className='timer-title'>Sonic Timer</h1>
        <DisplayTimer min={min} sec={sec} />
        <img className='sonic-gif' src={gifImage} alt={character} />
        <section className='buttons-panel'>
          <div className='section-select-theme'>
            <select className='select-theme' onChange={this.changeSong}>
              <option value={green_hill}>Green Hill Zone</option>
              <option value={marble_zone}>Marble Zone</option>
              <option value={spring_zone}>Spring Yard Zone</option>
              <option value={labirynth_zone}>Labirynth Zone</option>
              <option value={star_light_zone}>Star Light Zone</option>
              <option value={scrap_brain_zone}>Scrap Brain Zone</option>
              <option value={final_zone}>Final Zone</option>
              <option value={boss_theme}>Boss Theme</option>
              <option value={special_stage}>Special Stage</option>
              <option value={staff_roll}>Staff Roll</option>
            </select>
          </div>
          <div className='section-add-time-buttons'>
            <button className='add-time-buttons' value={5} onClick={this.addMin}>+5min</button>
            <button className='add-time-buttons' value={1} onClick={this.addMin}>+1min</button>
            <button className='add-time-buttons' onClick={this.addSec}>+30sec</button>

          </div>
          <div className='section-start-stop-buttons'>
            <button className='start-stop-buttons' disabled={buttonDisable} onClick={this.startTimer} >START!</button>
            <button className='start-stop-buttons' onClick={this.pauseTimer} >PAUSE!</button>
            <button className='start-stop-buttons' onClick={this.stopTimer} >STOP!</button>
          </div>
          <div className='section-start-stop-buttons'>
          <button className='mute-button' onClick={this.unmuteSong}><i class="fas fa-volume-up"></i></button>
            <button className='mute-button' onClick={this.muteSong}><i class="fas fa-volume-mute"></i></button>
          </div>
          <div className='section-start-stop-buttons'>
            <button className='eg-button' disabled={buttonDisable} onClick={this.changeCharacter}>Easter egg, shhhh</button>
            <button className='eg-secret-button' disabled={buttonDisable} onClick={this.secretCharacter}>Easter egg, nintendo don't sue me plz</button>
          </div>
        </section>
      </div>
    );
  }
}

export default Timer;
