import React, {
  forwardRef,
  useState,
  useEffect,
  useImperativeHandle,
  useRef,
  useCallback,
} from "react";
export interface ICountTestHandler {
  addCount(): void;
}
const CountTest = forwardRef<ICountTestHandler, {}>((props, divRef) => {
  const [count, setcount] = useState(0);
  const [times, settimes] = useState(-1);
  useImperativeHandle(
    divRef,
    () => {
      return {
        addCount
      };
    },
    [count]
  );

  useEffect(() => {
    settimes(times + 1);
    return () => settimes(-1);
  }, [count]);

  const addCount = () => {
    setcount(count+1)
  }

  return (
    <div>
      <div>操作次数：{times}</div>
      <div>计算结果：{count}</div>
      <div className="flex">
        <div
          className="text-white leading-8 h-8 w-20 bg-gradient-to-tr from-blue-500 to-teal-500 rounded-lg mx-2 cursor-pointer text-center"
          onClick={() => addCount()}
        >
          + 增加
        </div>
        <div
          className="text-white leading-8 h-8 w-20 bg-gradient-to-tr from-blue-500 to-teal-500 rounded-lg mx-2 cursor-pointer text-center"
          onClick={() => setcount(count - 1)}
        >
          - 减小
        </div>
      </div>
    </div>
  );
});
export default CountTest;
