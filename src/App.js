import React, { Component } from 'react';
import { data } from './data.js';
import Button from './Button';
import ReactGA from 'react-ga';

ReactGA.initialize('UA-127457647-1');
ReactGA.pageview('/homepage');

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2 className="App-header">Binge Board</h2>
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
      </div>
    );
  }
}

export default App;
