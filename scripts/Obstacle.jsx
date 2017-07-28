import React, { Component } from 'react';

export default class Obstacle extends Component {

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

Obstacle.propTypes = {
  children: React.PropTypes.node
};
