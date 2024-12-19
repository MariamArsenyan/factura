import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom"; // Aquí usamos useNavigate
import { Checkbox } from "../components/Checkbox";
import { Navbar } from "../components/Navbar";
import { Page } from "../components/Page";
import { SaleButton } from "../components/SaleButton";
import { Title } from "../components/Title";
import { BudgetList } from "../components/client/BudgetList";
import { BudgetProvider } from "../components/client/BudgetProvider";
import { Client } from "../components/client/Client";

export const HomePage: React.FC = () => {
    const services = [
        { label: 'SEO', text: 'Programación de una web respontive completa', price: 300 },
        { label: 'Publicidad', text: 'Programación de una web respontive completa', price: 400 },
        { label: 'Página web', text: 'Programación de una web respontive completa', price: 500 },
    ];

    const [selectedServices, setSelectedServices] = useState<number[]>([]);
    const [pageCost, setPageCost] = useState<number>(0);
    const [showBudgetList, setShowBudgetList] = useState(false); 
    const [isAnnual, setIsAnnual] = useState<boolean>(false); 
    const [currentDate] = useState<string>(new Date().toISOString());
    
    const location = useLocation();
    const navigate = useNavigate(); 

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        services.forEach((_, index) => {
            if (selectedServices.includes(index)) {
                params.set(`service${index}`, 'true');
            } else {
                params.delete(`service${index}`);
            }
        });
        params.set('WebPage', pageCost ? 'true' : 'false');
        params.set('CampaignSeo', selectedServices.includes(0) ? 'true' : 'false');
        params.set('pages', pageCost.toString());
        params.set('lang', '2'); 

        navigate({ search: params.toString() }); 
    }, [selectedServices, pageCost, location.search, navigate]);

    const handleCheckboxChange = (index: number) => {
        setSelectedServices((prev) =>
            prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
        );
    };

    const resetServices = () => {
        setSelectedServices([]);
        setShowBudgetList(false);
        setIsAnnual(false);
    };

    const saleAnnual = () => {
        setIsAnnual((prev) => !prev);
    };

    const sortByDate = () => {
        console.log("Ordenar por fecha");
    };

    const selectedServiceNames = selectedServices.map((index) => services[index].label);
    const totalPrice = selectedServices.reduce((acc, index) => acc + services[index].price, 0) + pageCost;
    const salePrice = isAnnual ? totalPrice * 0.8 : totalPrice; 

    return (
        <BudgetProvider>
            <div className="p-5 flex flex-col items-center max-w-full max-h-full gap-11">
                <Navbar />
                <Title />
                <SaleButton
                    isAnnual={isAnnual}
                    salePrice={salePrice}
                    saleAnnual={saleAnnual}
                />
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
                        totalPrice={salePrice}
                        selectedServices={selectedServiceNames}
                        resetServices={resetServices}
                        onShowBudgetList={() => setShowBudgetList(true)}
                        date={currentDate}
                        sortByDate={sortByDate}
                    />
                    {showBudgetList && <BudgetList />}
                </div>
            </div>
        </BudgetProvider>
    );
};
