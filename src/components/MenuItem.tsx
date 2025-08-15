import type { MenuItem, OrderItem } from "../types";

type MenuItemProps = {
  item: MenuItem
  addOrderItem: (item: OrderItem) => void
};

export default function MenuItem({ item, addOrderItem } : MenuItemProps) {
  const addItem = () => {    
    addOrderItem({ ...item, quantity: 1 });
  }

  return (
    <button
      className="border-2 border-teal-400 w-full p-3 flex justify-between hover:bg-teal-200 cursor-pointer"
      onClick={addItem}
    >
        <p>{ item.name }</p>
        <p className="font-black">${ item.price }</p>
    </button>
  )
}
