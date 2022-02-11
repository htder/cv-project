import React, {Component} from 'react';
import '../styles/style-info.css';

class Info extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <form className="form">
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
