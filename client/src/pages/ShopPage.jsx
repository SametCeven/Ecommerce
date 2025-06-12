import { ChevronRight, LayoutGrid, List } from 'lucide-react';
import Categories from '../components/Categories';
import Product from '../components/Product';
import Pagination from '../components/Pagination';
import { useEffect, useState } from 'react';
import Clients from '../components/Clients';
import { Link } from 'react-router-dom/cjs/react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { creatorActionOffset, fetchProductsWithSortAndFilter } from '../store/actions/productActions';
import Spinner from '../components/Spinner';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

const sortMap = {
    priceAscending: "price:asc",
    priceDescending: "price:desc",
    ratingAscending: "rating:asc",
    ratingDescending: "rating:desc",
}



export default function ShopPage() {

    const { gender, categoryName, categoryId = "" } = useParams()
    const { productList, productsLoading, limit, total, offset } = useSelector(store=>store.product)
    const dispatch = useDispatch()
    const [sortingParam, setSortingParam] = useState("")
    const [filterText, setFilterText] = useState("")
    const [currentPage, setCurrentPage] = useState(1)


    useEffect(() => {
        let newOffset = limit * (currentPage - 1)
        dispatch(creatorActionOffset(newOffset))
        dispatch(fetchProductsWithSortAndFilter(categoryId, sortingParam, filterText, limit, newOffset))
    }, [gender, categoryId, currentPage])


    function handleFilterSubmit(e) {
        e.preventDefault()
        dispatch(fetchProductsWithSortAndFilter(categoryId, sortingParam, filterText, limit, offset))
    }

    function handleSortChange(e) {
        setSortingParam(sortMap[e.target.value] || "")
        
    }

    function handleFilterTextChange(e) {
        setFilterText(e.target.value)
    }





    return (
        <div className="flex flex-col items-center justify-center gap-20 xl1440:px-20">
            <div className='flex flex-col items-center gap-20 xl1440:flex-row justify-between w-full'>
                <h3> Shop </h3>
                <div className="flex gap-5">
                    <h6>Home</h6>
                    <ChevronRight></ChevronRight>
                    <span className="link-text">Shop</span>
                </div>
            </div>

            <Categories></Categories>

            <div className='flex flex-col items-center justify-center gap-10 xl1440:flex-row xl1440:justify-between w-full'>
                <span className='font-bold text-[14px] text-secondText'> Showing all {total} results </span>

                <div className='flex items-center gap-5'>
                    <span className='font-bold text-[14px] text-secondText'> Views: </span>
                    <div className='border border-lightGray2 p-2 rounded-md'>
                        <LayoutGrid></LayoutGrid>
                    </div>
                    <div className='border border-lightGray2 p-2 rounded-md'>
                        <List></List>
                    </div>
                </div>

                <form className='flex flex-col items-center justify-center gap-5 xl1440:flex-row'>
                    <div className='flex gap-2 bg-fill border border-border rounded-md px-8 py-4 text-secondText'>
                        <select name="" onChange={handleSortChange}>
                            <option value="priceAscending"> Price Ascending</option>
                            <option value="priceDescending"> Price Descending</option>
                            <option value="ratingAscending"> Rating Ascending</option>
                            <option value="ratingDescending"> Rating Descending</option>
                        </select>
                    </div>
                    <label className=''>
                        <input type="text" placeholder='Filter...' onChange={handleFilterTextChange} value={filterText} />
                    </label>
                    <button className='btn-primary' onClick={handleFilterSubmit}> Filter </button>
                </form>

            </div>

            <div className="flex flex-col gap-20 xl1440:flex-row xl1440:justify-between xl1440:flex-wrap xl1440:gap-5 xl1440:w-full">
                {productsLoading ? <Spinner></Spinner> :
                    productList.map((product, index) =>

                        <div className="w-[20%]" key={index}>
                            <Link to={`/product/${product.name}/${product.id}`}>
                                <Product
                                    key={index}
                                    url={product.images[0].url}
                                    title={product.name}
                                    description={product.description}
                                    price={(Math.round(product.price * 100) / 100).toFixed(2)}
                                    discountedPrice={(Math.round(product.price * 100) / 100).toFixed(2)}
                                    colorChart={product.colorChart}
                                >
                                </Product>
                            </Link>
                        </div>
                    )}

            </div>

            <Pagination length={total} itemsPerPage={limit} setCurrentPage={setCurrentPage} currentPage={currentPage} ></Pagination>

            <Clients></Clients>


        </div>
    )
}