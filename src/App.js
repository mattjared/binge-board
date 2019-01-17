import React, { Component } from 'react';
import potter from './potter.js';
import got from './got.js';
import Button from './Button';
import ReactGA from 'react-ga';
import CSSTransition from 'react-transition-group/Transition';

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
    let emoji;
    let data;
    if (this.state.boardType) {
      emoji = "⚡";
      data = potter;
    } else {
      emoji = "👑";
      data = got;
    }
    return (
      <div className="App">
        <h2 onClick={this.changeBoard}>BINGE <span role="img" aria-label="Lightning Bolt">{emoji}</span>️ BOARD</h2>
        <p><span role="img" aria-label="Speaker">🔈</span> Sound on <span role="img" aria-label="Speaker">🔈</span></p>
        <div className="App-wrapper">
          <CSSTransition
            timeout={3000}
            classNames="card"
            unmountOnExit
            in={this.state.boardType}
          >
          <div>
            {data.map((d, i) => {
              return (
                <Button
                  onButtonClick={this.playAudio}
                  name={d.name}
                  audio={d.audio}
                  key={d.name+i}
                />
              ) 
            })}
            </div> 
          </CSSTransition>
        </div>
        <div className="App-footer">
          <p>Source: The Ringer's <a href="https://www.theringer.com/binge-mode" target="blank">Binge Mode</a> podcast. Copyright &copy; { year }. Enjoy using the Binge Board? <a href="https://buymeacoff.ee/mattjared" target="_blank" rel="noopener noreferrer">Buy me a coffee!</a></p>
        </div>
      </div>
    );
  }
}

export default App;
