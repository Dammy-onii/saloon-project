import React from "react";

interface customButton {
  text: string;
  color?: string;
  hoverColor?: string;
}

function CustomButton({ text, color }: customButton) {
  return (
    <button
      className={`bg-none text-white px-4 py-2 hover:bg-orange-800 hover:border-orange-800 border font-semibold text-[${color}] hover:text-[white] `}
    >
      {text}
    </button>
  );
}

export default CustomButton;
