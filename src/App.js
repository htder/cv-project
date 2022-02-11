import React, {Component} from 'react';
import './App.css';
import Info from './components/Info.js';
import Experience from './components/Experience.js';
import Education from './components/Education.js';
import Header from './components/Header.js';
import './styles/styles.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      personal: {
        name: "",
        email: "",
        phone: "",
      },
      education: [],
      experience: []
    };
  };

  handleEducationAdd() {
    this.setState({
      education: [...this.state.education, <Education />]
    });
  };

  handleEducationDel() {
    const newArray = this.state.education.slice(0, this.state.education.length - 1);
    this.setState({
      education: [...newArray]
    });
  };

  handleExperienceAdd() {

  }

  handleExperienceDel() {

  }

  render() {
  return (
    <div className="App">
      <Header />
      <div>
        <h2>Personal</h2>
        <Info />
      </div>
      <div>
        <h2>Education</h2>
        {this.state.education}
        <button onClick={() => this.handleEducationAdd()}>Add</button>
        <button onClick={() => this.handleEducationDel()}>Remove</button>
      </div>
      <div>
        <h2>Experience</h2>
        <Experience />
        <button>Add</button>
        <button>Remove</button>
      </div>
    </div>
  );
 }
}

export default App;
