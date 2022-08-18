import React, { Component } from 'react';

class Box extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const id = this.props.id;
    this.props.deleteBox(id);
  }

  render() {
    const { height, width, color } = this.props;
    return (
      <div
        className="Box"
        style={{
          height: `${height}px`,
          width: `${width}px`,
          backgroundColor: `rgb(${color})`,
        }}
        onClick={this.handleClick}
      ></div>
    );
  }
}
export default Box;
