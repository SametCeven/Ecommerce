import { useParams } from "react-router-dom/cjs/react-router-dom.min"
import { ChevronRight, Star, Heart, ShoppingCart, Eye } from 'lucide-react';
import Carousel from "../components/Carousel";
import Clients from "../components/Clients";
import Product from "../components/Product";
import { Link } from "react-router-dom/cjs/react-router-dom";
import BestsellerProducts from "../components/BestsellerProducts";

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

    let i = 1
    let stars = []
    while (i <= 5) {
        stars.push(i)
        i++
    }

    return (
        <div className="flex flex-col gap-10 px-5 bg-lightGray">

            <div className='flex flex-col items-center gap-20 xl1440:flex-row justify-between w-full'>
                <h3> Shop </h3>
                <div className="flex gap-5">
                    <h6>Home</h6>
                    <ChevronRight></ChevronRight>
                    <span className="link-text">Shop</span>
                </div>
            </div>

            <Carousel images={selectedProduct.url}></Carousel>

            <div className="flex flex-col px-5 gap-5">

                <h4 className="text-text"> {selectedProduct.title} </h4>

                <div className="flex gap-5">
                    <div className="flex">
                        {stars.map((star) =>
                            <div className={``} key={star}>
                                <Star
                                    fill={`${star <= selectedProduct.rating ? "#F3CD03" : "white"}`}
                                    color="#F3CD03"
                                ></Star>
                            </div>
                        )}
                    </div>
                    <h6 className="text-secondText"> {selectedProduct.reviewNumber} Reviews </h6>
                </div>

                <div>
                    <span className="text-text text-[32px] font-bold"> ${selectedProduct.price} </span>
                    <div className="flex gap-5">
                        <h6 className="text"> Availability : </h6>
                        <h6 className={`${selectedProduct.availability ? "text-primary" : "text-danger"}`}> {selectedProduct.availability ? "In Stock" : "Out of Stock"} </h6>
                    </div>
                </div>

                <p className="text-secondText border-b-2 border-muted py-4"> {selectedProduct.description} </p>

                <div className="flex gap-2">
                    {selectedProduct.colorChart.map((color) =>
                        <span className={`p-4 border rounded-full`} style={{ backgroundColor: color, borderColor: color }} key={color}></span>
                    )}
                </div>

                <div className="flex items-center gap-3 py-10 text-text">
                    <button className="btn-primary-small"> Select Options </button>
                    <div className="border border-muted rounded-full p-2 bg-white">
                        <Heart size={20}></Heart>
                    </div>
                    <div className="border border-muted rounded-full p-2 bg-white">
                        <ShoppingCart size={20}></ShoppingCart>
                    </div>
                    <div className="border border-muted rounded-full p-2 bg-white">
                        <Eye size={20}></Eye>
                    </div>
                </div>

            </div>

            <div className="flex flex-col gap-10 py-10">
                <div className="flex gap-1 justify-between font-bold text-secondText text-[12px]">
                    <span> Description </span>
                    <span> Additional Information </span>
                    <span> Reviews
                        <span className="text-success"> ({selectedProduct.reviewNumber}) </span>
                    </span>
                </div>

                <img src="https://images.placeholders.dev/350x400" alt="" />
                <div className="flex flex-col gap-5">
                    <h3> the quick fox jumps over </h3>
                    <div className="flex flex-col gap-10">
                        <p>Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</p>
                        <p>Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</p>
                        <p>Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</p>
                    </div>
                </div>
                <div className="flex flex-col gap-5">
                    <h3> the quick fox jumps over </h3>
                    <ul className="flex flex-col gap-5">
                        <div className="flex">
                            <ChevronRight></ChevronRight>
                            <li> the quick fox jumps over the lazy dog </li>
                        </div>
                        <div className="flex">
                            <ChevronRight></ChevronRight>
                            <li> the quick fox jumps over the lazy dog </li>
                        </div>
                        <div className="flex">
                            <ChevronRight></ChevronRight>
                            <li> the quick fox jumps over the lazy dog </li>
                        </div>
                        <div className="flex">
                            <ChevronRight></ChevronRight>
                            <li> the quick fox jumps over the lazy dog </li>
                        </div>
                    </ul>
                </div>
                <div className="flex flex-col gap-5">
                    <h3> the quick fox jumps over </h3>
                    <ul className="flex flex-col gap-5">
                        <div className="flex">
                            <ChevronRight></ChevronRight>
                            <li> the quick fox jumps over the lazy dog </li>
                        </div>
                        <div className="flex">
                            <ChevronRight></ChevronRight>
                            <li> the quick fox jumps over the lazy dog </li>
                        </div>
                        <div className="flex">
                            <ChevronRight></ChevronRight>
                            <li> the quick fox jumps over the lazy dog </li>
                        </div>
                    </ul>
                </div>

            </div>

            <BestsellerProducts></BestsellerProducts>

            <Clients></Clients>

        </div>
    )
}