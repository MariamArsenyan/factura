import React, { useState, useEffect } from 'react';
import { useBudget } from './BudgetProvider';

import { BiUpArrow, BiDownArrow } from "react-icons/bi";
import { BsArrowCounterclockwise } from "react-icons/bs";
import { IoMdSearch } from "react-icons/io";

interface Budget {
    clientName: string;
    phoneNumber: string;
    mailName: string;
    date: Date; 
    totalPrice: number;
    services: string[];
    isAnnual?: boolean; 
}

export const BudgetList: React.FC = () => {
    const { budgets } = useBudget(); 
    const [filteredBudgets, setFilteredBudgets] = useState<Budget[]>([]);
    const [searchName, setSearchName] = useState('');
    const [sortOrder, setSortOrder] = useState<'asc' | 'desc' | null>(null);
    const [dateOrder, setDateOrder] = useState<'asc' | 'desc' | null>(null);

    useEffect(() => {
        const budgetsFormatted = budgets.map(budget => ({
            ...budget,
            isAnnual: budget.isAnnual ?? false, 
        }));
        setFilteredBudgets(budgetsFormatted);
    }, [budgets]);

    const handleSearch = () => {
        const filtered = filteredBudgets.filter((budget) =>
            budget.clientName.toLowerCase().includes(searchName.toLowerCase())
        );
        setFilteredBudgets(filtered);
    };

    const sortByDate = () => {
        const sorted = [...filteredBudgets];

        if (dateOrder === 'asc') {
            sorted.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
            setDateOrder('desc');
        } else {
            sorted.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
            setDateOrder('asc');
        }

        setFilteredBudgets(sorted);
    };

    const sortByImport = () => {
        const sorted = [...filteredBudgets];
        if (sortOrder === 'asc') {
            sorted.sort((a, b) => b.totalPrice - a.totalPrice);
            setSortOrder('desc');
        } else {
            sorted.sort((a, b) => a.totalPrice - b.totalPrice); 
            setSortOrder('asc');
        }
        setFilteredBudgets(sorted);
    };

    const resetOrder = () => {
        const budgetsFormatted = budgets.map(budget => ({
            ...budget,
            isAnnual: budget.isAnnual ?? false,
        }));
        setFilteredBudgets(budgetsFormatted);
        setSearchName('');
        setSortOrder(null);
        setDateOrder(null);
    };

    return (
        <div className="mt-8 w-full flex flex-col gap-4">
            <h2 className="font-bold text-lg text-black mb-2">Pressupuestos en curso:</h2>

            <div className="flex items-center gap-4 mb-4 text-gray-500">
                <input
                    type="text"
                    placeholder="Buscar por nombre..."
                    value={searchName}
                    onChange={(e) => setSearchName(e.target.value)}
                    className="border p-2 rounded-lg w-1/3"
                />
                <button onClick={handleSearch} className="p-2 hover:text-gray-700">
                    <IoMdSearch />
                </button>
                <button onClick={sortByDate} className="p-2 hover:text-gray-700 flex items-center gap-1">
                    Fecha 
                    {dateOrder === 'asc' ? <BiUpArrow className="w-4 h-4" /> : <BiDownArrow className="w-4 h-4" />}
                </button>
                <button onClick={sortByImport} className="p-2 hover:text-gray-700 flex items-center gap-1">
                    Importe 
                    {sortOrder === 'asc' ? <BiUpArrow className="w-4 h-4" /> : <BiDownArrow className="w-4 h-4" />}
                </button>
                <button onClick={resetOrder} className="p-2 hover:text-gray-700">
                    <BsArrowCounterclockwise />
                </button>
            </div>

            {filteredBudgets.length > 0 ? (
                filteredBudgets.map((budget, index) => {
                    const isAnnual = budget.isAnnual;
                    const salePrice = isAnnual ? budget.totalPrice * 0.8 : budget.totalPrice;

                    return (
                        <div
                            key={index}
                            className="border bg-white p-4 rounded-lg shadow flex justify-between items-center"
                        >
                            <div>
                                <h3 className="font-bold text-lg text-black">{budget.clientName}</h3>
                                <p className="text-gray-700">{budget.phoneNumber}</p>
                                <p className="text-gray-700">{budget.mailName}</p>
                            </div>
                            <div>
                                <p><strong>Servicios seleccionados:</strong></p>
                                <ul className="list-disc pl-5">
                                    {budget.services.map((service, i) => (
                                        <li key={i} className="text-gray-700">{service}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="text-lg font-bold mt-3 text-center">
                                Precio Total: {salePrice.toFixed(2)} €
                                    {isAnnual === true && ( 
                                        <span className="text-green-500 text-sm ml-2">
                                            (20% de descuento aplicado)
                                        </span>
                                     )}
                            </div>

                        </div>
                    );
                })
            ) : (
                <p className="text-gray-600">No hay presupuestos disponibles</p>
            )}
        </div>
    );
};


