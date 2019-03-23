import React, {Component} from 'react';
import './App.css';
import Form from './Form.js'

class App extends Component {
  state = {
    fields: {},
  }
  onSubmit(fields) {
    console.log(fields);
    JSON.stringify(this.state.fields);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>This is the Team 1389 Scouting Website app thing.</p>
          <a
            className="App-link"
            href="https://www.team1389.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Team 1389 Website
          </a>
        </header>
        <Form onSubmit={fields => this.onSubmit(fields)}/>
      </div>
    )
  }
}

export default App;