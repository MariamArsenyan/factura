import { Checkbox } from "../../components/checkbox/Checkbox";
import { BudgetProvider } from "../../components/client/BudgetProvider";
import { BudgetList } from "../../components/client/BudgetList";
import { Client } from "../../components/client/Client";
import { useState } from 'react';
import { Title } from "../../components/title/Title";
import { Page } from "../../components/page/Page";

export const HomePage: React.FC = () => {
    const services = [
        { label: 'SEO', text: "Programació d'una web respontive completa", price: 300 },
        { label: 'Publicitat', text: "Programació d'una web respontive completa", price: 400 },
        { label: 'Pàgina Web', text: "Programació d'una web respontive completa", price: 500 },
    ];

    const [selectedServices, setSelectedServices] = useState<number[]>([]);
    const [pageCost, setPageCost] = useState<number>(0);
    const [showBudgetList, setShowBudgetList] = useState(false); 

    const handleCheckboxChange = (index: number) => {
        setSelectedServices((prev) =>
            prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
        );
    };

    const resetServices = () => {
        setSelectedServices([]);
    };

    const selectedServiceNames = selectedServices.map((index) => services[index].label);
    const totalPrice = selectedServices.reduce((acc, index) => acc + services[index].price, 0) + pageCost;

    return (
        <BudgetProvider>
            <div className="p-5 flex flex-col items-center max-w-full max-h-full gap-11">
                <Title/>
                
                <div className="w-5/12 gap-6 flex items-stretch flex-col">
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
                        <Page onCostChange={(cost) => setPageCost(cost)} />
                    </>
                )}
                    <Client
                        totalPrice={totalPrice}
                        selectedServices={selectedServiceNames}
                        resetServices={resetServices}
                        onShowBudgetList={() => setShowBudgetList(true)} 
                    />
                    {showBudgetList && <BudgetList />} 
                </div>
            </div>
        </BudgetProvider>
    );
};


