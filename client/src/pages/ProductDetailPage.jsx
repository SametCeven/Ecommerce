import { useParams } from "react-router-dom/cjs/react-router-dom.min"
import { ChevronRight } from 'lucide-react';
import Carousel from "../components/Carousel";
import Clients from "../components/Clients";
import BestsellerProducts from "../components/BestsellerProducts";
import ProductDetails from "../components/ProductDetails";
import ProductDetailsCard from "../components/ProductDetailsCard";

const products = [
    { id: 1, url: ["https://images.placeholders.dev/350x400", "https://images.placeholders.dev/350x400", "https://images.placeholders.dev/350x400"], title: "title", description: "description", price: 20.00, discountedPrice: 10.00, colorChart: ["#23A6F0", "#23856D", "#E77C40", "#252B42"], reviewNumber: 10, rating: 4, availability: true },
    { id: 2, url: ["https://images.placeholders.dev/350x400", "https://images.placeholders.dev/350x400", "https://images.placeholders.dev/350x400"], title: "title", description: "description", price: 20.00, discountedPrice: 10.00, colorChart: ["#23A6F0", "#23856D", "#E77C40", "#252B42"], reviewNumber: 10, rating: 4, availability: true },
    { id: 3, url: ["https://images.placeholders.dev/350x400", "https://images.placeholders.dev/350x400", "https://images.placeholders.dev/350x400"], title: "title", description: "description", price: 20.00, discountedPrice: 10.00, colorChart: ["#23A6F0", "#23856D", "#E77C40", "#252B42"], reviewNumber: 10, rating: 4, availability: true },
    { id: 4, url: ["https://images.placeholders.dev/350x400", "https://images.placeholders.dev/350x400", "https://images.placeholders.dev/350x400"], title: "title", description: "description", price: 20.00, discountedPrice: 10.00, colorChart: ["#23A6F0", "#23856D", "#E77C40", "#252B42"], reviewNumber: 10, rating: 4, availability: true },
    { id: 5, url: ["https://images.placeholders.dev/350x400", "https://images.placeholders.dev/350x400", "https://images.placeholders.dev/350x400"], title: "title", description: "description", price: 20.00, discountedPrice: 10.00, colorChart: ["#23A6F0", "#23856D", "#E77C40", "#252B42"], reviewNumber: 10, rating: 4, availability: true },
    { id: 6, url: ["https://images.placeholders.dev/350x400", "https://images.placeholders.dev/350x400", "https://images.placeholders.dev/350x400"], title: "title", description: "description", price: 20.00, discountedPrice: 10.00, colorChart: ["#23A6F0", "#23856D", "#E77C40", "#252B42"], reviewNumber: 10, rating: 4, availability: true },
    { id: 7, url: ["https://images.placeholders.dev/350x400", "https://images.placeholders.dev/350x400", "https://images.placeholders.dev/350x400"], title: "title", description: "description", price: 20.00, discountedPrice: 10.00, colorChart: ["#23A6F0", "#23856D", "#E77C40", "#252B42"], reviewNumber: 10, rating: 4, availability: true },
    { id: 8, url: ["https://images.placeholders.dev/350x400", "https://images.placeholders.dev/350x400", "https://images.placeholders.dev/350x400"], title: "title", description: "description", price: 20.00, discountedPrice: 10.00, colorChart: ["#23A6F0", "#23856D", "#E77C40", "#252B42"], reviewNumber: 10, rating: 5, availability: true },
    { id: 9, url: ["https://images.placeholders.dev/350x400", "https://images.placeholders.dev/350x400", "https://images.placeholders.dev/350x400"], title: "title", description: "description", price: 20.00, discountedPrice: 10.00, colorChart: ["#23A6F0", "#23856D", "#E77C40", "#252B42"], reviewNumber: 10, rating: 2, availability: true },
    { id: 10, url: ["https://images.placeholders.dev/350x400", "https://images.placeholders.dev/350x400", "https://images.placeholders.dev/350x400"], title: "title", description: "description", price: 20.00, discountedPrice: 10.00, colorChart: ["#23A6F0", "#23856D", "#E77C40", "#252B42"], reviewNumber: 10, rating: 3, availability: true },
]

export default function ProductDetailPage() {
    const { id } = useParams()
    const selectedProduct = products.filter((product) => product.id === Number(id))[0]
    selectedProduct.price = (Math.round(selectedProduct.price * 100) / 100).toFixed(2)    

    return (
        <div className="flex flex-col gap-10 px-5 bg-lightGray xl1440:px-40">

            <div className='flex flex-col items-center gap-20 xl1440:flex-row justify-between w-full'>
                <div className="flex gap-5">
                    <h6>Home</h6>
                    <ChevronRight></ChevronRight>
                    <span className="link-text">Shop</span>
                </div>
            </div>

            <div className="flex flex-col gap-10 xl1440:flex-row xl1440:items-center">
                <Carousel images={selectedProduct.url}></Carousel>
                <ProductDetailsCard selectedProduct={selectedProduct}></ProductDetailsCard>
            </div>

            <ProductDetails selectedProduct={selectedProduct}></ProductDetails>

            <BestsellerProducts></BestsellerProducts>

            <Clients></Clients>

        </div>
    )
}