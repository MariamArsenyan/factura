interface TotalPriceProps {
    total: number;
  }
  
  export const TotalPrice: React.FC<TotalPriceProps> = ({ total }) => {
    return (
      <div className="mt-4 text-right text-lg font-semibold text-black">
        Preu pressupostat: <span className="text-blue-600">{total} €</span>
      </div>
    );
  };
  