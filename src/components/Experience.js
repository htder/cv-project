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
          <input type="text" id="company"/>
          <label htmlFor="position">Position</label>
          <input type="text" id="position"/>
          <label htmlFor="description">Job Description</label>
          <input type="text" id="description"/>
          <label htmlFor="start-date">Start Date</label>
          <input type="date" id="start-date"/>
          <label htmlFor="end-date">End Date</label>
          <input type="date" id="end-date"/>
        </form>
      </div>
    )
  }
}

export default Experience;
