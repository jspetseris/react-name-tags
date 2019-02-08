import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import data from './data.json';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    var names = []
    var nameText =  ""
    var tags = null
    var selectedLanguage = data[0].language
    var greeting = ""
    this.state = { data, names, nameText , tags, selectedLanguage, greeting };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.generateNameTags = this.generateNameTags.bind(this);
    this.selectNewLanguage = this.selectNewLanguage.bind(this);
    this.clearAll = this.clearAll.bind(this);
  }
  generateGreeting() {
    let greeting
    for (let i = 0; i < this.state.data.length; i++) {
      if (this.state.data[i].language === this.state.selectedLanguage) {
        greeting = this.state.data[i].greeting
        break
      }
    }
    return greeting
  }
  generateNameTags() {
    const tags = this.state.names
    const greeting = this.generateGreeting()
    this.setState({tags: tags, greeting: greeting})
  }
  selectNewLanguage(event) {
    this.setState({selectedLanguage: event.target.value})
  }
  handleNameChange(event) {
    this.setState({nameText: event.target.value, names: event.target.value.split("\n")})
  }
  clearAll() {
    this.setState({tags: null, nameText: "", names: []})
  }
  select
  render() {
    return (
      <div className="App m2 container">
        <div className="row">
          <div className="col">
            <textarea className="text-area" name="names"
              onChange={this.handleNameChange}
              value={this.state.nameText}/>
          </div>
          <div className="col text-area-right">
            <div>
              Select a Language: <select
                className="mb1"
                onChange={this.selectNewLanguage}
                value={this.state.selectedLanguage}
              >
                {this.state.data.map((obj) => (
                  <option>{obj.language}</option>
                ))}
              </select>
            </div>
            <Button className="mb1 mr1" onClick={ this.generateNameTags } variant="info">Generate Name Tags</Button>
            <Button className="mb1" onClick={ this.clearAll } variant="secondary">Clear All</Button>
          </div>
        </div>

        {this.state.tags ? <div className="container">
            {this.state.tags.map( tag => (
              <div className="tag">
                <div><b>{this.state.greeting}</b></div>
                <div className="underline">{tag}</div>
              </div>
            ))}
        </div> : null}
      </div>
    );
  }
}

export default App;
