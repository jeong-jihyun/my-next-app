"use client";
import { ChangeEvent, FormEvent, useState } from "react";

export const ControlledInputExample = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert("제출된 이름 : " + inputValue);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
      <label>
        이름:{" "}
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          className="px-3 py-2 border border-gray-300 rounded"
        />
      </label>
      <button
        type="submit"
        className="px-4 py-4 font-medium text-white bg-blue-500 hover:bg-blue-600"
      >제출</button>
    </form>
  );
};
