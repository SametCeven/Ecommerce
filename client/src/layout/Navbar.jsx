import { ChevronDown } from 'lucide-react';
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom"
import { fetchCategories } from '../store/actions/globalActions';

/* const womenCategories = ["Bags", "Belts", "Cosmetics", "Accessories", "Hats"]
const menCategories = ["Bags", "Belts", "Cosmetics", "Accessories", "Hats"]
 */

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

    const dispatch = useDispatch()
    let categories = useSelector(store => store.global.categories)
    const categoriesLoading = useSelector(store => store.global.categoriesLoading)
    const categoriesError = useSelector(store => store.global.categoriesError)

    useEffect(() => {
        dispatch(fetchCategories())
    }, [])

    let womenCategories = categories.filter((c) => c.gender === "k")
    let menCategories = categories.filter((c) => c.gender === "e")









    return (
        <nav className="flex flex-col items-center justify-center gap-5 text-secondText text-[30px] py-20 xl1440:flex-row xl1440:text-[14px] xl1440:py-0">
            <Link to="/"> Home </Link>

            <div className="xl1440:flex relative group items-center cursor-pointer">

                <div className='flex gap-1 items-center'>
                    <Link to="/shop">Shop</Link>
                    <ChevronDown className='hidden xl1440:block' />
                </div>

                <div className='absolute top-full left-0 hidden xl1440:group-hover:flex p-4 px-16 gap-32 z-50 bg-white shadow-lg rounded-md'>

                    <div className='flex flex-col gap-3'>
                        <span className='block font-bold px-5 py-3'> Women </span>
                        {womenCategories.map((womenCategory, index) =>
                            <Link className="block hover:bg-gray-100 px-5 py-1 rounded-xl" key={index} to={`/shop/kadin/${womenCategory.title}/${womenCategory.id}`}> {womenCategory.title} </Link>
                        )}
                    </div>

                    <div className="flex flex-col gap-3">
                        <span className='block font-bold px-5 py-3'> Men </span>
                        {menCategories.map((menCategory, index) =>
                            <Link className="block hover:bg-gray-100 px-5 py-1 rounded-xl" key={index} to={`/shop/erkek/${menCategory.title}/${menCategory.id}`}> {menCategory.title} </Link>
                        )}
                    </div>
                </div>

            </div>

            <Link to="/about"> About </Link>
            <Link > Blog </Link>
            <Link to="/contact"> Contact </Link>
            <Link > Pages </Link>

        </nav>
    )
}