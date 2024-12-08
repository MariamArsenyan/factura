import React, { useState } from 'react';
import { Checkbox } from './components/checkbox/Checkbox';
import { TotalPrice } from './components/total/TotalPrice';
import { Title } from './components/title/Title';
import { Navbar } from './components/navbar/Navbar';
import { Page } from './components/page/Page';

export const App: React.FC = () => {
  const services = [
    { label: 'SEO', text:"Programació d'una web respontive completa", price: 300 },
    { label: 'Publicitat',text:"Programació d'una web respontive completa", price: 400 },
    { label: 'Pàgina Web', text:"Programació d'una web respontive completa", price: 500 },
  ];

  const [selectedServices, setSelectedServices] = useState<number[]>([]);
  const [pageCost, setPageCost] = useState<number>(0);

  const handleCheckboxChange = (index: number) => {
    setSelectedServices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  
    console.log('Servicios select', selectedServices); 
  };
  

  const totalPrice = selectedServices.reduce((acc, index) => acc + services[index].price, 0) + pageCost;

  return (
    <div className="p-5 flex flex-col items-center max-w-full max-h-full gap-11">
      <Navbar />
      <Title />
      <div className="ff w-5/12 gap-6 flex items-stretch flex-col">
        {services.map((service, index) => (
          <Checkbox
          key={index}
          text={service.text}
          price={service.price}
          label={service.label}
          isChecked={selectedServices.includes(index)} 
          onChange={() => handleCheckboxChange(index)} 
        />
        
        ))}
        {selectedServices.includes(2) && (
          <>
            <div>Configurador de páginas web visible</div>
            <Page onCostChange={(cost) => {
              console.log('Nuevo coste', cost);
              setPageCost(cost);
            }} />
          </>
        )}
        <TotalPrice total={totalPrice} />
      </div>
    </div>
  );
};
