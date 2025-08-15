import { formatCurrency } from "../helpers/format-currency";
import type { OrderItem } from "../types";

type OrderContentsProps = {
    order: OrderItem[],     
    removeOrderItem: (id: number) => void
}

export default function OrderContents({ order, removeOrderItem }: OrderContentsProps) {
  return (
    <div>
        <h2 className="font-black text-4xl text-center">Consumo</h2>
        <div className="space-y-3 mt-5">
          {
            order && order.length > 0 ? (
                <>
                    {
                        order.map(item => (
                            <div key={item.id} className="flex justify-between border-b border-gray-300 py-3">
                                <span className="text-lg">{item.name}</span>
                                <div>
                                  <span className="text-lg">Cantidad: { item.quantity} - subtotal: { formatCurrency(item.price * item.quantity) }</span>
                                  <button className="bg-red-600 text-white p-1 rounded w-8 ml-2 cursor-pointer" onClick={() => removeOrderItem(item.id)}>x</button>
                                </div>
                            </div>
                        ))
                    }
                </>
            ) : (
              <p className="text-center mt-8">Explora el menú</p>
            )
          }
        </div>
    </div>
  )
}
