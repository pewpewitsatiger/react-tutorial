import React, { Component } from 'react';

export default class Runner extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const style = {

    };

    return (
      <div style={style}>
        { this.props.children }
      </div>
    );
  }
}

Runner.propTypes = {
  children: React.PropTypes.node
};
