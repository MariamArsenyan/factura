import React, { createContext, useContext, useState } from 'react';

interface BudgetProps {
    clientName: string;
    phoneNumber: string;
    mailName: string;
    totalPrice: number;
    services: string[];
}

interface BudgetContextProps {
    budgets: BudgetProps[];
    addBudget: (budget: BudgetProps) => void;
}

const BudgetContext = createContext<BudgetContextProps | undefined>(undefined);

export const BudgetProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [budgets, setBudgets] = useState<BudgetProps[]>([]);

    const addBudget = (budget: BudgetProps) => {
        setBudgets((prev) => [...prev, budget]);
    };

    return (
        <BudgetContext.Provider value={{ budgets, addBudget }}>
            {children}
        </BudgetContext.Provider>
    );
};

export const useBudget = () => {
    const context = useContext(BudgetContext);
    if (!context) {
        throw new Error('err');
    }
    return context;
};