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
    const slicedEduArray = this.state.education.slice(0, this.state.education.length - 1);
    this.setState({
      education: [...slicedEduArray]
    });
  };

  handleExperienceAdd() {
    this.setState({
      experience: [...this.state.experience, <Experience />]
    });
  }

  handleExperienceDel() {
    const slicedExpArray = this.state.experience.slice(0, this.state.experience.length - 1);
    this.setState({
      experience: [...slicedExpArray]
    })
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
        {this.state.experience}
        <button onClick={() => this.handleExperienceAdd()}>Add</button>
        <button onClick={() => this.handleExperienceDel()}>Remove</button>
      </div>
    </div>
  );
 }
}

export default App;
