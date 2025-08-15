import MenuItem from "./components/MenuItem"
import OrderContents from "./components/OrderContents";
import OrderTotal from "./components/OrderTotal";
import TipPercentageForm from "./components/TipPercentageForm";
import { menuItems } from "./data/data";
import UseOrder from "./hooks/UseOrder";

function App() {    
  const {
    addOrderItem,
    order,
    placeOrder,
    removeOrderItem,
    selectedTip,
    setSelectedTip,
    tipPercentages
  } = UseOrder();

  return (
    <>
      <header className="bg-teal-400 py-5">
        <h1 className="text-center text-4xl font-black">Calculadora de Propinas y consumo</h1>
      </header>

      <main className="max-w-7xl mx-auto mt-10 grid md:grid-cols-2 space-x-2">
        <section>
          <h2 className="text-4xl font-black text-center">Menú</h2>
          <div className="space-y-2 mt-5">
            {
              menuItems.map(item => (
                <MenuItem 
                  key={item.id}
                  item={item}
                  addOrderItem={addOrderItem}
                />
              ))
            }
          </div>
        </section>

        <section className="border border-dashed border-slate-300 p-5 space-y-1">
          <OrderContents
            order={order}                
            removeOrderItem={removeOrderItem}
          />

          { order.length > 0 && (
            <>
              <TipPercentageForm
                selectedTip={selectedTip}
                setSelectedTip={setSelectedTip}
                tipPercentages={tipPercentages}
              />

              <OrderTotal                
                order={order}
                selectedTip={selectedTip}
                placeOrder={placeOrder}
              />
            </>
          ) }
        </section>
      </main>
    </>
  )
}

export default App
