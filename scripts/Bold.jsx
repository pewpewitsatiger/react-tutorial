import React, { Component } from 'react';

export default class Bold extends Component {
  render() {
    return (
      <span className="Bold">
        <b>{this.props.children}</b>
      </span>
    );
  }
}

Bold.propTypes = {
  children: React.PropTypes.node
};
