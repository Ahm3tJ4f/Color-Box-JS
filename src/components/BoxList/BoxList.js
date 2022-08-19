import React, { Component } from 'react';
import Box from '../Box/Box';
import NewBoxForm from '../NewBoxForm/NewBoxForm';
import { v4 as uuidv4 } from 'uuid';

class BoxList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      boxList: [],
    };
    this.addBox = this.addBox.bind(this);
    this.deleteBox = this.deleteBox.bind(this);
  }

  addBox(color, height, width) {
    const id = uuidv4();
    this.setState((state) => {
      return {
        boxList: [
          ...state.boxList,
          <Box
            id={id}
            key={id}
            height={height}
            width={width}
            color={color}
            deleteBox={this.deleteBox}
          />,
        ],
      };
    });
  }

  deleteBox(id) {
    this.setState((state) => {
      return {
        boxList: state.boxList.filter((box) => {
          return box.id !== id;
        }),
      };
    });
  }

  render() {
    console.log(this.state.boxList);
    return (
      <main className="BoxList">
        <NewBoxForm addBox={this.addBox} />
        <div className="box-canvas">{this.state.boxList}</div>
      </main>
    );
  }
}
export default BoxList;
