import React, { useState } from 'react';

interface PageProps {
  onCostChange: (cost: number) => void; 
}

export const Page: React.FC<PageProps> = ({ onCostChange }) => {
  const [pages, setPages] = useState<number>(1);
  const [languages, setLanguages] = useState<number>(1);
  

  const calculateCost = (pages: number, languages: number) => {
    return (pages + languages) * 30;
  };
  const handleInputChange = (type: 'pages' | 'languages', value: number) => {
    const sanitizedValue = Math.max(1, value); 
    if (type === 'pages') setPages(sanitizedValue);
    if (type === 'languages') setLanguages(sanitizedValue);

    const newCost = calculateCost(
      type === 'pages' ? sanitizedValue : pages,
      type === 'languages' ? sanitizedValue : languages
    );

    onCostChange(newCost); 
  };
  
  const handleButtonClick = (type: 'pages' | 'languages', increment: boolean) => {
    if (type === 'pages') {
        const newValue = increment ? pages + 1 : Math.max(1, pages - 1);
        handleInputChange('pages', newValue);
    }
    if (type === 'languages') {
        const newValue = increment ? languages + 1 : Math.max(1, languages - 1);
        handleInputChange('languages', newValue)
    }
  }

  return (
    <div className="border-gray-300 
        flex flex-col gap-4 border p-4 rounded-lg shadow-xl">
      <div className="flex items-center justify-between">
        <label htmlFor="pages">Número de páginas:</label>
        <div className="flex items-center gap-2">
        <button
            onClick={() => handleButtonClick('pages', false)}
            className='px-2 border  border-grey rounded-full bg-white  text-black '
        >
            -
        </button>
        <input
          id="pages"
          type="number"
          min="1"
          value={pages}
          onChange={(e) => handleInputChange('pages', parseInt(e.target.value, 10))}
          className="border  rounded-md p-1 w-20 text-center"
        />
        <button
            onClick={() => handleButtonClick('pages', true)}
            className='px-2 border  border-grey rounded-full bg-white text-black '
        >
            +
        </button>
      </div>
        </div>
        
        <div className="flex items-center justify-between">
        <label htmlFor="languages">Número de idiomas:</label>
        <div className="flex items-center gap-2">
        <button
            onClick={() => handleButtonClick('languages', false)}
            className='px-2 border  border-grey rounded-full bg-white  text-black '
        >
            -
        </button>
        <input
          id="languages"
          type="number"
          min="1"
          value={languages}
          onChange={(e) => handleInputChange('languages', parseInt(e.target.value, 10))}
          className="border rounded-md p-1 w-20 text-center"
        />
        <button
            onClick={() => handleButtonClick('languages', true)}
            className='px-2 border border-grey rounded-full bg-white text-black '
        >
            +
        </button>
      </div>
        </div>
      
      <div className="text-center font-semibold">
        Coste total de la web: {calculateCost(pages, languages)} €
      </div>
    </div>
  );
};
