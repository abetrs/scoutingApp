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
        <head>
          <title>1389 Scouting App</title>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
          />
        </head>
        <Form onSubmit={fields => this.onSubmit(fields)} />
      </div>
    );
  }
}

export default App;