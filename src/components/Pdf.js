import React, {Component} from 'react';

class Pdf extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {personal, education, experience} = this.props.data;
    console.log(personal, education, experience);
    return (
      <div className="display">
        <div className="personal-container">
          <h3>{personal.name}</h3>
          <h3>{personal.email}</h3>
          <h3>{personal.phone}</h3>
        </div>
        <div className="education-container">
          <h4>Education</h4>
            {education.map(educ => {
              return (
                <div className="education-topic">
                  <div>
                    <p>{educ.school} - {educ.topic}</p>
                  </div>
                  <div>
                    <p>{educ.startDate} - {educ.endDate}</p>
                  </div>
                </div>
              )
            })}
        </div>
        <div className="experience-container">
          <h4>Experience</h4>
            {experience.map(exper => {
              return (
                <div className="experience-topic">
                  <div className="experience-top">
                    <div>
                      <p>{exper.name}</p>
                    </div>
                    <div>
                      <p>{exper.startDate} - {exper.endDate}</p>
                    </div>
                  </div>
                  <div className="experience-text">
                    <p>{exper.title}</p>
                  </div>
                  <div className="experience-text">
                    <p>{exper.description}</p>
                  </div>
                </div>
              )
            })}
        </div>
      </div>
    )
  };
}

export default Pdf;

