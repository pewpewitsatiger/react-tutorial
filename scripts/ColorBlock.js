import React, { Component } from 'react';

export default class ColorBlock extends Component {
  render() {
    var color="red";
    return (
      <div style="
            width: 200px;
            height 200px;
            background-color; {color};
            text-align: center;
            display: table-cell;
            vertical-align: middle;
            "> </div>
    );
  }
}

ColorBlock.propTypes = {
  children: React.PropTypes.node
};
