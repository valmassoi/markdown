require('normalize.css/normalize.css');
require('styles/App.css');

import marked from 'marked';
import React from 'react';

const defaultText = 'Heading\n'
  + '=======\n'
  + 'Sub-heading\n'
  + '-----------\n'
  + '### Another smaller heading\n'
  + '\n'
  + 'Paragraphs are separated by a blank line.\n'
  + '\n'
  + 'Leave 2 spaces at the end of a line to do a  \n'
  + 'line break\n'
  + '\n'
  + '*italic*, **bold**, `monospace`, ~~strikethrough~~ \n'
  + '\n'
  + 'Bullets:\n'
  + '\n'
  + '* One\n'
  + '* Two\n'
  + '\n'
  + 'Numbered:\n'
  + '\n'
  + '1. One\n'
  + '2. Two\n'
  + '\n'
  + '*[by valmassoi](http://freecodecamp.com/valmassoi)*\n'


class AppComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      text: defaultText
    };
  }

  changeText(text) {
    this.setState({text});
  }
  handleChange(event) {
    const text = event.target.value;
    this.changeText(text); //this.props.changeText(text); removed props because same file?
  }

  render() {
    return (
      <div id="inandout">
        <textarea defaultValue={this.state.text} onChange={this.handleChange.bind(this)} cols="60" rows ="20" id="in"/>
        <div dangerouslySetInnerHTML={{__html:marked(this.state.text)}} id="out" />
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
