import { User, Search, ShoppingCart, Menu, Heart } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom';

const initialCartCount = 0;
const initialFavCount = 0;

export default function Header() {

    const [cartCount, setCartCount] = useState(initialCartCount)
    const [favCount, setFavCount] = useState(initialFavCount)

    const [showNavbarXl, setShowNavbarXl] = useState(window.innerWidth > 1440)

    useEffect(() => {
        function handleResize() {
            setShowNavbarXl(window.innerWidth > 1440)
        }
        window.addEventListener("resize", handleResize)
        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [])

    return (
        <header className=''>
            <div className='flex items-center gap-3 xl1440:gap-8 xl1440:text-primary text-[16px]'>
                <Link to="/signup">
                    <div className='flex items-center gap-1'>
                        <User size={`${showNavbarXl ? 16 : 24}`} />
                        {showNavbarXl ? <span className='text-[14px] font-bold'> Login / Register </span> : ""}
                    </div>
                </Link>
                <Search size={`${showNavbarXl ? 16 : 24}`} />
                <div className='flex items-center gap-1'>
                    <ShoppingCart size={`${showNavbarXl ? 16 : 24}`} />
                    {showNavbarXl ? <span className='text-[12px]'> {cartCount} </span> : ""}
                </div>
                <Menu className='xl1440:hidden' size={`${showNavbarXl ? 16 : 24}`} />
                <div className='flex items-center gap-1'>
                    <Heart className='hidden xl1440:block' size={`${showNavbarXl ? 16 : 24}`}></Heart>
                    {showNavbarXl ? <span className='text-[12px]'> {favCount} </span> : ""}
                </div>
            </div>
        </header>
    )
}