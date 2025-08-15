import { useMemo } from "react";
import { formatCurrency } from "../helpers/format-currency";
import type { OrderItem } from "../types"

type OrderTotalProps = {
    order: OrderItem[],
    selectedTip: number, 
    placeOrder: () => void
}

export default function OrderTotal({ order, selectedTip, placeOrder }: OrderTotalProps) {
    const subtotal = useMemo(() => order.reduce((acc, item) => acc + (item.price * item.quantity), 0), [order]);
    const tip = useMemo(() => subtotal * (selectedTip / 100), [subtotal, selectedTip]);
    const total = useMemo(() => subtotal + tip, [subtotal, tip]);
    
    return (
        <>
            <div className="space-y-3">
                <h2 className="font-black text-2xl">Totales y propina</h2>
                
                <p className="font-bold">Subtotal a pagar: <span>{ formatCurrency(subtotal) }</span></p>          
                <p className="font-bold">Propina: <span>{ formatCurrency(tip) }</span></p>          
                <p className="font-bold">Total a pagar: <span>{ formatCurrency(total) }</span></p>          
            </div>

            <button
                className="w-full py-2 mt-8 font-bold text-white bg-teal-500 rounded-md hover:bg-teal-600 cursor-pointer"
                onClick={placeOrder}
            >
                Guardar orden
            </button>
        </>
    );
}
