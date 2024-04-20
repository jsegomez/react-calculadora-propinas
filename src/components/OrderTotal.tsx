import { useMemo } from "react"
import { OrderItem } from "../types/menu-item.interface"
import { formatCurrency } from "../helpers"

type OrderTotalProps = {
    order: OrderItem[],
    tip: number,
    placeOrder: () => void
}

export default function OrderTotal({ order, tip, placeOrder }: OrderTotalProps) {
    const subTotal = useMemo(() => order.reduce((sum, item) => sum + (item.price * item.quantity), 0), [order]);
    const tipAmount = useMemo(() => subTotal * tip, [tip, order]);
    const total = useMemo(() => subTotal + tipAmount, [tip, order]);

    return (
        <>
            <div className="space-y-3">
                <h2 className="font-black text-2xl">Totales y propina:</h2>
                <p>Subtotal a pagar: <span className="font-bold">{formatCurrency(subTotal)}</span></p>
                <p>Propina: <span className="font-bold">{formatCurrency(tipAmount)}</span></p>
                <p>Total a pagar: <span className="font-bold">{formatCurrency(total)}</span></p>
            </div>

            <button
                className="w-full bg-black p-3 uppercase text-white font-bold disabled:opacity-20"
                disabled={total == 0 || tipAmount == 0}
                onClick={() => placeOrder()}
            >
                Guardar Order
            </button>

            {
                tip == 0
                    ? <p className="text-red-500">Favor seleccionar propina</p>
                    : <> </>
            }
        </>
    )
}
