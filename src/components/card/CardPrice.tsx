import React from 'react';

interface Price {
  items: {
    label: string;
    price: number;
    text: string; 
    isChecked: boolean;
  };
}

export const CardPrice: React.FC<Price> = ({ items }) => {
  return (
    <div className="price">
      {items.map((item, index) =>
        <div key={index}>
          <span>{item.label}:</span> 
          <span> {item.text}</span> 
          <span>{item.price} €</span>
        </div>,
      )}
    </div>
  );
};
