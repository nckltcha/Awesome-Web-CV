import React, {Component} from 'react';

import Header from './header';
import Content from './content';
import data from '../data/cv.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = data;
  }

  render() {
    return (
      <div className="app">
        <Header data={this.state.personalInfo}/>
        <Content data={this.state.sections}/>
      </div>
    );
  }
}

export default App;
