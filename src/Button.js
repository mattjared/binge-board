import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import './Button.css';

class Button extends Component {
  constructor(props) {
    super(props);
    this.playAudio = this.playAudio.bind(this);
  }
  playAudio() {
    // console.log(this.props.name, this.props.audio);
    var audio = new Audio(this.props.audio);
    audio.play();
  }
  render() {
    return(
      <button className="button" onClick={this.playAudio}>{this.props.name}</button>
    )
  }
}

Button.propTypes = {
  name: PropTypes.string,
  audio: PropTypes.any
}

export default Button;