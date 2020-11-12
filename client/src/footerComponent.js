import React from 'react';

class FooterComp extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(event) {
    console.log(this);
  }
  render() {
    return (
      <button class='bg-blue-500' onClick={this.handleClick}>
      Click me
      </button>
    );
  }
}

export default FooterComp;
