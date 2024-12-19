import React, { useState } from 'react';

interface HelpButtonProps {
  title: string;
  message: string;
}
export const HelpButton: React.FC<HelpButtonProps> = ({ title, message }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="text-blue-500 hover:text-blue-700 ml-2"
        aria-label={`Ayuda sobre ${title}`}
      >
        ?
      </button>
      {isOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50 ">
          <div className="bg-white rounded-lg p-6 w-80 shadow-xl ring-2 ring-blue-500 ">
            <h2 className="text-lg font-bold mb-2">{title}</h2>
            <p className="text-gray-700">{message}</p>
            <div className="mt-4 flex justify-center ">
              <button
                className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
                onClick={() => setIsOpen(false)}
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};