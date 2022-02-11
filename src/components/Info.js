import React, {Component} from 'react';

class Info extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <form className="form">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" onChange={(event) => this.props.handleChange(event, "name")}/>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" onChange={(event) => this.props.handleChange(event, "email")}/>
          <label htmlFor="phone">Phone Number</label>
          <input type="tel" id="phone" onChange={(event) => this.props.handleChange(event, "phone")}/>
        </form>
      </div>
    )
  }
}

export default Info;
