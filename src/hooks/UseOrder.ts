import { useState } from "react";
import type { OrderItem } from "../types";

export default function UseOrder() {
    const tipPercentages = [10, 20, 30, 50];
    const [order, setOrder] = useState<OrderItem[]>([]);    
    const [selectedTip, setSelectedTip] = useState(0);

    const addOrderItem = (newOrder: OrderItem) =>{
        setOrder(prevOrder => {
          const isDuplicated = prevOrder.some(item => item.id === newOrder.id);
          if (isDuplicated) {
            return prevOrder.map(item =>
              item.id === newOrder.id ? { ...item, quantity: item.quantity + 1 } : item
            );
          }
          return [...prevOrder, newOrder];
        });
    }

    const removeOrderItem = (id: number) => {
      setOrder(prevOrder => prevOrder.filter(item => item.id !== id));
    }

    const placeOrder = () => {
      resetValues();
    }

    const resetValues = () => {
      setOrder([]);
      setSelectedTip(0);
    }

    return {
      addOrderItem,
      order,
      placeOrder,
      removeOrderItem,
      selectedTip,
      setSelectedTip,
      tipPercentages
    };
}
