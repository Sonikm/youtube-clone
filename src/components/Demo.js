import React, { useMemo, useRef, useState } from "react";
import { findNthPrime } from "../utils/helper";

function Demo() {
  const [text, setText] = useState(0);
  const [isChangeTheme, setIsChangeTheme] = useState(false);
  const [y, setY] = useState(0);
  const ref = useRef(0);
  let x = 0;
  // useMemo is a React Hook that lets you cache the result of a calculation between re-renders.
  // const cachedValue = useMemo(calculateValue, dependencies)
  const prime = useMemo(() => findNthPrime(text), [text]);
  console.log("re-rendering...");
  console.log("Y = ", y);

  return (
    <div className="flex gap-4 justify-evenly items-center">
      <div
        className={`w-[300px] h-[300px] border-2 border-black  ${
          isChangeTheme ? " bg-red-400" : "bg-blue-200 "
        }`}
      >
        <input
          className="w-8 h-8"
          type="checkbox"
          onChange={(e) => setIsChangeTheme(!isChangeTheme)}
        />
        <div>
          <input
            className="mt-8 p-1"
            value={text}
            onChange={(e) => setText(e.target.value)}
            type="text"
            placeholder="type.."
          />
          <div>{prime}</div>
        </div>
      </div>
      <div className="w-[300px] h-[300px] flex bg-yellow-200 border-2 border-black ">
        <div className="p-2">
          <button
            className="bg-green-300"
            onClick={() => {
              x = x + 1;
              console.log("x = ", x);
            }}
          >
            Increase X
          </button>
          <div>Let = {x}</div>
        </div>
        <div className="p-2">
          <button
            className="bg-green-300"
            onClick={() => {
              setY((y) => y + 1);
            }}
          >
            Increase Y
          </button>
          <div> State = {y}</div>
        </div>
        <div className="p-2">
          <button
            className="bg-green-300"
            onClick={() => {
              ref.current = ref.current + 1
              console.log("Ref = ", ref.current);
            }}
          >
            Increase Ref
          </button>
          <div> Ref = {ref.current}</div>
        </div>
      </div>
    </div>
  );
}

export default Demo;
