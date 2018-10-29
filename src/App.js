import React, { Component } from 'react';
import data from './data.js';
import Button from './Button';
import ReactGA from 'react-ga';

ReactGA.initialize('UA-127457647-1');
ReactGA.pageview('/homepage');

class App extends Component {
  render() {
    const date = new Date();
    const year = date.getFullYear();
    return (
      <div className="App">
        <h2>BINGE <span role="img" aria-label="Lightning Bolt">⚡</span>️ BOARD</h2>
        <div className="App-wrapper">
          {data.map((d, i) => {
            return (
              <Button
                onButtonClick={this.playAudio}
                key={i}
                name={d.name}
                audio={d.audio}
              />
            ) 
          })}
        </div>
        <div className="App-footer">
          <p>Source: The Ringer's <a href="https://www.theringer.com/binge-mode" target="blank">Binge Mode</a> podcast. Copyright &copy; { year }. Have feedback or want to add a new clip? <a href="https://github.com/mattjared/binge-board/issues/new" target="blank">Fill out an issue on Github!</a></p>
        </div>
      </div>
    );
  }
}

export default App;
