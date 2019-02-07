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
  }
  generateNameTags() {
    // console.log(this.state.names)
    let greeting
    for (let i = 0; i < this.state.data.length; i++) {
      if (this.state.data[i].language === this.state.selectedLanguage) {
        greeting = this.state.data[i].greeting
        break
      }
    }
    const tags = this.state.names
    this.setState({tags: tags, greeting: greeting})
  }
  selectNewLanguage(event) {
    this.setState({selectedLanguage: event.target.value})
  }
  handleNameChange(event) {
    this.setState({nameText: event.target.value, names: event.target.value.split("\n")})
  }
  select
  render() {
    return (
      <div className="App">
        <br className="mb1"></br>
        Select a Language: <select
          className="mb1"
          onChange={this.selectNewLanguage}
          value={this.state.selectedLanguage}
        >
          {this.state.data.map((obj) => (
            <option>{obj.language}</option>
          ))}
        </select>

        <br className="mb1"></br>
        <textarea name="names"
          onChange={this.handleNameChange}
          value={this.state.nameText}/>
        <br className="mb1"></br>
        <Button className="mb1" onClick={ this.generateNameTags } variant="primary">Generate Name Tags</Button>
        {this.state.tags ? <div>
            {this.state.tags.map( tag => (
              <div className="tag">
                <div>{this.state.greeting}</div>
                <div>{tag}</div>
              </div>
            ))}
        </div> : null}
      </div>
    );
  }
}

export default App;
