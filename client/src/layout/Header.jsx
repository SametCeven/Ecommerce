import { User, Search, ShoppingCart, Menu } from 'lucide-react';

export default function Header(){

    return(
        <header className='flex justify-between items-center text-text text-[24px] px-5'>
            <span className='font-bold'> Bandage </span>
            <div className='flex gap-5'>
                <User/>
                <Search/>
                <ShoppingCart />
                <Menu/>
            </div>
        </header>
    )
}