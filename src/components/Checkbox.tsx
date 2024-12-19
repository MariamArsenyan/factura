import React from 'react';

interface CheckboxProps {
  label: string;
  text: string;
  price: number;
  isChecked: boolean;
  onChange: () => void;
}

export const Checkbox: React.FC<CheckboxProps> = ({ label, text, price, isChecked, onChange }) => {
  return (
    <div
      className={`flex items-center justify-between border-2 rounded-xl p-4 shadow-lg h-24  ${
        isChecked ? 'border-blue-500' : 'border-gray-300'
      }`}
    >
      <div className="flex flex-col">
        <span className="font-bold text-lg text-black">{label}</span> 
        <span className="text-sm text-gray-500">{text}</span> 
      </div>
      <div className="flex items-center gap-11">
        <span className="font-semibold text-lg text-black">{price} €</span>
        <label className="flex items-center gap-2 text-blue-600 font-medium cursor-pointer">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={onChange}
            className="w-3 h-3 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          />
          Añadir 
        </label>
      </div>
    </div>
  );
};
