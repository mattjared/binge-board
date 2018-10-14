import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

class Button extends Component {
  constructor(props) {
    super(props);
    this.playAudio = this.playAudio.bind(this);
  }
  playAudio() {
    new Audio(this.props.audio).play();
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