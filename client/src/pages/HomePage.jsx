import { useEffect, useState } from "react";
import EditorsPick from "../components/EditorsPick";
import BestsellerProducts from "../components/BestsellerProducts";
import Carousel from "../components/Carousel";
import Container from "../components/Container";
import Blogs from "../components/Blogs";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsWithSortAndFilter } from "../store/actions/productActions";


const buttonCarousel1 = "SHOP NOW"
const buttonAlignmentCarousel1 = "bottom"

export default function HomePage() {

    const dispatch = useDispatch()
    const [productImages, setProductImages] = useState([])
    const [productData, setProductData] = useState([])
    const { productList } = useSelector((store) => store.product)


    useEffect(() => {
        dispatch(fetchProductsWithSortAndFilter("", "", "", 5, ""))
    }, [dispatch])

    useEffect(() => {
        const images = []
        const data = []
        productList.map((product) => {
            product.images.map((img)=>{
                images.push(img.url)
            })
            data.push({
                "id": product.id,
                "name": product.name
            })
        })
        setProductData(data)
        setProductImages(images)
    }, [productList])

    

    return (
        <div className="flex flex-col items-center justify-center gap-40">
            <Carousel
                images={productImages}
                button={buttonCarousel1}
                buttonAlignment={buttonAlignmentCarousel1}
                handleButton={"ProductDetailPage"}
                data={productData}
                >
            </Carousel>
            <EditorsPick></EditorsPick>
            <BestsellerProducts></BestsellerProducts>
            <Container></Container>
            <Blogs></Blogs>
        </div>
    )
}