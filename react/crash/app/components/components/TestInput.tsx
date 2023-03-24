import React,{ Component,createRef } from "react";
import TestInputBtn,{BtnRef} from "./TestInputBtn";
class TestInput extends Component {
    inputRef = createRef<HTMLInputElement>()
    btnRef = createRef<BtnRef>()
    inputFocus = () =>{
        this.inputRef.current?.focus();
    }
    render() {
      return (
        <div className="flex">
          <input ref={this.inputRef} type="text" placeholder="请聚焦" />
          <TestInputBtn ref={this.btnRef}/>
          <button onClick={()=>this.btnRef.current?.chageBgColor('bg-blue-300')}>变成蓝色</button>
        </div>
      );
    }
  }
export default TestInput;