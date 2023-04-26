import { useState,forwardRef, useImperativeHandle } from "react";
export interface BtnRef {
  chageBgColor(color: string): void;
}
const TestInputBtn = forwardRef<BtnRef, {}>((props, ref) => {
    const [bgStyle,setBgStyle] = useState('bg-yellow-300')
  useImperativeHandle(ref, () => {
    return {
      chageBgColor,
    };
  });
  const chageBgColor = (color: string)=>{
    setBgStyle(color)
  }
  return (
    <div>
      <button className={bgStyle} onClick={()=>chageBgColor('bg-red-300')}>变成红色</button>
    </div>
  );
});
export default TestInputBtn;
// https://way.jd.com/jisuapi/search?keyword=%E7%99%BD%E8%8F%9C&num=10&appkey=da39dce4f8aa52155677ed8cd23a6470