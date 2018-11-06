import React, { Component } from 'react';
import data from './data.js';
import Button from './Button';
import ReactGA from 'react-ga';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import _ from 'underscore';

ReactGA.initialize('UA-127457647-1');
ReactGA.pageview('/homepage');

class App extends Component {
  constructor(props) {
    super(props);
    this.changeBoard = this.changeBoard.bind(this);
    this.state = {
      boardType: true,
    }
  }
  changeBoard() {
    this.setState({ 
      boardType: !this.state.boardType,
    });
  }
  render() {
    const date = new Date();
    const year = date.getFullYear();
    const emoji = this.state.boardType ? '⚡' : '👑'; 
    const soundType = this.state.boardType ? 'potter' : 'thrones'
    const dataShown = _.filter(data, function(data){ return data.boardType === soundType;});
    return (
      <div className="App">
        <h2 onClick={this.changeBoard}>
          BINGE&nbsp; 
            <CSSTransition
              classNames="example"
              in={this.state.boardType}
              timeout={{ enter: 500, exit: 300 }}
            >
              <span role="img" aria-label="Emoji">
                {emoji}
              </span>
            </CSSTransition>
          &nbsp;BOARD
        </h2>
        <p><span role="img" aria-label="Speaker">🔈</span> Sound on <span role="img" aria-label="Speaker">🔈</span></p>
        <TransitionGroup className="App-wrapper">
          {dataShown.map((d, i) => {
            return (
              <CSSTransition
                key={i}
                timeout={500}
                classNames="fade"
              > 
                <Button
                  onButtonClick={this.playAudio}
                  key={i}
                  name={d.name}
                  audio={d.audio}
                />
              </CSSTransition>
            ) 
          })}
        </TransitionGroup>
        <div className="App-footer">
          <p>Source: The Ringer's <a href="https://www.theringer.com/binge-mode" target="blank">Binge Mode</a> podcast. Copyright &copy; { year }. Have feedback or want to add a new clip? <a href="https://github.com/mattjared/binge-board/issues/new" target="blank">Fill out an issue on Github!</a> Want to use audio clips elsewhere? Take a peak <a href="https://github.com/mattjared/binge-board/tree/master/public/sounds" target="blank">here</a> and download the file you want to play with.</p>
        </div>
      </div>
    );
  }
}

export default App;
