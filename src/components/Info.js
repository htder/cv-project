import React, {Component} from 'react';

class Info extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2>Personal</h2>
        <form>
          <label htmlFor="name">Name</label>
          <input type="text" id="name"/>
          <label htmlFor="email">Email</label>
          <input type="email" id="email"/>
          <label htmlFor="phone">Phone Number</label>
          <input type="tel" id="phone"/>
        </form>
      </div>
    )
  }
}

export default Info;
