"use client";
import { useEffect, useState } from "react";

function CounterEffect() {
  const [message, setMessage] = useState<string[]>();
  const [count, setCount] = useState(0);

  useEffect(() => {
    setMessage((prev) => [...(prev || []), "컴포넌트가 마운트되었습니다."]);
    console.log(`컴포넌트가 마운트되었습니다.`);

    return () => {
      setMessage((prev) => [
        ...(prev || []),
        "컴포넌트가 언 마운트되었습니다.",
      ]);
    };
  }, []);

  useEffect(() => {
    setMessage((prev) => [
      ...(prev || []),
      `카운터가 업데이트되었습니다.${count}`,
    ]);
  }, [count]);

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <div className="h-40 p-2 mb-4 overflow-auto border border-gray-300 w-80">
        {message?.map((msg, index) => {
          return (
            <p key={index} className="text-sm text-gray-700">
              {msg}
            </p>
          );
        })}
      </div>
      <div className="flex flex-col items-center">
        <p className="mb-2 text-lg font-bold">카운트:{count}</p>
        <button
          onClick={() => setCount(count + 1)}
          className="pw-4 py-2 font-semibold font-white bg-blue-500 hover:bg-blue-700"
        >
          증가
        </button>
      </div>
    </div>
  );
}

export default CounterEffect;
