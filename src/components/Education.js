import React, {Component} from 'react';

class Education extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <form className="form">
          <label htmlFor="school">School</label>
          <input type="text" id="school" onChange={(event) => this.props.handleChange(this.props.id, event, "school")}/>
          <label htmlFor="study">Topic</label>
          <input type="text" id="study" onChange={(event) => this.props.handleChange(this.props.id, event, "topic")}/>
          <label htmlFor="start-date">Start Date</label>
          <input type="date" id="start-date" onChange={(event) => this.props.handleChange(this.props.id, event, "startDate")}/>
          <label htmlFor="end-date">End Date</label>
          <input type="date" id="end-date" onChange={(event) => this.props.handleChange(this.props.id, event, "endDate")}/>
        </form>
      </div>
    )
  }
}

export default Education;
