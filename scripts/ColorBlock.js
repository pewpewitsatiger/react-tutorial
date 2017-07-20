import React, { Component } from 'react';

export default class ColorBlock extends Component {
  render() {
    var color="red";

    var style = {
        width: "200px",
        height: "200px",
        backgroundColor: color,
        textAlign: "center",
        display: "table-cell",
        verticalAlign: "middle"
    };

    return (
      <div style={{style}}>
        {this.props.children}
      </div>
    );
  }
}

ColorBlock.propTypes = {
  children: React.PropTypes.node
};
