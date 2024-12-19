import React, { useState } from 'react';
import { HelpButton } from './HelpButton';


interface PageProps {
  onCostChange: (cost: number) => void;
}

export const Page: React.FC<PageProps> = ({ onCostChange }) => {
  const [pages, setPages] = useState<number>(1);
  const [languages, setLanguages] = useState<number>(1);

  const calculateCost = (pages: number, languages: number) => (pages + languages) * 30;

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

  return (
    <div className="border-gray-300 flex flex-col gap-4 border p-4 rounded-lg shadow-xl text-center">
      <div className="flex items-center justify-between">
        <label htmlFor="pages" className="flex items-center">
          Número de páginas:
          <HelpButton
            title="Número de páginas"
            message="Ajusta el número de páginas necesarias para tu proyecto. Cada página tiene un coste de 30€"
          />
        </label>
        <div className="flex items-center gap-2">
          <button
            onClick={() => handleInputChange('pages', pages - 1)}
            className="bg-gray-200 px-2 py-1 rounded"
          >
            -
          </button>
          <input
            id="pages"
            min="1"
            value={pages}
            onChange={(e) => handleInputChange('pages', parseInt(e.target.value, 10))}
            className="border rounded-md p-1 w-20 text-center"
          />
          <button
            onClick={() => handleInputChange('pages', pages + 1)}
            className="bg-gray-200 px-2 py-1 rounded"
          >
            +
          </button>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <label htmlFor="languages" className="flex items-center">
          Número de idiomas:
          <HelpButton
            title="Número de idiomas"
            message='Ajusta el número de idiomas que tendrá tu proyecto.
            Cada idioma tiene un coste de 30€'
          />
        </label>
        <div className="flex items-center gap-2">
          <button
            onClick={() => handleInputChange('languages', languages - 1)}
            className="bg-gray-200 px-2 py-1 rounded"
          >
            -
          </button>
          <input
            id="languages"
            min="1"
            value={languages}
            onChange={(e) => handleInputChange('languages', parseInt(e.target.value, 10))}
            className="border rounded-md p-1 w-20 text-center"
          />
          <button
            onClick={() => handleInputChange('languages', languages + 1)}
            className="bg-gray-200 px-2 py-1 rounded"
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

