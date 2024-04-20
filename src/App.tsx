import { Toaster } from 'react-hot-toast';

import MenuItem from './components/MenuItem';
import OrderContent from './components/OrderContent';
import { menuItem } from './data/db';
import userOrder from './hooks/useOrder';
import OrderTotal from './components/OrderTotal';
import TipPercentForm from './components/TipPercentForm';

function App() {
  const { order, addItem, removeItem, tip, setTip, placeOrder, positionNotify } = userOrder();
  
  return (
    <>
      <header className="bg-teal-400 py-5">
        <h1 className="text-center text-4xl font-black">
          Calculadora de Propinas y Consumo
        </h1>
      </header>

      <main className="max-w-7xl mx-auto py-12 grid md:grid-cols-2">
        <div className='p-5'>
          <h2 className='text-4xl font-black'>Menú</h2>

          <div className='space-y-3 mt-10'>
            { 
              menuItem.map(item => (
                <MenuItem
                  key={item.id}
                  item={item}
                  addItem={addItem}                  
                />
              ))
            }
          </div>

        </div>

        <div className='border border-dashed border-slate-300 p-5 rounded-lg space-y-10'>
          <OrderContent
            order={order}
            removeItem={removeItem}
          ></OrderContent>

          {
            order.length > 0
              ? (
                 <>
                    <TipPercentForm
                      tip={tip}
                      setTip={setTip}
                    />
          
                    <OrderTotal
                      order={order}
                      tip={tip}
                      placeOrder={placeOrder}
                    />
                  </>
                )
              :
              <></>
          }
        </div>

        <Toaster position={positionNotify}/>        
      </main>
    </>
  )
}

export default App
