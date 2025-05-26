import { Link } from "react-router-dom/cjs/react-router-dom.min"
import Product from "./Product"

const products = [
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
]


export default function BestsellerProducts() {

    return (
        <div className="flex flex-col items-center gap-5">

            <div className="flex flex-col gap-5 w-60 text-center pb-10 xl1440:w-full">
                <h4 className="text-secondText"> Featured Products </h4>
                <h3 className="text-text"> BESTSELLER PRODUCTS </h3>
                <p className="text-secondText"> Problems trying to resolve the conflict between </p>
            </div>

            <div className="flex flex-col gap-20 xl1440:px-20 xl1440:flex-row xl1440:justify-between xl1440:flex-wrap">
                {products.map((product, index) =>
                    index >= (products.length % 4) * 4 ? "" :
                        <div className="w-[20%]" key={index}>
                            <Link to={`/product/${product.id}`} key={index}>
                                <Product
                                    key={index}
                                    url={product.url}
                                    title={product.title}
                                    description={product.description}
                                    price={(Math.round(product.price * 100) / 100).toFixed(2)}
                                    discountedPrice={(Math.round(product.discountedPrice * 100) / 100).toFixed(2)}
                                    colorChart={product.colorChart}
                                >
                                </Product>
                            </Link>
                        </div>
                )}
            </div>

        </div>

    )
}