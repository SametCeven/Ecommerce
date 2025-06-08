import { useParams } from "react-router-dom/cjs/react-router-dom.min"
import { ChevronRight } from 'lucide-react';
import Carousel from "../components/Carousel";
import Clients from "../components/Clients";
import BestsellerProducts from "../components/BestsellerProducts";
import ProductDetails from "../components/ProductDetails";
import ProductDetailsCard from "../components/ProductDetailsCard";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../store/actions/productActions";
import Spinner from "../components/Spinner";


export default function ProductDetailPage() {

    const { productNameSlug, productId } = useParams()
    const dispatch = useDispatch()
    const { selectedProduct, productsLoading, productsError } = useSelector(store => store.product)

    

    useEffect(() => {
        dispatch(fetchProduct(productId))
    }, [])


    return (
        <div className="flex flex-col gap-10 px-5 bg-lightGray xl1440:px-40">

            <div className='flex flex-col items-center gap-20 xl1440:flex-row justify-between w-full'>
                <div className="flex gap-5">
                    <h6>Home</h6>
                    <ChevronRight></ChevronRight>
                    <span className="link-text">Shop</span>
                </div>
            </div>

            {!selectedProduct ? <Spinner></Spinner> :
                <div className="flex flex-col gap-10 xl1440:flex-row xl1440:items-center">
                    <Carousel images={[selectedProduct.images[0].url]}></Carousel>
                    <ProductDetailsCard selectedProduct={selectedProduct}></ProductDetailsCard>
                </div>
            }

            {!selectedProduct ? <Spinner></Spinner> :
                <ProductDetails selectedProduct={selectedProduct}></ProductDetails>
            }

            <BestsellerProducts></BestsellerProducts>

            <Clients></Clients>

        </div>
    )
}