import React from 'react';

import { useState } from 'react';
import { useBudget } from './BudgetProvider';
import { FaArrowRightLong } from 'react-icons/fa6';

interface DataProps {
    totalPrice: number;
    date:string;
    selectedServices: string[];
    resetServices: () => void;
    onShowBudgetList: () => void;
    sortByDate: () => void;
}

export const Client: React.FC<DataProps> = ({ totalPrice, selectedServices, resetServices, onShowBudgetList }) => {
    const [clientName, setClientName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [mailName, setMailName] = useState('');
    const [sortByDate, setSortByDate] = useState('');
    const { addBudget } = useBudget();

    const handleAddBudget = (e: React.FormEvent) => {
        e.preventDefault();

        if (!clientName || !phoneNumber || !mailName) {
            alert('Por favor, introduce datos válidos');
            return;
        }

        const newBudget = {
            clientName,
            phoneNumber,
            mailName,
            totalPrice,
            date: new Date,
            services: selectedServices,
            isAnnual: false,
            
        };

        addBudget(newBudget);
        setClientName('');
        setPhoneNumber('');
        setMailName('');
        setSortByDate('');
        resetServices();
        onShowBudgetList();
    };

    return (
        <div className="client border-gray-300 flex flex-col gap-4 border p-4 rounded-lg shadow-xl">
            <h1 className="font-bold text-lg text-black">Solicitar presupuesto</h1>
            <form onSubmit={handleAddBudget} className="flex gap-4 mt-4">
                <label>
                    <input
                        type="text"
                        name="name"
                        value={clientName}
                        onChange={(e) => setClientName(e.target.value)}
                        placeholder="Nombre"
                        className="border w-40 rounded-md p-1"
                    />
                </label>
                <label>
                    <input
                        type="tel"
                        name="Phone"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        placeholder="Teléfono"
                        className="border w-40 rounded-md p-1"
                    />
                </label>
                <label>
                    <input
                        type="email"
                        name="mail"
                        value={mailName}
                        onChange={(e) => setMailName(e.target.value)}
                        placeholder="Email"
                        className="border w-40 rounded-md p-1"
                    />
                </label>
                <button
                    type="submit"
                    className="button h-10 w-4/12 border border-grey rounded-full bg-indigo-600 flex flex-row items-center justify-evenly"
                >
                    <h2 className="text-white text-base m-1">Solicita tu presupuesto</h2>
                    <FaArrowRightLong color="white" />
                </button>
            </form>
        </div>
    );
};
