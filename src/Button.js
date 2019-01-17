import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import ReactGA from 'react-ga';

class Button extends Component {
  constructor(props) {
    super(props);
    this.playAudio = this.playAudio.bind(this);
  }
  playAudio() {
    new Audio(this.props.audio).play();
    ReactGA.event({
      category: 'Button Click',
      action: this.props.name,
  });
  }
  render() {
    return(
      <button className="btn" onClick={this.playAudio}>{this.props.name}</button>
    )
  }
}

Button.propTypes = {
  name: PropTypes.string,
  audio: PropTypes.any
}

export default Button;