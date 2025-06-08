import { ChevronDown, ChevronRight, LayoutGrid, List } from 'lucide-react';
import Categories from '../components/Categories';
import Product from '../components/Product';
import Pagination from '../components/Pagination';
import { useEffect, useState } from 'react';
import Clients from '../components/Clients';
import { Link } from 'react-router-dom/cjs/react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../store/actions/productActions';
import Spinner from '../components/Spinner';

/* const products = [
    { id: 1, url: "https://images.placeholders.dev/350x400", title: "title", description: "description", price: 20.00, discountedPrice: 10.00, colorChart: ["#23A6F0", "#23856D", "#E77C40", "#252B42"] },
    { id: 2, url: "https://images.placeholders.dev/350x400", title: "title", description: "description", price: 20.00, discountedPrice: 10.00, colorChart: ["#23A6F0", "#23856D", "#E77C40", "#252B42"] },
    { id: 3, url: "https://images.placeholders.dev/350x400", title: "title", description: "description", price: 20.00, discountedPrice: 10.00, colorChart: ["#23A6F0", "#23856D", "#E77C40", "#252B42"] },
    { id: 4, url: "https://images.placeholders.dev/350x400", title: "title", description: "description", price: 20.00, discountedPrice: 10.00, colorChart: ["#23A6F0", "#23856D", "#E77C40", "#252B42"] },
    { id: 5, url: "https://images.placeholders.dev/350x400", title: "title", description: "description", price: 20.00, discountedPrice: 10.00, colorChart: ["#23A6F0", "#23856D", "#E77C40", "#252B42"] },
    { id: 6, url: "https://images.placeholders.dev/350x400", title: "title", description: "description", price: 20.00, discountedPrice: 10.00, colorChart: ["#23A6F0", "#23856D", "#E77C40", "#252B42"] },
    { id: 7, url: "https://images.placeholders.dev/350x400", title: "title", description: "description", price: 20.00, discountedPrice: 10.00, colorChart: ["#23A6F0", "#23856D", "#E77C40", "#252B42"] },
    { id: 8, url: "https://images.placeholders.dev/350x400", title: "title", description: "description", price: 20.00, discountedPrice: 10.00, colorChart: ["#23A6F0", "#23856D", "#E77C40", "#252B42"] },
    { id: 9, url: "https://images.placeholders.dev/350x400", title: "title", description: "description", price: 20.00, discountedPrice: 10.00, colorChart: ["#23A6F0", "#23856D", "#E77C40", "#252B42"] },
    { id: 10, url: "https://images.placeholders.dev/350x400", title: "title", description: "description", price: 20.00, discountedPrice: 10.00, colorChart: ["#23A6F0", "#23856D", "#E77C40", "#252B42"] }
] */

export default function ShopPage() {

    const dispatch = useDispatch()
    const products = useSelector(store => store.product.productList)
    const productLoading = useSelector(store => store.product.productsLoading)

    useEffect(() => {
        dispatch(fetchProducts())
    }, [])


    const [currentPage, setCurrentPage] = useState(1)
    const itemsPerPage = 4

    const startIndex = (currentPage - 1) * itemsPerPage
    const currentProducts = products.slice(startIndex, startIndex + itemsPerPage)

    const totalPages = Math.ceil(products.length / itemsPerPage)


    return (
        <div className="flex flex-col items-center justify-center gap-20 px-5 xl1440:px-40">
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
                <span className='font-bold text-[14px] text-secondText'> Showing all {products.length} results </span>
                <div className='flex items-center gap-5'>
                    <span className='font-bold text-[14px] text-secondText'> Views: </span>
                    <div className='border border-lightGray2 p-2 rounded-md'>
                        <LayoutGrid></LayoutGrid>
                    </div>
                    <div className='border border-lightGray2 p-2 rounded-md'>
                        <List></List>
                    </div>
                </div>
                <div className='flex gap-5'>
                    <div className='flex gap-2 bg-fill border border-border rounded-md px-8 py-4 text-secondText'>
                        <button> Popularity </button>
                        <ChevronDown></ChevronDown>
                    </div>
                    <button className='bg-primary text-white border border-primary rounded-md px-4'> Filter </button>
                </div>
            </div>

            <div className="flex flex-col gap-20 xl1440:flex-row xl1440:justify-between xl1440:flex-wrap xl1440:gap-5 xl1440:w-full">
                {productLoading && <Spinner></Spinner>}
                {currentProducts.map((product, index) =>
                    index >= (products.length % 4) * 4 ? "" :
                        <div className="w-[20%]" key={index}>
                            <Link to={`/product/${product.id}`}>
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

            <Pagination length={products.length} itemsPerPage={itemsPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage} ></Pagination>

            <Clients></Clients>


        </div>
    )
}