import React, { Component } from 'react';
import Bold from './Bold';
import Italic from './Italic';

export default class App extends Component {
  render() {
    return (
      // Add your component markup and other subcomponent references here.
      <div>
        <h1>Hello, World!</h1>
        <Bold>THIS IS NOW BOLD</Bold>
        <Italic> THIS IS NOW ITALIC </Italic>
        <ColorBlock> THIS IS DOING A THING </ColorBlock>
      </div>
    );
  }
}
