import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchCategories } from "../store/actions/globalActions"



export default function Categories() {

    const dispatch = useDispatch()
    let categories = useSelector(store => store.global.categories)
    const categoriesLoading = useSelector(store => store.global.categoriesLoading)
    const categoriesError = useSelector(store => store.global.categoriesError)

    useEffect(() => {
        dispatch(fetchCategories())
    }, [])

    categories.sort((a, b) => b.rating - a.rating)
    categories = categories.slice(0, 5)


    return (
        <div className="flex flex-col items-center gap-5 w-80 xl1440:w-full xl1440:flex-row">
            {categories.map((category, index) =>
                <div className="flex flex-col items-center relative w-60" key={index}>

                    <img className="w-[320px] h-[300px] object-cover" src={category.img} alt={category.title} key={index}></img>

                    <h5 className="text-lightGray absolute top-1/2 -translate-y-1/2"> {category.title} </h5>
                    {/* <h6 className="text-lightGray absolute top-2/3 -translate-y-2/3"> {category.numberOfItems} Items </h6> */}
                </div>
            )}
        </div>
    )
}