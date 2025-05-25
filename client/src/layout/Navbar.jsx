import { ChevronDown } from 'lucide-react';
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const womenCategories = ["Bags", "Belts", "Cosmetics", "Accessories", "Hats"]
const menCategories = ["Bags", "Belts", "Cosmetics", "Accessories", "Hats"]

export default function Navbar() {
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
        <nav className="flex flex-col items-center justify-center gap-5 text-secondText text-[30px] py-20 xl1440:flex-row xl1440:text-[14px] xl1440:py-0">
            <Link to="/"> Home </Link>
            <Link className="xl1440:hidden"> Product </Link>
            <Link className="xl1440:hidden"> Pricing </Link>

            <div className="hidden xl1440:flex relative group items-center cursor-pointer">

                <div className='flex gap-1 items-center'>
                    <Link>Shop</Link>
                    <ChevronDown />
                </div>

                <div className='absolute top-full left-0 hidden group-hover:flex p-4 px-16 gap-32 z-50 bg-white shadow-lg rounded-md'>

                    <div className='flex flex-col gap-5'>
                        <span className='block font-bold py-5'> Women </span>
                        {womenCategories.map((womenCategory, index) =>
                            <Link className="block hover:bg-gray-100" key={index}> {womenCategory} </Link>
                        )}
                    </div>

                    <div className="flex flex-col gap-5">
                        <span className='block font-bold py-5'> Men </span>
                        {menCategories.map((menCategory, index) =>
                            <Link className="block hover:bg-gray-100" key={index}> {menCategory} </Link>
                        )}
                    </div>
                </div>

            </div>

            <Link className="hidden xl1440:block"> About </Link>
            <Link className="hidden xl1440:block"> Blog </Link>
            <Link> Contact </Link>
            <Link className="hidden xl1440:block"> Pages </Link>

        </nav>
    )
}