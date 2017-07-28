import React, { Component } from 'react';

export default class ScoreBoard extends Component {

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

ScoreBoard.propTypes = {
  children: React.PropTypes.node
};
