import React, { Component } from 'react';

export default class Italic extends Component {
  render() {
    return (
      <span className="Italic">
        <i>{this.props.children}</i>
      </span>
    );
  }
}

Italic.propTypes = {
  children: React.PropTypes.node
};
