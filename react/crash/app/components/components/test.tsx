import React, { Component } from 'react';
type StateType = {
    a: string;
  };
  type propType = {
      b: string;
};
interface test {
    state: StateType;
    props:propType
  }
class test extends Component {
    constructor(props:propType){
        super(props);
        this.state = {
            a:'1'
        }
    }
    render() {
        return (
            <div>
                {this.state.a}
            </div>
        );
    }
}

export default test;