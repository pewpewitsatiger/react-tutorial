import React, { Component } from 'react';

function getColor(value) {
  if (value === 'random') {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }

  return value;
}

export default class ColorBlock extends Component {

  constructor(props) {
    super(props);
    this.state = {
      color: getColor(props.color)
    };
  }

  changeColor() {
    this.setState({
      color: getColor('random')
    });
  }

  render() {
    const style = {
      width: '200px',
      height: '200px',
      backgroundColor: this.state.color,
      textAlign: 'center',
      display: 'block',
      verticalAlign: 'middle'
    };

    return (
      <button style={style} onClick={() => { this.changeColor(); }}>
        { this.props.children }
      </button>
    );
  }
}

ColorBlock.propTypes = {
  color: React.PropTypes.string,
  children: React.PropTypes.node
};
