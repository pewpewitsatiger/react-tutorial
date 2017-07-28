import React, { Component } from 'react';

export default class PlayArea extends Component {

  constructor(props) {
    super(props);
    this.state = {
      ground: 600,
      gravity: 1,
      brickSpawnLocation: 100,
      brickExitLocation: 0,
      active: true,
      bricks: []
    };
  }

  setScore(value) {
    this.setState({
      score: value
    });
  }

  createBrick(position) {
    this.setState();
    return position;
  }

  destroyBrick(brickId) {
    this.setState();
    return brickId;
  }

  findBrick(brickId) {
    this.setState();
    return brickId;
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

PlayArea.propTypes = {
  children: React.PropTypes.node
};
