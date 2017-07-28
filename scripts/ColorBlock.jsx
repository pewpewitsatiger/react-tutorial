import React, { Component } from 'react';

export default class ColorBlock extends Component {
  render() {
    const color = this.props.color === 'random' ?
      '#' + Math.floor(Math.random() * 16777215).toString(16) :
      this.props.color;

    const style = {
      width: '200px',
      height: '200px',
      backgroundColor: color,
      textAlign: 'center',
      display: 'table-cell',
      verticalAlign: 'middle'
    };

    return (
      <div style={style}>
        { this.props.children }
      </div>
    );
  }
}

ColorBlock.propTypes = {
  color: React.PropTypes.string,
  children: React.PropTypes.node
};
