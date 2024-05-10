import React from "react";

const InputFiled = ({ label, type, placeholder }) => {
  return (
    <div className="mb-4">
      <label className="block mb-1 font-bold" htmlFor={label}>
        {label}
      </label>
      <input
        type={type}
        id={label}
        placeholder={placeholder}
        className="border border-gray-300 rounded-md px-4 py-2 w-full h-10 rounded-tl-lg"
        placeholderClassName="text-base font-normal text-gray-400"
      />
    </div>
  );
};

export const MemoizedCustomInputFiled = React.memo(InputFiled);
