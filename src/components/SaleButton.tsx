import React from "react";

interface SaleButtonProps {
  isAnnual: boolean;
  salePrice: number;
  saleAnnual: () => void; 
}

export const SaleButton: React.FC<SaleButtonProps> = ({ isAnnual, salePrice, saleAnnual }) => {
    return (
      <div className="form-control flex items-center justify-center py-5 flex-col">
        <div className="flex items-center gap-4">
          <span className="text-lg font-medium">Pagament mensual</span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={isAnnual}
              onChange={saleAnnual} 
            />
            <div className="w-14 h-7 bg-gray-300 rounded-full peer peer-checked:bg-green-500 transition-all"></div>
            <div
              className="absolute top-0.5 left-0.5 w-6 h-6 bg-white rounded-full peer-checked:translate-x-7 transition-all"
            ></div>
          </label>
          <span className="text-lg font-medium flex-col">Pagament anual</span>
        </div>
        {isAnnual && (
          <div className="mt-2">
            <span className="text-green-500 text-sm">
              (20% de descuento aplicado)
            </span>
          </div>
        )}
      </div>
    );
  };
  