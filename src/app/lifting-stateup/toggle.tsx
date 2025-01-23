"use client";

type ToggleProps = {
  isOn: boolean;
  onClick: () => void;
};

const Toggle = ({ isOn, onClick }: ToggleProps) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 text-white font-bold rounded ${isOn ? "bg-blue-500" : "bg-red-400"}`}
    >
      {isOn ? "On" : "Off"}
    </button>
  );
};
