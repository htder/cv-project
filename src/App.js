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
      education: [{
        id: "",
        school: "",
        topic: "",
        startDate: "",
        endDate: "",
      }],
      experience: [{
        id: "",
        name: "",
        title: "",
        description: "",
        startDate: "",
        endDate: "",
      }]
    };

    this.handlePersonalChange = this.handlePersonalChange.bind(this);
  };

  handleEducationAdd() {
    this.setState({
      education: [...this.state.education, {
        id: "",
        school: "",
        topic: "",
        startDate: "",
        endDate: "",
      }]
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
      experience: [...this.state.experience, {
        id: "",
        name: "",
        title: "",
        description: "",
        startDate: "",
        endDate: "",
      }]
    });
  }

  handleExperienceDel() {
    const slicedExpArray = this.state.experience.slice(0, this.state.experience.length - 1);
    this.setState({
      experience: [...slicedExpArray]
    })
  }

  handlePersonalChange(event, type) {
    event.preventDefault();
    const input = event.target.value;
    this.setState({
      personal: {
        ...this.state.personal,
        [type]: input,
      },
    });
  }

  render() {
  const {personal, education, experience} = this.state;
  return (
    <div className="App">
      <Header />
      <div>
        <h2>Personal</h2>
        <Info
          name={personal.name}
          email={personal.email}
          phone={personal.phone}
          handleChange={this.handlePersonalChange}
        />
        {console.log(this.state.personal)}
      </div>
      <div>
        <h2>Education</h2>
        {education.map(item => {
            return (
              <Education 
                id={item.id}
                school={item.school}
                topic={item.topic}
                startDate={item.startDate}
                endDate={item.endDate}
              />
            )
          })}
        <button onClick={() => this.handleEducationAdd()}>Add</button>
        <button onClick={() => this.handleEducationDel()}>Remove</button>
      </div>
      <div>
        <h2>Experience</h2>
        {experience.map(item => {
            return (
              <Experience 
                id={item.id}
                name={item.name}
                title={item.title}
                description={item.description}
                startDate={item.startDate}
                endDate={item.endDate}
              />
            )
          })}
        <button onClick={() => this.handleExperienceAdd()}>Add</button>
        <button onClick={() => this.handleExperienceDel()}>Remove</button>
      </div>
    </div>
  );
 }
}

export default App;
