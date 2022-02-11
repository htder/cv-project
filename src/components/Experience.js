import React, {Component} from 'react';

class Experience extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <form className="form">
          <label htmlFor="company">Company</label>
          <input type="text" id="company" onChange={(event) => this.props.handleChange(this.props.id, event, "name")}/>
          <label htmlFor="position">Position</label>
          <input type="text" id="position" onChange={(event) => this.props.handleChange(this.props.id, event, "title")}/>
          <label htmlFor="description">Job Description</label>
          <input type="text" id="description" onChange={(event) => this.props.handleChange(this.props.id, event, "description")}/>
          <label htmlFor="start-date">Start Date</label>
          <input type="date" id="start-date" onChange={(event) => this.props.handleChange(this.props.id, event, "startDate")}/>
          <label htmlFor="end-date">End Date</label>
          <input type="date" id="end-date" onChange={(event) => this.props.handleChange(this.props.id, event, "endDate")}/>
        </form>
      </div>
    )
  }
}

export default Experience;
