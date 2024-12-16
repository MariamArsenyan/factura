import { useBudget } from './BudgetProvider';
export const BudgetList: React.FC = () => {
    const { budgets } = useBudget();

    return (
        <div className="mt-8 w-full flex flex-col gap-4">
            <h2 className="font-bold text-lg text-black">Presupuestos en cursos:</h2>
            {budgets.length === 0 ? (
                <p className="text-gray-600">No hay presupuestos</p>
            ) : (
                <div className="flex flex-col gap-4">
                    {budgets.map((budget, index) => (
                        
                        <div
                            
                            key={index}
                            className="border-gray-300 bg-violet-50
                            flex flex-col gap-4 border p-4 rounded-lg shadow-xl"
                        >

                            <h3 className="font-bold text-lg text-black mb-2">Presupuesto #{index + 1}</h3>
                            <div className='flex justify-between'>
                                <div>
                                    <p><strong>{budget.clientName}</strong> </p>
                                    <p className="text-gray-700"> {budget.phoneNumber}</p>
                                    <p className="text-gray-700">{budget.mailName}</p>
                                </div>
                                
                                
                                <div className='flex flex-col' >
                                <p><strong>Servicios seleccionados:</strong></p>
                                    <ul className="list-disc pl-5">
                                        {budget.services.map((service, i) => (
                                            <li key={i} className="text-gray-700">{service}</li>
                                        ))}
                                    </ul>
                                </div>
                               
                                <p className="text-gray-700">Total:<strong> <br/>{budget.totalPrice.toFixed(2)} €</strong> </p>
                            </div>
                            
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};
