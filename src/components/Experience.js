import React, {Component} from 'react';

class Experience extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2>{this.props.test}</h2>
      </div>
    )
  }
}

export default Experience;
