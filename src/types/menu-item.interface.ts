export interface MenuItemData{
    id: number,
    name: string,
    price: number
}

export type OrderItem = MenuItemData & {
    quantity: number
}