import React, {Component} from 'react';

class Info extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>{this.props.test}</h1>
      </div>
    )
  }
}

export default Info;
