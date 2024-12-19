import React from 'react';

interface PriceItem {
  label: string;
  price: number;
  text: string;
  isChecked: boolean;
}

interface Price {
  items: PriceItem[]; 
}

export const CardPrice: React.FC<Price> = ({ items }) => {
  return (
    <div className="price">
      {items.map((item, index) => (
        <div key={index}>
          <span>{item.label}:</span> 
          <span> {item.text}</span> 
          <span>{item.price} €</span>
        </div>
      ))}
    </div>
  );
};
