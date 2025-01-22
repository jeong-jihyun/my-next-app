"use client";

import React, { useState } from "react";
type Props = {
  name: string;
  age?: number;
};

export function Welcome(props: Props) {
  return <h4>Hello, {props.name}</h4>;
}

export default function ItemList({ initalItems }: { initalItems: string[] }) {
  
  const [items, setItems] = useState(initalItems);
  const [inputValue, setInputValue] = useState("");

  const addItem = () => {
    setItems([...items, inputValue]);
    setInputValue("");
  };
  return (
    <div>
      {/* <Welcome name="Alice" /> */}
      {/* <h5 className="text-xl font-bold">웹기본</h5>
      <h1 className="text-2xl font-bold">구성요소</h1> */}
      <ul id="itemlist" className="list-disc list-inside">
        {items.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={addItem}>Add</button>
    </div>
  );
}
