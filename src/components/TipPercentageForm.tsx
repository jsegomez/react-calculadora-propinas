import { useCallback } from "react";

type TipPercentageFormProps = {
  setSelectedTip: (tip: number) => void;
  selectedTip: number;
  tipPercentages: number[];
};

export default function TipPercentageForm({setSelectedTip, selectedTip, tipPercentages} : TipPercentageFormProps) {  
  const getButtonClass = useCallback((selectedValue: number) => {        
    const baseClasses = 'hover:bg-blue-800 hover:text-white rounded-lg px-2 py-1 cursor-pointer';
    const bgClass = selectedTip === selectedValue ? 'bg-blue-800 text-white' : 'bg-white text-black-500 border border-gray-300';
    return `${baseClasses} ${bgClass}`;
  }, [selectedTip])

  return (
    <div className="mt-8 mb-5">
      <h3 className="font-black text-2xl mb-3">Elige una propina:</h3>

      <div className="flex gap-4">
        {tipPercentages.map((percentage) => (
          <button
            key={percentage}
            className={ getButtonClass(percentage) }
            onClick={() => setSelectedTip(percentage)}       
          >
            {percentage}%
          </button>
        ))}
      </div>
    </div>
  )
}
