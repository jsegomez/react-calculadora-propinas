import { OrderItem } from '../types/menu-item.interface';
import { formatCurrency } from '../helpers/index';

type OrderContentProps = {
    order: OrderItem[],
    removeItem: (item: OrderItem) => void    
}

export default function OrderContent({order, removeItem } : OrderContentProps) {   
    return (
    <>
        <h2 className="font black text-4xl">Consumo</h2>
        <div className='space-y-3'>
            {
                order.length === 0 
                ? <p className='text-center'>La orden está vacía </p>
                : (
                    order.map( item => (
                        <div key={item.id} className='flex justify-between align-middle border-t border-gray-200 py-4 last-of-type:border-b'>
                            <div>
                                <p>{ item.name } - { formatCurrency(item.price)  }</p>
                                <p className='font-black'>Cantidad { item.quantity } - Total: { formatCurrency(item.price * item.quantity) }</p>
                            </div>
                            <button className='bg-red-600 h-8 w-8 rounded-full text-white' onClick={ () => removeItem(item) }> X </button>
                        </div>
                    ))
                  )
            }
        </div>
    </>
    );
}
