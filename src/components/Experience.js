import React, {Component} from 'react';

class Experience extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2>Experience</h2>
        <form>
          <label htmlFor="company">Company</label>
          <input type="text" id="company"/>
          <label htmlFor="position">Position</label>
          <input type="text" id="position"/>
          <label htmlFor="tasks">Tasks</label>
          <textarea id="tasks"/>
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

export default Experience;
