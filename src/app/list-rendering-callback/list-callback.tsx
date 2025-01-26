"use client";
import React, { useCallback, useEffect, useState } from "react";

const ItemComponent = ({ content }: { content: string }) => {
  return <li className="p-2 mb-2 bg-gray-100 rounded shadow">{content}</li>;
};

ItemComponent.displayName = "Item";

export const Item = React.memo(ItemComponent);

export default function ItemList() {
  const [items, setItems] = useState(["Item 1", "Item 2"]);
  const [renderCount, setRenderCount] = useState(0);

  const [input, setInput] = useState("");
  const [unrelatedInput, setUnrelatedInput] = useState(0);

  /**
   *
   */
  const handleAdd = useCallback(() => {
    if (input) {
      setItems((prevItems) => [...prevItems, input]);
      setInput("");
    }
  }, [input]);

  useEffect(() => {
    setRenderCount((count) => count + 1);
  }, [unrelatedInput]);

  return (
    <div className="p-4">
      <input
        type="text"
        className="p-2 mb-2 border border-gray-300 rounded mr-2"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="new item input"
      />
      <button
        className="p-2 text-white bg-blue-500 rounded hover:bg-blue-600"
        onClick={handleAdd}
      >
        item add
      </button>
      <ul className="mt-4">
        {items.map((item, index) => (
          <Item key={index} content={item} />
        ))}
      </ul>
      <input
        type="number"
        className="p-2 mt-2 border border-gray-300 rounded"
        value={unrelatedInput}
        onChange={(e) => setUnrelatedInput(Number(e.target.value))}
        placeholder="별도 입력 필드"
      />
      <p className="mb-4 text-sm text-gray-600">리랜더링 횟수: {renderCount}</p>
    </div>
  );
}
