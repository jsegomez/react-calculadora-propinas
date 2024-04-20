import { useState } from "react";
import { ToastPosition, toast } from 'react-hot-toast';
import { MenuItemData, OrderItem } from "../types/menu-item.interface";

export default function userOrder(){
    const [order, setOrder] = useState<OrderItem[]>([]);
    const [tip, setTip] = useState<number>(0);
    const [positionNotify, setPositionNotify] = useState<ToastPosition>('top-left');

    const notify = () => toast.success('Agregado a tu orden :D.');
    const notifySaveOrder = () => toast.success('Orden creada');

    const addItem = (option: MenuItemData) => {
        const itemExist = order.find(order => order.id == option.id);
        setPositionNotify('top-left');
        notify();
        
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

    const removeItem = (item: OrderItem):void => {
        const newMenu = order.filter( menuItem => menuItem.id != item.id );
        setOrder(newMenu);
    }

    const totalOrder = ():number => {
        const total = order.reduce((sum, item) => sum + (item.price * item.quantity), 0)
        return total;
    }

    const placeOrder = ():void => {
        setOrder([]);
        setTip(0);
        setPositionNotify('top-center');
        notifySaveOrder();
    }

    return {
        addItem,
        order,
        tip,
        setTip,
        removeItem,
        totalOrder,        
        placeOrder,
        positionNotify
    }
}



