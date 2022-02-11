import React, {Component} from 'react';

class Education extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2>Education</h2>
        <form>
          <label htmlFor="school">School</label>
          <input type="text" id="school"/>
          <label htmlFor="study">Topic</label>
          <input type="text" id="study"/>
          <label htmlFor="start-date">Start Date</label>
          <input type="date" id="start-date"/>
          <label htmlFor="end-date">End Date</label>
          <input type="date" id="end-date"/>
          <button>Add</button>
          <button>Remove</button>
        </form>
      </div>
    )
  }
}

export default Education;
