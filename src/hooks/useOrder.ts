import { useState } from "react";
import { MenuItemData, OrderItem } from "../types/menu-item.interface";

export default function userOrder(){
    const [order, setOrder] = useState<OrderItem[]>([]);

    const addItem = (option: MenuItemData) => {
        const itemExist = order.find(order => order.id == option.id);
        
        if(itemExist){
            increaseQuantity(option);
        }else{
            const newElement:OrderItem = {...option, quantity: 1}
            setOrder([...order, newElement]);
        }

    }

    const increaseQuantity = (elementUpdate: MenuItemData):void => {        
        const updatedOrder = order.map(
            orderItem => orderItem.id === elementUpdate.id 
            ? { ...orderItem, quantity: orderItem.quantity + 1 } 
            : orderItem
        )
        setOrder(updatedOrder);
    }

    return {
        addItem
    }
}