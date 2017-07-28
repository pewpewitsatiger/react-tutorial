import React, { Component } from 'react';

export default class Explosion extends Component {

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

Explosion.propTypes = {
  children: React.PropTypes.node
};
