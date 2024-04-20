import { MenuItemData } from '../types/menu-item.interface';

type MenuItemProps = {
 item: MenuItemData 
 addItem: (param: MenuItemData) => void
}

export default function MenuItem({item, addItem} : MenuItemProps) {
  return (
    <button onClick={ () => addItem(item) } className='border-2 border-teal-400 w-full p-3 flex justify-between hover:bg-teal-200 rounded-lg'>
        <p>{ item.name }</p>
        <p className='font-black'>${ item.price }</p>
    </button>
  )
}



